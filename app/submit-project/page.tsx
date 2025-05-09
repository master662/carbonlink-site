"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format, isBefore, isWeekend, startOfToday } from "date-fns"
import { CalendarIcon, Check, Clock, Loader2 } from "lucide-react"

export default function SubmitProjectPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    projectName: "",
    projectType: "",
    location: "",
    description: "",
    estimatedCredits: "",
    startDate: "",
    duration: "",
    standards: [],
    documents: [],
    requestSupport: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showMeetingDialog, setShowMeetingDialog] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [meetingConfirmed, setMeetingConfirmed] = useState(false)

  const today = startOfToday()

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"]

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: [...prev[name], ...files],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }))
    }

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const handleStandardsChange = (standard) => {
    setFormData((prev) => {
      const currentStandards = [...prev.standards]

      if (currentStandards.includes(standard)) {
        return {
          ...prev,
          standards: currentStandards.filter((s) => s !== standard),
        }
      } else {
        return {
          ...prev,
          standards: [...currentStandards, standard],
        }
      }
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.projectName.trim()) newErrors.projectName = "Project name is required"
    if (!formData.projectType) newErrors.projectType = "Project type is required"
    if (!formData.location.trim()) newErrors.location = "Location is required"
    if (!formData.description.trim()) newErrors.description = "Description is required"
    if (!formData.estimatedCredits.trim()) newErrors.estimatedCredits = "Estimated credits is required"
    if (!formData.startDate.trim()) newErrors.startDate = "Start date is required"
    if (!formData.duration.trim()) newErrors.duration = "Duration is required"
    if (formData.standards.length === 0) newErrors.standards = "At least one standard must be selected"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)

        if (formData.requestSupport) {
          setShowMeetingDialog(true)
        } else {
          // Redirect after a delay
          setTimeout(() => {
            router.push("/dashboard")
          }, 2000)
        }
      }, 1500)
    }
  }

  const handleScheduleMeeting = () => {
    if (selectedDate && selectedTime) {
      setMeetingConfirmed(true)
    }
  }

  const isDateDisabled = (date) => {
    return isWeekend(date) || isBefore(date, today)
  }

  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        {isSubmitted && !showMeetingDialog ? (
          <Card>
            <CardContent className="pt-6 pb-6 text-center">
              <div className="flex flex-col items-center justify-center py-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-medium">Project Submitted Successfully!</h3>
                <p className="text-muted-foreground mt-2 mb-6 max-w-md">
                  Your project has been submitted for review. Our team will contact you soon with next steps.
                </p>
                <Button onClick={() => router.push("/dashboard")} className="bg-green-600 hover:bg-green-700">
                  Go to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6">Submit a New Carbon Project</h1>
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>
                  Provide information about your carbon offset project to get started with verification and listing.
                </CardDescription>
              </CardHeader>

              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectName">Project Name</Label>
                    <Input
                      id="projectName"
                      name="projectName"
                      placeholder="Enter project name"
                      value={formData.projectName}
                      onChange={handleChange}
                      className={errors.projectName ? "border-red-500" : ""}
                    />
                    {errors.projectName && <p className="text-red-500 text-xs mt-1">{errors.projectName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => handleSelectChange("projectType", value)}
                    >
                      <SelectTrigger id="projectType" className={errors.projectType ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="forestry">Forestry & Conservation</SelectItem>
                        <SelectItem value="renewable">Renewable Energy</SelectItem>
                        <SelectItem value="methane">Methane Capture</SelectItem>
                        <SelectItem value="efficiency">Energy Efficiency</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Project Location</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="City, Country"
                      value={formData.location}
                      onChange={handleChange}
                      className={errors.location ? "border-red-500" : ""}
                    />
                    {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Describe your project in detail"
                      value={formData.description}
                      onChange={handleChange}
                      className={`min-h-[120px] ${errors.description ? "border-red-500" : ""}`}
                    />
                    {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="estimatedCredits">Estimated Credits (tCO2e)</Label>
                      <Input
                        id="estimatedCredits"
                        name="estimatedCredits"
                        placeholder="e.g. 10000"
                        value={formData.estimatedCredits}
                        onChange={handleChange}
                        className={errors.estimatedCredits ? "border-red-500" : ""}
                      />
                      {errors.estimatedCredits && (
                        <p className="text-red-500 text-xs mt-1">{errors.estimatedCredits}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input
                        id="startDate"
                        name="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={handleChange}
                        className={errors.startDate ? "border-red-500" : ""}
                      />
                      {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Project Duration (years)</Label>
                      <Input
                        id="duration"
                        name="duration"
                        placeholder="e.g. 10"
                        value={formData.duration}
                        onChange={handleChange}
                        className={errors.duration ? "border-red-500" : ""}
                      />
                      {errors.duration && <p className="text-red-500 text-xs mt-1">{errors.duration}</p>}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Verification Standards</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="verra"
                          checked={formData.standards.includes("verra")}
                          onCheckedChange={() => handleStandardsChange("verra")}
                        />
                        <Label htmlFor="verra" className="font-normal">
                          Verra (VCS)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="goldStandard"
                          checked={formData.standards.includes("goldStandard")}
                          onCheckedChange={() => handleStandardsChange("goldStandard")}
                        />
                        <Label htmlFor="goldStandard" className="font-normal">
                          Gold Standard
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="acr"
                          checked={formData.standards.includes("acr")}
                          onCheckedChange={() => handleStandardsChange("acr")}
                        />
                        <Label htmlFor="acr" className="font-normal">
                          American Carbon Registry
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="car"
                          checked={formData.standards.includes("car")}
                          onCheckedChange={() => handleStandardsChange("car")}
                        />
                        <Label htmlFor="car" className="font-normal">
                          Climate Action Reserve
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="planVivo"
                          checked={formData.standards.includes("planVivo")}
                          onCheckedChange={() => handleStandardsChange("planVivo")}
                        />
                        <Label htmlFor="planVivo" className="font-normal">
                          Plan Vivo
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="other"
                          checked={formData.standards.includes("other")}
                          onCheckedChange={() => handleStandardsChange("other")}
                        />
                        <Label htmlFor="other" className="font-normal">
                          Other
                        </Label>
                      </div>
                    </div>
                    {errors.standards && <p className="text-red-500 text-xs">{errors.standards}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="documents">Upload Project Documents (optional)</Label>
                    <Input id="documents" name="documents" type="file" multiple onChange={handleChange} />
                    <p className="text-xs text-muted-foreground mt-1">
                      Upload project design documents, feasibility studies, or other relevant files.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox
                      id="requestSupport"
                      name="requestSupport"
                      checked={formData.requestSupport}
                      onCheckedChange={(checked) => {
                        setFormData((prev) => ({
                          ...prev,
                          requestSupport: checked,
                        }))
                      }}
                    />
                    <Label htmlFor="requestSupport" className="font-medium">
                      I would like to request support from a Carbon Link consultant
                    </Label>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => router.push("/dashboard")}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Project"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </>
        )}

        {/* Meeting Scheduling Dialog */}
        <Dialog open={showMeetingDialog} onOpenChange={setShowMeetingDialog}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Schedule a Consultation</DialogTitle>
              <DialogDescription>
                Select a date and time to meet with one of our carbon project consultants.
              </DialogDescription>
            </DialogHeader>

            {meetingConfirmed ? (
              <div className="py-6 text-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium">Meeting Scheduled!</h3>
                  <div className="mt-4 mb-2 text-left bg-gray-50 p-4 rounded-md w-full">
                    <div className="flex items-center mb-2">
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{selectedDate ? format(selectedDate, "EEEE, MMMM d, yyyy") : ""}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{selectedTime}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    You'll receive a calendar invitation and meeting link via email shortly.
                  </p>
                </div>
                <Button
                  className="mt-6 bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    setShowMeetingDialog(false)
                    router.push("/dashboard")
                  }}
                >
                  Go to Dashboard
                </Button>
              </div>
            ) : (
              <>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label>Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-left font-normal ${!selectedDate ? "text-muted-foreground" : ""}`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Select a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={isDateDisabled}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Select Time</Label>
                    <RadioGroup value={selectedTime} onValueChange={setSelectedTime} className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <div key={time}>
                          <RadioGroupItem
                            value={time}
                            id={`time-${time}`}
                            className="peer sr-only"
                            disabled={!selectedDate}
                          />
                          <Label
                            htmlFor={`time-${time}`}
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-600 [&:has([data-state=checked])]:border-green-600 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                          >
                            <span>{time}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>

                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowMeetingDialog(false)
                      router.push("/dashboard")
                    }}
                  >
                    Skip
                  </Button>
                  <Button
                    onClick={handleScheduleMeeting}
                    disabled={!selectedDate || !selectedTime}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Schedule Meeting
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
