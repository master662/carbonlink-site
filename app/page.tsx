import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Globe, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-background">
        <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <div className="flex flex-col gap-4 lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
              AI-Powered Carbon Credit Marketplace
            </h1>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
              Connect buyers and sellers of carbon credits with our intelligent matching platform. Reduce your carbon
              footprint and contribute to a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Forest conservation and carbon offset projects"
                width={500}
                height={400}
                className="rounded-lg shadow-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-800/30 dark:text-green-300">
                Features
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Why Choose Carbon Link?
              </h2>
              <p className="max-w-4xl text-muted-foreground text-base md:text-lg lg:text-xl">
                Our platform combines AI technology with rigorous verification to create a transparent and efficient
                carbon credit marketplace.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-8 md:mt-12">
            <Card className="border-2 border-green-100 dark:border-green-900">
              <CardHeader className="pb-2">
                <Globe className="h-10 w-10 md:h-12 md:w-12 text-primary mb-2" />
                <CardTitle className="text-lg md:text-xl">AI-Powered Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm md:text-base">
                  Our advanced algorithms match you with carbon credit projects that align with your specific
                  sustainability goals and requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100 dark:border-green-900">
              <CardHeader className="pb-2">
                <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-primary mb-2" />
                <CardTitle className="text-lg md:text-xl">Rigorous Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm md:text-base">
                  Every project undergoes a comprehensive verification process to ensure the integrity and quality of
                  carbon credits.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100 dark:border-green-900 md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-2">
                <LineChart className="h-10 w-10 md:h-12 md:w-12 text-primary mb-2" />
                <CardTitle className="text-lg md:text-xl">Impact Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm md:text-base">
                  Track and visualize your carbon offset impact with detailed analytics and reporting tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="w-full py-12 md:py-20 lg:py-32 bg-green-50 dark:bg-green-950/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-800/30 dark:text-green-300">
                Project Types
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Diverse Carbon Offset Projects
              </h2>
              <p className="max-w-4xl text-muted-foreground text-base md:text-lg lg:text-xl">
                Explore a wide range of verified carbon credit projects across different sectors and regions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
            {[
              {
                title: "Forestry & Conservation",
                description: "Projects focused on protecting and restoring forests and natural ecosystems.",
                image:
                  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "Renewable Energy",
                description: "Clean energy projects including solar, wind, and hydroelectric power.",
                image:
                  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "Methane Capture",
                description: "Projects that capture methane emissions from landfills and agricultural operations.",
                image:
                  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "Energy Efficiency",
                description: "Initiatives that reduce energy consumption and improve efficiency.",
                image:
                  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-40 md:h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base md:text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs md:text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8 md:mt-12">
            <Link href="/marketplace">
              <Button size="lg">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Ready to Offset Your Carbon Footprint?
              </h2>
              <p className="max-w-4xl text-muted-foreground text-base md:text-lg lg:text-xl">
                Join Carbon Link today and start making a positive impact on the environment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
