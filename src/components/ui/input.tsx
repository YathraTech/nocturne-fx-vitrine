import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "w-full bg-white border border-[var(--color-border-soft)] rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-[var(--color-muted-soft)] shadow-sm",
        "focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground transition-all",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
