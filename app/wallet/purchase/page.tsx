"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, CreditCard, Smartphone, Wallet, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function PurchasePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)

  const cartItems = [
    {
      id: 1,
      project: "Kenyan Reforestation Initiative",
      credits: 10,
      price: 18.5,
      image: "/images/forestry-project.png",
    },
  ]

  const subtotal = cartItems.reduce((acc, item) => acc + item.credits * item.price, 0)
  const fee = subtotal * 0.03
  const total = subtotal + fee

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

  const handleContinue = () => {
    if (step === 1) {
      setStep(2)
    } else if (step === 2) {
      setIsProcessing(true)
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false)
        setStep(3)
      }, 2000)
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h2 className="text-2xl font-bold tracking-tight">Complete Your Purchase</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Review Your Order</CardTitle>
                <CardDescription>Verify your carbon credit purchase details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.project} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-medium">{item.project}</h3>
                        <p className="text-sm text-muted-foreground">{item.credits} tCO₂e carbon credits</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Label htmlFor="quantity" className="mr-2 text-sm">
                            Quantity:
                          </Label>
                          <Input id="quantity" type="number" defaultValue={item.credits} className="h-8 w-20" min="1" />
                        </div>
                        <Button variant="outline" size="sm" className="h-8">
                          Update
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <p className="font-medium">${(item.credits * item.price).toFixed(2)}</p>
                      <Button variant="ghost" size="sm" className="h-8 text-red-500 hover:text-red-600">
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/marketplace">
                  <Button variant="outline">Continue Shopping</Button>
                </Link>
                <Button onClick={handleContinue}>Continue to Payment</Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Choose how you want to pay for your carbon credits</CardDescription>
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
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button onClick={handleContinue} disabled={isProcessing}>
                  {isProcessing ? "Processing..." : "Complete Purchase"}
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto rounded-full bg-green-100 p-3 text-green-600 mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Purchase Complete!</CardTitle>
                <CardDescription>
                  Thank you for your purchase. Your carbon credits have been added to your portfolio.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium mb-2">Purchase Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Project:</span>
                      <span>Kenyan Reforestation Initiative</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Carbon Credits:</span>
                      <span>10 tCO₂e</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Total Amount:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Payment Method:</span>
                      <span>
                        {paymentMethod === "card"
                          ? "Credit/Debit Card"
                          : paymentMethod === "mpesa"
                            ? "M-Pesa"
                            : "Carbon Link Wallet"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Transaction ID:</span>
                      <span>TRX-{Math.floor(Math.random() * 1000000)}</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
                  <p>
                    A confirmation email has been sent to your registered email address with all the details of your
                    purchase.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Button variant="outline" onClick={() => router.push("/wallet")}>
                  View Wallet
                </Button>
                <Button onClick={() => router.push("/dashboard")}>Go to Dashboard</Button>
              </CardFooter>
            </Card>
          )}
        </div>

        <div>
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.project} ({item.credits} tCO₂e)
                    </span>
                    <span>${(item.credits * item.price).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Transaction Fee (3%)</span>
                  <span>${fee.toFixed(2)}</span>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full space-y-2">
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
                  <span>Instant Credit Allocation</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
