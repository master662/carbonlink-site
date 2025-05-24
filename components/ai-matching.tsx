"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function AIMatching() {
  const [priceRange, setPriceRange] = useState([10, 30])
  const [matching, setMatching] = useState(false)
  const [matchResults, setMatchResults] = useState<null | any[]>(null)

  const handleMatch = () => {
    setMatching(true)
    // Simulate AI matching process
    setTimeout(() => {
      setMatching(false)
      setMatchResults([
        {
          id: 8,
          title: "Ethiopian Forest Conservation",
          match: 98,
          price: 20.0,
          type: "Forestry & Conservation",
        },
        {
          id: 3,
          title: "Tanzanian Mangrove Restoration",
          match: 92,
          price: 22.25,
          type: "Forestry & Conservation",
        },
        {
          id: 10,
          title: "Ugandan Agroforestry Initiative",
          match: 87,
          price: 19.25,
          type: "Forestry & Conservation",
        },
      ])
    }, 2000)
  }

  return (
    <div className="mb-6">
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-100 dark:border-green-900">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle>AI Project Matching</CardTitle>
          </div>
          <CardDescription>
            Let our AI find the perfect carbon credit projects that match your sustainability goals and preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!matchResults ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Project Type Preferences</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="forestry" defaultChecked />
                    <label
                      htmlFor="forestry"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Forestry & Conservation
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="renewable" defaultChecked />
                    <label
                      htmlFor="renewable"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Renewable Energy
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="methane" defaultChecked />
                    <label
                      htmlFor="methane"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Methane Capture
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="efficiency" defaultChecked />
                    <label
                      htmlFor="efficiency"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Energy Efficiency
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Price Range ($ per tCO₂e)</Label>
                <div className="pt-4">
                  <Slider defaultValue={[10, 30]} max={50} step={1} value={priceRange} onValueChange={setPriceRange} />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm">${priceRange[0]}</span>
                    <span className="text-sm">${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Region Preference</Label>
                <Select defaultValue="east">
                  <SelectTrigger>
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="east">East Africa</SelectItem>
                    <SelectItem value="west">West Africa</SelectItem>
                    <SelectItem value="north">North Africa</SelectItem>
                    <SelectItem value="south">Southern Africa</SelectItem>
                    <SelectItem value="central">Central Africa</SelectItem>
                    <SelectItem value="all">All Regions</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Sustainability Goals</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="biodiversity" defaultChecked />
                    <label
                      htmlFor="biodiversity"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Biodiversity
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="community" defaultChecked />
                    <label
                      htmlFor="community"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Community Development
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="water" />
                    <label
                      htmlFor="water"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Water Conservation
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="climate" defaultChecked />
                    <label
                      htmlFor="climate"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Climate Resilience
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-medium">Your Top Matches</h3>
                <p className="text-sm text-muted-foreground">
                  Based on your preferences, our AI recommends these projects
                </p>
              </div>
              <div className="space-y-3">
                {matchResults.map((result) => (
                  <div
                    key={result.id}
                    className="flex items-center justify-between border rounded-lg p-3 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Badge
                        className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold bg-primary text-primary-foreground"
                        variant="default"
                      >
                        {result.match}%
                      </Badge>
                      <div>
                        <p className="font-medium">{result.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {result.type} • ${result.price.toFixed(2)} per tCO₂e
                        </p>
                      </div>
                    </div>
                    <Link href={`/marketplace/projects/${result.id}`}>
                      <Button size="sm">
                        View Project
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          {!matchResults ? (
            <Button className="w-full" onClick={handleMatch} disabled={matching}>
              {matching ? "Finding Matches..." : "Find My Perfect Projects"}
            </Button>
          ) : (
            <Button variant="outline" className="w-full" onClick={() => setMatchResults(null)}>
              Adjust Preferences
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
