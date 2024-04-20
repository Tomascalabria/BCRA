import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define your own type for the variant
type BadgeVariant = "default" | "active" | "cancelled" | "outline";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        active:
          "border-transparent bg-green-300	 text-secondary-foreground hover:bg-green-300 ",
        cancelled:
          "border-transparent bg-red-500	 text-destructive-foreground shadow hover:bg-red-500",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  variant?: BadgeVariant; // Use the custom type for the variant
}

function Badge({ className, variant, ...props }: BadgeProps) {
  const resolvedVariant = variant || "default";
  return (
    <div className={cn(badgeVariants({ variant: resolvedVariant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
