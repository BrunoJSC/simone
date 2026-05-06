"use client";

import Image from "next/image";
import { useState } from "react";
import { IMAGE_QUALITY } from "@/lib/image-config";

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: keyof typeof IMAGE_QUALITY;
  sizes?: string;
  className?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  showLoader?: boolean;
  overlayOnHover?: boolean;
}

/**
 * Componente de imagem otimizado com loading state e efeitos modernos
 */
export function OptimizedImage({
  src,
  alt,
  fill = false,
  width,
  height,
  priority = false,
  quality = "default",
  sizes,
  className = "",
  objectFit = "cover",
  showLoader = true,
  overlayOnHover = false,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const imageQuality = IMAGE_QUALITY[quality];

  const baseClasses = `
    transition-all duration-700 ease-out
    ${isLoading ? "scale-105 blur-sm" : "scale-100 blur-0"}
    ${overlayOnHover ? "group-hover:scale-105" : ""}
    ${className}
  `;

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted/10">
        <span className="text-xs text-muted">Imagem não disponível</span>
      </div>
    );
  }

  return (
    <>
      {showLoader && isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/50 backdrop-blur-sm">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-foreground/20 border-t-foreground" />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        quality={imageQuality}
        priority={priority}
        sizes={sizes}
        className={baseClasses}
        style={fill ? { objectFit } : undefined}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />

      {overlayOnHover && (
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
      )}
    </>
  );
}
