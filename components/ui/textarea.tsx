import type * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex w-full min-h-[80px] rounded-sm border border-gray-400 bg-white px-3 py-2 text-sm text-gray-900 transition-colors outline-none resize-none",
        "placeholder:text-gray-400",
        "focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20",
        "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400",
        "aria-invalid:border-red-600",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
