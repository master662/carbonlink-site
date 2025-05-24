"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Award, Gift, Calendar, MapPin, Clock, Trophy, CheckCircle, School, Users } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function EarnPointsPage() {
  const [userPoints] = useState(1250)
  const [userLevel] = useState("Green Champion")
  const [nextLevelPoints] = useState(1500)
  const [selectedPartner, setSelectedPartner] = useState(null)
  const [redeemSuccess, setRedeemSuccess] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState(null)
  const [activityStarted, setActivityStarted] = useState(false)

  const handleRedeemPoints = (partner) => {
    setSelectedPartner(partner)
  }

  const confirmRedemption = () => {
    setRedeemSuccess(true)
    setTimeout(() => {
      setRedeemSuccess(false)
      setSelectedPartner(null)
    }, 3000)
  }

  const handleStartActivity = (activity) => {
    setSelectedActivity(activity)
  }

  const confirmStartActivity = () => {
    setActivityStarted(true)
    setTimeout(() => {
      setActivityStarted(false)
      setSelectedActivity(null)
    }, 3000)
  }

  const recentActivities = [
    {
      id: 1,
      type: "Tree Planting",
      points: 50,
      date: "2024-01-15",
      status: "verified",
      location: "Nairobi, Kenya",
      verifier: "NEMA Officer",
      carbonEquivalent: "0.5 tCO2e",
    },
    {
      id: 2,
      type: "Community Cleanup",
      points: 75,
      date: "2024-01-12",
      status: "pending",
      location: "Mathare, Nairobi",
      verifier: "Local Chief",
      carbonEquivalent: "0.2 tCO2e",
    },
    {
      id: 3,
      type: "Sustainable Transport",
      points: 25,
      date: "2024-01-10",
      status: "verified",
      location: "Kisumu, Kenya",
      verifier: "School Head",
      carbonEquivalent: "0.1 tCO2e",
    },
  ]

  const availableActivities = [
    {
      id: 1,
      title: "Tree Planting with Survival Monitoring",
      description: "Plant indigenous trees and monitor their survival over time",
      points: "10 points per tree",
      difficulty: "Medium",
      timeRequired: "Ongoing",
      category: "Reforestation",
      verifier: "NEMA Representative",
      carbonEquivalent: "0.05 tCO2e per tree",
    },
    {
      id: 2,
      title: "Community Cleanup & Waste Segregation",
      description: "Organize or participate in community cleanup events with proper waste sorting",
      points: "75-150 points per event",
      difficulty: "Easy",
      timeRequired: "4-6 hours",
      category: "Waste Management",
      verifier: "Local Chief/Administrator",
      carbonEquivalent: "0.2-0.4 tCO2e",
    },
    {
      id: 3,
      title: "Sustainable Transport",
      description: "Use of biking or walking instead of motorized transport",
      points: "5-25 points per week",
      difficulty: "Easy",
      timeRequired: "Daily",
      category: "Transportation",
      verifier: "School Club/Head",
      carbonEquivalent: "0.1-0.3 tCO2e per month",
    },
    {
      id: 4,
      title: "Composting & Urban Farming",
      description: "Maintain composting systems and eco-friendly farming practices",
      points: "50-100 points per month",
      difficulty: "Medium",
      timeRequired: "Ongoing",
      category: "Agriculture",
      verifier: "NEMA Officer",
      carbonEquivalent: "0.2-0.5 tCO2e per month",
    },
    {
      id: 5,
      title: "Climate Innovation Projects",
      description: "Develop and implement climate innovation projects in schools",
      points: "100-500 points per project",
      difficulty: "Hard",
      timeRequired: "1-3 months",
      category: "Education & Innovation",
      verifier: "School Head & NEMA",
      carbonEquivalent: "0.5-2.0 tCO2e",
    },
  ]

  const leaderboard = [
    {
      rank: 1,
      name: "Joy Kamau",
      points: 2850,
      location: "Mathare, Nairobi",
      badge: "Climate Ambassador",
      activities: "Community Cleanups, Urban Composting",
    },
    {
      rank: 2,
      name: "Ali Hassan",
      points: 2720,
      location: "Nairobi Primary School",
      badge: "Eco-Club Leader",
      activities: "School Garden, Recycling Drive",
    },
    {
      rank: 3,
      name: "Fatima Wanjiku",
      points: 2650,
      location: "Kisumu, Kenya",
      badge: "Green Innovator",
      activities: "Climate Innovation, Tree Planting",
    },
    {
      rank: 4,
      name: "Thabo Mwangi",
      points: 2400,
      location: "Mombasa, Kenya",
      badge: "Waste Warrior",
      activities: "Beach Cleanups, Plastic Recycling",
    },
    {
      rank: 5,
      name: "You",
      points: userPoints,
      location: "Your Location",
      badge: userLevel,
      activities: "Your Activities",
    },
  ]

  const partners = [
    {
      id: 1,
      name: "Java Foundation",
      type: "Meals & Training",
      reward: "Hot meals & hospitality training",
      pointsRequired: 500,
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Dishi na County",
      type: "School Program",
      reward: "School lunch tokens & uniforms",
      pointsRequired: 750,
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Safaricom",
      type: "Data Bundles",
      reward: "Internet data bundles",
      pointsRequired: 300,
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "EcoProducts Kenya",
      type: "Eco-friendly Products",
      reward: "Sustainable products & supplies",
      pointsRequired: 600,
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 5,
      name: "Education Fund",
      type: "School Fees",
      reward: "School fees contribution",
      pointsRequired: 1200,
      logo: "/placeholder.svg?height=60&width=60",
    },
  ]

  const certificates = [
    {
      id: 1,
      title: "Tree Planting Certificate",
      issueDate: "2023-12-10",
      issuedBy: "NEMA & Carbon Link",
      carbonEquivalent: "0.5 tCO2e",
      status: "Verified",
    },
    {
      id: 2,
      title: "Local Climate Action Certificate",
      issueDate: "2024-01-05",
      issuedBy: "NEMA",
      carbonEquivalent: "0.8 tCO2e",
      status: "Verified",
    },
  ]

  return (
    <div className="container mx-auto py-4 sm:py-6 lg:py-8 space-y-6 lg:space-y-8 px-4">
      {/* Header */}
      <div className="text-center space-y-2 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800">Earn & Redeem Carbon Link Points</h1>
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
          Take climate action, log verified activities, and redeem rewards with our local partners across Kenya
        </p>
      </div>

      {/* Points Summary */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <CardTitle className="text-xl sm:text-2xl text-green-800">Your Carbon Link Points</CardTitle>
              <CardDescription>Current level: {userLevel}</CardDescription>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">{userPoints.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Carbon Link Points</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to next level</span>
              <span>{nextLevelPoints - userPoints} points to go</span>
            </div>
            <Progress value={(userPoints / nextLevelPoints) * 100} className="h-2" />
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              Your activities have helped reduce approximately <strong>1.5 tCO2e</strong> of carbon emissions
            </p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="activities" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 gap-1 h-auto p-1 sm:grid-cols-3 lg:grid-cols-5 sm:h-10">
          <TabsTrigger value="activities" className="text-xs px-2 py-2 sm:text-sm sm:px-3 sm:py-1.5">
            <span className="hidden sm:inline">Eligible Activities</span>
            <span className="sm:hidden">Activities</span>
          </TabsTrigger>
          <TabsTrigger value="my-activities" className="text-xs px-2 py-2 sm:text-sm sm:px-3 sm:py-1.5">
            <span className="hidden sm:inline">My Activities</span>
            <span className="sm:hidden">My Tasks</span>
          </TabsTrigger>
          <TabsTrigger value="certificates" className="text-xs px-2 py-2 sm:text-sm sm:px-3 sm:py-1.5">
            <span className="hidden sm:inline">My Certificates</span>
            <span className="sm:hidden">Certificates</span>
          </TabsTrigger>
          <TabsTrigger value="redeem" className="text-xs px-2 py-2 sm:text-sm sm:px-3 sm:py-1.5">
            <span className="hidden sm:inline">Redeem Points</span>
            <span className="sm:hidden">Redeem</span>
          </TabsTrigger>
          <TabsTrigger
            value="leaderboard"
            className="text-xs px-2 py-2 sm:text-sm sm:px-3 sm:py-1.5 col-span-2 sm:col-span-1"
          >
            <span className="hidden sm:inline">Leaderboard</span>
            <span className="sm:hidden">Leaders</span>
          </TabsTrigger>
        </TabsList>

        {/* Eligible Activities */}
        <TabsContent value="activities" className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-xl sm:text-2xl font-semibold">NEMA-Approved Climate Activities</h2>
            <Link href="/earn-points/log-activity">
              <Button className="w-full sm:w-auto">
                <Leaf className="mr-2 h-4 w-4" />
                Log New Activity
              </Button>
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {availableActivities.map((activity) => (
              <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base sm:text-lg leading-tight">{activity.title}</CardTitle>
                      <CardDescription className="mt-2 text-sm">{activity.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-xs flex-shrink-0">
                      {activity.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="font-medium truncate">{activity.points}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="truncate">{activity.timeRequired}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <Users className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">Verified by: {activity.verifier}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <Leaf className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{activity.carbonEquivalent}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                      <Badge variant={activity.difficulty === "Easy" ? "default" : "secondary"} className="text-xs">
                        {activity.difficulty}
                      </Badge>
                      <Button size="sm" className="w-full sm:w-auto" onClick={() => handleStartActivity(activity)}>
                        Start Activity
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800">Community-Based Verification</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    All activities are verified by trusted community members such as school heads, NEMA representatives,
                    or local chiefs. This ensures our system is community-trusted and maintains high integrity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* My Activities */}
        <TabsContent value="my-activities" className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold">My Recent Activities</h2>

          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <Card key={activity.id}>
                <CardContent className="pt-4 sm:pt-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-2 flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <h3 className="font-semibold text-base sm:text-lg">{activity.type}</h3>
                        <Badge
                          variant={activity.status === "verified" ? "default" : "secondary"}
                          className="text-xs w-fit"
                        >
                          {activity.status}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span>{activity.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{activity.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 flex-shrink-0" />
                          <span className="text-xs sm:text-sm">Verified by: {activity.verifier}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Leaf className="h-4 w-4 flex-shrink-0" />
                          <span className="text-xs sm:text-sm">Carbon impact: {activity.carbonEquivalent}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center sm:text-right flex-shrink-0">
                      <div className="text-lg font-semibold text-green-600">+{activity.points} points</div>
                      {activity.status === "pending" && (
                        <div className="text-sm text-muted-foreground">Awaiting verification</div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Certificates */}
        <TabsContent value="certificates" className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Local Climate Action Certificates</h2>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {certificates.map((certificate) => (
              <Card key={certificate.id} className="hover:shadow-lg transition-shadow border-green-200">
                <CardHeader className="bg-green-50 border-b border-green-100 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <CardTitle className="text-base sm:text-lg text-green-800 leading-tight">
                      {certificate.title}
                    </CardTitle>
                    <Badge variant="outline" className="border-green-500 text-green-700 text-xs w-fit">
                      {certificate.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">{certificate.issueDate}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4 sm:pt-6">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-2">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">Issued by: {certificate.issuedBy}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">Carbon Equivalent: {certificate.carbonEquivalent}</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button size="sm" variant="outline" className="w-full sm:w-auto">
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800">MRV-lite System</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Our simplified, community-based Monitoring, Reporting, and Verification (MRV-lite) system validates
                    environmental activities and issues Local Climate Action Certificates that can be converted into
                    Carbon Link Points.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Redeem Points */}
        <TabsContent value="redeem" className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-xl sm:text-2xl font-semibold">Redeem Your Points</h2>
            <div className="text-sm text-muted-foreground">Your balance: {userPoints.toLocaleString()} points</div>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {partners.map((partner) => (
              <Card key={partner.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base sm:text-lg truncate">{partner.name}</CardTitle>
                      <CardDescription className="text-sm">{partner.type}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex-1">
                        <div className="text-base sm:text-lg font-semibold text-green-600">{partner.reward}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          {partner.pointsRequired} points required
                        </div>
                      </div>
                      <Button
                        size="sm"
                        disabled={userPoints < partner.pointsRequired}
                        variant={userPoints >= partner.pointsRequired ? "default" : "secondary"}
                        onClick={() => handleRedeemPoints(partner)}
                        className="w-full sm:w-auto"
                      >
                        <Gift className="mr-2 h-4 w-4" />
                        Redeem
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Redemption Dialog */}
          {selectedPartner && (
            <Dialog open={!!selectedPartner} onOpenChange={() => setSelectedPartner(null)}>
              <DialogContent className="w-[95vw] max-w-md sm:max-w-lg">
                {redeemSuccess ? (
                  <div className="text-center py-6 space-y-4">
                    <div className="mx-auto bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <DialogTitle>Redemption Successful!</DialogTitle>
                    <DialogDescription>
                      You have successfully redeemed {selectedPartner.pointsRequired} points for{" "}
                      {selectedPartner.reward} from {selectedPartner.name}.
                    </DialogDescription>
                    <p className="text-sm text-muted-foreground">
                      Check your email for redemption details and instructions.
                    </p>
                  </div>
                ) : (
                  <>
                    <DialogHeader>
                      <DialogTitle>Redeem Points for {selectedPartner.reward}</DialogTitle>
                      <DialogDescription>
                        You are about to redeem {selectedPartner.pointsRequired} points with {selectedPartner.name}.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email for Redemption Details</Label>
                        <Input id="email" placeholder="your@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input id="phone" placeholder="+254 7XX XXX XXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes">Special Instructions (Optional)</Label>
                        <Input id="notes" placeholder="Any special requirements or notes" />
                      </div>
                    </div>
                    <DialogFooter className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" onClick={() => setSelectedPartner(null)} className="w-full sm:w-auto">
                        Cancel
                      </Button>
                      <Button onClick={confirmRedemption} className="w-full sm:w-auto">
                        Confirm Redemption
                      </Button>
                    </DialogFooter>
                  </>
                )}
              </DialogContent>
            </Dialog>
          )}
        </TabsContent>

        {/* Leaderboard */}
        <TabsContent value="leaderboard" className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Community Leaderboard</h2>

          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center justify-between p-3 sm:p-4 rounded-lg ${
                      user.name === "You" ? "bg-green-50 border border-green-200" : "bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 flex-shrink-0">
                        {user.rank <= 3 ? (
                          <Trophy
                            className={`h-4 w-4 ${
                              user.rank === 1
                                ? "text-yellow-600"
                                : user.rank === 2
                                  ? "text-gray-600"
                                  : "text-orange-600"
                            }`}
                          />
                        ) : (
                          <span className="text-sm font-semibold">{user.rank}</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm sm:text-base truncate">{user.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground truncate">{user.location}</div>
                        <div className="text-xs text-green-600 mt-1 truncate">{user.activities}</div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-semibold text-green-600 text-sm sm:text-base">
                        {user.points.toLocaleString()} pts
                      </div>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {user.badge}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <School className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800">Recognition & Upscaling</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Top contributors may be featured in NEMA or Carbon Link campaigns. Schools can earn "Green School
                    Star" recognition, and activities can be aligned with the CBC curriculum and green innovation
                    funding.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Activity Start Dialog */}
      {selectedActivity && (
        <Dialog open={!!selectedActivity} onOpenChange={() => setSelectedActivity(null)}>
          <DialogContent className="w-[95vw] max-w-md sm:max-w-lg">
            {activityStarted ? (
              <div className="text-center py-6 space-y-4">
                <div className="mx-auto bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <DialogTitle>Activity Started Successfully!</DialogTitle>
                <DialogDescription>
                  You have successfully started "{selectedActivity.title}". You can now begin working on this activity
                  and log your progress.
                </DialogDescription>
                <p className="text-sm text-muted-foreground">
                  Remember to document your activity with photos and evidence for verification.
                </p>
              </div>
            ) : (
              <>
                <DialogHeader>
                  <DialogTitle>Start Activity: {selectedActivity.title}</DialogTitle>
                  <DialogDescription>{selectedActivity.description}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-green-600" />
                      <span>Points: {selectedActivity.points}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>Time: {selectedActivity.timeRequired}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <Users className="h-4 w-4 text-purple-600" />
                      <span>Verifier: {selectedActivity.verifier}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <Leaf className="h-4 w-4 text-green-600" />
                      <span>Impact: {selectedActivity.carbonEquivalent}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="participant-name">Your Name</Label>
                    <Input id="participant-name" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="participant-email">Email Address</Label>
                    <Input id="participant-email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="planned-location">Planned Location</Label>
                    <Input id="planned-location" placeholder="Where will you conduct this activity?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="planned-date">Planned Start Date</Label>
                    <Input id="planned-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="activity-notes">Additional Notes (Optional)</Label>
                    <Input id="activity-notes" placeholder="Any specific plans or goals for this activity" />
                  </div>
                </div>
                <DialogFooter className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" onClick={() => setSelectedActivity(null)} className="w-full sm:w-auto">
                    Cancel
                  </Button>
                  <Button onClick={confirmStartActivity} className="w-full sm:w-auto">
                    Start Activity
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
