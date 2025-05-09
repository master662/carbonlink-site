"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { ArrowLeft, CreditCard, Smartphone, Wallet, CheckCircle, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function GiftOffsetPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const recipientId = searchParams.get("recipient")
  const recipientType = searchParams.get("type")
  const initialAmount = searchParams.get("amount") || "10"

  const [selectedTab, setSelectedTab] = useState(recipientType || "individual")
  const [amount, setAmount] = useState(initialAmount)
  const [message, setMessage] = useState("")
  const [selectedRecipient, setSelectedRecipient] = useState(recipientId || "")
  const [step, setStep] = useState(recipientId ? 2 : 1)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)

  // This would come from an API in a real application
  const individuals = [
    {
      id: "1",
      name: "Dr. Amina Kimani",
      role: "Environmental Scientist",
      location: "Nairobi, Kenya",
      description:
        "Leading research on sustainable forestry practices and community-based conservation in East Africa.",
      impact: "Has facilitated the planting of over 50,000 trees and established 3 community conservation areas.",
      image: "/images/profile-amina.png",
    },
    {
      id: "2",
      name: "Samuel Osei",
      role: "Renewable Energy Entrepreneur",
      location: "Accra, Ghana",
      description: "Pioneering affordable solar solutions for rural communities without access to the electrical grid.",
      impact:
        "Has provided clean energy to 12 villages, impacting over 5,000 people and reducing kerosene usage by 75%.",
      image: "/images/profile-samuel.png",
    },
    {
      id: "3",
      name: "Fatima Nkosi",
      role: "Conservation Advocate",
      location: "Cape Town, South Africa",
      description:
        "Working with coastal communities to protect marine ecosystems and establish sustainable fishing practices.",
      impact: "Has helped establish 2 marine protected areas and trained 200+ fishers in sustainable practices.",
      image: "/images/profile-fatima.png",
    },
    {
      id: "4",
      name: "Ibrahim Diallo",
      role: "Agroforestry Specialist",
      location: "Dakar, Senegal",
      description:
        "Implementing innovative agroforestry techniques that combine food production with carbon sequestration.",
      impact: "Has trained 300+ farmers, increasing crop yields by 40% while enhancing soil carbon storage.",
      image: "/images/profile-ibrahim.png",
    },
  ]

  const organizations = [
    {
      id: "1",
      name: "Arabuko Initiative",
      type: "NGO",
      location: "Kilifi, Kenya",
      description:
        "Promoting smart agriculture practices that enhance food security while sequestering carbon in soil.",
      impact:
        "Working with 1,500 smallholder farmers across 12 communities, increasing yields by 35% while reducing emissions.",
      image: "/images/org-arabuko.png",
    },
    {
      id: "2",
      name: "Green Energy Tanzania",
      type: "Social Enterprise",
      location: "Dar es Salaam, Tanzania",
      description:
        "Developing and distributing affordable renewable energy solutions tailored for East African communities.",
      impact: "Installed 75 micro-grids serving 25,000 people and reducing carbon emissions by 12,000 tons annually.",
      image: "/images/org-green-energy.png",
    },
    {
      id: "3",
      name: "Blue Carbon Alliance",
      type: "Conservation Consortium",
      location: "Mombasa, Kenya",
      description:
        "Protecting and restoring coastal blue carbon ecosystems including mangroves, seagrasses, and salt marshes.",
      impact: "Restored 1,200 hectares of mangrove forests, sequestering an estimated 45,000 tons of CO₂ annually.",
      image: "/images/org-blue-carbon.png",
    },
    {
      id: "4",
      name: "EcoSchools Africa",
      type: "Educational Foundation",
      location: "Kampala, Uganda",
      description:
        "Integrating environmental education and practical sustainability projects in schools across East Africa.",
      impact: "Engaged 250 schools reaching 125,000 students, implementing 500+ student-led environmental projects.",
      image: "/images/org-ecoschools.png",
    },
  ]

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: <CreditCard className="h-5 w-5" />,
      description: "Pay with Visa, Mastercard, or American Express",
    },
    {
      id: "mpesa",
      name: "M-Pesa",
      icon: <Smartphone className="h-5 w-5" />,
      description: "Pay with M-Pesa mobile money",
    },
    {
      id: "wallet",
      name: "Carbon Link Wallet",
      icon: <Wallet className="h-5 w-5" />,
      description: "Pay using your wallet balance: $250.00",
    },
  ]

  const getSelectedRecipientData = () => {
    if (selectedTab === "individual") {
      return individuals.find((i) => i.id === selectedRecipient)
    } else {
      return organizations.find((o) => o.id === selectedRecipient)
    }
  }

  const recipientData = getSelectedRecipientData()
  const pricePerCredit = 18.5
  const platformFee = 5.0
  const subtotal = Number(amount) * pricePerCredit
  const total = subtotal + platformFee

  const handleContinue = () => {
    if (step === 1 && selectedRecipient) {
      setStep(2)
    } else if (step === 2 && amount) {
      setStep(3)
    } else if (step === 3) {
      setIsProcessing(true)
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false)
        router.push("/wallet/retire/gift/success")
      }, 2000)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h2 className="text-2xl font-bold tracking-tight">Gift Carbon Offset</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Select Recipient</CardTitle>
                <CardDescription>Choose an individual or organization to gift carbon credits to</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue={selectedTab} value={selectedTab} onValueChange={setSelectedTab}>
                  <TabsList className="mb-4">
                    <TabsTrigger value="individual">Individuals</TabsTrigger>
                    <TabsTrigger value="organization">Organizations</TabsTrigger>
                  </TabsList>

                  <TabsContent value="individual" className="m-0 space-y-4">
                    {individuals.map((individual) => (
                      <Card
                        key={individual.id}
                        className={`cursor-pointer transition-colors hover:bg-muted/50 ${selectedRecipient === individual.id ? "border-primary bg-primary/5" : ""}`}
                        onClick={() => setSelectedRecipient(individual.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-12 w-12 border-2 border-primary/10">
                              <AvatarImage src={individual.image || "/placeholder.svg"} alt={individual.name} />
                              <AvatarFallback>{individual.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h3 className="font-medium">{individual.name}</h3>
                              <p className="text-sm text-muted-foreground">{individual.role}</p>
                              <p className="text-xs text-muted-foreground">{individual.location}</p>
                              <p className="text-sm mt-2">{individual.description}</p>
                            </div>
                            {selectedRecipient === individual.id && <CheckCircle className="h-5 w-5 text-primary" />}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="organization" className="m-0 space-y-4">
                    {organizations.map((org) => (
                      <Card
                        key={org.id}
                        className={`cursor-pointer transition-colors hover:bg-muted/50 ${selectedRecipient === org.id ? "border-primary bg-primary/5" : ""}`}
                        onClick={() => setSelectedRecipient(org.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-12 w-12 border-2 border-primary/10">
                              <AvatarImage src={org.image || "/placeholder.svg"} alt={org.name} />
                              <AvatarFallback>{org.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h3 className="font-medium">{org.name}</h3>
                              <p className="text-sm text-muted-foreground">{org.type}</p>
                              <p className="text-xs text-muted-foreground">{org.location}</p>
                              <p className="text-sm mt-2">{org.description}</p>
                            </div>
                            {selectedRecipient === org.id && <CheckCircle className="h-5 w-5 text-primary" />}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleBack} disabled={step === 1}>
                  Back
                </Button>
                <Button onClick={handleContinue} disabled={!selectedRecipient}>
                  Continue
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && recipientData && (
            <Card>
              <CardHeader>
                <CardTitle>Gift Details</CardTitle>
                <CardDescription>Specify the amount of carbon credits to gift</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center">
                          <Avatar className="h-20 w-20 border-2 border-primary/10 mb-4">
                            <AvatarImage src={recipientData.image || "/placeholder.svg"} alt={recipientData.name} />
                            <AvatarFallback>{recipientData.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <h3 className="font-medium">{recipientData.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {selectedTab === "individual" ? recipientData.role : recipientData.type}
                          </p>
                          <p className="text-xs text-muted-foreground mb-2">{recipientData.location}</p>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Verified
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount (tCO₂e)</Label>
                      <div className="flex gap-2">
                        {["5", "10", "25", "50"].map((val) => (
                          <Button
                            key={val}
                            type="button"
                            variant={amount === val ? "default" : "outline"}
                            className="flex-1"
                            onClick={() => setAmount(val)}
                          >
                            {val}
                          </Button>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Input
                          id="amount"
                          type="number"
                          min="1"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="flex-1"
                        />
                        <Select defaultValue="vcs">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Credit Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="vcs">VCS Standard</SelectItem>
                            <SelectItem value="gold">Gold Standard</SelectItem>
                            <SelectItem value="cdm">CDM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Personal Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Add a personal message to accompany your gift..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                      />
                    </div>
                    <div className="rounded-lg bg-muted p-4">
                      <div className="flex justify-between mb-2">
                        <span>Price per tCO₂e:</span>
                        <span className="font-medium">${pricePerCredit.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Quantity:</span>
                        <span className="font-medium">{amount} tCO₂e</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Platform Fee:</span>
                        <span className="font-medium">${platformFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold pt-2 border-t">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleContinue}>Continue to Payment</Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && recipientData && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Choose how you want to pay for your carbon credit gift</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`flex items-center gap-4 rounded-lg border p-4 ${
                        paymentMethod === method.id ? "border-primary bg-primary/5" : ""
                      }`}
                    >
                      <RadioGroupItem value={method.id} id={method.id} />
                      <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-muted p-2">{method.icon}</div>
                          <div>
                            <p className="font-medium">{method.name}</p>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <Separator />

                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name on Card</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                  </div>
                )}

                {paymentMethod === "mpesa" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">M-Pesa Phone Number</Label>
                      <Input id="phone" placeholder="+254 7XX XXX XXX" />
                    </div>
                    <div className="rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800">
                      <p>
                        You will receive an M-Pesa prompt on your phone to complete the payment. Please ensure your
                        phone is on and has sufficient balance.
                      </p>
                    </div>
                  </div>
                )}

                {paymentMethod === "wallet" && (
                  <div className="space-y-4">
                    <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800">
                      <p>
                        Your wallet balance of $250.00 is sufficient for this purchase. The amount will be deducted from
                        your wallet immediately upon confirmation.
                      </p>
                    </div>
                  </div>
                )}

                <div className="rounded-lg bg-muted p-4">
                  <div className="flex justify-between mb-2">
                    <span>Gift Recipient:</span>
                    <span className="font-medium">{recipientData.name}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Carbon Credits:</span>
                    <span className="font-medium">{amount} tCO₂e</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Subtotal:</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Platform Fee:</span>
                    <span className="font-medium">${platformFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleContinue} disabled={isProcessing}>
                  {isProcessing ? "Processing..." : "Complete Gift"}
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>

        <div>
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Gift Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recipientData && (
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-10 w-10 border-2 border-primary/10">
                    <AvatarImage src={recipientData.image || "/placeholder.svg"} alt={recipientData.name} />
                    <AvatarFallback>{recipientData.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{recipientData.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {selectedTab === "individual" ? recipientData.role : recipientData.type}
                    </p>
                  </div>
                </div>
              )}

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Carbon Credits:</span>
                  <span>{amount} tCO₂e</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Price per Credit:</span>
                  <span>${pricePerCredit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Platform Fee:</span>
                  <span>${platformFee.toFixed(2)}</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between font-medium">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Gift className="h-4 w-4 text-green-600" />
                  <span>Meaningful Environmental Impact</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Verified Carbon Standard</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Digital Certificate Included</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
