import type * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 border rounded-smМо border-gray-400 bg-white px-3 py-2 text-sm text-gray-900 transition-colors outline-none",
        "placeholder:text-gray-400",
        "focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400",
        "aria-invalid:border-red-600",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
