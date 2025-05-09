"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    content:
      "Carbon Link has transformed how our company approaches carbon offsetting. The AI matching technology helped us find projects that perfectly align with our sustainability goals.",
    author: "Sarah Johnson",
    role: "Sustainability Director",
    company: "EcoTech Solutions",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "The verification process on Carbon Link gave us confidence that our investments were making a real impact. The transparency and detailed analytics are unmatched in the industry.",
    author: "Michael Chen",
    role: "Chief Strategy Officer",
    company: "Green Future Investments",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "As a project developer, Carbon Link has connected us with the right buyers who value our community-focused forestry initiatives. The platform's reach has been instrumental to our success.",
    author: "Elena Rodriguez",
    role: "Project Manager",
    company: "Forest Restoration Alliance",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    content:
      "The educational resources and support from the Carbon Link team helped us navigate the complex world of carbon credits with ease. Their expertise is evident in every interaction.",
    author: "David Okonkwo",
    role: "Sustainability Consultant",
    company: "Climate Forward Consulting",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  // Determine how many testimonials to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % (testimonials.length - visibleCount + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - visibleCount : prev - 1))
  }

  return (
    <section className="w-full py-12 md:py-24 bg-green-50 dark:bg-green-950/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-800/30 dark:text-green-300 mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Hear from organizations and individuals who have successfully used Carbon Link to achieve their
            sustainability goals.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={cn("px-3", visibleCount === 1 ? "w-full" : visibleCount === 2 ? "w-1/2" : "w-1/3")}
                >
                  <Card className="h-full border-2 border-green-100 dark:border-green-900 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="h-8 w-8 text-green-500 mb-4" />
                      <p className="text-lg mb-6 flex-grow">{testimonial.content}</p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4 border-2 border-green-200">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                          <AvatarFallback className="bg-green-100 text-green-800">
                            {testimonial.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-green-200 hover:bg-green-100 hover:text-green-800"
              onClick={prevTestimonial}
              disabled={activeIndex === 0}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-green-200 hover:bg-green-100 hover:text-green-800"
              onClick={nextTestimonial}
              disabled={activeIndex === testimonials.length - visibleCount}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
