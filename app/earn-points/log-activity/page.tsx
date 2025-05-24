"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Upload, MapPin, Users, Leaf, CheckCircle2, School, User, Building } from "lucide-react"
import { format } from "date-fns"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function LogActivityPage() {
  const router = useRouter()
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    activityType: "",
    title: "",
    description: "",
    location: "",
    participants: "",
    evidence: null as File | null,
    estimatedImpact: "",
    verifierType: "",
    verifierName: "",
    verifierContact: "",
  })

  const activityTypes = [
    {
      value: "tree-planting",
      label: "Tree Planting with Survival Monitoring",
      points: "10 per tree",
      icon: "🌳",
      carbonEquivalent: "0.05 tCO2e per tree",
      verifiers: ["NEMA Representative", "School Head", "Local Chief"],
    },
    {
      value: "community-cleanup",
      label: "Community Cleanup & Waste Segregation",
      points: "75-150",
      icon: "♻️",
      carbonEquivalent: "0.2-0.4 tCO2e",
      verifiers: ["Local Chief", "NEMA Officer", "School Club"],
    },
    {
      value: "sustainable-transport",
      label: "Sustainable Transport (Biking/Walking)",
      points: "5-25 per week",
      icon: "🚲",
      carbonEquivalent: "0.1-0.3 tCO2e per month",
      verifiers: ["School Club", "School Head", "Local Administrator"],
    },
    {
      value: "composting",
      label: "Composting & Urban Farming",
      points: "50-100 per month",
      icon: "🌱",
      carbonEquivalent: "0.2-0.5 tCO2e per month",
      verifiers: ["NEMA Officer", "Local Chief", "School Head"],
    },
    {
      value: "climate-innovation",
      label: "Climate Innovation Projects",
      points: "100-500",
      icon: "💡",
      carbonEquivalent: "0.5-2.0 tCO2e",
      verifiers: ["School Head", "NEMA Representative", "Local Administrator"],
    },
  ]

  const verifierTypes = [
    { value: "school-club", label: "School Club" },
    { value: "school-head", label: "School Head" },
    { value: "nema", label: "NEMA Representative" },
    { value: "local-chief", label: "Local Chief/Administrator" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically submit to your backend
    console.log("Activity submitted:", { ...formData, date })
    router.push("/earn-points?tab=my-activities")
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, evidence: file })
    }
  }

  const selectedActivity = activityTypes.find((activity) => activity.value === formData.activityType)

  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-green-800">Log Climate Activity</h1>
          <p className="text-muted-foreground">Share your climate-positive actions for community verification</p>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              NEMA-Approved Activity Details
            </CardTitle>
            <CardDescription>
              Activities are geo-tagged, time-stamped, and require verification by a community member
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Activity Type */}
              <div className="space-y-2">
                <Label htmlFor="activityType">Activity Type</Label>
                <Select
                  value={formData.activityType}
                  onValueChange={(value) => setFormData({ ...formData, activityType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select NEMA-approved activity type" />
                  </SelectTrigger>
                  <SelectContent>
                    {activityTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center justify-between w-full">
                          <span>
                            {type.icon} {type.label}
                          </span>
                          <Badge variant="secondary" className="ml-2">
                            {type.points} pts
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedActivity && (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-800">Carbon Equivalent</h4>
                        <p className="text-sm text-green-700">{selectedActivity.carbonEquivalent}</p>
                        <h4 className="font-medium text-green-800 mt-2">Eligible Verifiers</h4>
                        <p className="text-sm text-green-700">{selectedActivity.verifiers.join(", ")}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Activity Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Tree Planting at Nairobi Primary School"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your activity, its impact, and any challenges faced..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label>Activity Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location">Location (Geo-tagged)</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    placeholder="City, County or specific location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Your location will be automatically geo-tagged when you submit
                </p>
              </div>

              {/* Participants */}
              <div className="space-y-2">
                <Label htmlFor="participants">Number of Participants</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="participants"
                    type="number"
                    placeholder="How many people participated?"
                    value={formData.participants}
                    onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                    className="pl-10"
                    min="1"
                    required
                  />
                </div>
              </div>

              {/* Estimated Impact */}
              <div className="space-y-2">
                <Label htmlFor="estimatedImpact">Estimated Environmental Impact</Label>
                <Textarea
                  id="estimatedImpact"
                  placeholder="e.g., 50 trees planted, 2 tons of waste collected, 100 people educated..."
                  value={formData.estimatedImpact}
                  onChange={(e) => setFormData({ ...formData, estimatedImpact: e.target.value })}
                  rows={3}
                />
              </div>

              {/* Evidence Upload */}
              <div className="space-y-2">
                <Label htmlFor="evidence">Evidence (Photos/Videos)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-2">
                    <Label htmlFor="evidence" className="cursor-pointer">
                      <span className="text-sm font-medium text-green-600 hover:text-green-500">Upload files</span>
                      <Input
                        id="evidence"
                        type="file"
                        className="hidden"
                        accept="image/*,video/*"
                        onChange={handleFileUpload}
                        multiple
                      />
                    </Label>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG, MP4 up to 10MB each</p>
                  </div>
                  {formData.evidence && (
                    <div className="mt-2 text-sm text-green-600">File uploaded: {formData.evidence.name}</div>
                  )}
                </div>
              </div>

              {/* Verifier Information */}
              <div className="space-y-4 pt-2 border-t">
                <h3 className="font-medium text-lg">Community Verification</h3>

                <div className="space-y-2">
                  <Label>Verifier Type</Label>
                  <RadioGroup
                    value={formData.verifierType}
                    onValueChange={(value) => setFormData({ ...formData, verifierType: value })}
                    className="grid grid-cols-2 gap-2"
                  >
                    {verifierTypes.map((type) => (
                      <div key={type.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={type.value} id={type.value} />
                        <Label htmlFor={type.value} className="flex items-center gap-1">
                          {type.value === "school-club" && <School className="h-3.5 w-3.5" />}
                          {type.value === "school-head" && <User className="h-3.5 w-3.5" />}
                          {type.value === "nema" && <Building className="h-3.5 w-3.5" />}
                          {type.value === "local-chief" && <Users className="h-3.5 w-3.5" />}
                          {type.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="verifierName">Verifier Name</Label>
                  <Input
                    id="verifierName"
                    placeholder="Name of the person who will verify this activity"
                    value={formData.verifierName}
                    onChange={(e) => setFormData({ ...formData, verifierName: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="verifierContact">Verifier Contact (Phone/Email)</Label>
                  <Input
                    id="verifierContact"
                    placeholder="Contact information for verification"
                    value={formData.verifierContact}
                    onChange={(e) => setFormData({ ...formData, verifierContact: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => router.back()} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Submit for Verification
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-blue-800">MRV-lite Verification Process</h3>
              <p className="text-sm text-blue-700">
                Your activity will be reviewed by your selected community verifier within 48-72 hours. Once verified,
                you'll receive Carbon Link Points and a Local Climate Action Certificate that recognizes your
                contribution.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
