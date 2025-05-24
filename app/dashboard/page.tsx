"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, BarChart, PieChart } from "@/components/charts"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  Download,
  Filter,
  RefreshCw,
  FileText,
  BarChart3,
  PieChartIcon,
  TrendingUp,
  Lightbulb,
  ArrowRight,
  Zap,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function DashboardPage() {
  const [timeframe, setTimeframe] = useState("month")
  const [reportType, setReportType] = useState("summary")

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Date Range</span>
          </Button>
          <Select value={reportType} onValueChange={setReportType}>
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue placeholder="Report Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="summary">Summary Report</SelectItem>
              <SelectItem value="detailed">Detailed Analytics</SelectItem>
              <SelectItem value="impact">Impact Assessment</SelectItem>
              <SelectItem value="financial">Financial Report</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <RefreshCw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Refresh</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Last 24 hours</SelectItem>
                <SelectItem value="week">Last 7 days</SelectItem>
                <SelectItem value="month">Last 30 days</SelectItem>
                <SelectItem value="year">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Filter</span>
            </Button>
          </div>
        </div>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Carbon Offset</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,248 tCO₂e</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 new this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24,685</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Price</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$19.78</div>
                <p className="text-xs text-muted-foreground">Per tCO₂e</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Carbon Offset Over Time</CardTitle>
                <CardDescription>Monthly carbon offset in tons of CO₂ equivalent</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <LineChart />
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    +18.2% YoY
                  </Badge>
                  <span className="text-sm text-muted-foreground">Annual growth rate</span>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Data
                </Button>
              </CardFooter>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader className="flex justify-between">
                <div>
                  <CardTitle>Offset by Project Type</CardTitle>
                  <CardDescription>Distribution of carbon credits by project category</CardDescription>
                </div>
                <Select defaultValue="percentage">
                  <SelectTrigger className="w-[130px] h-8">
                    <SelectValue placeholder="View" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percentage">Percentage</SelectItem>
                    <SelectItem value="absolute">Absolute</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <div className="h-[240px]">
                  <PieChart />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
                      <span className="text-sm">Forestry & Conservation</span>
                    </div>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Renewable Energy</span>
                    </div>
                    <span className="font-medium">30%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm">Methane Capture</span>
                    </div>
                    <span className="font-medium">15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-sm">Energy Efficiency</span>
                    </div>
                    <span className="font-medium">10%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <PieChartIcon className="mr-2 h-4 w-4" />
                  View Detailed Breakdown
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Project Performance</CardTitle>
                <CardDescription>Carbon offset by project (top 5)</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <BarChart />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View All Projects
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </CardFooter>
            </Card>
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest carbon credit purchases and sales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      project: "Amazon Rainforest Conservation",
                      date: "2023-04-28",
                      amount: "50 tCO₂e",
                      value: "$985.00",
                    },
                    {
                      project: "Wind Farm Development",
                      date: "2023-04-25",
                      amount: "75 tCO₂e",
                      value: "$1,425.00",
                    },
                    {
                      project: "Methane Capture Initiative",
                      date: "2023-04-20",
                      amount: "30 tCO₂e",
                      value: "$612.00",
                    },
                    {
                      project: "Reforestation Program",
                      date: "2023-04-15",
                      amount: "100 tCO₂e",
                      value: "$1,950.00",
                    },
                  ].map((transaction, i) => (
                    <div key={i} className="flex items-center">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{transaction.project}</p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                      <div className="ml-auto text-right">
                        <p className="text-sm font-medium">{transaction.amount}</p>
                        <p className="text-sm font-medium text-primary">{transaction.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  View All Transactions
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Carbon Offset Analytics</CardTitle>
              <CardDescription>High-level insights into your carbon offset portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Offset Efficiency</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Cost per tCO₂e</span>
                    <span className="font-medium">$19.78</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Market Average</span>
                    <span className="font-medium">$22.50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Savings</span>
                    <span className="font-medium text-green-600">12.1%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Regional Distribution</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>East Africa</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                    <div className="flex items-center justify-between text-sm">
                      <span>West Africa</span>
                      <span>20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                    <div className="flex items-center justify-between text-sm">
                      <span>Southern Africa</span>
                      <span>15%</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Impact Metrics</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Trees Planted</span>
                    <span className="font-medium">12,480</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Renewable Energy</span>
                    <span className="font-medium">375 MWh</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Communities Supported</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">SDGs Addressed</span>
                    <span className="font-medium">7</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <TrendingUp className="mr-2 h-4 w-4" />
                View Detailed Analytics
              </Button>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download Full Report
              </Button>
            </CardFooter>
          </Card>

          {/* AI Recommendations Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                <CardTitle>AI Recommendations</CardTitle>
              </div>
              <CardDescription>Personalized suggestions based on your preferences and portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Portfolio Diversification</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Your portfolio is heavily weighted towards forestry projects. Consider diversifying with renewable
                      energy projects to balance your portfolio.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/recommendations/diversification" className="w-full">
                      <Button variant="outline" className="w-full flex items-center justify-between">
                        View Recommendations
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Price Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Based on market trends, now is a good time to purchase additional credits in the renewable energy
                      sector.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/recommendations/price-optimization" className="w-full">
                      <Button variant="outline" className="w-full flex items-center justify-between">
                        View Recommendations
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Impact Maximization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      To maximize your environmental impact, consider investing in blue carbon projects which have shown
                      higher carbon sequestration rates.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/recommendations/impact" className="w-full">
                      <Button variant="outline" className="w-full flex items-center justify-between">
                        View Recommendations
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Zap className="mr-2 h-4 w-4" />
                Get Personalized AI Analysis
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
