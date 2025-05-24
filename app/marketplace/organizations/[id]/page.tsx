"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Gift, MapPin, Leaf, ExternalLink, Share2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function OrganizationProfilePage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const [activeTab, setActiveTab] = useState("about")

  // This would come from an API in a real application
  const organizations = [
    {
      id: "1",
      name: "Arabuko Initiative",
      type: "NGO",
      location: "Kilifi, Kenya",
      description:
        "Promoting smart agriculture practices that enhance food security while sequestering carbon in soil.",
      impact:
        "Working with 1,500 smallholder farmers across 12 communities, increasing yields by 35% while reducing emissions.",
      bio: "The Arabuko Initiative is a grassroots organization founded in 2015 to address the dual challenges of food insecurity and environmental degradation in coastal Kenya. Through innovative farming techniques that combine traditional knowledge with modern climate-smart agriculture, the initiative helps smallholder farmers improve their yields while enhancing soil health and carbon sequestration. Their holistic approach includes farmer training, seed distribution, market access support, and community-based monitoring of environmental outcomes.",
      achievements: [
        "Trained 1,500+ smallholder farmers in climate-smart agriculture techniques",
        "Increased average crop yields by 35% across partner communities",
        "Reduced agricultural emissions by an estimated 5,000 tons CO₂e annually",
        "Established 12 community seed banks preserving 45 local crop varieties",
      ],
      projects: [
        "Climate-Smart Agriculture Training Program",
        "Soil Carbon Enhancement Initiative",
        "Sustainable Market Access Project",
      ],
      image: "/images/org-arabuko.png",
      verified: true,
      socialLinks: {
        website: "https://www.arabuko.org",
        twitter: "@ArabukoInit",
        linkedin: "arabuko-initiative",
      },
    },
    {
      id: "2",
      name: "Green Energy Tanzania",
      type: "Social Enterprise",
      location: "Dar es Salaam, Tanzania",
      description:
        "Developing and distributing affordable renewable energy solutions tailored for East African communities.",
      impact: "Installed 75 micro-grids serving 25,000 people and reducing carbon emissions by 12,000 tons annually.",
      bio: "Green Energy Tanzania (GET) is a social enterprise at the forefront of East Africa's renewable energy transition. Founded by a team of engineers and community development experts, GET designs, installs, and maintains solar micro-grids and standalone systems that provide reliable electricity to communities previously dependent on kerosene, diesel, and other fossil fuels. Their innovative pay-as-you-go model and community ownership structure ensures sustainability and accessibility for even the most remote villages.",
      achievements: [
        "Installed 75 solar micro-grids serving 25,000+ people across Tanzania",
        "Reduced carbon emissions by an estimated 12,000 tons CO₂e annually",
        "Created 120 jobs for local technicians, installers, and community energy managers",
        "Enabled 350+ small businesses to operate with reliable electricity",
      ],
      projects: ["Rural Electrification Program", "Solar for Schools Initiative", "Productive Use of Energy Project"],
      image: "/images/org-green-energy.png",
      verified: true,
      socialLinks: {
        website: "https://www.greenenergy-tz.org",
        twitter: "@GreenEnergyTZ",
        linkedin: "green-energy-tanzania",
      },
    },
    {
      id: "3",
      name: "Blue Carbon Alliance",
      type: "Conservation Consortium",
      location: "Mombasa, Kenya",
      description:
        "Protecting and restoring coastal blue carbon ecosystems including mangroves, seagrasses, and salt marshes.",
      impact: "Restored 1,200 hectares of mangrove forests, sequestering an estimated 45,000 tons of CO₂ annually.",
      bio: "The Blue Carbon Alliance is a consortium of conservation organizations, research institutions, and community groups working to protect and restore coastal ecosystems across East Africa. Focusing on mangroves, seagrasses, and salt marshes—ecosystems that sequester carbon at rates up to five times higher than tropical forests—the Alliance combines scientific research, community-led restoration, policy advocacy, and sustainable livelihood development to ensure the long-term health of these vital carbon sinks.",
      achievements: [
        "Restored 1,200 hectares of degraded mangrove forests along the Kenyan coast",
        "Sequestering an estimated 45,000 tons of CO₂ annually through restoration activities",
        "Established 8 community-managed marine protected areas",
        "Trained 500+ community members in ecosystem monitoring and restoration techniques",
      ],
      projects: ["Mangrove Restoration Initiative", "Blue Carbon Monitoring Network", "Sustainable Fisheries Program"],
      image: "/images/org-blue-carbon.png",
      verified: true,
      socialLinks: {
        website: "https://www.bluecarbonalliance.org",
        twitter: "@BlueCarbon",
        linkedin: "blue-carbon-alliance",
      },
    },
    {
      id: "4",
      name: "EcoSchools Africa",
      type: "Educational Foundation",
      location: "Kampala, Uganda",
      description:
        "Integrating environmental education and practical sustainability projects in schools across East Africa.",
      impact: "Engaged 250 schools reaching 125,000 students, implementing 500+ student-led environmental projects.",
      bio: "EcoSchools Africa is an educational foundation that transforms schools into catalysts for environmental change. Working across Uganda, Kenya, and Tanzania, the organization provides teacher training, curriculum resources, and project support to help schools integrate sustainability into both education and operations. Their whole-school approach engages students, teachers, administrators, and parents in practical projects ranging from school gardens and tree nurseries to waste management systems and renewable energy installations.",
      achievements: [
        "Engaged 250 schools across East Africa, reaching 125,000+ students",
        "Implemented 500+ student-led environmental projects",
        "Reduced participating schools' carbon footprints by an average of 30%",
        "Planted 75,000 trees through school nursery programs",
      ],
      projects: [
        "Climate Change Education Program",
        "School Gardens Initiative",
        "Youth Environmental Leadership Training",
      ],
      image: "/images/org-ecoschools.png",
      verified: true,
      socialLinks: {
        website: "https://www.ecoschoolsafrica.org",
        twitter: "@EcoSchoolsAfrica",
        linkedin: "ecoschools-africa",
      },
    },
  ]

  const organization = organizations.find((o) => o.id === id)

  if (!organization) {
    return <div>Organization not found</div>
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
                    <AvatarImage src={organization.image || "/placeholder.svg"} alt={organization.name} />
                    <AvatarFallback>{organization.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h1 className="text-2xl font-bold">{organization.name}</h1>
                  <p className="text-muted-foreground">{organization.type}</p>
                  <div className="flex items-center gap-1 mt-1 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="text-sm">{organization.location}</span>
                  </div>

                  <div className="flex gap-2 mt-4">
                    {organization.verified && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Verified
                      </Badge>
                    )}
                    <Badge variant="outline">Carbon Leader</Badge>
                  </div>

                  <div className="w-full mt-6 space-y-2">
                    <Link
                      href={`/wallet/retire/gift?recipient=${organization.id}&type=organization`}
                      className="w-full"
                    >
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
                        {organization.socialLinks.website && (
                          <a
                            href={organization.socialLinks.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center hover:text-primary"
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-2" />
                            Website
                          </a>
                        )}
                        {organization.socialLinks.twitter && (
                          <a
                            href={`https://twitter.com/${organization.socialLinks.twitter.replace("@", "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center hover:text-primary"
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-2" />
                            Twitter
                          </a>
                        )}
                        {organization.socialLinks.linkedin && (
                          <a
                            href={`https://linkedin.com/in/${organization.socialLinks.linkedin}`}
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
                <CardDescription>Learn more about {organization.name} and their impact</CardDescription>
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
                        <h2 className="text-xl font-semibold mb-2">Mission</h2>
                        <p className="text-muted-foreground">{organization.bio}</p>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold mb-2">Key Achievements</h2>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          {organization.achievements.map((achievement, index) => (
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
                            <p className="text-muted-foreground">{organization.impact}</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 text-green-600">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Community Impact</h3>
                            <p className="text-muted-foreground">
                              {organization.name} works directly with local communities, providing training, employment,
                              and sustainable livelihood opportunities while protecting natural resources.
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
                                <p className="text-muted-foreground text-sm">Carbon Impact</p>
                                <p className="text-3xl font-bold">45,000</p>
                                <p className="text-xs text-muted-foreground">tons CO₂e/year</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4">
                              <div className="text-center">
                                <p className="text-muted-foreground text-sm">Communities Served</p>
                                <p className="text-3xl font-bold">12</p>
                                <p className="text-xs text-muted-foreground">local communities</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4">
                              <div className="text-center">
                                <p className="text-muted-foreground text-sm">People Benefited</p>
                                <p className="text-3xl font-bold">25,000+</p>
                                <p className="text-xs text-muted-foreground">individuals</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4">
                              <div className="text-center">
                                <p className="text-muted-foreground text-sm">Area Impacted</p>
                                <p className="text-3xl font-bold">1,200</p>
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
                        {organization.projects.map((project, index) => (
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
                <CardTitle>Support {organization.name}</CardTitle>
                <CardDescription>
                  Gift carbon offsets to support {organization.name}'s environmental initiatives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  By gifting carbon offsets, you're directly supporting {organization.name}'s work in environmental
                  conservation and sustainable development. Your contribution helps fund ongoing projects and
                  initiatives while offsetting your carbon footprint.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Small Impact</h3>
                      <p className="text-2xl font-bold mt-1">5 tCO₂e</p>
                      <p className="text-xs text-muted-foreground mb-4">$92.50</p>
                      <Link href={`/wallet/retire/gift?recipient=${organization.id}&type=organization&amount=5`}>
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
                      <Link href={`/wallet/retire/gift?recipient=${organization.id}&type=organization&amount=10`}>
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
                      <Link href={`/wallet/retire/gift?recipient=${organization.id}&type=organization&amount=25`}>
                        <Button size="sm" className="w-full">
                          Gift Now
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/wallet/retire/gift?recipient=${organization.id}&type=organization`} className="w-full">
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
