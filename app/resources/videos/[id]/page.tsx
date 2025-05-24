"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Video, Share2, Bookmark, BookmarkCheck, ThumbsUp, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function VideoDetailPage() {
  const params = useParams()
  const router = useRouter()
  const videoId = Number(params.id)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [activeTab, setActiveTab] = useState("description")
  const [comment, setComment] = useState("")

  // This would normally come from an API call based on the ID
  const videos = [
    {
      id: 1,
      title: "Carbon Credit Project Types Explained",
      description: "A visual explanation of different types of carbon credit projects and how they reduce emissions.",
      type: "video",
      level: "basic",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&crop=center",
      duration: "12:45",
      videoUrl: "https://youtu.be/JXcp-E1bJzg?si=b_BF_-pUkssb3Vnv",
      views: "2,345",
      likes: "187",
      comments: "32",
      author: "Climate Solutions Network",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      publishDate: "May 10, 2023",
      transcript: `
In this video, we explore the different types of carbon credit projects and how they help reduce greenhouse gas emissions.

Carbon credit projects can be broadly categorized into several types, each with unique approaches to either reducing emissions or removing carbon from the atmosphere.

First, let's look at forestry and conservation projects. These include:
- Reforestation: Planting trees in areas that were previously forested
- Afforestation: Creating new forests in areas that weren't previously forested
- Avoided deforestation: Protecting existing forests from being cut down
- Improved forest management: Enhancing how forests are managed to increase carbon storage

Next, we have renewable energy projects, which generate clean electricity to replace fossil fuel power sources:
- Solar farms
- Wind energy
- Hydroelectric power
- Geothermal energy
- Biomass energy from sustainable sources

Methane capture projects prevent this potent greenhouse gas from entering the atmosphere:
- Landfill gas capture
- Coal mine methane capture
- Livestock methane management
- Wastewater treatment methane capture

Energy efficiency projects reduce the amount of energy needed, thereby reducing emissions:
- Industrial efficiency improvements
- Building retrofits
- Efficient cookstoves in developing countries
- Transportation efficiency

Finally, there are emerging carbon removal technologies:
- Direct air capture
- Biochar production
- Enhanced weathering
- Ocean-based carbon removal

Each project type has different benefits, costs, and considerations regarding permanence, additionality, and co-benefits.

When evaluating carbon credit projects, it's important to consider:
- Verification standards used
- Project location and context
- Co-benefits beyond carbon reduction
- Permanence of carbon storage
- Additionality (would the reductions have happened anyway?)

By understanding these different project types, you can make more informed decisions about which carbon credits align with your sustainability goals and values.
      `,
      relatedVideos: [2, 3],
      comments: [
        {
          id: 1,
          user: "Alex Thompson",
          userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
          comment:
            "This was really helpful for understanding the different project types. I had no idea there were so many approaches to carbon reduction!",
          time: "2 weeks ago",
          likes: 12,
        },
        {
          id: 2,
          user: "Jamie Rodriguez",
          userImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
          comment:
            "Great explanation of the verification standards. Would love to see a follow-up video that goes deeper into how to evaluate project quality.",
          time: "1 week ago",
          likes: 8,
        },
        {
          id: 3,
          user: "Sam Wilson",
          userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
          comment:
            "I'm working on sustainability initiatives for my company and this video helped me explain carbon credits to our leadership team. Thanks!",
          time: "3 days ago",
          likes: 5,
        },
      ],
    },
    {
      id: 2,
      title: "Inside a Verification Process",
      description: "Follow a carbon credit project through the entire verification process from start to finish.",
      type: "video",
      level: "advanced",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center",
      duration: "18:30",
      videoUrl: "#",
      views: "1,892",
      likes: "145",
      comments: "27",
      author: "Carbon Market Insights",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      publishDate: "June 5, 2023",
      transcript: `
This video provides an in-depth look at the verification process for carbon credit projects, following a real reforestation project from initial documentation to final credit issuance.

The verification process is crucial for ensuring that carbon credits represent real, additional, and permanent emission reductions or removals. Without rigorous verification, the integrity of carbon markets would be compromised.

We begin by examining the project design phase, where developers create a detailed project description document that outlines:
- The baseline scenario (what would happen without the project)
- The project activities and how they reduce emissions
- The methodology used to calculate emission reductions
- Monitoring plans
- Safeguards for environmental and social impacts

Next, we follow the validation phase, where an independent third-party verifier reviews the project design to ensure it meets the standard's requirements. This includes:
- Site visits
- Stakeholder interviews
- Review of calculations and assumptions
- Assessment of additionality
- Evaluation of potential leakage

Once the project is implemented, we observe the monitoring phase, where project developers collect data according to their monitoring plan, including:
- Forest growth measurements
- Carbon stock calculations
- Implementation of project activities
- Any changes or deviations from the project plan

The verification phase follows, where verifiers return to:
- Check monitoring data accuracy
- Verify that the project was implemented as planned
- Calculate the actual emission reductions achieved
- Assess any risks to permanence

Finally, we witness the issuance of carbon credits, where:
- The verification report is submitted to the standard body
- Credits are issued to the project's registry account
- Credits become available for sale or retirement

Throughout the video, we highlight common challenges and best practices, providing viewers with a realistic understanding of what makes a high-quality carbon credit project.
      `,
      relatedVideos: [1, 3],
      comments: [
        {
          id: 1,
          user: "Morgan Lee",
          userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
          comment:
            "As someone who works in the verification field, I appreciate how accurately this portrays the process. It's not as simple as many people think!",
          time: "3 weeks ago",
          likes: 15,
        },
        {
          id: 2,
          user: "Taylor Jordan",
          userImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
          comment:
            "This really helped me understand why some carbon credits cost more than others. The verification process is quite intensive!",
          time: "2 weeks ago",
          likes: 9,
        },
      ],
    },
    {
      id: 3,
      title: "The Future of Carbon Markets",
      description: "Expert interviews on the future trends and developments in global carbon markets.",
      type: "video",
      level: "advanced",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop&crop=center",
      duration: "15:20",
      videoUrl: "#",
      views: "1,456",
      likes: "118",
      comments: "23",
      author: "Climate Finance Hub",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      publishDate: "July 12, 2023",
      transcript: `
In this video, we interview leading experts in carbon markets to explore emerging trends and future developments that will shape climate finance in the coming years.

Our experts discuss several key trends:

1. Integration of compliance and voluntary markets:
   - How Article 6 of the Paris Agreement is creating bridges between different carbon market systems
   - The potential for voluntary credits to be recognized in compliance schemes
   - Challenges in maintaining environmental integrity across different systems

2. Technology transformations:
   - Blockchain and distributed ledger technology for transparent credit tracking
   - Remote sensing and AI for improved monitoring and verification
   - Digital MRV (Monitoring, Reporting, and Verification) systems reducing costs

3. Expanding sectoral coverage:
   - Blue carbon (coastal and marine ecosystems)
   - Soil carbon in agricultural systems
   - Hard-to-abate industrial sectors
   - Aviation and shipping

4. Quality differentiation:
   - Moving beyond carbon to account for co-benefits
   - Development of tiered markets with premium prices for high-integrity credits
   - Enhanced focus on permanence and risk mitigation

5. Increasing corporate demand:
   - Net-zero commitments driving long-term demand
   - Shift from offsetting to "contribution claims"
   - Integration of carbon credits into broader corporate climate strategies

6. Regulatory developments:
   - Emerging disclosure requirements for carbon credit use
   - Potential carbon border adjustment mechanisms
   - Harmonization of standards and methodologies

Our experts also address several challenges facing carbon markets:
   - Ensuring additionality in a world of increasing climate action
   - Managing the transition from project-based to jurisdictional approaches
   - Balancing accessibility for project developers with rigorous standards
   - Scaling high-integrity carbon removal solutions

The video concludes with recommendations for different stakeholders:
   - For companies: Develop comprehensive climate strategies that prioritize emissions reductions while strategically using high-quality credits
   - For investors: Understand the evolving risk landscape and opportunities in carbon markets
   - For policymakers: Create clear frameworks that maintain environmental integrity while enabling market growth
   - For project developers: Focus on high-integrity projects with multiple co-benefits

Through these expert insights, viewers gain a comprehensive understanding of how carbon markets are likely to evolve and how they can position themselves for these changes.
      `,
      relatedVideos: [1, 2],
      comments: [
        {
          id: 1,
          user: "Jordan Casey",
          userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
          comment:
            "The section on blockchain applications for carbon markets was fascinating. I'd love to see a dedicated video just on that topic.",
          time: "1 month ago",
          likes: 14,
        },
        {
          id: 2,
          user: "Riley Quinn",
          userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
          comment:
            "Great overview of where things are heading. The expert from the World Bank had particularly insightful comments about jurisdictional approaches.",
          time: "3 weeks ago",
          likes: 11,
        },
      ],
    },
  ]

  const video = videos.find((v) => v.id === videoId)

  if (!video) {
    return <div>Video not found</div>
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would submit the comment to an API
    alert("Comment submitted: " + comment)
    setComment("")
  }

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Button>
        <Badge
          variant="outline"
          className={`${
            video.level === "basic"
              ? "bg-blue-50 text-blue-700 border-blue-200"
              : "bg-purple-50 text-purple-700 border-purple-200"
          }`}
        >
          {video.level.charAt(0).toUpperCase() + video.level.slice(1)}
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative rounded-lg overflow-hidden bg-black aspect-video">
            {video.videoUrl && video.videoUrl !== "#" ? (
              <iframe
                src={video.videoUrl.replace("youtu.be/", "youtube.com/embed/")}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Video className="h-16 w-16 text-white/50 mx-auto mb-4" />
                  <p className="text-white/70">Video preview not available</p>
                </div>
              </div>
            )}
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{video.title}</h1>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <span>{video.views} views</span>
                <span className="mx-2">•</span>
                <span>{video.publishDate}</span>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{video.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{video.comments}</span>
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsBookmarked(!isBookmarked)}>
                  {isBookmarked ? <BookmarkCheck className="h-5 w-5 text-primary" /> : <Bookmark className="h-5 w-5" />}
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
            <Avatar className="h-12 w-12">
              <AvatarImage src={video.authorImage || "/placeholder.svg"} alt={video.author} />
              <AvatarFallback>
                {video.author.split(" ")[0][0]}
                {video.author.split(" ")[1]?.[0] || ""}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{video.author}</h3>
              <p className="text-sm text-muted-foreground">Content Creator</p>
            </div>
            <Button className="ml-auto" variant="outline">
              Subscribe
            </Button>
          </div>

          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
              <TabsTrigger value="comments">Comments ({video.comments})</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="p-4 bg-card rounded-md mt-2">
              <p className="whitespace-pre-line">{video.description}</p>
            </TabsContent>
            <TabsContent value="transcript" className="p-4 bg-card rounded-md mt-2">
              <div className="prose prose-sm max-w-none">
                <div dangerouslySetInnerHTML={{ __html: video.transcript.replace(/\n/g, "<br />") }} />
              </div>
            </TabsContent>
            <TabsContent value="comments" className="space-y-4 p-4 bg-card rounded-md mt-2">
              <form onSubmit={handleCommentSubmit} className="space-y-2">
                <Textarea placeholder="Add a comment..." value={comment} onChange={(e) => setComment(e.target.value)} />
                <div className="flex justify-end">
                  <Button type="submit" disabled={!comment.trim()}>
                    Comment
                  </Button>
                </div>
              </form>
              <Separator />
              <div className="space-y-4">
                {video.comments &&
                  Array.isArray(video.comments) &&
                  video.comments.map((comment) => (
                    <div key={comment.id} className="flex gap-4">
                      <Avatar>
                        <AvatarImage src={comment.userImage || "/placeholder.svg"} alt={comment.user} />
                        <AvatarFallback>{comment.user.split(" ")[0][0]}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{comment.user}</span>
                          <span className="text-xs text-muted-foreground">{comment.time}</span>
                        </div>
                        <p className="text-sm">{comment.comment}</p>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            {comment.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About This Video</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Level</span>
                <span className="font-medium capitalize">{video.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration</span>
                <span className="font-medium">{video.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Published</span>
                <span className="font-medium">{video.publishDate}</span>
              </div>
              <Separator />
              <p className="text-sm text-muted-foreground">{video.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Related Videos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {videos
                .filter((v) => video.relatedVideos.includes(v.id))
                .map((relatedVideo) => (
                  <div key={relatedVideo.id} className="flex gap-3">
                    <div className="relative h-16 w-28 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={relatedVideo.image || "/placeholder.svg"}
                        alt={relatedVideo.title}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                      <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                        {relatedVideo.duration}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <Link
                        href={`/resources/videos/${relatedVideo.id}`}
                        className="text-sm font-medium hover:underline line-clamp-2"
                      >
                        {relatedVideo.title}
                      </Link>
                      <span className="text-xs text-muted-foreground">{relatedVideo.author}</span>
                      <span className="text-xs text-muted-foreground">{relatedVideo.views} views</span>
                    </div>
                  </div>
                ))}
            </CardContent>
            <CardFooter>
              <Link href="/resources" className="w-full">
                <Button variant="outline" className="w-full">
                  View All Resources
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
