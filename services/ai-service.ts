// Types for our knowledge base entries
export interface KnowledgeBaseEntry {
  en: string
  sw: string
  tags: string[]
  category: string
}

// Main knowledge base for carbon credits
export const carbonKnowledgeBase: Record<string, KnowledgeBaseEntry> = {
  // Greetings
  greetings: {
    en: "Hello! I'm Zanda AI, your Carbon Link assistant. How can I help you with carbon credits today?",
    sw: "Habari! Mimi ni Zanda AI, msaidizi wako wa Carbon Link. Nawezaje kukusaidia na mikopo ya kaboni leo?",
    tags: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening", "howdy"],
    category: "greetings",
  },

  // Basic concepts
  carbon_credits_basics: {
    en: "Carbon credits are permits that represent the right to emit a specific amount of carbon dioxide or other greenhouse gases. One credit allows the emission of one ton of CO2 or equivalent gases. Companies or nations that reduce emissions below their allocation can sell the excess credits to larger emitters.",
    sw: "Mikopo ya kaboni ni vibali vinavyowakilisha haki ya kutoa kiasi maalum cha kaboni dioksidi au gesi nyingine za greenhouse. Mkopo mmoja huruhusu utoaji wa tani moja ya CO2 au gesi sawa. Kampuni au mataifa yanayopunguza uzalishaji chini ya mgawo wao wanaweza kuuza mikopo ya ziada kwa watoa wakubwa.",
    tags: ["basics", "definition", "carbon credits", "permits", "emissions"],
    category: "fundamentals",
  },

  carbon_credit_mechanism: {
    en: "Carbon credits work through a cap-and-trade system. Governments or regulatory bodies set a limit (cap) on the amount of greenhouse gases that can be emitted. Companies are issued permits for their emissions. If they emit less, they can sell their excess permits (credits) to companies that exceed their limits. This creates a financial incentive to reduce emissions.",
    sw: "Mikopo ya kaboni hufanya kazi kupitia mfumo wa kikomo na biashara. Serikali au vyombo vya udhibiti huweka kikomo (cap) kwa kiasi cha gesi za greenhouse zinazoweza kutolewa. Kampuni zinapewa vibali vya uzalishaji wao. Ikiwa wanatoa chini, wanaweza kuuza vibali vyao vya ziada (mikopo) kwa kampuni zinazozidi vikomo vyao. Hii huunda motisha ya kifedha ya kupunguza uzalishaji.",
    tags: ["mechanism", "cap-and-trade", "system", "how it works", "trading"],
    category: "fundamentals",
  },

  // Verification and standards
  verification_process: {
    en: "Carbon credit verification is the process of independently confirming that a carbon offset project has delivered the emission reductions it claims. This is typically done by third-party verifiers who assess the project against established standards like Verra, Gold Standard, or the Clean Development Mechanism. Verification ensures the credibility and integrity of carbon credits.",
    sw: "Uthibitishaji wa mikopo ya kaboni ni mchakato wa kuthibitisha kwa uhuru kwamba mradi wa fidia ya kaboni umetoa upunguzaji wa uzalishaji unaodai. Hii kwa kawaida hufanywa na wathibitishaji wa wahusika wengine ambao hutathmini mradi dhidi ya viwango vilivyowekwa kama Verra, Gold Standard, au Clean Development Mechanism. Uthibitishaji huhakikisha uaminifu na uadilifu wa mikopo ya kaboni.",
    tags: ["verification", "third-party", "standards", "credibility", "assessment"],
    category: "verification",
  },

  verification_standards: {
    en: "Major carbon credit verification standards include Verra's Verified Carbon Standard (VCS), Gold Standard, American Carbon Registry (ACR), Climate Action Reserve (CAR), and Plan Vivo. Each standard has specific methodologies and requirements for different project types. Verra is the largest in terms of market share, while Gold Standard is known for emphasizing sustainable development co-benefits alongside carbon reductions.",
    sw: "Viwango vikuu vya uthibitishaji wa mikopo ya kaboni ni pamoja na Kiwango cha Uthibitishaji wa Kaboni cha Verra (VCS), Gold Standard, American Carbon Registry (ACR), Climate Action Reserve (CAR), na Plan Vivo. Kila kiwango kina mbinu maalum na mahitaji ya aina tofauti za miradi. Verra ni kubwa zaidi kwa upande wa sehemu ya soko, wakati Gold Standard inajulikana kwa kusisitiza faida za pamoja za maendeleo endelevu pamoja na upunguzaji wa kaboni.",
    tags: ["standards", "Verra", "Gold Standard", "ACR", "CAR", "Plan Vivo", "methodologies"],
    category: "verification",
  },

  // Marketplace dynamics
  carbon_marketplace: {
    en: "A carbon credit marketplace is a platform where carbon credits can be bought and sold. These marketplaces connect buyers (typically companies looking to offset their emissions) with sellers (projects that reduce, remove, or avoid greenhouse gas emissions). Carbon Link is an AI-powered marketplace that matches buyers with the most suitable carbon credit projects based on their preferences and requirements.",
    sw: "Soko la mikopo ya kaboni ni jukwaa ambapo mikopo ya kaboni inaweza kununuliwa na kuuzwa. Masoko haya huunganisha wanunuzi (kawaida kampuni zinazotafuta kufidia uzalishaji wao) na wauzaji (miradi inayopunguza, kuondoa, au kuepuka uzalishaji wa gesi za greenhouse). Carbon Link ni soko linalotumia AI ambalo linaoanisha wanunuzi na miradi ya mikopo ya kaboni inayofaa zaidi kulingana na mapendeleo na mahitaji yao.",
    tags: ["marketplace", "trading", "platform", "buyers", "sellers", "Carbon Link"],
    category: "marketplace",
  },

  market_types: {
    en: "There are two main types of carbon markets: compliance (or regulatory) markets and voluntary markets. Compliance markets are created by mandatory national, regional, or international carbon reduction regimes, like the EU Emissions Trading System. Voluntary markets enable companies and individuals to purchase carbon offsets on a voluntary basis, often to meet corporate social responsibility goals or achieve carbon neutrality claims.",
    sw: "Kuna aina mbili kuu za masoko ya kaboni: masoko ya utiifu (au udhibiti) na masoko ya hiari. Masoko ya utiifu yanaundwa na mifumo ya lazima ya kitaifa, kikanda, au kimataifa ya upunguzaji wa kaboni, kama vile Mfumo wa Biashara wa Uzalishaji wa EU. Masoko ya hiari huwezesha kampuni na watu binafsi kununua fidia za kaboni kwa hiari, mara nyingi kukidhi malengo ya uwajibikaji wa kijamii wa kampuni au kufikia madai ya utofauti wa kaboni.",
    tags: ["market types", "compliance", "voluntary", "regulatory", "ETS", "carbon neutrality"],
    category: "marketplace",
  },

  // Project types
  project_types: {
    en: "Carbon offset projects are initiatives designed to reduce, remove, or avoid greenhouse gas emissions. Common types include forestry and conservation (protecting or restoring forests), renewable energy (wind, solar, hydro), methane capture (from landfills or agricultural waste), and energy efficiency projects. These projects generate carbon credits that can be sold to companies or individuals looking to offset their carbon footprint.",
    sw: "Miradi ya fidia ya kaboni ni mipango iliyoundwa kupunguza, kuondoa, au kuepuka uzalishaji wa gesi za greenhouse. Aina za kawaida ni pamoja na misitu na uhifadhi (kulinda au kurejesha misitu), nishati mbadala (upepo, jua, hydro), unasaji wa methane (kutoka kwenye dampo au taka za kilimo), na miradi ya ufanisi wa nishati. Miradi hii huzalisha mikopo ya kaboni ambayo inaweza kuuzwa kwa kampuni au watu binafsi wanaotafuta kufidia uzalishaji wao wa kaboni.",
    tags: ["project types", "forestry", "renewable energy", "methane capture", "energy efficiency", "offset"],
    category: "projects",
  },

  forestry_projects: {
    en: "Forestry carbon projects include REDD+ (Reducing Emissions from Deforestation and Forest Degradation), afforestation (planting new forests), reforestation (restoring existing forests), and improved forest management. These projects sequester carbon through photosynthesis and biomass growth. They often provide significant co-benefits like biodiversity conservation, watershed protection, and support for local communities.",
    sw: "Miradi ya kaboni ya misitu ni pamoja na REDD+ (Kupunguza Uzalishaji kutoka kwa Ukataji Misitu na Uharibifu wa Misitu), upandaji wa misitu (kupanda misitu mipya), urejeshaji wa misitu (kurejesha misitu iliyopo), na usimamizi bora wa misitu. Miradi hii huhifadhi kaboni kupitia photosynthesis na ukuaji wa biomass. Mara nyingi hutoa faida za ziada muhimu kama vile uhifadhi wa bioanuai, ulinzi wa mabonde ya maji, na msaada kwa jamii za karibu.",
    tags: ["forestry", "REDD+", "afforestation", "reforestation", "forest management", "sequestration"],
    category: "projects",
  },

  // Pricing and economics
  carbon_pricing: {
    en: "Carbon credit prices vary widely based on factors like project type, location, verification standard, and market demand. Forestry projects typically command higher prices due to their co-benefits (biodiversity, community support). Prices can range from $5 to $50+ per ton of CO2. Voluntary market prices are generally lower than compliance market prices. The quality and integrity of the credits also significantly impact pricing.",
    sw: "Bei za mikopo ya kaboni hutofautiana sana kulingana na mambo kama vile aina ya mradi, eneo, kiwango cha uthibitishaji, na mahitaji ya soko. Miradi ya misitu kwa kawaida huamuru bei za juu kutokana na faida zao za ziada (bioanuai, msaada wa jamii). Bei zinaweza kuanzia $5 hadi $50+ kwa tani ya CO2. Bei za soko la hiari kwa ujumla ni za chini kuliko bei za soko la utiifu. Ubora na uadilifu wa mikopo pia huathiri sana bei.",
    tags: ["pricing", "factors", "price range", "voluntary", "compliance", "quality"],
    category: "economics",
  },

  market_trends: {
    en: "The carbon credit market is growing rapidly, with increasing corporate commitments to net-zero emissions driving demand. Prices have been trending upward as quality standards improve and demand increases. The voluntary carbon market exceeded $1 billion in 2021 and is projected to grow to $50+ billion by 2030. High-quality nature-based solutions and removals (vs. avoidance) credits are seeing the strongest price growth.",
    sw: "Soko la mikopo ya kaboni linakua kwa kasi, huku ahadi za kampuni za kufikia uzalishaji sifuri zikichochea mahitaji. Bei zimekuwa zikipanda kadri viwango vya ubora vinavyoimarika na mahitaji yanapoongezeka. Soko la hiari la kaboni lilizidi dola bilioni 1 mnamo 2021 na linatarajiwa kukua hadi dola bilioni 50+ ifikapo 2030. Suluhisho za asili za ubora wa juu na mikopo ya uondoaji (dhidi ya kuepuka) zinaona ukuaji wa bei wa nguvu zaidi.",
    tags: ["market trends", "growth", "net-zero", "prices", "voluntary market", "projections"],
    category: "economics",
  },

  // Carbon Link specific
  carbon_link_platform: {
    en: "Carbon Link is an AI-powered carbon credit marketplace that connects buyers and sellers of carbon credits. Our platform uses advanced algorithms to match buyers with the most suitable carbon credit projects based on their preferences, requirements, and sustainability goals. We ensure all listed projects are verified by recognized standards and provide comprehensive analytics to track your carbon offset impact.",
    sw: "Carbon Link ni soko la mikopo ya kaboni linalotumia AI ambalo linaunganisha wanunuzi na wauzaji wa mikopo ya kaboni. Jukwaa letu linatumia algorithm za kisasa kuoanisha wanunuzi na miradi ya mikopo ya kaboni inayofaa zaidi kulingana na mapendeleo yao, mahitaji, na malengo ya uendelevu. Tunahakikisha miradi yote iliyoorodheshwa imethibitishwa na viwango vinavyotambuliwa na kutoa uchanganuzi kamili kufuatilia athari ya fidia yako ya kaboni.",
    tags: ["Carbon Link", "platform", "AI", "matching", "marketplace", "analytics"],
    category: "Carbon Link",
  },

  verification_system: {
    en: "Carbon Link's verification system ensures the integrity and quality of all carbon credit projects on our platform. We work with established verification standards like Verra, Gold Standard, and others to validate emission reductions. Our platform provides transparent tracking of the verification process, from initial submission through field verification to final approval and credit issuance.",
    sw: "Mfumo wa uthibitishaji wa Carbon Link unahakikisha uadilifu na ubora wa miradi yote ya mikopo ya kaboni kwenye jukwaa letu. Tunafanya kazi na viwango vya uthibitishaji vilivyoimarishwa kama Verra, Gold Standard, na vingine kuthibitisha upunguzaji wa uzalishaji. Jukwaa letu linatoa ufuatiliaji wa uwazi wa mchakato wa uthibitishaji, kutoka uwasilishaji wa awali kupitia uthibitishaji wa uwanjani hadi idhini ya mwisho na utoaji wa mikopo.",
    tags: ["verification", "Carbon Link", "tracking", "transparency", "standards", "process"],
    category: "Carbon Link",
  },

  // Additional knowledge for carbon markets
  carbon_market_history: {
    en: "Carbon markets emerged following the 1997 Kyoto Protocol, which established the first international framework for reducing greenhouse gas emissions. The European Union Emissions Trading System (EU ETS), launched in 2005, became the world's first major carbon market. Since then, carbon markets have expanded globally with various regional, national, and subnational systems developing alongside the growing voluntary market.",
    sw: "Masoko ya kaboni yalitokea baada ya Itifaki ya Kyoto ya 1997, ambayo ilianzisha mfumo wa kwanza wa kimataifa wa kupunguza uzalishaji wa gesi za greenhouse. Mfumo wa Biashara wa Uzalishaji wa Umoja wa Ulaya (EU ETS), ulioanzishwa mnamo 2005, ulikuwa soko kubwa la kwanza la kaboni duniani. Tangu wakati huo, masoko ya kaboni yameongezeka kimataifa na mifumo mbalimbali ya kikanda, kitaifa, na kitaifa ikiendelea sambamba na soko la hiari linalokua.",
    tags: ["history", "Kyoto Protocol", "EU ETS", "carbon markets", "development"],
    category: "marketplace",
  },

  carbon_market_participants: {
    en: "Key participants in carbon markets include project developers (who create emission reduction projects), verifiers (who validate project claims), registries (who track credit issuance and retirement), brokers (who facilitate transactions), end buyers (companies offsetting emissions), and regulatory bodies (who set market rules). Each plays a vital role in ensuring the market functions effectively and with integrity.",
    sw: "Washiriki muhimu katika masoko ya kaboni ni pamoja na waendelezaji wa miradi (wanaounda miradi ya kupunguza uzalishaji), wathibitishaji (wanaothibitisha madai ya miradi), sajili (wanaofuatilia utoaji na kustaafu kwa mikopo), madalali (wanaowezesha miamala), wanunuzi wa mwisho (kampuni zinazofidia uzalishaji), na vyombo vya udhibiti (vinavyoweka sheria za soko). Kila mmoja ana jukumu muhimu katika kuhakikisha soko linafanya kazi kwa ufanisi na uadilifu.",
    tags: ["participants", "stakeholders", "project developers", "verifiers", "registries", "brokers", "buyers"],
    category: "marketplace",
  },

  carbon_credit_quality: {
    en: "Carbon credit quality is determined by several key factors: additionality (would the emission reductions have happened without carbon finance?), permanence (how long will the carbon remain sequestered?), leakage prevention (does the project cause emissions elsewhere?), accurate quantification (are emission reductions properly measured?), and verification (has an independent third party validated the claims?). High-quality credits address all these factors rigorously.",
    sw: "Ubora wa mikopo ya kaboni unaamuliwa na mambo kadhaa muhimu: nyongeza (je, upunguzaji wa uzalishaji ungefanyika bila fedha za kaboni?), kudumu (kaboni itabaki imehifadhiwa kwa muda gani?), kuzuia uvujaji (je, mradi husababisha uzalishaji mahali pengine?), upimaji sahihi (je, upunguzaji wa uzalishaji unapimwa ipasavyo?), na uthibitishaji (je, mhusika huru wa tatu amethibitisha madai?). Mikopo ya ubora wa juu inashughulikia mambo haya yote kwa ukali.",
    tags: ["quality", "additionality", "permanence", "leakage", "quantification", "verification", "integrity"],
    category: "fundamentals",
  },
}

