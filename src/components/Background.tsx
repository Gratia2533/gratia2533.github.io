import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    float time = uTime * 0.2;

    // Fluid dynamics simulation using layered noise
    float n1 = snoise(uv * 3.0 + vec2(time * 0.1, time * 0.2));
    float n2 = snoise(uv * 6.0 - vec2(time * 0.2, time * 0.1));
    float n3 = snoise(uv * 12.0 + vec2(time * 0.1, time * 0.1));

    float noise = n1 * 0.5 + n2 * 0.25 + n3 * 0.125;
    
    // Deep Indigo Void Base
    vec3 color1 = vec3(0.02, 0.02, 0.06); // Darkest #050510
    vec3 color2 = vec3(0.06, 0.02, 0.09); // Abyss #0F0518
    
    // Aurora Colors
    vec3 accent1 = vec3(0.56, 0.0, 1.0); // Electric Violet #8F00FF
    vec3 accent2 = vec3(1.0, 0.0, 0.56); // Neon Magenta #FF0090
    
    // Mixing
    vec3 mixedBase = mix(color1, color2, uv.y);
    float auroraMask = smoothstep(0.2, 0.8, noise + 0.5);
    
    vec3 finalColor = mix(mixedBase, mix(accent1, accent2, n1), auroraMask * 0.3);
    
    // Add a subtle "stars" or "particles" feel via high freq noise
    float starNoise = snoise(uv * 100.0);
    if (starNoise > 0.98) {
        finalColor += vec3(1.0) * (starNoise - 0.98) * 20.0 * (sin(uTime * 2.0) * 0.5 + 0.5);
    }

    gl_FragColor = vec4(finalColor, 1.0);
  }
`

const Background = () => {
  const mesh = useRef<THREE.Mesh>(null)
  
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    }),
    []
  )

  useFrame((state) => {
    if (mesh.current) {
      (mesh.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={mesh} scale={[10, 10, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

export default Background
