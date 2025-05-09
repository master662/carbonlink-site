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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-background">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-col gap-4 md:w-1/2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              AI-Powered Carbon Credit Marketplace
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Connect buyers and sellers of carbon credits with our intelligent matching platform. Reduce your carbon
              footprint and contribute to a sustainable future.
            </p>
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
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Carbon_Link1-removebg-preview-t7D5zKhKqwJfrtPH4UBt1wDBB3S83l.png"
                alt="Carbon Link App Interface"
                width={500}
                height={500}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-800/30 dark:text-green-300">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Carbon Link?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform combines AI technology with rigorous verification to create a transparent and efficient
                carbon credit marketplace.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Card className="border-2 border-green-100 dark:border-green-900">
              <CardHeader className="pb-2">
                <Globe className="h-12 w-12 text-primary mb-2" />
                <CardTitle>AI-Powered Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our advanced algorithms match you with carbon credit projects that align with your specific
                  sustainability goals and requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100 dark:border-green-900">
              <CardHeader className="pb-2">
                <CheckCircle className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Rigorous Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every project undergoes a comprehensive verification process to ensure the integrity and quality of
                  carbon credits.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100 dark:border-green-900">
              <CardHeader className="pb-2">
                <LineChart className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Impact Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track and visualize your carbon offset impact with detailed analytics and reporting tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-800/30 dark:text-green-300">
                Project Types
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Diverse Carbon Offset Projects
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore a wide range of verified carbon credit projects across different sectors and regions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {[
              {
                title: "Forestry & Conservation",
                description: "Projects focused on protecting and restoring forests and natural ecosystems.",
                image: "/images/forestry-project.png",
              },
              {
                title: "Renewable Energy",
                description: "Clean energy projects including solar, wind, and hydroelectric power.",
                image: "/images/renewable-project.png",
              },
              {
                title: "Methane Capture",
                description: "Projects that capture methane emissions from landfills and agricultural operations.",
                image: "/images/methane-project.png",
              },
              {
                title: "Energy Efficiency",
                description: "Initiatives that reduce energy consumption and improve efficiency.",
                image: "/images/efficiency-project.png",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
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
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Offset Your Carbon Footprint?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
