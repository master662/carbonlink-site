"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CreditCard, Gift, Leaf, RefreshCw, Download, BarChart2 } from "lucide-react"

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Carbon Wallet</h2>
        <Link href="/wallet/purchase">
          <Button>
            Buy Carbon Credits
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Credits</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">250 tCO₂e</div>
            <p className="text-xs text-muted-foreground">Last purchase: 50 tCO₂e on Apr 28</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Retired Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">750 tCO₂e</div>
            <p className="text-xs text-muted-foreground">Total lifetime retirement</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$18.75</div>
            <p className="text-xs text-muted-foreground">Per tCO₂e</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Investment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$18,750</div>
            <p className="text-xs text-muted-foreground">Across all purchases</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="purchase">Purchase</TabsTrigger>
          <TabsTrigger value="retire">Retire Credits</TabsTrigger>
          <TabsTrigger value="history">Transaction History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Summary</CardTitle>
              <CardDescription>Overview of your carbon credit portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Forestry & Conservation</span>
                    <span>65%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[65%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Renewable Energy</span>
                    <span>25%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[25%] rounded-full bg-blue-500"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Methane Capture</span>
                    <span>5%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[5%] rounded-full bg-yellow-500"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Energy Efficiency</span>
                    <span>5%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[5%] rounded-full bg-purple-500"></div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <BarChart2 className="mr-2 h-4 w-4" />
                View Detailed Analytics
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your latest carbon credit activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      type: "Purchase",
                      project: "Kenyan Reforestation",
                      amount: "50 tCO₂e",
                      date: "Apr 28, 2023",
                    },
                    {
                      type: "Retirement",
                      project: "Personal Offset",
                      amount: "25 tCO₂e",
                      date: "Apr 15, 2023",
                    },
                    {
                      type: "Gift",
                      project: "To: Arabuko Initiative",
                      amount: "10 tCO₂e",
                      date: "Apr 10, 2023",
                    },
                    {
                      type: "Purchase",
                      project: "Wind Farm Development",
                      amount: "75 tCO₂e",
                      date: "Mar 22, 2023",
                    },
                  ].map((transaction, i) => (
                    <div key={i} className="flex items-center">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className={
                              transaction.type === "Purchase"
                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                : transaction.type === "Retirement"
                                  ? "bg-green-50 text-green-700 border-green-200"
                                  : "bg-purple-50 text-purple-700 border-purple-200"
                            }
                          >
                            {transaction.type}
                          </Badge>
                          <p className="text-sm font-medium">{transaction.project}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                      <div className="ml-auto text-right">
                        <p className="text-sm font-medium">{transaction.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => setActiveTab("history")}>
                  View All Transactions
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impact Summary</CardTitle>
                <CardDescription>The environmental impact of your carbon offsets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">CO₂ Equivalent</p>
                      <p className="text-2xl font-bold">750 tCO₂e</p>
                      <p className="text-xs text-muted-foreground">Total carbon emissions offset</p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <p className="text-sm font-medium">This is equivalent to:</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg border p-3">
                        <p className="text-lg font-bold">162</p>
                        <p className="text-xs text-muted-foreground">Cars off the road for a year</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <p className="text-lg font-bold">35,000</p>
                        <p className="text-xs text-muted-foreground">Trees planted</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <p className="text-lg font-bold">90</p>
                        <p className="text-xs text-muted-foreground">Homes powered for a year</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <p className="text-lg font-bold">1,875</p>
                        <p className="text-xs text-muted-foreground">Flights from NYC to LA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Impact Report
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="purchase" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Purchase Carbon Credits</CardTitle>
              <CardDescription>Buy verified carbon credits from various projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <p className="font-medium mb-2">Quick Purchase Options</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <Link href="/wallet/purchase?amount=10" className="w-full">
                    <Button variant="outline" className="w-full">
                      10 tCO₂e
                    </Button>
                  </Link>
                  <Link href="/wallet/purchase?amount=25" className="w-full">
                    <Button variant="outline" className="w-full">
                      25 tCO₂e
                    </Button>
                  </Link>
                  <Link href="/wallet/purchase?amount=50" className="w-full">
                    <Button variant="outline" className="w-full">
                      50 tCO₂e
                    </Button>
                  </Link>
                  <Link href="/wallet/purchase?amount=100" className="w-full">
                    <Button variant="outline" className="w-full">
                      100 tCO₂e
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Purchase Methods</p>
                <div className="grid gap-2 md:grid-cols-3">
                  <Link href="/wallet/purchase" className="w-full">
                    <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <CreditCard className="h-8 w-8 mb-2 text-primary" />
                        <p className="font-medium">One-time Purchase</p>
                        <p className="text-sm text-muted-foreground">Buy credits with a single payment</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/wallet/purchase/subscription" className="w-full">
                    <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <RefreshCw className="h-8 w-8 mb-2 text-primary" />
                        <p className="font-medium">Subscription</p>
                        <p className="text-sm text-muted-foreground">Regular monthly purchases</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/marketplace" className="w-full">
                    <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <Leaf className="h-8 w-8 mb-2 text-primary" />
                        <p className="font-medium">Browse Projects</p>
                        <p className="text-sm text-muted-foreground">Select specific carbon projects</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="retire" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Retire Carbon Credits</CardTitle>
              <CardDescription>Permanently retire credits to offset carbon emissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <Link href="/wallet/retire/personal" className="w-full">
                  <Card className="cursor-pointer hover:bg-muted/50 transition-colors h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <Leaf className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="font-medium mb-2">Personal Offset</p>
                      <p className="text-sm text-muted-foreground">
                        Retire credits to offset your personal carbon footprint
                      </p>
                      <Button className="mt-4 w-full">Offset Now</Button>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/wallet/retire/business" className="w-full">
                  <Card className="cursor-pointer hover:bg-muted/50 transition-colors h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                        <BarChart2 className="h-6 w-6 text-blue-600" />
                      </div>
                      <p className="font-medium mb-2">Business Offset</p>
                      <p className="text-sm text-muted-foreground">Retire credits for your business or organization</p>
                      <Button className="mt-4 w-full">Offset Now</Button>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/wallet/retire/gift" className="w-full">
                  <Card className="cursor-pointer hover:bg-muted/50 transition-colors h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                        <Gift className="h-6 w-6 text-purple-600" />
                      </div>
                      <p className="font-medium mb-2">Gift Offset</p>
                      <p className="text-sm text-muted-foreground">
                        Retire credits on behalf of individuals or organizations
                      </p>
                      <Button className="mt-4 w-full">Gift Now</Button>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>Complete record of your carbon credit transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    type: "Purchase",
                    project: "Kenyan Reforestation",
                    amount: "50 tCO₂e",
                    value: "$925.00",
                    date: "Apr 28, 2023",
                    status: "Completed",
                  },
                  {
                    type: "Retirement",
                    project: "Personal Offset",
                    amount: "25 tCO₂e",
                    value: "-",
                    date: "Apr 15, 2023",
                    status: "Completed",
                  },
                  {
                    type: "Gift",
                    project: "To: Arabuko Initiative",
                    amount: "10 tCO₂e",
                    value: "-",
                    date: "Apr 10, 2023",
                    status: "Completed",
                  },
                  {
                    type: "Purchase",
                    project: "Wind Farm Development",
                    amount: "75 tCO₂e",
                    value: "$1,387.50",
                    date: "Mar 22, 2023",
                    status: "Completed",
                  },
                  {
                    type: "Retirement",
                    project: "Business Offset",
                    amount: "100 tCO₂e",
                    value: "-",
                    date: "Mar 15, 2023",
                    status: "Completed",
                  },
                  {
                    type: "Purchase",
                    project: "Methane Capture Initiative",
                    amount: "30 tCO₂e",
                    value: "$555.00",
                    date: "Mar 05, 2023",
                    status: "Completed",
                  },
                  {
                    type: "Gift",
                    project: "To: Dr. Amina Kimani",
                    amount: "15 tCO₂e",
                    value: "-",
                    date: "Feb 20, 2023",
                    status: "Completed",
                  },
                  {
                    type: "Purchase",
                    project: "Reforestation Program",
                    amount: "100 tCO₂e",
                    value: "$1,850.00",
                    date: "Feb 10, 2023",
                    status: "Completed",
                  },
                ].map((transaction, i) => (
                  <div key={i} className="flex items-center border-b pb-3 last:border-0 last:pb-0">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={
                            transaction.type === "Purchase"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : transaction.type === "Retirement"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-purple-50 text-purple-700 border-purple-200"
                          }
                        >
                          {transaction.type}
                        </Badge>
                        <p className="text-sm font-medium">{transaction.project}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-sm font-medium">{transaction.amount}</p>
                      <p className="text-sm text-muted-foreground">{transaction.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Export Transaction History
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
