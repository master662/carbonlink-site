"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileUp, Clock, CheckCircle, XCircle, AlertCircle, ArrowRight, Eye, Upload, RefreshCw } from "lucide-react"

export default function VerificationPage() {
  const [activeTab, setActiveTab] = useState("pending")
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [activeView, setActiveView] = useState<"list" | "details" | "add" | "resubmit">("list")

  const projects = {
    pending: [
      {
        id: "p1",
        name: "Kenyan Reforestation Initiative",
        type: "Forestry & Conservation",
        submissionDate: "2023-04-15",
        status: "pending",
        statusText: "Under Review",
        description: "Restoration of degraded forest lands in the highlands of Kenya.",
      },
      {
        id: "p2",
        name: "Lake Victoria Fisheries Project",
        type: "Sustainable Fisheries",
        submissionDate: "2023-04-10",
        status: "pending",
        statusText: "Documentation Check",
        description: "Implementing sustainable fishing practices in Lake Victoria to protect fish stocks.",
      },
    ],
    approved: [
      {
        id: "a1",
        name: "Maasai Mara Conservation",
        type: "Wildlife Conservation",
        submissionDate: "2023-03-05",
        approvalDate: "2023-03-28",
        status: "approved",
        statusText: "Verified",
        description: "Community-led conservation efforts in the Maasai Mara ecosystem.",
      },
      {
        id: "a2",
        name: "Nairobi Solar Initiative",
        type: "Renewable Energy",
        submissionDate: "2023-02-20",
        approvalDate: "2023-03-15",
        status: "approved",
        statusText: "Verified",
        description: "Installation of solar panels in urban Nairobi to reduce reliance on fossil fuels.",
      },
    ],
    rejected: [
      {
        id: "r1",
        name: "Urban Waste Management",
        type: "Waste Reduction",
        submissionDate: "2023-03-10",
        rejectionDate: "2023-03-25",
        status: "rejected",
        statusText: "Insufficient Documentation",
        description: "Improving waste collection and recycling in urban centers.",
      },
    ],
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            <Clock className="mr-1 h-3 w-3" />
            Pending
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="mr-1 h-3 w-3" />
            Approved
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            <XCircle className="mr-1 h-3 w-3" />
            Rejected
          </Badge>
        )
      default:
        return (
          <Badge variant="outline">
            <AlertCircle className="mr-1 h-3 w-3" />
            Unknown
          </Badge>
        )
    }
  }

  const getSelectedProject = () => {
    if (!selectedProject) return null

    const allProjects = [...projects.pending, ...projects.approved, ...projects.rejected]
    return allProjects.find((p) => p.id === selectedProject)
  }

  const handleViewDetails = (projectId: string) => {
    setSelectedProject(projectId)
    setActiveView("details")
  }

  const handleAddInformation = () => {
    setActiveView("add")
  }

  const handleResubmit = () => {
    setActiveView("resubmit")
  }

  const handleBackToList = () => {
    setActiveView("list")
    setSelectedProject(null)
  }

  const renderProjectList = (projectList: any[]) => {
    return (
      <div className="space-y-4">
        {projectList.map((project) => (
          <Card key={project.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <CardTitle className="text-lg">{project.name}</CardTitle>
                {getStatusBadge(project.status)}
              </div>
              <CardDescription>{project.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="font-medium">Submission Date</p>
                  <p className="text-muted-foreground">{project.submissionDate}</p>
                </div>
                {project.approvalDate && (
                  <div>
                    <p className="font-medium">Approval Date</p>
                    <p className="text-muted-foreground">{project.approvalDate}</p>
                  </div>
                )}
                {project.rejectionDate && (
                  <div>
                    <p className="font-medium">Rejection Date</p>
                    <p className="text-muted-foreground">{project.rejectionDate}</p>
                  </div>
                )}
                <div>
                  <p className="font-medium">Status</p>
                  <p className="text-muted-foreground">{project.statusText}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => handleViewDetails(project.id)}>
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  const renderProjectDetails = () => {
    const project = getSelectedProject()
    if (!project) return null

    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" onClick={handleBackToList}>
              Back to List
            </Button>
            {getStatusBadge(project.status)}
          </div>
          <CardTitle className="mt-4">{project.name}</CardTitle>
          <CardDescription>{project.type}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Project Details</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-1">Location</h4>
              <p className="text-muted-foreground">Kenya, East Africa</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Project Size</h4>
              <p className="text-muted-foreground">5,000 hectares</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Estimated Carbon Impact</h4>
              <p className="text-muted-foreground">25,000 tCO₂e per year</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Project Duration</h4>
              <p className="text-muted-foreground">30 years (2023-2053)</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Verification Timeline</h3>
            <div className="relative border-l border-muted pl-6 pb-2 space-y-6">
              <div className="relative">
                <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-green-600"></div>
                <div>
                  <h4 className="font-medium">Project Submitted</h4>
                  <p className="text-sm text-muted-foreground">{project.submissionDate}</p>
                  <p className="text-sm mt-1">Initial project documentation submitted for review.</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-green-600"></div>
                <div>
                  <h4 className="font-medium">Documentation Review</h4>
                  <p className="text-sm text-muted-foreground">2023-04-20</p>
                  <p className="text-sm mt-1">Project documentation under review by verification team.</p>
                </div>
              </div>

              {project.status === "pending" && (
                <div className="relative">
                  <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-yellow-500"></div>
                  <div>
                    <h4 className="font-medium">Field Verification</h4>
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-sm mt-1">On-site verification visit to be scheduled.</p>
                  </div>
                </div>
              )}

              {project.status === "approved" && (
                <>
                  <div className="relative">
                    <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-green-600"></div>
                    <div>
                      <h4 className="font-medium">Field Verification</h4>
                      <p className="text-sm text-muted-foreground">2023-03-15</p>
                      <p className="text-sm mt-1">On-site verification completed successfully.</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-green-600"></div>
                    <div>
                      <h4 className="font-medium">Project Approved</h4>
                      <p className="text-sm text-muted-foreground">{project.approvalDate}</p>
                      <p className="text-sm mt-1">Project meets all verification criteria and is approved.</p>
                    </div>
                  </div>
                </>
              )}

              {project.status === "rejected" && (
                <div className="relative">
                  <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-red-600"></div>
                  <div>
                    <h4 className="font-medium">Project Rejected</h4>
                    <p className="text-sm text-muted-foreground">{project.rejectionDate}</p>
                    <p className="text-sm mt-1">
                      Project does not meet verification criteria. See feedback for details.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {project.status === "rejected" && (
            <div>
              <h3 className="text-lg font-medium mb-2">Rejection Feedback</h3>
              <Card className="bg-red-50 dark:bg-red-900/20 border-red-200">
                <CardContent className="p-4">
                  <p className="text-sm">
                    The project documentation lacks sufficient detail on baseline carbon measurements and monitoring
                    methodology. Additionally, the community engagement plan needs further development to ensure
                    long-term sustainability.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          <div>
            <h3 className="text-lg font-medium mb-2">Documentation</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 border rounded-md">
                <div className="flex items-center">
                  <FileUp className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Project_Description_Document.pdf</span>
                </div>
                <Button variant="ghost" size="sm">
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 border rounded-md">
                <div className="flex items-center">
                  <FileUp className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Carbon_Calculation_Methodology.xlsx</span>
                </div>
                <Button variant="ghost" size="sm">
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 border rounded-md">
                <div className="flex items-center">
                  <FileUp className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Community_Engagement_Plan.pdf</span>
                </div>
                <Button variant="ghost" size="sm">
                  Download
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          {project.status === "pending" && (
            <Button className="flex-1" onClick={handleAddInformation}>
              <Upload className="mr-2 h-4 w-4" />
              Add Information
            </Button>
          )}
          {project.status === "rejected" && (
            <Button className="flex-1" onClick={handleResubmit}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Resubmit
            </Button>
          )}
          <Button variant="outline" className="flex-1">
            Contact Verifier
          </Button>
        </CardFooter>
      </Card>
    )
  }

  const renderAddInformation = () => {
    const project = getSelectedProject()
    if (!project) return null

    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" onClick={() => setActiveView("details")}>
              Back to Details
            </Button>
            {getStatusBadge(project.status)}
          </div>
          <CardTitle className="mt-4">Add Additional Information</CardTitle>
          <CardDescription>Provide additional information for {project.name}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="information-type">Information Type</Label>
            <Select defaultValue="clarification">
              <SelectTrigger id="information-type">
                <SelectValue placeholder="Select information type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clarification">Clarification</SelectItem>
                <SelectItem value="additional-data">Additional Data</SelectItem>
                <SelectItem value="methodology">Methodology Update</SelectItem>
                <SelectItem value="response">Response to Query</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Provide a detailed description of the additional information..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label>Upload Documents</Label>
            <div className="border-2 border-dashed rounded-md p-6 text-center">
              <FileUp className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">Drag and drop files here, or click to browse</p>
              <Input type="file" className="hidden" id="file-upload" />
              <Label htmlFor="file-upload" className="cursor-pointer">
                <Button type="button" variant="outline">
                  Browse Files
                </Button>
              </Label>
              <p className="text-xs text-muted-foreground mt-2">
                Supported formats: PDF, DOCX, XLSX, JPG, PNG (max 10MB)
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => setActiveView("details")}>
            Cancel
          </Button>
          <Button>Submit Information</Button>
        </CardFooter>
      </Card>
    )
  }

  const renderResubmit = () => {
    const project = getSelectedProject()
    if (!project) return null

    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" onClick={() => setActiveView("details")}>
              Back to Details
            </Button>
            {getStatusBadge(project.status)}
          </div>
          <CardTitle className="mt-4">Resubmit Project</CardTitle>
          <CardDescription>Address feedback and resubmit {project.name}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Rejection Feedback</h3>
            <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 mb-4">
              <CardContent className="p-4">
                <p className="text-sm">
                  The project documentation lacks sufficient detail on baseline carbon measurements and monitoring
                  methodology. Additionally, the community engagement plan needs further development to ensure long-term
                  sustainability.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-2">
            <Label htmlFor="response">Response to Feedback</Label>
            <Textarea id="response" placeholder="Explain how you've addressed the feedback..." rows={4} />
          </div>

          <div className="space-y-2">
            <Label>Changes Made</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="baseline" className="rounded" />
                <Label htmlFor="baseline" className="text-sm font-normal">
                  Updated baseline carbon measurements
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="monitoring" className="rounded" />
                <Label htmlFor="monitoring" className="text-sm font-normal">
                  Improved monitoring methodology
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="community" className="rounded" />
                <Label htmlFor="community" className="text-sm font-normal">
                  Enhanced community engagement plan
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="other" className="rounded" />
                <Label htmlFor="other" className="text-sm font-normal">
                  Other changes (specify in response)
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Upload Revised Documents</Label>
            <div className="border-2 border-dashed rounded-md p-6 text-center">
              <FileUp className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">Drag and drop files here, or click to browse</p>
              <Input type="file" className="hidden" id="file-reupload" />
              <Label htmlFor="file-reupload" className="cursor-pointer">
                <Button type="button" variant="outline">
                  Browse Files
                </Button>
              </Label>
              <p className="text-xs text-muted-foreground mt-2">
                Supported formats: PDF, DOCX, XLSX, JPG, PNG (max 10MB)
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => setActiveView("details")}>
            Cancel
          </Button>
          <Button>Resubmit Project</Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Project Verification</h2>
        <Link href="/submit-project">
          <Button>
            Submit New Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      {activeView === "list" && (
        <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>
          <TabsContent value="pending" className="mt-6">
            {renderProjectList(projects.pending)}
          </TabsContent>
          <TabsContent value="approved" className="mt-6">
            {renderProjectList(projects.approved)}
          </TabsContent>
          <TabsContent value="rejected" className="mt-6">
            {renderProjectList(projects.rejected)}
          </TabsContent>
        </Tabs>
      )}

      {activeView === "details" && renderProjectDetails()}
      {activeView === "add" && renderAddInformation()}
      {activeView === "resubmit" && renderResubmit()}
    </div>
  )
}
