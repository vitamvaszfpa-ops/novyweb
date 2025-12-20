import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Premium variants for the financial advisor site
        hero: "bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 glow-primary",
        "hero-outline":
          "border border-white/15 bg-gradient-to-br from-white/18 via-white/6 to-white/10 text-foreground backdrop-blur-xl hover:from-white/26 hover:via-white/12 hover:to-white/18 hover:border-white/28 shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.32),inset_0_1px_2px_0_rgba(255,255,255,0.12),0_4px_16px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.4),inset_0_1px_2px_0_rgba(255,255,255,0.16),0_8px_24px_-6px_rgba(0,0,0,0.12),0_2px_8px_-2px_rgba(0,0,0,0.08)] [text-shadow:_0_1px_2px_rgba(255,255,255,0.25)] transition-all duration-300",
        premium:
          "bg-secondary text-secondary-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-border/20",
        glass:
          "glass-button",
        cta: "bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary-foreground/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
