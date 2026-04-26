import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "w-full bg-white border border-[var(--color-border-soft)] rounded-md px-4 py-3 text-sm text-foreground placeholder:text-[var(--color-muted-soft)] shadow-sm resize-none",
        "focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground transition-all",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
