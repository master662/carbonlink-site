"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search, SlidersHorizontal, Gift, Leaf, Award } from "lucide-react"
import { AIMatching } from "@/components/ai-matching"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function MarketplacePage() {
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([5, 50])
  const [activeTab, setActiveTab] = useState("projects")

  const projects = [
    {
      id: 1,
      title: "Kenyan Reforestation Initiative",
      description: "Restoration of degraded forest lands in the highlands of Kenya.",
      location: "Kenya",
      price: 18.5,
      available: 5000,
      type: "Forestry & Conservation",
      verified: true,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      title: "Wind Farm Development",
      description: "Construction of wind turbines to generate clean electricity in rural communities.",
      location: "Kenya",
      price: 15.75,
      available: 8000,
      type: "Renewable Energy",
      verified: true,
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      title: "Tanzanian Mangrove Restoration",
      description: "Restoring coastal mangrove ecosystems to sequester carbon and protect coastlines.",
      location: "Tanzania",
      price: 22.25,
      available: 3500,
      type: "Forestry & Conservation",
      verified: true,
      image:
        "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      title: "Ghana Solar Initiative",
      description: "Large-scale solar installation providing clean energy to rural communities.",
      location: "Ghana",
      price: 16.0,
      available: 6000,
      type: "Renewable Energy",
      verified: true,
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      title: "Rwanda Cookstove Project",
      description: "Distribution of efficient cookstoves to reduce deforestation and indoor air pollution.",
      location: "Rwanda",
      price: 12.5,
      available: 4500,
      type: "Energy Efficiency",
      verified: true,
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      title: "Nigerian Methane Capture",
      description: "Capturing methane from landfills in Lagos to prevent release into the atmosphere.",
      location: "Nigeria",
      price: 14.75,
      available: 2800,
      type: "Methane Capture",
      verified: true,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ]

  const individuals = [
    {
      id: 1,
      name: "Dr. Amina Kimani",
      role: "Environmental Scientist",
      location: "Nairobi, Kenya",
      description:
        "Leading research on sustainable forestry practices and community-based conservation in East Africa.",
      impact: "Has facilitated the planting of over 50,000 trees and established 3 community conservation areas.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true,
    },
    {
      id: 2,
      name: "Samuel Osei",
      role: "Renewable Energy Entrepreneur",
      location: "Accra, Ghana",
      description: "Pioneering affordable solar solutions for rural communities without access to the electrical grid.",
      impact:
        "Has provided clean energy to 12 villages, impacting over 5,000 people and reducing kerosene usage by 75%.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true,
    },
    {
      id: 3,
      name: "Fatima Nkosi",
      role: "Conservation Advocate",
      location: "Cape Town, South Africa",
      description:
        "Working with coastal communities to protect marine ecosystems and establish sustainable fishing practices.",
      impact: "Has helped establish 2 marine protected areas and trained 200+ fishers in sustainable practices.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true,
    },
    {
      id: 4,
      name: "Ibrahim Diallo",
      role: "Agroforestry Specialist",
      location: "Dakar, Senegal",
      description:
        "Implementing innovative agroforestry techniques that combine food production with carbon sequestration.",
      impact: "Has trained 300+ farmers, increasing crop yields by 40% while enhancing soil carbon storage.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true,
    },
  ]

  const organizations = [
    {
      id: 1,
      name: "Arabuko Initiative",
      type: "NGO",
      location: "Kilifi, Kenya",
      description:
        "Promoting smart agriculture practices that enhance food security while sequestering carbon in soil.",
      impact:
        "Working with 1,500 smallholder farmers across 12 communities, increasing yields by 35% while reducing emissions.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true,
    },
    {
      id: 2,
      name: "Green Energy Tanzania",
      type: "Social Enterprise",
      location: "Dar es Salaam, Tanzania",
      description:
        "Developing and distributing affordable renewable energy solutions tailored for East African communities.",
      impact: "Installed 75 micro-grids serving 25,000 people and reducing carbon emissions by 12,000 tons annually.",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true,
    },
    {
      id: 3,
      name: "Blue Carbon Alliance",
      type: "Conservation Consortium",
      location: "Mombasa, Kenya",
      description:
        "Protecting and restoring coastal blue carbon ecosystems including mangroves, seagrasses, and salt marshes.",
      impact: "Restored 1,200 hectares of mangrove forests, sequestering an estimated 45,000 tons of CO₂ annually.",
      image:
        "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true,
    },
    {
      id: 4,
      name: "EcoSchools Africa",
      type: "Educational Foundation",
      location: "Kampala, Uganda",
      description:
        "Integrating environmental education and practical sustainability projects in schools across East Africa.",
      impact: "Engaged 250 schools reaching 125,000 students, implementing 500+ student-led environmental projects.",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true,
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-2 sm:p-4 md:p-6 lg:p-8 pt-4 md:pt-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Carbon Credit Marketplace</h2>
        <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <AIMatching />

      <div className="flex flex-col lg:flex-row gap-4">
        {showFilters && (
          <Card className="w-full lg:w-64 xl:w-72">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Project Type</Label>
                <div className="space-y-2">
                  {["Forestry & Conservation", "Renewable Energy", "Methane Capture", "Energy Efficiency"].map(
                    (type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={`type-${type}`} />
                        <label
                          htmlFor={`type-${type}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {type}
                        </label>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Location</Label>
                <div className="space-y-2">
                  {[
                    "Kenya",
                    "Tanzania",
                    "Uganda",
                    "Rwanda",
                    "Nigeria",
                    "Ghana",
                    "South Africa",
                    "Ethiopia",
                    "Morocco",
                  ].map((location) => (
                    <div key={location} className="flex items-center space-x-2">
                      <Checkbox id={`location-${location}`} />
                      <label
                        htmlFor={`location-${location}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {location}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Price Range ($ per tCO₂e)</Label>
                <div className="pt-4">
                  <Slider defaultValue={[5, 50]} max={100} step={1} value={priceRange} onValueChange={setPriceRange} />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm">${priceRange[0]}</span>
                    <span className="text-sm">${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Verification Status</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="verified" defaultChecked />
                    <label
                      htmlFor="verified"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Verified Only
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
        )}

        <div className="flex-1 space-y-4">
          <Tabs defaultValue="projects" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4 grid w-full grid-cols-3">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="individuals">Individuals</TabsTrigger>
              <TabsTrigger value="organizations">Organizations</TabsTrigger>
            </TabsList>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search..." className="pl-8" />
              </div>
              {activeTab === "projects" && (
                <Tabs defaultValue="all">
                  <TabsList className="grid grid-cols-4 w-full sm:w-auto">
                    <TabsTrigger value="all" className="text-xs">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="forestry" className="text-xs">
                      Forestry
                    </TabsTrigger>
                    <TabsTrigger value="renewable" className="text-xs">
                      Renewable
                    </TabsTrigger>
                    <TabsTrigger value="other" className="text-xs">
                      Other
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              )}
            </div>

            <TabsContent value="projects" className="m-0">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="relative h-40 sm:h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base lg:text-lg">{project.title}</CardTitle>
                        {project.verified && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-sm">{project.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs sm:text-sm font-medium">Price</p>
                          <p className="text-base lg:text-lg font-bold text-primary">${project.price.toFixed(2)}</p>
                          <p className="text-xs text-muted-foreground">per tCO₂e</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs sm:text-sm font-medium">Available</p>
                          <p className="text-base lg:text-lg font-bold">{project.available.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">tCO₂e</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/marketplace/projects/${project.id}`} className="w-full">
                        <Button className="w-full" size="sm">
                          View Project
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="individuals" className="m-0">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {individuals.map((individual) => (
                  <Card key={individual.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 sm:h-16 sm:w-16 border-2 border-primary/10">
                          <AvatarImage src={individual.image || "/placeholder.svg"} alt={individual.name} />
                          <AvatarFallback>{individual.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-base lg:text-lg flex items-center gap-2">
                            <span className="truncate">{individual.name}</span>
                            {individual.verified && (
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200 text-xs flex-shrink-0"
                              >
                                Verified
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="text-sm">{individual.role}</CardDescription>
                          <p className="text-xs text-muted-foreground">{individual.location}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-1">About</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">{individual.description}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1 flex items-center gap-1">
                            <Leaf className="h-3.5 w-3.5 text-green-600" />
                            Impact
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">{individual.impact}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-2">
                      <Link href={`/marketplace/individuals/${individual.id}`} className="flex-1 w-full">
                        <Button variant="outline" className="w-full" size="sm">
                          View Profile
                        </Button>
                      </Link>
                      <Link
                        href={`/wallet/retire/gift?recipient=${individual.id}&type=individual`}
                        className="flex-1 w-full"
                      >
                        <Button className="w-full" size="sm">
                          <Gift className="mr-2 h-4 w-4" />
                          Gift Offset
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="organizations" className="m-0">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {organizations.map((org) => (
                  <Card key={org.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 sm:h-16 sm:w-16 border-2 border-primary/10">
                          <AvatarImage src={org.image || "/placeholder.svg"} alt={org.name} />
                          <AvatarFallback>{org.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-base lg:text-lg flex items-center gap-2">
                            <span className="truncate">{org.name}</span>
                            {org.verified && (
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200 text-xs flex-shrink-0"
                              >
                                Verified
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="text-sm">{org.type}</CardDescription>
                          <p className="text-xs text-muted-foreground">{org.location}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-1">Mission</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">{org.description}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1 flex items-center gap-1">
                            <Award className="h-3.5 w-3.5 text-green-600" />
                            Impact
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">{org.impact}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-2">
                      <Link href={`/marketplace/organizations/${org.id}`} className="flex-1 w-full">
                        <Button variant="outline" className="w-full" size="sm">
                          View Profile
                        </Button>
                      </Link>
                      <Link
                        href={`/wallet/retire/gift?recipient=${org.id}&type=organization`}
                        className="flex-1 w-full"
                      >
                        <Button className="w-full" size="sm">
                          <Gift className="mr-2 h-4 w-4" />
                          Gift Offset
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
