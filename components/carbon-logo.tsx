import { Leaf } from "lucide-react"

export function CarbonLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative h-8 w-8 mr-2 bg-primary rounded-full flex items-center justify-center">
        <Leaf className="h-5 w-5 text-white" />
      </div>
      <span className="text-xl font-bold text-primary">Carbon Link</span>
    </div>
  )
}
