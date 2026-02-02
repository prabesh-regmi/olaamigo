"use client"

import { cn } from "@/lib/utils"

interface StarIconProps {
  className?: string
  filled?: boolean
}

// Custom star icon that matches the Three Stars Accounting logo style
export function StarIcon({ className, filled = false }: StarIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill={filled ? "currentColor" : "none"}
      />
    </svg>
  )
}

// Triple star component for decorative purposes
export function TripleStars({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-end gap-0.5", className)}>
      <StarIcon className="w-5 h-5 text-primary" />
      <StarIcon className="w-7 h-7 text-primary -mb-0.5" />
      <StarIcon className="w-5 h-5 text-primary" />
    </div>
  )
}
