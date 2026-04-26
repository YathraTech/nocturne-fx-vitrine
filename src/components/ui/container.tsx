import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("w-full max-w-7xl mx-auto px-6 md:px-12", className)}
      {...props}
    >
      {children}
    </div>
  );
}
