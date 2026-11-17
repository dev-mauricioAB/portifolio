import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-4 whitespace-nowrap text-xs font-bold uppercase tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5ea8] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "portfolio-action bg-gradient-to-r from-[#ff5ea8] to-[#ff915d] text-white focus-visible:-outline-offset-4 [&_svg]:size-5",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-current bg-transparent text-inherit hover:bg-white/10",
        secondary:
          "portfolio-action bg-[#24142f] text-white focus-visible:-outline-offset-4 [&_svg]:size-5",
        ghost: "hover:bg-white/10",
        link: "text-inherit underline decoration-white/40 underline-offset-[7px]",
      },
      size: {
        default: "min-h-12 px-6 py-3",
        sm: "h-9 px-3 text-xs",
        lg: "min-h-14 px-7",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
