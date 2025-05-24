import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, FileText, Video } from "lucide-react"

export default function ResourcesPage() {
  const resources = {
    guides: [
      {
        id: 1,
        title: "Understanding Carbon Credits",
        description:
          "A comprehensive guide to carbon credits, how they work, and their role in fighting climate change.",
        type: "guide",
        level: "basic",
        image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=800&h=600&fit=crop&crop=center",
        readTime: "10 min read",
        assignment: {
          title: "Carbon Credit Basics Quiz",
          questions: [
            {
              question: "What is one carbon credit equivalent to?",
              options: ["1 kilogram of CO2", "1 ton of CO2", "1 pound of CO2", "1 metric ton of CO2 equivalent"],
              answer: 3,
            },
            {
              question: "Which of the following is NOT a common type of carbon offset project?",
              options: ["Reforestation", "Renewable energy", "Oil extraction", "Methane capture"],
              answer: 2,
            },
          ],
        },
      },
      {
        id: 2,
        title: "Carbon Credit Verification Standards",
        description:
          "Learn about the different verification standards and how they ensure the quality of carbon credits.",
        type: "guide",
        level: "advanced",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=center",
        readTime: "15 min read",
        assignment: {
          title: "Verification Standards Assessment",
          questions: [
            {
              question: "Which verification standard is known for emphasizing sustainable development co-benefits?",
              options: ["Verra VCS", "Gold Standard", "American Carbon Registry", "Plan Vivo"],
              answer: 1,
            },
            {
              question: "What is 'additionality' in carbon credit verification?",
              options: [
                "Adding more carbon credits to a project",
                "The requirement that projects must generate emissions reductions that would not have occurred without carbon finance",
                "Additional benefits beyond carbon reduction",
                "Adding more verification standards to a project",
              ],
              answer: 1,
            },
          ],
        },
      },
      {
        id: 3,
        title: "How to Choose the Right Carbon Offset Projects",
        description:
          "Factors to consider when selecting carbon offset projects that align with your sustainability goals.",
        type: "guide",
        level: "basic",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center",
        readTime: "12 min read",
        assignment: {
          title: "Project Selection Exercise",
          questions: [
            {
              question: "Which factor is most important when evaluating the quality of a carbon offset project?",
              options: [
                "Location of the project",
                "Size of the project developer",
                "Verification by a recognized standard",
                "Age of the project",
              ],
              answer: 2,
            },
            {
              question: "What are co-benefits in carbon projects?",
              options: [
                "Financial benefits for investors",
                "Additional environmental and social benefits beyond carbon reduction",
                "Tax benefits for purchasing carbon credits",
                "Benefits shared between project developers",
              ],
              answer: 1,
            },
          ],
        },
      },
    ],
    articles: [
      {
        id: 1,
        title: "The Evolution of Carbon Markets",
        description: "Explore the history and development of carbon markets from their inception to the present day.",
        type: "article",
        level: "advanced",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop&crop=center",
        readTime: "8 min read",
      },
      {
        id: 2,
        title: "Nature-Based Solutions for Carbon Sequestration",
        description: "How natural ecosystems can help remove carbon dioxide from the atmosphere.",
        type: "article",
        level: "basic",
        image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=800&h=600&fit=crop&crop=center",
        readTime: "7 min read",
      },
      {
        id: 3,
        title: "Corporate Carbon Neutrality Strategies",
        description: "Case studies of companies implementing effective carbon neutrality strategies.",
        type: "article",
        level: "advanced",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop&crop=center",
        readTime: "9 min read",
      },
    ],
    videos: [
      {
        id: 1,
        title: "Carbon Credit Project Types Explained",
        description: "A visual explanation of different types of carbon credit projects and how they reduce emissions.",
        type: "video",
        level: "basic",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&crop=center",
        duration: "12:45",
        videoUrl: "https://youtu.be/JXcp-E1bJzg?si=b_BF_-pUkssb3Vnv",
      },
      {
        id: 2,
        title: "Inside a Verification Process",
        description: "Follow a carbon credit project through the entire verification process from start to finish.",
        type: "video",
        level: "advanced",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center",
        duration: "18:30",
      },
      {
        id: 3,
        title: "The Future of Carbon Markets",
        description: "Expert interviews on the future trends and developments in global carbon markets.",
        type: "video",
        level: "advanced",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop&crop=center",
        duration: "15:20",
      },
    ],
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "guide":
        return <BookOpen className="h-4 w-4" />
      case "article":
        return <FileText className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      default:
        return null
    }
  }

  const getLevelBadge = (level) => {
    if (level === "basic") {
      return (
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          Basic
        </Badge>
      )
    } else {
      return (
        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
          Advanced
        </Badge>
      )
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Resources</h2>
      </div>

      <div className="space-y-4">
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8 pt-4">
            <div>
              <h3 className="text-xl font-bold mb-4">Basic Resources</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[...resources.guides, ...resources.articles, ...resources.videos]
                  .filter((resource) => resource.level === "basic")
                  .slice(0, 3)
                  .map((resource, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={resource.image || "/placeholder.svg"}
                          alt={resource.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {resource.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-full bg-black/50 p-3">
                              <Video className="h-8 w-8 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                          <div className="flex gap-2">
                            {getLevelBadge(resource.level)}
                            <Badge
                              variant="outline"
                              className={`flex items-center gap-1 ${
                                resource.type === "guide"
                                  ? "bg-blue-50 text-blue-700 border-blue-200"
                                  : resource.type === "article"
                                    ? "bg-green-50 text-green-700 border-green-200"
                                    : "bg-purple-50 text-purple-700 border-purple-200"
                              }`}
                            >
                              {getTypeIcon(resource.type)}
                              {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                            </Badge>
                          </div>
                        </div>
                        <CardDescription>{resource.readTime || resource.duration}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </CardContent>
                      <CardFooter>
                        {resource.type === "video" ? (
                          <a href={resource.videoUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="outline" className="w-full">
                              Watch Video
                            </Button>
                          </a>
                        ) : (
                          <Link href={`/resources/${resource.type}s/${resource.id}`} className="w-full">
                            <Button variant="outline" className="w-full">
                              {resource.type === "guide" ? "Read Guide" : "Read Article"}
                            </Button>
                          </Link>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
              </div>
              <div className="mt-4 text-right">
                <Link href="/resources/basic" className="text-primary text-sm font-medium inline-flex items-center">
                  View all basic resources
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Advanced Resources</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[...resources.guides, ...resources.articles, ...resources.videos]
                  .filter((resource) => resource.level === "advanced")
                  .slice(0, 3)
                  .map((resource, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={resource.image || "/placeholder.svg"}
                          alt={resource.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {resource.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-full bg-black/50 p-3">
                              <Video className="h-8 w-8 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                          <div className="flex gap-2">
                            {getLevelBadge(resource.level)}
                            <Badge
                              variant="outline"
                              className={`flex items-center gap-1 ${
                                resource.type === "guide"
                                  ? "bg-blue-50 text-blue-700 border-blue-200"
                                  : resource.type === "article"
                                    ? "bg-green-50 text-green-700 border-green-200"
                                    : "bg-purple-50 text-purple-700 border-purple-200"
                              }`}
                            >
                              {getTypeIcon(resource.type)}
                              {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                            </Badge>
                          </div>
                        </div>
                        <CardDescription>{resource.readTime || resource.duration}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </CardContent>
                      <CardFooter>
                        {resource.type === "video" ? (
                          <a href={resource.videoUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="outline" className="w-full">
                              Watch Video
                            </Button>
                          </a>
                        ) : (
                          <Link href={`/resources/${resource.type}s/${resource.id}`} className="w-full">
                            <Button variant="outline" className="w-full">
                              {resource.type === "guide" ? "Read Guide" : "Read Article"}
                            </Button>
                          </Link>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
              </div>
              <div className="mt-4 text-right">
                <Link href="/resources/advanced" className="text-primary text-sm font-medium inline-flex items-center">
                  View all advanced resources
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="basic" className="pt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[...resources.guides, ...resources.articles, ...resources.videos]
                .filter((resource) => resource.level === "basic")
                .map((resource, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {resource.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full bg-black/50 p-3">
                            <Video className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <Badge
                          variant="outline"
                          className={`flex items-center gap-1 ${
                            resource.type === "guide"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : resource.type === "article"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-purple-50 text-purple-700 border-purple-200"
                          }`}
                        >
                          {getTypeIcon(resource.type)}
                          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                        </Badge>
                      </div>
                      <CardDescription>{resource.readTime || resource.duration}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </CardContent>
                    <CardFooter>
                      {resource.type === "video" ? (
                        <a href={resource.videoUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                          <Button variant="outline" className="w-full">
                            Watch Video
                          </Button>
                        </a>
                      ) : (
                        <Link href={`/resources/${resource.type}s/${resource.id}`} className="w-full">
                          <Button variant="outline" className="w-full">
                            {resource.type === "guide" ? "Read Guide" : "Read Article"}
                          </Button>
                        </Link>
                      )}
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="pt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[...resources.guides, ...resources.articles, ...resources.videos]
                .filter((resource) => resource.level === "advanced")
                .map((resource, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {resource.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full bg-black/50 p-3">
                            <Video className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <Badge
                          variant="outline"
                          className={`flex items-center gap-1 ${
                            resource.type === "guide"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : resource.type === "article"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-purple-50 text-purple-700 border-purple-200"
                          }`}
                        >
                          {getTypeIcon(resource.type)}
                          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                        </Badge>
                      </div>
                      <CardDescription>{resource.readTime || resource.duration}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </CardContent>
                    <CardFooter>
                      {resource.type === "video" ? (
                        <a href={resource.videoUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                          <Button variant="outline" className="w-full">
                            Watch Video
                          </Button>
                        </a>
                      ) : (
                        <Link href={`/resources/${resource.type}s/${resource.id}`} className="w-full">
                          <Button variant="outline" className="w-full">
                            {resource.type === "guide" ? "Read Guide" : "Read Article"}
                          </Button>
                        </Link>
                      )}
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="guides" className="pt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {resources.guides.map((resource, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <div className="flex gap-2">
                        {getLevelBadge(resource.level)}
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1"
                        >
                          {getTypeIcon(resource.type)}
                          Guide
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>{resource.readTime}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/resources/guides/${resource.id}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Read Guide
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="articles" className="pt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {resources.articles.map((resource, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <div className="flex gap-2">
                        {getLevelBadge(resource.level)}
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1"
                        >
                          {getTypeIcon(resource.type)}
                          Article
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>{resource.readTime}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/resources/articles/${resource.id}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Read Article
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="pt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {resources.videos.map((resource, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/50 p-3">
                        <Video className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <div className="flex gap-2">
                        {getLevelBadge(resource.level)}
                        <Badge
                          variant="outline"
                          className="bg-purple-50 text-purple-700 border-purple-200 flex items-center gap-1"
                        >
                          {getTypeIcon(resource.type)}
                          Video
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>{resource.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </CardContent>
                  <CardFooter>
                    {resource.type === "video" ? (
                      <a href={resource.videoUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="outline" className="w-full">
                          Watch Video
                        </Button>
                      </a>
                    ) : (
                      <Link href={`/resources/videos/${resource.id}`} className="w-full">
                        <Button variant="outline" className="w-full">
                          Watch Video
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
