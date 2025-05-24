"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ThumbsUp, Share2, Flag, Filter, Search, Plus, Tag, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

// Sample forum data
const forumCategories = [
  {
    id: "general",
    name: "General Discussion",
    count: 124,
    description: "General discussions about carbon credits and offsets",
  },
  { id: "projects", name: "Project Discussions", count: 87, description: "Discuss specific carbon offset projects" },
  {
    id: "verification",
    name: "Verification & Standards",
    count: 56,
    description: "Discussions about verification processes and standards",
  },
  {
    id: "marketplace",
    name: "Marketplace",
    count: 42,
    description: "Topics related to buying and selling carbon credits",
  },
  {
    id: "policy",
    name: "Policy & Regulation",
    count: 38,
    description: "Discussions about carbon policy and regulations",
  },
]

const trendingTopics = [
  {
    id: 1,
    title: "How reliable are forestry carbon credits?",
    author: "EcoInvestor",
    replies: 28,
    views: 342,
    lastActivity: "2 hours ago",
    tags: ["forestry", "verification", "risk"],
  },
  {
    id: 2,
    title: "Comparing VCS and Gold Standard verification",
    author: "CarbonAnalyst",
    replies: 19,
    views: 215,
    lastActivity: "5 hours ago",
    tags: ["verification", "standards", "comparison"],
  },
  {
    id: 3,
    title: "Best practices for corporate carbon offsetting",
    author: "GreenCorp",
    replies: 34,
    views: 412,
    lastActivity: "1 day ago",
    tags: ["corporate", "strategy", "best-practices"],
  },
]

const recentTopics = [
  {
    id: 4,
    title: "New methane capture project in Kenya - thoughts?",
    author: "ClimateAction",
    replies: 7,
    views: 89,
    lastActivity: "30 minutes ago",
    tags: ["methane", "africa", "new-project"],
  },
  {
    id: 5,
    title: "How to explain carbon credits to stakeholders?",
    author: "CommunicationsLead",
    replies: 12,
    views: 156,
    lastActivity: "1 hour ago",
    tags: ["communication", "education", "stakeholders"],
  },
  {
    id: 6,
    title: "Price trends for renewable energy credits in 2023",
    author: "MarketWatcher",
    replies: 15,
    views: 203,
    lastActivity: "3 hours ago",
    tags: ["pricing", "renewable", "market-trends"],
  },
]

export default function CommunityForum() {
  const [activeTab, setActiveTab] = useState("trending")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Community Forum</h1>
          <p className="text-muted-foreground mt-1">
            Connect with other carbon market participants and share knowledge
          </p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search discussions..."
              className="pl-8 w-full md:w-[250px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" /> New Topic
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Categories sidebar */}
        <Card className="md:col-span-1 h-fit">
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 p-4">
            {forumCategories.map((category) => (
              <Link
                key={category.id}
                href={`#${category.id}`}
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
              >
                <span className="font-medium">{category.name}</span>
                <Badge variant="outline">{category.count}</Badge>
              </Link>
            ))}
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button variant="outline" className="w-full">
              <Filter className="mr-2 h-4 w-4" /> Filter Topics
            </Button>
          </CardFooter>
        </Card>

        {/* Main content */}
        <div className="md:col-span-3 space-y-6">
          <Tabs defaultValue="trending" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="trending" className="flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4" /> Trending
                </TabsTrigger>
                <TabsTrigger value="recent" className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" /> Recent
                </TabsTrigger>
                <TabsTrigger value="following" className="flex items-center">
                  <Tag className="mr-2 h-4 w-4" /> Following
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="trending" className="space-y-4 mt-0">
              {trendingTopics.map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </TabsContent>

            <TabsContent value="recent" className="space-y-4 mt-0">
              {recentTopics.map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </TabsContent>

            <TabsContent value="following" className="mt-0">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No followed topics yet</h3>
                <p className="text-muted-foreground mt-1 mb-4">Topics you follow will appear here for easy access</p>
                <Button variant="outline">Browse All Topics</Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* New discussion form */}
          <Card>
            <CardHeader>
              <CardTitle>Start a New Discussion</CardTitle>
              <CardDescription>Share your thoughts or questions with the community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Input placeholder="Discussion title" />
              </div>
              <div className="space-y-2">
                <Textarea placeholder="What would you like to discuss?" className="min-h-[120px]" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  #verification
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  #forestry
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  #standards
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  + Add Tag
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save Draft</Button>
              <Button className="bg-green-600 hover:bg-green-700">Post Discussion</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

function TopicCard({ topic }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <Link
                href={`/community/topics/${topic.id}`}
                className="font-semibold text-lg hover:text-green-600 transition-colors"
              >
                {topic.title}
              </Link>
              <div className="flex flex-wrap gap-1 mt-2">
                {topic.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground text-sm">
              <MessageSquare className="h-4 w-4" />
              <span>{topic.replies}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                <AvatarFallback>{topic.author.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">{topic.author}</span>
            </div>
            <span className="text-xs text-muted-foreground">{topic.lastActivity}</span>
          </div>
        </div>

        <div className="border-t px-6 py-3 bg-muted/50 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <ThumbsUp className="h-4 w-4 mr-1" /> Like
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <MessageSquare className="h-4 w-4 mr-1" /> Reply
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Flag className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
