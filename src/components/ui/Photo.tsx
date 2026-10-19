import Image from "next/image";
import { photos, type PhotoKey } from "@/lib/photos";
import { cn } from "@/lib/utils";

/**
 * Art-directed photo that fills its (positioned) parent. The wrapper decides
 * the crop via its aspect ratio or height; `sizes` keeps downloads lean.
 */
export function Photo({
  name,
  sizes,
  className,
  imgClassName,
  preload = false,
  alt,
  zoom = false,
}: {
  name: PhotoKey;
  sizes: string;
  className?: string;
  imgClassName?: string;
  preload?: boolean;
  /** Override the default alt text; pass "" for decorative use. */
  alt?: string;
  /** Gentle zoom when an ancestor with `group` is hovered. */
  zoom?: boolean;
}) {
  const photo = photos[name];
  return (
    <div className={cn("relative overflow-hidden bg-ivory-300", className)}>
      <Image
        src={photo.src}
        alt={alt ?? photo.alt}
        fill
        sizes={sizes}
        preload={preload}
        placeholder="blur"
        style={{ objectPosition: photo.focus }}
        className={cn(
          "object-cover",
          zoom &&
            "transition-transform duration-[900ms] ease-out-soft group-hover:scale-[1.04] group-focus-visible:scale-[1.04]",
          imgClassName
        )}
      />
    </div>
  );
}
