import { Bug } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-brand-dark px-4 text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-lime/10 text-brand-lime">
        <Bug className="h-10 w-10" strokeWidth={1.5} />
      </span>
      <h1 className="font-heading mt-6 text-4xl font-extrabold text-white">
        404
      </h1>
      <p className="mt-2 max-w-md text-white/60">
        This page has been exterminated. Let&rsquo;s get you back to safety.
      </p>
      <Button href="/" className="mt-8">
        Back to Home
      </Button>
    </div>
  );
}
