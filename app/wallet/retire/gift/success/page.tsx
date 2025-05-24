"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CheckCircle, Download, Share2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function GiftSuccessPage() {
  const router = useRouter()
  const [showCertificate, setShowCertificate] = useState(false)

  // In a real app, this would come from the transaction data
  const giftData = {
    recipient: {
      name: "Dr. Amina Kimani",
      role: "Environmental Scientist",
    },
    amount: 10,
    total: 190.0,
    transactionId: `TRX-${Math.floor(Math.random() * 1000000)}`,
    date: new Date().toLocaleDateString(),
  }

  return (
    <div className="container max-w-3xl py-8">
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto rounded-full bg-green-100 p-3 text-green-600 mb-4">
            <CheckCircle className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl">Gift Completed!</CardTitle>
          <CardDescription>
            Your carbon credit gift has been successfully processed and the recipient has been notified.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Gift Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Recipient:</span>
                <span>{giftData.recipient.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Recipient Role:</span>
                <span>{giftData.recipient.role}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Carbon Credits:</span>
                <span>{giftData.amount} tCO₂e</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total Amount:</span>
                <span>${giftData.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Transaction ID:</span>
                <span>{giftData.transactionId}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Date:</span>
                <span>{giftData.date}</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
            <p>
              A confirmation email has been sent to your registered email address with all the details of your gift. The
              recipient has also been notified of your generous contribution.
            </p>
          </div>

          {showCertificate && (
            <div className="rounded-lg border p-6 text-center">
              <h2 className="text-xl font-bold mb-4">Carbon Offset Certificate</h2>
              <p className="mb-2">This certifies that</p>
              <p className="text-lg font-medium mb-2">You</p>
              <p className="mb-2">have gifted</p>
              <p className="text-3xl font-bold mb-2">{giftData.amount} tCO₂e</p>
              <p className="mb-2">of verified carbon credits to</p>
              <p className="text-lg font-medium mb-2">{giftData.recipient.name}</p>
              <p className="mb-4">in support of environmental conservation efforts</p>
              <p className="text-sm text-muted-foreground">
                Certificate ID: CERT-{Math.floor(Math.random() * 1000000)}
              </p>
              <p className="text-sm text-muted-foreground">Date: {giftData.date}</p>
              <div className="mt-4">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Certificate
                </Button>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="flex justify-center gap-4 w-full">
            <Button variant="outline" onClick={() => setShowCertificate(!showCertificate)}>
              {showCertificate ? "Hide Certificate" : "View Certificate"}
            </Button>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share Gift
            </Button>
          </div>
          <Separator />
          <div className="flex justify-between w-full">
            <Link href="/wallet">
              <Button variant="outline">Return to Wallet</Button>
            </Link>
            <Link href="/marketplace">
              <Button>
                Explore More Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