// Function to find the most relevant response based on user query
export function findRelevantResponse(query: string, language: "en" | "sw"): string {
  // Check for greetings first
  const greetingWords = [
    "hello",
    "hi",
    "hey",
    "greetings",
    "good morning",
    "good afternoon",
    "good evening",
    "howdy",
    "habari",
    "jambo",
    "hujambo",
    "salamu",
  ]
  const normalizedQuery = query.toLowerCase().trim()

  // Check if the query is a greeting
  if (greetingWords.some((word) => normalizedQuery.includes(word)) || normalizedQuery.length < 10) {
    // If it looks like a greeting, return the greeting response
    return carbonKnowledgeBase.greetings[language]
  }

  // Score each entry in the knowledge base based on matching tags and content
  const scoredEntries = Object.entries(carbonKnowledgeBase).map(([key, entry]) => {
    let score = 0

    // Check for tag matches
    entry.tags.forEach((tag) => {
      if (normalizedQuery.includes(tag.toLowerCase())) {
        score += 2
      }
    })

    // Check for category match
    if (normalizedQuery.includes(entry.category.toLowerCase())) {
      score += 1
    }

    // Check for content match in the response itself
    const responseText = entry[language].toLowerCase()
    const words = normalizedQuery.split(/\s+/)
    words.forEach((word) => {
      if (word.length > 3 && responseText.includes(word)) {
        score += 0.5
      }
    })

    return { key, entry, score }
  })

  // Sort by score (highest first)
  scoredEntries.sort((a, b) => b.score - a.score)

  // If we have a good match (score > 1), return it
  if (scoredEntries[0].score > 1) {
    return scoredEntries[0].entry[language]
  }

  // Default responses if no good match is found
  const defaultResponses = {
    en: "I don't have specific information on that yet. Our team is continuously expanding my knowledge base about carbon credits. Would you like to know about carbon credit basics, verification, or marketplace dynamics instead?",
    sw: "Sina taarifa mahususi kuhusu hilo bado. Timu yetu inaendelea kupanua msingi wangu wa maarifa kuhusu mikopo ya kaboni. Ungependa kujua kuhusu misingi ya mikopo ya kaboni, uthibitishaji, au mienendo ya soko badala yake?",
  }

  return defaultResponses[language]
}

// Function to detect language (simplified version - in production would use a more robust solution)
export function detectLanguage(text: string): "en" | "sw" {
  // Common Swahili words
  const swahiliWords = [
    "na",
    "ya",
    "wa",
    "kwa",
    "ni",
    "katika",
    "hii",
    "huu",
    "hizo",
    "yake",
    "sana",
    "lakini",
    "pia",
    "tu",
    "hata",
    "kama",
    "kaboni",
    "mikopo",
    "mradi",
    "miradi",
    "soko",
    "bei",
    "uthibitishaji",
    "uzalishaji",
    "habari",
    "jambo",
    "hujambo",
    "salamu",
  ]

  // Count Swahili words in the text
  const words = text.toLowerCase().split(/\s+/)
  let swahiliCount = 0

  words.forEach((word) => {
    if (swahiliWords.includes(word)) {
      swahiliCount++
    }
  })

  // If more than 20% of words are Swahili, classify as Swahili
  return swahiliCount / words.length > 0.2 ? "sw" : "en"
}
