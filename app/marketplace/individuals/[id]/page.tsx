"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Gift, MapPin, Award, Leaf, ExternalLink, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function IndividualProfilePage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const [activeTab, setActiveTab] = useState("about")

  // This would come from an API in a real application
  const individuals = [
    {
      id: "1",
      name: "Dr. Amina Kimani",
      role: "Environmental Scientist",
      location: "Nairobi, Kenya",
      description:
        "Leading research on sustainable forestry practices and community-based conservation in East Africa.",
      impact: "Has facilitated the planting of over 50,000 trees and established 3 community conservation areas.",
      bio: "Dr. Amina Kimani is a renowned environmental scientist with over 15 years of experience in conservation biology and sustainable forestry. She holds a Ph.D. in Environmental Science from the University of Nairobi and has published extensively on community-based conservation approaches in East Africa. Her work focuses on developing sustainable practices that benefit both local communities and ecosystems.",
      achievements: [
        "Led the establishment of 3 community conservation areas protecting over 5,000 hectares of forest",
        "Developed innovative agroforestry techniques now used by 1,200+ farmers",
        "Published 25+ research papers on sustainable forestry and conservation",
        "Recipient of the African Conservation Leadership Award (2022)",
      ],
      projects: [
        "Kenyan Highlands Reforestation Initiative",
        "Community Forest Management Program",
        "Sustainable Timber Harvesting Training",
      ],
      image: "/images/profile-amina.png",
      verified: true,
      socialLinks: {
        website: "https://www.aminakimani.org",
        twitter: "@AminaKimani",
        linkedin: "dr-amina-kimani",
      },
    },
    {
      id: "2",
      name: "Samuel Osei",
      role: "Renewable Energy Entrepreneur",
      location: "Accra, Ghana",
      description: "Pioneering affordable solar solutions for rural communities without access to the electrical grid.",
      impact:
        "Has provided clean energy to 12 villages, impacting over 5,000 people and reducing kerosene usage by 75%.",
      bio: "Samuel Osei is a social entrepreneur focused on bringing renewable energy solutions to underserved communities in West Africa. After completing his engineering degree, Samuel founded SolarGhana, a social enterprise that designs, installs, and maintains affordable solar systems for rural households and businesses. His pay-as-you-go model has made clean energy accessible to thousands of families previously reliant on kerosene and diesel generators.",
      achievements: [
        "Installed solar systems in 12 villages, providing electricity to 5,000+ people",
        "Reduced kerosene usage by 75% in partner communities",
        "Created 35 jobs for local technicians and sales representatives",
        "Winner of the Africa Energy Innovation Prize (2021)",
      ],
      projects: [
        "Rural Solar Electrification Program",
        "Solar-Powered Irrigation Systems",
        "Community Energy Hubs Initiative",
      ],
      image: "/images/profile-samuel.png",
      verified: true,
      socialLinks: {
        website: "https://www.solarghana.com",
        twitter: "@SamuelOsei",
        linkedin: "samuel-osei-ghana",
      },
    },
    {
      id: "3",
      name: "Fatima Nkosi",
      role: "Conservation Advocate",
      location: "Cape Town, South Africa",
      description:
        "Working with coastal communities to protect marine ecosystems and establish sustainable fishing practices.",
      impact: "Has helped establish 2 marine protected areas and trained 200+ fishers in sustainable practices.",
      bio: "Fatima Nkosi is a marine conservationist and community advocate working at the intersection of ocean protection and sustainable livelihoods. Born in a fishing community on South Africa's coast, Fatima combines traditional ecological knowledge with scientific approaches to develop conservation strategies that benefit both marine ecosystems and the communities that depend on them. She holds a Master's degree in Marine Biology and has worked with international conservation organizations before founding her own initiative.",
      achievements: [
        "Established 2 community-managed marine protected areas covering 15,000 hectares",
        "Trained 200+ fishers in sustainable fishing methods",
        "Developed a certification program for sustainably caught seafood",
        "Featured in National Geographic's 'Ocean Guardians' documentary",
      ],
      projects: [
        "Sustainable Fisheries Initiative",
        "Marine Protected Area Network",
        "Ocean Literacy Education Program",
      ],
      image: "/images/profile-fatima.png",
      verified: true,
      socialLinks: {
        website: "https://www.fatimankosiocean.org",
        twitter: "@FatimaNkosi",
        linkedin: "fatima-nkosi",
      },
    },
    {
      id: "4",
      name: "Ibrahim Diallo",
      role: "Agroforestry Specialist",
      location: "Dakar, Senegal",
      description:
        "Implementing innovative agroforestry techniques that combine food production with carbon sequestration.",
      impact: "Has trained 300+ farmers, increasing crop yields by 40% while enhancing soil carbon storage.",
      bio: "Ibrahim Diallo is an agroforestry specialist working to transform agricultural practices across West Africa. With a background in agricultural science and climate change adaptation, Ibrahim develops farming systems that integrate trees with crops and livestock, enhancing productivity while sequestering carbon. His approach combines traditional knowledge with modern techniques, creating resilient food systems that benefit both farmers and the environment.",
      achievements: [
        "Trained 300+ farmers in agroforestry techniques across 25 communities",
        "Increased average crop yields by 40% while improving soil health",
        "Established 5 demonstration farms showcasing climate-smart agriculture",
        "Developed a mobile app for agroforestry planning used by 1,000+ farmers",
      ],
      projects: [
        "Climate-Smart Agriculture Network",
        "Farmer-to-Farmer Training Program",
        "Agroforestry Seed Bank Initiative",
      ],
      image: "/images/profile-ibrahim.png",
      verified: true,
      socialLinks: {
        website: "https://www.ibrahimdiallo.org",
        twitter: "@IbrahimDiallo",
        linkedin: "ibrahim-diallo-agroforestry",
      },
    },
  ]

  const individual = individuals.find((i) => i.id === id)

  if (!individual) {
    return <div>Individual not found</div>
  }

  return (
    <div className="container max-w-5xl py-8">
      <div className="mb-6">
        <Button variant="outline" size="sm" onClick={() => router.back()} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-32 w-32 border-4 border-primary/10 mb-4">
                    <AvatarImage src={individual.image || "/placeholder.svg"} alt={individual.name} />
                    <AvatarFallback>{individual.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h1 className="text-2xl font-bold">{individual.name}</h1>
                  <p className="text-muted-foreground">{individual.role}</p>
                  <div className="flex items-center gap-1 mt-1 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="text-sm">{individual.location}</span>
                  </div>

                  <div className="flex gap-2 mt-4">
                    {individual.verified && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Verified
                      </Badge>
                    )}
                    <Badge variant="outline">Carbon Champion</Badge>
                  </div>

                  <div className="w-full mt-6 space-y-2">
                    <Link href={`/wallet/retire/gift?recipient=${individual.id}&type=individual`} className="w-full">
                      <Button className="w-full">
                        <Gift className="mr-2 h-4 w-4" />
                        Gift Carbon Offset
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share Profile
                    </Button>
                  </div>

                  <Separator className="my-6" />

                  <div className="w-full space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Social Links</h3>
                      <div className="flex flex-col gap-2">
                        {individual.socialLinks.website && (
                          <a
                            href={individual.socialLinks.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center hover:text-primary"
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-2" />
                            Website
                          </a>
                        )}
                        {individual.socialLinks.twitter && (
                          <a
                            href={`https://twitter.com/${individual.socialLinks.twitter.replace("@", "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center hover:text-primary"
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-2" />
                            Twitter
                          </a>
                        )}
                        {individual.socialLinks.linkedin && (
                          <a
                            href={`https://linkedin.com/in/${individual.socialLinks.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center hover:text-primary"
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-2" />
                            LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:w-2/3 space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Profile</CardTitle>
                <CardDescription>Learn more about {individual.name} and their impact</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList>
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="impact">Impact</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                  </TabsList>
                  <TabsContent value="about">
                    <div className="space-y-4 mt-4">
                      <div>
                        <h2 className="text-xl font-semibold mb-2">Biography</h2>
                        <p className="text-muted-foreground">{individual.bio}</p>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold mb-2">Key Achievements</h2>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          {individual.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="impact">
                    <div className="space-y-4 mt-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 text-green-600">
                            <Leaf className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Environmental Impact</h3>
                            <p className="text-muted-foreground">{individual.impact}</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 text-green-600">
                            <Award className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Recognition</h3>
                            <p className="text-muted-foreground">
                              {individual.name} has been recognized for outstanding contributions to environmental
                              conservation and sustainable development in Africa.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2">Impact Metrics</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <Card>
                            <CardContent className="p-4">
                              <div className="text-center">
                                <p className="text-muted-foreground text-sm">Carbon Sequestered</p>
                                <p className="text-3xl font-bold">1,250</p>
                                <p className="text-xs text-muted-foreground">tons CO₂e</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4">
                              <div className="text-center">
                                <p className="text-muted-foreground text-sm">Communities Impacted</p>
                                <p className="text-3xl font-bold">12</p>
                                <p className="text-xs text-muted-foreground">local communities</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4">
                              <div className="text-center">
                                <p className="text-muted-foreground text-sm">People Benefited</p>
                                <p className="text-3xl font-bold">5,000+</p>
                                <p className="text-xs text-muted-foreground">individuals</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4">
                              <div className="text-center">
                                <p className="text-muted-foreground text-sm">Area Protected</p>
                                <p className="text-3xl font-bold">5,000</p>
                                <p className="text-xs text-muted-foreground">hectares</p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="projects">
                    <div className="space-y-4 mt-4">
                      <h2 className="text-xl font-semibold mb-2">Current Projects</h2>
                      <div className="space-y-4">
                        {individual.projects.map((project, index) => (
                          <Card key={index}>
                            <CardContent className="p-4">
                              <h3 className="font-medium">{project}</h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                An ongoing initiative focused on sustainable environmental practices and community
                                development.
                              </p>
                              <div className="flex justify-end mt-2">
                                <Button variant="outline" size="sm">
                                  Learn More
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support {individual.name}'s Work</CardTitle>
                <CardDescription>
                  Gift carbon offsets to support {individual.name.split(" ")[0]}'s environmental initiatives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  By gifting carbon offsets, you're directly supporting {individual.name.split(" ")[0]}'s work in
                  environmental conservation and sustainable development. Your contribution helps fund ongoing projects
                  and initiatives while offsetting your carbon footprint.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Small Impact</h3>
                      <p className="text-2xl font-bold mt-1">5 tCO₂e</p>
                      <p className="text-xs text-muted-foreground mb-4">$92.50</p>
                      <Link href={`/wallet/retire/gift?recipient=${individual.id}&type=individual&amount=5`}>
                        <Button size="sm" className="w-full">
                          Gift Now
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="border-primary bg-primary/5">
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Medium Impact</h3>
                      <p className="text-2xl font-bold mt-1">10 tCO₂e</p>
                      <p className="text-xs text-muted-foreground mb-4">$185.00</p>
                      <Link href={`/wallet/retire/gift?recipient=${individual.id}&type=individual&amount=10`}>
                        <Button size="sm" className="w-full">
                          Gift Now
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Large Impact</h3>
                      <p className="text-2xl font-bold mt-1">25 tCO₂e</p>
                      <p className="text-xs text-muted-foreground mb-4">$462.50</p>
                      <Link href={`/wallet/retire/gift?recipient=${individual.id}&type=individual&amount=25`}>
                        <Button size="sm" className="w-full">
                          Gift Now
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/wallet/retire/gift?recipient=${individual.id}&type=individual`} className="w-full">
                  <Button className="w-full">
                    <Gift className="mr-2 h-4 w-4" />
                    Custom Gift Amount
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
