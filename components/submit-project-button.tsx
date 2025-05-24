"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SubmitProjectButton() {
  const pathname = usePathname()

  // Don't show on the home page or submit project page
  if (pathname === "/" || pathname === "/submit-project") {
    return null
  }

  return (
    <div className="fixed bottom-24 right-6 z-40">
      <Link href="/submit-project">
        <Button className="rounded-full shadow-lg bg-primary hover:bg-primary/90">
          <PlusCircle className="mr-2 h-4 w-4" />
          Submit New Project
        </Button>
      </Link>
    </div>
  )
}
