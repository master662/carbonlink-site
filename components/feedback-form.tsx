"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, MessageSquare, ThumbsUp, ThumbsDown, Star, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function FeedbackForm() {
  const [feedbackType, setFeedbackType] = useState("general")
  const [satisfaction, setSatisfaction] = useState("")
  const [feedbackText, setFeedbackText] = useState("")
  const [email, setEmail] = useState("")
  const [category, setCategory] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("button")
  const { toast } = useToast()

  // Use refs instead of direct DOM manipulation
  const buttonTabRef = useRef(null)
  const formTabRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: "Feedback submitted",
        description: "Thank you for helping us improve Carbon Link!",
      })

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFeedbackText("")
        setEmail("")
        setSatisfaction("")
        setCategory("")
      }, 3000)
    }, 1500)
  }

  // Safe tab switching functions
  const openFeedbackForm = () => {
    setActiveTab("form")
  }

  const closeFeedbackForm = () => {
    setActiveTab("button")
  }

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="hidden">
          <TabsTrigger value="button" ref={buttonTabRef}>
            Button
          </TabsTrigger>
          <TabsTrigger value="form" ref={formTabRef}>
            Form
          </TabsTrigger>
        </TabsList>

        <TabsContent value="button" className="mt-0">
          <Button
            onClick={openFeedbackForm}
            className="rounded-full shadow-lg bg-amber-500 hover:bg-amber-600 text-white"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Give Feedback
          </Button>
        </TabsContent>

        <TabsContent value="form" className="mt-0">
          <Card className="w-[350px] md:w-[400px] shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Share Your Feedback</CardTitle>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full" onClick={closeFeedbackForm}>
                  &times;
                </Button>
              </div>
              <CardDescription>Help us improve Carbon Link</CardDescription>
            </CardHeader>

            {isSubmitted ? (
              <CardContent className="pb-6 pt-2 text-center">
                <div className="flex flex-col items-center justify-center py-6">
                  <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-lg font-medium">Thank You!</h3>
                  <p className="text-muted-foreground mt-1 mb-4 max-w-[250px]">
                    Your feedback has been submitted and will help us improve the platform.
                  </p>
                </div>
              </CardContent>
            ) : (
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4 pb-4 pt-2">
                  <div className="space-y-2">
                    <Label>What type of feedback do you have?</Label>
                    <Select value={feedbackType} onValueChange={setFeedbackType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select feedback type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Feedback</SelectItem>
                        <SelectItem value="bug">Report a Bug</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="usability">Usability Issue</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {feedbackType === "general" && (
                    <div className="space-y-2">
                      <Label>How satisfied are you with Carbon Link?</Label>
                      <RadioGroup value={satisfaction} onValueChange={setSatisfaction} className="flex justify-between">
                        <div className="flex flex-col items-center">
                          <RadioGroupItem value="very-dissatisfied" id="very-dissatisfied" className="sr-only" />
                          <Label
                            htmlFor="very-dissatisfied"
                            className={`cursor-pointer p-2 rounded-full ${satisfaction === "very-dissatisfied" ? "text-red-500" : "text-gray-400"}`}
                          >
                            <ThumbsDown className="h-6 w-6" />
                          </Label>
                          <span className="text-xs">Poor</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <RadioGroupItem value="dissatisfied" id="dissatisfied" className="sr-only" />
                          <Label
                            htmlFor="dissatisfied"
                            className={`cursor-pointer p-2 rounded-full ${satisfaction === "dissatisfied" ? "text-orange-500" : "text-gray-400"}`}
                          >
                            <ThumbsDown className="h-6 w-6" />
                          </Label>
                          <span className="text-xs">Fair</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <RadioGroupItem value="neutral" id="neutral" className="sr-only" />
                          <Label
                            htmlFor="neutral"
                            className={`cursor-pointer p-2 rounded-full ${satisfaction === "neutral" ? "text-yellow-500" : "text-gray-400"}`}
                          >
                            <Star className="h-6 w-6" />
                          </Label>
                          <span className="text-xs">Okay</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <RadioGroupItem value="satisfied" id="satisfied" className="sr-only" />
                          <Label
                            htmlFor="satisfied"
                            className={`cursor-pointer p-2 rounded-full ${satisfaction === "satisfied" ? "text-lime-500" : "text-gray-400"}`}
                          >
                            <ThumbsUp className="h-6 w-6" />
                          </Label>
                          <span className="text-xs">Good</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <RadioGroupItem value="very-satisfied" id="very-satisfied" className="sr-only" />
                          <Label
                            htmlFor="very-satisfied"
                            className={`cursor-pointer p-2 rounded-full ${satisfaction === "very-satisfied" ? "text-green-500" : "text-gray-400"}`}
                          >
                            <ThumbsUp className="h-6 w-6" />
                          </Label>
                          <span className="text-xs">Great</span>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  {feedbackType === "bug" && (
                    <div className="space-y-2">
                      <Label>Which area has the issue?</Label>
                      <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="marketplace">Marketplace</SelectItem>
                          <SelectItem value="wallet">Wallet</SelectItem>
                          <SelectItem value="verification">Verification</SelectItem>
                          <SelectItem value="resources">Resources</SelectItem>
                          <SelectItem value="chatbot">Chatbot</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label>Your feedback</Label>
                    <Textarea
                      placeholder={
                        feedbackType === "general"
                          ? "Tell us what you think about Carbon Link..."
                          : feedbackType === "bug"
                            ? "Please describe the issue in detail..."
                            : "Describe your feature request..."
                      }
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Email (optional)</Label>
                    <Input
                      type="email"
                      placeholder="Your email for follow-up"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isSubmitting || !feedbackText.trim()}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Feedback"
                    )}
                  </Button>
                </CardFooter>
              </form>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
