import { BrandGlyph } from "@/components/ui/BrandMark";

export default function Loading() {
  return (
    <div role="status" className="flex min-h-[50vh] items-center justify-center bg-ivory">
      <BrandGlyph className="h-10 w-10 animate-pulse text-forest" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
