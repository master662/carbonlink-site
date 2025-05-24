"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Download, Calendar, CheckCircle, Leaf, MapPin, Users } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CertificatesPage() {
  const [userPoints] = useState(1250)
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certificates = [
    {
      id: 1,
      title: "Tree Planting Certificate",
      issueDate: "2023-12-10",
      issuedBy: "NEMA & Carbon Link",
      carbonEquivalent: "0.5 tCO2e",
      status: "Verified",
      location: "Karura Forest, Nairobi",
      description: "Certificate for planting and monitoring 10 indigenous trees in Karura Forest.",
      activities: ["Tree planting", "Survival monitoring"],
      verifier: "NEMA Officer - John Kamau",
      pointsEarned: 100,
    },
    {
      id: 2,
      title: "Local Climate Action Certificate",
      issueDate: "2024-01-05",
      issuedBy: "NEMA",
      carbonEquivalent: "0.8 tCO2e",
      status: "Verified",
      location: "Mathare, Nairobi",
      description: "Certificate for organizing and leading community cleanup events in Mathare.",
      activities: ["Waste collection", "Recycling", "Community education"],
      verifier: "Local Chief - Sarah Odhiambo",
      pointsEarned: 150,
    },
    {
      id: 3,
      title: "Sustainable Transport Certificate",
      issueDate: "2024-02-15",
      issuedBy: "Carbon Link",
      carbonEquivalent: "0.3 tCO2e",
      status: "Verified",
      location: "Nairobi",
      description: "Certificate for using sustainable transport methods for 30 consecutive days.",
      activities: ["Cycling", "Walking", "Public transport"],
      verifier: "School Head - David Mwangi",
      pointsEarned: 75,
    },
    {
      id: 4,
      title: "Climate Innovation Certificate",
      issueDate: "2024-03-20",
      issuedBy: "NEMA & Carbon Link",
      carbonEquivalent: "1.2 tCO2e",
      status: "Verified",
      location: "Nairobi Primary School",
      description: "Certificate for developing and implementing a rainwater harvesting system at school.",
      activities: ["Innovation", "Water conservation", "Education"],
      verifier: "NEMA Officer - Elizabeth Wanjiku",
      pointsEarned: 250,
    },
  ]

  const pendingCertificates = [
    {
      id: 5,
      title: "Urban Farming Certificate",
      submissionDate: "2024-05-10",
      status: "Pending",
      location: "Kibera, Nairobi",
      description: "Certificate for maintaining an urban garden and composting system for 3 months.",
      activities: ["Urban farming", "Composting", "Food security"],
      verifier: "Pending verification",
      estimatedPoints: 120,
    },
  ]

  const viewCertificate = (certificate) => {
    setSelectedCertificate(certificate)
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-800">Your Climate Action Certificates</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Official recognition of your verified climate-positive activities
        </p>
      </div>

      {/* Points Summary */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-green-800">Total Impact</h2>
              <p className="text-muted-foreground">Your climate action achievements</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-600">2.8 tCO2e</div>
              <div className="text-sm text-muted-foreground">Carbon equivalent reduced</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="verified" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="verified">Verified Certificates</TabsTrigger>
          <TabsTrigger value="pending">Pending Verification</TabsTrigger>
        </TabsList>

        <TabsContent value="verified" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((certificate) => (
              <Card key={certificate.id} className="hover:shadow-lg transition-shadow border-green-200">
                <CardHeader className="bg-green-50 border-b border-green-100">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-green-800">{certificate.title}</CardTitle>
                    <Badge variant="outline" className="border-green-500 text-green-700">
                      {certificate.status}
                    </Badge>
                  </div>
                  <CardDescription>Issued on {certificate.issueDate}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-green-600" />
                        <span>Issued by: {certificate.issuedBy}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-green-600" />
                        <span>Impact: {certificate.carbonEquivalent}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span>{certificate.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-purple-600" />
                        <span>+{certificate.pointsEarned} points</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{certificate.description}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => viewCertificate(certificate)}>
                        View Certificate
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle className="text-center text-2xl text-green-800">
                          {selectedCertificate?.title}
                        </DialogTitle>
                        <DialogDescription className="text-center">
                          Official Climate Action Certificate
                        </DialogDescription>
                      </DialogHeader>
                      <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50 space-y-6">
                        <div className="text-center space-y-2">
                          <div className="mx-auto bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center border-2 border-green-300">
                            <Award className="h-8 w-8 text-green-600" />
                          </div>
                          <h3 className="font-bold text-xl text-green-800">{selectedCertificate?.title}</h3>
                          <p className="text-sm text-green-700">
                            This certificate is awarded to <span className="font-semibold">Your Name</span>
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="space-y-1">
                              <p className="text-muted-foreground">Certificate ID</p>
                              <p className="font-medium">CL-{selectedCertificate?.id.toString().padStart(6, "0")}</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-muted-foreground">Issue Date</p>
                              <p className="font-medium">{selectedCertificate?.issueDate}</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-muted-foreground">Carbon Equivalent</p>
                              <p className="font-medium">{selectedCertificate?.carbonEquivalent}</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-muted-foreground">Location</p>
                              <p className="font-medium">{selectedCertificate?.location}</p>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <p className="text-muted-foreground">Activities</p>
                            <div className="flex flex-wrap gap-2">
                              {selectedCertificate?.activities.map((activity, index) => (
                                <Badge key={index} variant="secondary">
                                  {activity}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-1">
                            <p className="text-muted-foreground">Description</p>
                            <p className="text-sm">{selectedCertificate?.description}</p>
                          </div>

                          <div className="space-y-1">
                            <p className="text-muted-foreground">Verified By</p>
                            <p className="font-medium">{selectedCertificate?.verifier}</p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-green-200">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span className="text-sm font-medium text-green-700">Verified on Blockchain</span>
                          </div>
                          <Button size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {pendingCertificates.map((certificate) => (
              <Card key={certificate.id} className="hover:shadow-lg transition-shadow border-orange-200">
                <CardHeader className="bg-orange-50 border-b border-orange-100">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-orange-800">{certificate.title}</CardTitle>
                    <Badge variant="outline" className="border-orange-500 text-orange-700">
                      {certificate.status}
                    </Badge>
                  </div>
                  <CardDescription>Submitted on {certificate.submissionDate}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-orange-600" />
                        <span>Awaiting verification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span>{certificate.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-purple-600" />
                        <span>Est. +{certificate.estimatedPoints} points</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{certificate.description}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full bg-orange-50 rounded-md p-3 text-sm text-orange-700">
                    <p>
                      Your certificate is currently being reviewed by community verifiers. This process typically takes
                      3-5 days.
                    </p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

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
                environmental activities and issues Local Climate Action Certificates. These certificates are recognized
                by NEMA and Carbon Link, and can be shared with schools, employers, and on social media.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
