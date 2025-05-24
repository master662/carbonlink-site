"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, FileText, Share2, Bookmark, BookmarkCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ArticleDetailPage() {
  const params = useParams()
  const router = useRouter()
  const articleId = Number(params.id)
  const [isBookmarked, setIsBookmarked] = useState(false)

  // This would normally come from an API call based on the ID
  const articles = [
    {
      id: 1,
      title: "The Evolution of Carbon Markets",
      description: "Explore the history and development of carbon markets from their inception to the present day.",
      type: "article",
      level: "advanced",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop&crop=center",
      readTime: "8 min read",
      author: "Dr. Emma Richardson",
      authorTitle: "Climate Economics Researcher",
      publishDate: "March 15, 2023",
      content: `
# The Evolution of Carbon Markets

Carbon markets have evolved significantly since their inception, becoming a cornerstone of global climate policy. This article traces their development and examines how they've shaped our approach to emissions reduction.

## The Origins: From Concept to Reality

The concept of trading emissions allowances emerged in the late 1960s and early 1970s, primarily in academic circles. Economists like Ronald Coase proposed that environmental problems could be addressed through market mechanisms rather than solely through command-and-control regulation.

The first large-scale implementation came in the United States with the Acid Rain Program under the 1990 Clean Air Act Amendments. This program created a market for sulfur dioxide (SO₂) emissions, demonstrating that cap-and-trade systems could effectively reduce pollution at lower costs than traditional regulation.

## The Kyoto Protocol Era

The Kyoto Protocol, adopted in 1997 and entered into force in 2005, established the first international carbon market mechanisms:

1. **International Emissions Trading (IET)**: Allowed countries with emission reduction commitments to trade emission allowances.

2. **Clean Development Mechanism (CDM)**: Enabled developed countries to implement emission-reduction projects in developing countries to earn certified emission reduction credits.

3. **Joint Implementation (JI)**: Permitted developed countries to earn emission reduction units from emission-reduction projects in other developed countries.

These mechanisms laid the groundwork for global carbon trading, though their implementation faced numerous challenges, including concerns about additionality, verification, and uneven geographic distribution of projects.

## The Rise of Regional Markets

As international negotiations continued, regional and national carbon markets began to emerge:

- **European Union Emissions Trading System (EU ETS)**: Launched in 2005, the EU ETS became the world's largest carbon market, covering approximately 40% of EU greenhouse gas emissions.

- **Regional Greenhouse Gas Initiative (RGGI)**: The first mandatory cap-and-trade program in the United States, established in 2009 among northeastern states.

- **California Cap-and-Trade Program**: Began in 2013 and later linked with Quebec's system to form the Western Climate Initiative.

- **Various national systems**: Including New Zealand's ETS (2008), South Korea's ETS (2015), and China's regional pilots leading to a national ETS (2021).

## The Paris Agreement and Beyond

The 2015 Paris Agreement marked a new era for carbon markets. Article 6 of the agreement provides a framework for voluntary cooperation among countries in implementing their nationally determined contributions, including through market mechanisms.

The rules for implementing Article 6 were finally agreed upon at COP26 in Glasgow in 2021, establishing:

- A centralized mechanism for trading emission reductions (Article 6.4)
- A framework for bilateral cooperation (Article 6.2)
- Provisions to avoid double-counting of emission reductions

## The Voluntary Carbon Market

Alongside compliance markets, the voluntary carbon market has grown significantly. Companies and individuals purchase carbon credits voluntarily to offset their emissions, driven by corporate social responsibility, net-zero commitments, and consumer pressure.

The voluntary market has seen rapid growth, with transaction volumes increasing from $146 million in 2007 to over $1 billion in 2021. However, it has also faced criticism regarding credit quality, permanence, and additionality.

## Challenges and Future Directions

Despite their growth, carbon markets continue to face several challenges:

- **Price volatility**: Carbon prices have fluctuated significantly, affecting investment certainty.
- **Coverage**: Many emissions sources remain uncovered by carbon pricing.
- **Carbon leakage**: Emissions may shift to jurisdictions without carbon pricing.
- **Environmental integrity**: Ensuring that traded credits represent real, additional, and permanent emission reductions.

Future developments are likely to include:

- Greater integration between different carbon markets
- Expansion of sectoral coverage, particularly in hard-to-abate sectors
- Enhanced use of technology for monitoring, reporting, and verification
- Increased focus on removals alongside emission reductions

## Conclusion

Carbon markets have come a long way from theoretical concept to practical policy tool. While they are not a silver bullet for climate change, they represent an important part of the policy mix, providing economic incentives for emission reductions and channeling finance toward low-carbon technologies and practices.

As the urgency of climate action increases, carbon markets will continue to evolve, hopefully becoming more robust, comprehensive, and effective in driving the transition to a low-carbon economy.
      `,
    },
    {
      id: 2,
      title: "Nature-Based Solutions for Carbon Sequestration",
      description: "How natural ecosystems can help remove carbon dioxide from the atmosphere.",
      type: "article",
      level: "basic",
      image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=800&h=600&fit=crop&crop=center",
      readTime: "7 min read",
      author: "Dr. Maya Patel",
      authorTitle: "Ecosystem Restoration Specialist",
      publishDate: "April 22, 2023",
      content: `
# Nature-Based Solutions for Carbon Sequestration

Nature has been regulating carbon cycles for billions of years. As we face the challenge of climate change, harnessing these natural processes offers some of our most powerful tools for carbon sequestration. This article explores how natural ecosystems can help remove carbon dioxide from the atmosphere and the potential of nature-based solutions in our climate strategy.

## Understanding Carbon Sequestration

Carbon sequestration is the process of capturing and storing atmospheric carbon dioxide. Nature does this primarily through:

1. **Photosynthesis**: Plants absorb CO₂ from the atmosphere, using carbon to build their structures and releasing oxygen.
2. **Soil carbon storage**: Organic matter in soils contains carbon that can remain stored for decades to millennia.
3. **Ocean absorption**: Oceans absorb about 25% of human-caused CO₂ emissions, storing it in various forms.

## Forest Ecosystems

Forests are perhaps the most recognized natural carbon sinks. A single mature tree can absorb up to 48 pounds of CO₂ per year, while forests collectively absorb 2.6 billion tons of carbon dioxide annually—about one-third of emissions from burning fossil fuels.

### Key forest-based solutions include:

- **Afforestation and reforestation**: Planting trees in areas that were not previously forested (afforestation) or restoring forests where they've been depleted (reforestation).
- **Improved forest management**: Practices like extended harvest cycles, reduced-impact logging, and fire management.
- **Forest conservation**: Preventing deforestation preserves existing carbon stocks and ongoing sequestration.

## Grassland and Rangeland Solutions

Grasslands store approximately 34% of the global stock of carbon in terrestrial ecosystems, primarily in their soils. Unlike forests, most of this carbon remains safely underground even during fires.

### Effective grassland strategies include:

- **Improved grazing management**: Rotational grazing and other practices that maintain plant health and soil carbon.
- **Grassland conservation**: Protecting native grasslands from conversion to cropland.
- **Restoration of degraded grasslands**: Reintroducing native species and improving soil health.

## Wetlands and Coastal Ecosystems

Wetlands, particularly peatlands, store enormous amounts of carbon despite covering only about 3% of Earth's land surface. Coastal ecosystems like mangroves, salt marshes, and seagrass meadows—often called "blue carbon" ecosystems—sequester carbon at rates up to four times higher than mature tropical forests.

### Key interventions include:

- **Wetland conservation and restoration**: Protecting existing wetlands and restoring drained areas.
- **Mangrove restoration**: Replanting mangroves in degraded coastal areas.
- **Seagrass meadow protection**: Reducing pollution and physical damage to these underwater carbon sinks.

## Agricultural Solutions

Agricultural lands offer significant potential for increased carbon sequestration through practices collectively known as "regenerative agriculture."

### These include:

- **Cover cropping**: Planting crops like clover or rye during off-seasons to keep living roots in the soil.
- **No-till or reduced tillage**: Minimizing soil disturbance to preserve soil carbon.
- **Agroforestry**: Integrating trees with crop or livestock systems.
- **Biochar application**: Adding charcoal-like substance to soil to store carbon and improve soil health.

## Challenges and Considerations

While nature-based solutions offer tremendous potential, several challenges must be addressed:

- **Permanence**: Carbon stored in natural systems can be released by disturbances like fires or changes in land management.
- **Measurement and verification**: Accurately quantifying carbon sequestration in diverse ecosystems remains challenging.
- **Leakage**: Protection in one area may simply shift destructive activities elsewhere.
- **Biodiversity and social impacts**: Solutions must be designed to benefit both biodiversity and local communities.

## The Future of Nature-Based Solutions

Nature-based solutions could provide up to 37% of the cost-effective CO₂ mitigation needed through 2030 to maintain global warming below 2°C. Their potential is being increasingly recognized in:

- **Carbon markets**: Growing demand for high-quality nature-based carbon credits.
- **National climate strategies**: Countries incorporating nature-based solutions in their Nationally Determined Contributions under the Paris Agreement.
- **Corporate sustainability**: Companies investing in natural climate solutions as part of net-zero strategies.

## Conclusion

Nature-based solutions for carbon sequestration represent one of our most powerful tools in addressing climate change. They offer the unique advantage of providing multiple co-benefits beyond carbon storage, including biodiversity conservation, improved water quality, soil health, and support for rural livelihoods.

As we develop comprehensive climate strategies, working with nature—rather than against it—will be essential. By protecting, restoring, and sustainably managing our natural ecosystems, we can harness their remarkable capacity to help stabilize our climate while creating a healthier planet for all living beings.
      `,
    },
    {
      id: 3,
      title: "Corporate Carbon Neutrality Strategies",
      description: "Case studies of companies implementing effective carbon neutrality strategies.",
      type: "article",
      level: "advanced",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop&crop=center",
      readTime: "9 min read",
      author: "Sarah Johnson",
      authorTitle: "Corporate Sustainability Consultant",
      publishDate: "June 8, 2023",
      content: `
# Corporate Carbon Neutrality Strategies: Leading Case Studies

As climate change concerns intensify, companies across sectors are committing to carbon neutrality. This article examines how leading corporations are developing and implementing effective carbon neutrality strategies, offering valuable lessons for organizations at any stage of their climate journey.

## The Evolution of Corporate Climate Commitments

Corporate climate action has evolved dramatically over the past two decades:

- **Early 2000s**: Focused primarily on energy efficiency and basic emissions reporting
- **2010s**: Expanded to include renewable energy procurement and science-based targets
- **2020s**: Shifted toward comprehensive net-zero commitments covering entire value chains

Today, over 300 of the world's largest companies have made net-zero commitments. However, the quality and comprehensiveness of these commitments vary significantly. The most effective strategies share several key elements, illustrated in the following case studies.

## Microsoft: Beyond Carbon Neutrality to Carbon Negative

Microsoft exemplifies an ambitious and comprehensive approach to climate action. In 2020, the company announced plans to become carbon negative by 2030 and to remove its historical emissions since its founding by 2050.

### Key elements of Microsoft's strategy:

1. **Comprehensive emissions accounting**: Microsoft measures and reports Scope 1, 2, and 3 emissions, including those from its supply chain and product use.

2. **Internal carbon fee**: The company charges an internal fee of $15-20 per ton on all emissions, creating a fund for climate initiatives.

3. **Procurement transformation**: Microsoft has established requirements for suppliers to report and reduce their emissions.

4. **Innovation investment**: The company created a $1 billion Climate Innovation Fund to accelerate carbon removal technology development.

5. **Transparency**: Microsoft publishes detailed annual environmental sustainability reports with progress updates.

The results have been significant: Microsoft achieved carbon neutrality for direct emissions in 2012 and has contracted for over 7 gigawatts of renewable energy.

## Unilever: Embedding Climate Action in Business Strategy

Unilever has integrated climate action throughout its business operations under its Sustainable Living Plan and subsequent Climate Transition Action Plan.

### Distinctive features include:

1. **Value chain approach**: Unilever's targets cover the entire lifecycle of its products, including consumer use, which accounts for 65% of its products' carbon footprint.

2. **Supplier engagement**: The company works with suppliers on agricultural practices that reduce emissions and increase carbon sequestration.

3. **Product innovation**: Unilever has reformulated products to reduce emissions during use, such as concentrated detergents that require less water and energy.

4. **Renewable energy transition**: The company achieved 100% renewable grid electricity for its operations in 2020.

5. **Climate justice focus**: Unilever explicitly addresses the social dimensions of climate change in its strategy.

Unilever has reduced operational emissions by 65% since 2015 while continuing to grow its business, demonstrating that decoupling emissions from growth is possible.

## Ørsted: Transforming a Business Model

Perhaps the most dramatic corporate climate transformation is that of Ørsted (formerly DONG Energy), which evolved from a fossil fuel-intensive utility to a global leader in offshore wind energy.

### Ørsted's transformation included:

1. **Strategic pivot**: The company divested its oil and gas business and reallocated capital to renewable energy.

2. **Clear targets**: Ørsted set a goal to reduce the carbon intensity of its energy generation by 96% by 2023 (compared to 2006).

3. **Supply chain focus**: The company is working to decarbonize its supply chain through supplier requirements and partnerships.

4. **Biodiversity integration**: Ørsted has committed to ensuring all its renewable energy projects have a net-positive biodiversity impact.

The results have been remarkable: Ørsted reduced the carbon intensity of its energy generation by 87% between 2006 and 2020, while increasing profitability. The company is now ranked as the world's most sustainable energy company.

## Patagonia: Radical Transparency and Reduction-First Approach

Outdoor apparel company Patagonia has long been a pioneer in corporate sustainability, with a climate strategy characterized by radical transparency and a focus on absolute emissions reductions.

### Key aspects include:

1. **Reduction priority**: Patagonia emphasizes reducing its actual emissions before turning to offsets.

2. **Materials innovation**: The company has invested heavily in developing low-carbon materials, including recycled polyester and natural fibers.

3. **Business model evolution**: Patagonia's Worn Wear program promotes product repair and resale, extending product lifespans.

4. **Supply chain engagement**: The company works closely with suppliers on renewable energy adoption and efficiency improvements.

5. **Advocacy**: Patagonia actively advocates for climate policy, recognizing that corporate action alone is insufficient.

While Patagonia's approach may not be fully replicable for all companies, its transparency about challenges and commitment to continuous improvement offers valuable lessons.

## Common Success Factors and Lessons Learned

Across these diverse examples, several common factors emerge:

1. **Leadership commitment**: In each case, climate action was championed at the highest levels of the organization.

2. **Science-based targets**: Successful companies align their goals with what climate science indicates is necessary.

3. **Value chain approach**: The most effective strategies address emissions throughout the value chain, not just direct operations.

4. **Integration with business strategy**: Climate action is treated as core to business success, not as a separate sustainability initiative.

5. **Stakeholder engagement**: Companies work collaboratively with suppliers, customers, employees, and communities.

6. **Transparency and accountability**: Regular, detailed reporting keeps companies accountable for progress.

## Challenges and Considerations

Despite these success stories, companies face significant challenges in implementing carbon neutrality strategies:

- **Hard-to-abate emissions**: Some sectors face technological barriers to decarbonization.
- **Data limitations**: Many companies struggle to accurately measure Scope 3 emissions.
- **Investment requirements**: Significant capital may be needed for transitions.
- **Policy uncertainty**: Changing regulations can complicate long-term planning.

## Conclusion

The case studies presented demonstrate that ambitious corporate climate action is not only possible but can create business value through innovation, efficiency, risk reduction, and stakeholder engagement. While each company's path to carbon neutrality will be unique, the lessons from these leaders can inform strategies across sectors.

As corporate climate commitments continue to proliferate, the focus is shifting from setting targets to implementation and accountability. Companies that develop comprehensive, strategic approaches to carbon neutrality—addressing their entire value chains and integrating climate action into core business strategy—will be best positioned to thrive in a low-carbon future.
      `,
    },
  ]

  const article = articles.find((a) => a.id === articleId)

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Button>
        <Badge
          variant="outline"
          className={`${
            article.level === "basic"
              ? "bg-blue-50 text-blue-700 border-blue-200"
              : "bg-purple-50 text-purple-700 border-purple-200"
          }`}
        >
          {article.level.charAt(0).toUpperCase() + article.level.slice(1)}
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200 mb-2 flex items-center gap-1 w-fit"
                >
                  <FileText className="h-3 w-3" />
                  Article
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold text-white">{article.title}</h1>
                <p className="text-white/80 mt-2">{article.readTime}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-primary/10 h-10 w-10 flex items-center justify-center">
                <span className="font-medium text-primary">
                  {article.author.split(" ")[0][0]}
                  {article.author.split(" ")[1][0]}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium">{article.author}</p>
                <p className="text-xs text-muted-foreground">{article.authorTitle}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" onClick={() => setIsBookmarked(!isBookmarked)}>
                {isBookmarked ? <BookmarkCheck className="h-5 w-5 text-primary" /> : <Bookmark className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Separator />

          <div className="prose prose-green max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, "<br />") }} />
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About This Article</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Level</span>
                <span className="font-medium capitalize">{article.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reading Time</span>
                <span className="font-medium">{article.readTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Published</span>
                <span className="font-medium">{article.publishDate}</span>
              </div>
              <Separator />
              <p className="text-sm text-muted-foreground">{article.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Related Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {articles
                .filter((a) => a.id !== article.id)
                .slice(0, 2)
                .map((relatedArticle) => (
                  <div key={relatedArticle.id} className="flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={relatedArticle.image || "/placeholder.svg"}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex flex-col">
                      <Link
                        href={`/resources/articles/${relatedArticle.id}`}
                        className="text-sm font-medium hover:underline"
                      >
                        {relatedArticle.title}
                      </Link>
                      <span className="text-xs text-muted-foreground">{relatedArticle.readTime}</span>
                    </div>
                  </div>
                ))}
            </CardContent>
            <CardFooter>
              <Link href="/resources" className="w-full">
                <Button variant="outline" className="w-full">
                  View All Resources
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
