import { useCallback, useEffect, useState, type ReactNode } from "react";
import { PlasmaProvider } from "@cruxgarden/plasma-ui";
import illustrationUrl from "../parallax-bg.webp";

interface GlassSceneProps {
  children: ReactNode;
}

export function GlassScene({ children }: GlassSceneProps) {
  const [background, setBackground] = useState<HTMLCanvasElement | null>(null);

  const attachBackground = useCallback((canvas: HTMLCanvasElement | null) => {
    setBackground(canvas);
  }, []);

  useEffect(() => {
    if (!background) return;

    const context = background.getContext("2d");
    if (!context) return;

    const image = new Image();
    let animationFrame: number | null = null;
    let disposed = false;

    const draw = () => {
      animationFrame = null;
      const pixelRatio = Math.min(window.devicePixelRatio, 1.5);
      const width = Math.round(window.innerWidth * pixelRatio);
      const height = Math.round(window.innerHeight * pixelRatio);

      if (background.width !== width || background.height !== height) {
        background.width = width;
        background.height = height;
      }
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const cssWidth = width / pixelRatio;
      const cssHeight = height / pixelRatio;
      context.fillStyle = "#fff0d5";
      context.fillRect(0, 0, cssWidth, cssHeight);

      if (image.complete && image.naturalWidth > 0) {
        const scale = (cssHeight * 1.06) / image.naturalHeight;
        const imageWidth = image.naturalWidth * scale;
        const imageHeight = image.naturalHeight * scale;
        const imageX =
          cssWidth < 700
            ? (cssWidth - imageWidth) / 2
            : cssWidth - imageWidth * 0.9;
        context.globalAlpha = 0.26;
        context.drawImage(
          image,
          imageX,
          (cssHeight - imageHeight) / 2,
          imageWidth,
          imageHeight,
        );
        context.globalAlpha = 1;
      }

      const glow = (x: number, y: number, radius: number, inner: string) => {
        const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, inner);
        gradient.addColorStop(1, "rgb(255 255 255 / 0)");
        context.fillStyle = gradient;
        context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
      };

      glow(
        cssWidth * 0.16,
        cssHeight * 0.66,
        cssWidth * 0.42,
        "rgb(169 135 231 / 0.58)",
      );
      glow(
        cssWidth * 0.86,
        cssHeight * 0.18,
        cssWidth * 0.36,
        "rgb(94 196 207 / 0.52)",
      );
      glow(
        cssWidth * 0.76,
        cssHeight * 0.84,
        cssWidth * 0.42,
        "rgb(239 133 168 / 0.48)",
      );

      context.lineCap = "round";
      context.lineWidth = Math.max(34, cssWidth * 0.055);
      context.strokeStyle = "rgb(255 255 255 / 0.3)";
      context.beginPath();
      context.moveTo(-40, cssHeight * 0.82);
      context.bezierCurveTo(
        cssWidth * 0.25,
        cssHeight * 0.42,
        cssWidth * 0.58,
        cssHeight * 0.76,
        cssWidth + 60,
        cssHeight * 0.28,
      );
      context.stroke();
      context.lineWidth = Math.max(16, cssWidth * 0.022);
      context.strokeStyle = "rgb(105 76 146 / 0.18)";
      context.beginPath();
      context.moveTo(-20, cssHeight * 0.28);
      context.bezierCurveTo(
        cssWidth * 0.32,
        cssHeight * 0.56,
        cssWidth * 0.62,
        cssHeight * 0.04,
        cssWidth + 30,
        cssHeight * 0.56,
      );
      context.stroke();
    };

    const scheduleDraw = () => {
      if (!disposed && animationFrame === null) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    image.decoding = "async";
    image.addEventListener("load", scheduleDraw);
    image.src = illustrationUrl;
    void image.decode().then(scheduleDraw, scheduleDraw);
    scheduleDraw();
    window.addEventListener("resize", scheduleDraw);
    return () => {
      disposed = true;
      image.removeEventListener("load", scheduleDraw);
      window.removeEventListener("resize", scheduleDraw);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [background]);

  return (
    <>
      <canvas ref={attachBackground} className="background-source" aria-hidden="true" />
      <PlasmaProvider
        background={background ?? "#fff0d5"}
        mood="aurora"
        theme="light"
        material="plasma"
        radius={30}
        blend={34}
        viscosity={0.34}
        stretch={1.25}
        flow={0.28}
        tint="#fff5ef"
        opacity={0.08}
        frost={0.12}
        elevation={0.21}
        refraction={1.55}
        dispersion={1.4}
        rim={1.3}
        rimColor="iridescent"
        rimWidth={1.25}
        highlight={1.15}
        edgeLine={1}
        shimmer={1.1}
        shimmerSpeed={0.8}
        glow={0.9}
        wash={0.24}
        grain={0.28}
        pointerDrop
        pointerPull
        ambientDrops
        grid={16}
        magnet={44}
        quality={1.25}
        freezeOnScroll
        maxSurfaces={8}
        zIndex={-1}
      >
        {children}
      </PlasmaProvider>
    </>
  );
}
