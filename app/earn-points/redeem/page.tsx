"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Gift, ShoppingBag, GraduationCap, Coffee, Smartphone, Leaf, CheckCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function RedeemPointsPage() {
  const [userPoints] = useState(1250)
  const [selectedPartner, setSelectedPartner] = useState(null)
  const [redeemSuccess, setRedeemSuccess] = useState(false)

  const partners = [
    {
      id: 1,
      name: "Java Foundation",
      type: "Meals & Training",
      reward: "Hot meals & hospitality training",
      pointsRequired: 500,
      logo: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description:
        "Redeem your points for hot meals at Java House outlets or enroll in hospitality training sessions provided by the Java Foundation.",
      locations: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"],
    },
    {
      id: 2,
      name: "Dishi na County",
      type: "School Program",
      reward: "School lunch tokens & uniforms",
      pointsRequired: 750,
      logo: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description:
        "Support your school feeding program with lunch tokens or get a new school uniform through the Dishi na County program.",
      locations: ["All participating schools in Nairobi County"],
    },
    {
      id: 3,
      name: "Safaricom",
      type: "Data Bundles",
      reward: "Internet data bundles",
      pointsRequired: 300,
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description:
        "Stay connected with internet data bundles from Safaricom. Perfect for students and community members who need to access online resources.",
      locations: ["Available nationwide"],
    },
    {
      id: 4,
      name: "EcoProducts Kenya",
      type: "Eco-friendly Products",
      reward: "Sustainable products & supplies",
      pointsRequired: 600,
      logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description:
        "Choose from a range of eco-friendly products including reusable bags, water bottles, solar lamps, and more.",
      locations: ["Nairobi", "Mombasa", "Eldoret"],
    },
    {
      id: 5,
      name: "Education Fund",
      type: "School Fees",
      reward: "School fees contribution",
      pointsRequired: 1200,
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description:
        "Apply your points toward school fees. This reward is especially valuable for students from underprivileged backgrounds.",
      locations: ["All registered schools in Kenya"],
    },
  ]

  const categories = [
    { id: "all", name: "All Rewards" },
    { id: "education", name: "Education" },
    { id: "food", name: "Food & Meals" },
    { id: "products", name: "Eco Products" },
    { id: "digital", name: "Digital Services" },
  ]

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

  const getCategoryIcon = (type) => {
    switch (type) {
      case "School Program":
      case "School Fees":
        return <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
      case "Meals & Training":
        return <Coffee className="h-4 w-4 sm:h-5 sm:w-5" />
      case "Data Bundles":
        return <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" />
      case "Eco-friendly Products":
        return <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
      default:
        return <Gift className="h-4 w-4 sm:h-5 sm:w-5" />
    }
  }

  return (
    <div className="container mx-auto py-4 sm:py-6 lg:py-8 space-y-6 lg:space-y-8 px-4">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800">Redeem Your Carbon Link Points</h1>
        <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
          Turn your climate action into real-world rewards with our local partners across Kenya
        </p>
      </div>

      {/* Points Summary */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold text-green-800">Your Points Balance</h2>
              <p className="text-muted-foreground">Available for redemption</p>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">{userPoints.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Carbon Link Points</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner) => (
                <Card key={partner.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="relative h-12 w-12 sm:h-16 sm:w-16 rounded-full overflow-hidden bg-green-50 flex items-center justify-center">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={`${partner.name} logo`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 48px, 64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base sm:text-lg truncate">{partner.name}</CardTitle>
                        <CardDescription className="text-sm">{partner.type}</CardDescription>
                      </div>
                      <div className="flex-shrink-0">{getCategoryIcon(partner.type)}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-base sm:text-lg font-semibold text-green-600">{partner.reward}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground mt-1">{partner.description}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-medium">{partner.pointsRequired} points required</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {partner.locations[0]}
                    </Badge>
                    <Dialog>
                      <DialogTrigger asChild>
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
                      </DialogTrigger>
                      <DialogContent className="w-[95vw] max-w-md sm:max-w-lg">
                        {redeemSuccess ? (
                          <div className="text-center py-6 space-y-4">
                            <div className="mx-auto bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                              <CheckCircle className="h-8 w-8 text-green-600" />
                            </div>
                            <DialogTitle>Redemption Successful!</DialogTitle>
                            <DialogDescription>
                              You have successfully redeemed {selectedPartner?.pointsRequired} points for{" "}
                              {selectedPartner?.reward} from {selectedPartner?.name}.
                            </DialogDescription>
                            <p className="text-sm text-muted-foreground">
                              Check your email for redemption details and instructions.
                            </p>
                          </div>
                        ) : (
                          <>
                            <DialogHeader>
                              <DialogTitle>Redeem Points for {selectedPartner?.reward}</DialogTitle>
                              <DialogDescription>
                                You are about to redeem {selectedPartner?.pointsRequired} points with{" "}
                                {selectedPartner?.name}.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="location">Select Redemption Location</Label>
                                <select
                                  id="location"
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                  {selectedPartner?.locations.map((location) => (
                                    <option key={location} value={location}>
                                      {location}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email">Email for Redemption Details</Label>
                                <Input id="email" placeholder="your@email.com" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number (Optional)</Label>
                                <Input id="phone" placeholder="+254 7XX XXX XXX" />
                              </div>
                            </div>
                            <DialogFooter className="flex flex-col sm:flex-row gap-2">
                              <Button
                                variant="outline"
                                onClick={() => setSelectedPartner(null)}
                                className="w-full sm:w-auto"
                              >
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
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
              <Gift className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 text-base sm:text-lg">How Redemption Works</h3>
              <p className="text-sm sm:text-base text-blue-700 mt-1">
                After redeeming your points, you'll receive a confirmation email with a unique redemption code and
                instructions. Present this code at the partner location or follow the provided steps to claim your
                reward. All rewards support sustainable development and education in Kenya.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
