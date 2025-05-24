"use client"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Calendar, Info, Leaf, MapPin, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [quantity, setQuantity] = useState(10)
  const projectId = Number(params.id)

  // This would normally come from an API call based on the ID
  const projects = [
    {
      id: 1,
      title: "Kenyan Reforestation Initiative",
      description:
        "This project focuses on the restoration of degraded forest lands in the highlands of Kenya. By planting native tree species, the project aims to sequester carbon, restore biodiversity, and provide sustainable livelihoods for local communities.",
      longDescription:
        "The Kenyan Reforestation Initiative is a comprehensive effort to combat deforestation and land degradation in Kenya's highland regions. The project employs a multi-faceted approach that combines carbon sequestration with biodiversity conservation and community development.\n\nOver 500 hectares of degraded land will be reforested with a diverse mix of native tree species, creating a resilient ecosystem that can withstand climate change impacts. The project works closely with local communities, providing employment opportunities in tree planting, maintenance, and monitoring activities.\n\nBeyond carbon benefits, the project will restore wildlife habitats, improve water quality in local watersheds, and provide sustainable forest products for community use. Educational programs and capacity building initiatives ensure long-term community engagement and project sustainability.",
      location: "Kenya",
      region: "Central Highlands",
      price: 18.5,
      available: 5000,
      type: "Forestry & Conservation",
      verified: true,
      verificationStandard: "Verra VCS",
      startDate: "2022-03-15",
      duration: "30 years",
      developer: "Green Kenya Initiative",
      sdgs: [13, 15, 1, 6],
      gallery: ["/images/forestry-project.png", "/images/forestry-project-2.png", "/images/forestry-project-3.png"],
      image: "/images/forestry-project.png",
    },
    {
      id: 2,
      title: "Wind Farm Development",
      description: "Construction of wind turbines to generate clean electricity in rural communities.",
      longDescription:
        "The Wind Farm Development project in Kenya is establishing a significant renewable energy installation that will provide clean electricity to thousands of rural households. Located in an area with optimal wind conditions, this project will install 15 wind turbines with a combined capacity of 45 MW.\n\nBy replacing fossil fuel-based electricity generation, the project will avoid approximately 80,000 tonnes of CO2 emissions annually. The clean energy produced will be fed into the national grid, improving energy access and reliability in previously underserved communities.\n\nBeyond environmental benefits, the project creates jobs in construction, operation, and maintenance of the wind farm. The project developer has established a community benefit fund that supports local education, healthcare, and infrastructure initiatives.",
      location: "Kenya",
      region: "Turkana County",
      price: 15.75,
      available: 8000,
      type: "Renewable Energy",
      verified: true,
      verificationStandard: "Gold Standard",
      startDate: "2021-06-10",
      duration: "25 years",
      developer: "Clean Energy Africa",
      sdgs: [7, 13, 8, 9],
      gallery: ["/images/renewable-project.png", "/images/renewable-project-2.png"],
      image: "/images/renewable-project.png",
    },
    {
      id: 3,
      title: "Tanzanian Mangrove Restoration",
      description: "Restoring coastal mangrove ecosystems to sequester carbon and protect coastlines.",
      longDescription:
        "The Tanzanian Mangrove Restoration project aims to rehabilitate and protect vital mangrove ecosystems along Tanzania's coastline. Mangroves are among the most carbon-rich forests in the tropics, sequestering carbon at rates up to four times higher than mature tropical forests.\n\nThis project will restore 300 hectares of degraded mangrove forests and protect an additional 500 hectares of existing mangroves. Local communities are central to the project, participating in planting, monitoring, and sustainable harvesting activities.\n\nBeyond carbon sequestration, the project provides critical ecosystem services including coastal protection from storms and erosion, nursery habitats for fisheries, and improved water quality. The project also supports sustainable livelihoods through ecotourism, sustainable fishing, and honey production.",
      location: "Tanzania",
      region: "Coastal Zone",
      price: 22.25,
      available: 3500,
      type: "Forestry & Conservation",
      verified: true,
      verificationStandard: "Plan Vivo",
      startDate: "2022-01-20",
      duration: "20 years",
      developer: "Blue Carbon Tanzania",
      sdgs: [13, 14, 15, 1],
      gallery: ["/images/forestry-project.png", "/images/forestry-project-2.png"],
      image: "/images/forestry-project.png",
    },
    {
      id: 4,
      title: "Ghana Solar Initiative",
      description: "Large-scale solar installation providing clean energy to rural communities.",
      longDescription:
        "The Ghana Solar Initiative is establishing a 20 MW solar photovoltaic facility in northern Ghana, an area with excellent solar resources but limited access to reliable electricity. The project will generate approximately 34,000 MWh of clean electricity annually, displacing fossil fuel-based generation.\n\nThe project will connect to the national grid but also includes mini-grid components to directly serve rural communities that previously had limited or no electricity access. This improved energy access enables economic development, extends productive hours, and supports educational and healthcare facilities.\n\nThe project creates employment opportunities during construction and operation phases, with a focus on training and hiring from local communities. The developer has implemented a comprehensive environmental management plan to minimize impacts on local ecosystems.",
      location: "Ghana",
      region: "Northern Region",
      price: 16.0,
      available: 6000,
      type: "Renewable Energy",
      verified: true,
      verificationStandard: "Gold Standard",
      startDate: "2021-09-05",
      duration: "25 years",
      developer: "Sunshine Ghana Ltd",
      sdgs: [7, 13, 8, 11],
      gallery: ["/images/renewable-project.png", "/images/renewable-project-2.png"],
      image: "/images/renewable-project.png",
    },
    {
      id: 5,
      title: "Rwanda Cookstove Project",
      description: "Distribution of efficient cookstoves to reduce deforestation and indoor air pollution.",
      longDescription:
        "The Rwanda Cookstove Project addresses the critical issues of deforestation and indoor air pollution by distributing fuel-efficient cookstoves to households across Rwanda. Traditional cooking methods using open fires or inefficient stoves consume large amounts of firewood and produce harmful smoke.\n\nThis project will distribute 50,000 improved cookstoves that reduce wood consumption by 60% compared to traditional methods. This significant reduction in fuel use directly translates to avoided deforestation and reduced greenhouse gas emissions.\n\nBeyond climate benefits, the project dramatically improves indoor air quality, reducing respiratory diseases that disproportionately affect women and children. Time previously spent collecting firewood can be redirected to education, income generation, or family care. The project includes a local manufacturing component, creating jobs and building capacity in the clean cookstove sector.",
      location: "Rwanda",
      region: "Nationwide",
      price: 12.5,
      available: 4500,
      type: "Energy Efficiency",
      verified: true,
      verificationStandard: "Gold Standard",
      startDate: "2022-02-15",
      duration: "10 years",
      developer: "Clean Cooking Rwanda",
      sdgs: [7, 13, 3, 5],
      gallery: ["/images/efficiency-project.png", "/images/efficiency-project-2.png"],
      image: "/images/efficiency-project.png",
    },
    {
      id: 6,
      title: "Nigerian Methane Capture",
      description: "Capturing methane from landfills in Lagos to prevent release into the atmosphere.",
      longDescription:
        "The Nigerian Methane Capture project implements an advanced landfill gas collection and flaring system at one of Lagos's largest waste disposal sites. Methane, a greenhouse gas 28 times more potent than CO2, is naturally produced as organic waste decomposes in landfills.\n\nThis project will capture approximately 85% of methane emissions from the landfill, significantly reducing the site's climate impact. The captured gas will initially be flared (converting methane to less potent CO2), with plans to utilize the gas for electricity generation in future project phases.\n\nBeyond greenhouse gas reductions, the project improves local air quality by reducing odors and pollutants from the landfill. The project creates technical jobs in system operation and maintenance, and includes a waste picker program that provides safer working conditions and stable income for informal waste workers at the site.",
      location: "Nigeria",
      region: "Lagos State",
      price: 14.75,
      available: 2800,
      type: "Methane Capture",
      verified: true,
      verificationStandard: "Verra VCS",
      startDate: "2021-11-30",
      duration: "15 years",
      developer: "CleanGas Nigeria",
      sdgs: [13, 11, 8, 3],
      gallery: ["/images/methane-project.png", "/images/methane-project-2.png"],
      image: "/images/methane-project.png",
    },
  ]

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return <div>Project not found</div>
  }

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    }
  }

  const totalPrice = (quantity * project.price).toFixed(2)

  const sdgImages = {
    1: "/images/sdg-1.png",
    3: "/images/sdg-3.png",
    5: "/images/sdg-5.png",
    6: "/images/sdg-6.png",
    7: "/images/sdg-7.png",
    8: "/images/sdg-8.png",
    9: "/images/sdg-9.png",
    11: "/images/sdg-11.png",
    13: "/images/sdg-13.png",
    14: "/images/sdg-14.png",
    15: "/images/sdg-15.png",
  }

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Marketplace
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="details">Project Details</TabsTrigger>
              <TabsTrigger value="impact">Impact & SDGs</TabsTrigger>
              <TabsTrigger value="verification">Verification</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4 pt-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Project Description</h3>
                <p className="text-muted-foreground whitespace-pre-line">{project.longDescription}</p>
              </div>
            </TabsContent>
            <TabsContent value="details" className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-primary" />
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">{project.location}</p>
                    <p className="text-muted-foreground">{project.region}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-primary" />
                      Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      <span className="font-medium">Start Date:</span> {project.startDate}
                    </p>
                    <p>
                      <span className="font-medium">Duration:</span> {project.duration}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-primary" />
                      Developer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">{project.developer}</p>
                    <p className="text-muted-foreground">Project Developer</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Leaf className="mr-2 h-5 w-5 text-primary" />
                      Project Type
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">{project.type}</p>
                    <p className="text-muted-foreground">Carbon Reduction Methodology</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="impact" className="space-y-4 pt-4">
              <div>
                <h3 className="text-xl font-bold mb-4">Sustainable Development Goals</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.sdgs.map((sdg) => (
                    <div key={sdg} className="flex flex-col items-center">
                      <div className="relative h-24 w-24 mb-2">
                        <Image
                          src={sdgImages[sdg] || `/images/sdg-${sdg}.png`}
                          alt={`SDG ${sdg}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium text-center">SDG {sdg}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Environmental Impact</h3>
                <p className="text-muted-foreground mb-4">
                  This project is expected to reduce or sequester approximately{" "}
                  <span className="font-medium">{project.available.toLocaleString()} tCO₂e</span> over its lifetime.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Social Impact</h3>
                <p className="text-muted-foreground">
                  Beyond carbon reduction, this project provides significant benefits to local communities including
                  employment opportunities, improved livelihoods, and enhanced ecosystem services.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="verification" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-primary" />
                    Verification Standard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="mb-2 bg-green-50 text-green-700 border-green-200">Verified</Badge>
                  <p className="font-medium">{project.verificationStandard}</p>
                  <p className="text-muted-foreground">
                    This project has been independently verified according to the {project.verificationStandard}{" "}
                    methodology, ensuring its environmental integrity and impact claims.
                  </p>
                </CardContent>
              </Card>
              <div>
                <h3 className="text-xl font-bold mb-2">Verification Process</h3>
                <p className="text-muted-foreground mb-4">
                  The verification process includes baseline assessment, monitoring plan validation, and regular
                  third-party verification of emission reductions. All verification documents are publicly available.
                </p>
                <Button variant="outline" className="gap-2">
                  <Info className="h-4 w-4" />
                  View Verification Documents
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Purchase Carbon Credits</CardTitle>
              <CardDescription>Offset your carbon footprint with this project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="credit-quantity">Quantity (tCO₂e)</Label>
                <div className="flex items-center gap-2 mt-1.5">
                  <Input id="credit-quantity" type="number" min="1" value={quantity} onChange={handleQuantityChange} />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">× ${project.price.toFixed(2)}</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between py-2">
                  <span>Subtotal</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Transaction Fee (3%)</span>
                  <span>${(Number.parseFloat(totalPrice) * 0.03).toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between py-2 font-medium">
                  <span>Total</span>
                  <span>${(Number.parseFloat(totalPrice) * 1.03).toFixed(2)}</span>
                </div>
              </div>

              <Link href="/wallet/purchase" className="w-full">
                <Button className="w-full">Add to Cart</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Project Type</span>
                <span className="font-medium">{project.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium">{project.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Price per Credit</span>
                <span className="font-medium">${project.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Available Credits</span>
                <span className="font-medium">{project.available.toLocaleString()} tCO₂e</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Verification</span>
                <span className="font-medium">{project.verificationStandard}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Have questions about this project or how to purchase carbon credits? Our team is here to help.
              </p>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
