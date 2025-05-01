import { SmilePlus, Coins, Briefcase } from "lucide-react"

const features = [
  {
    name: "Greater Career Satisfaction",
    description: "You don't know what you don't know is as true today as it ever was. More career-connected exposure opportunities can lead to a better understanding of what we like, and what we don't.",
    icon: SmilePlus,
  },
  {
    name: "Higher Wages",
    description: "Students who reported talking to a teacher about a career ambition by age 15 on average earned 3% more at age 30 than comparable peers who had not had such conversations.",
    icon: Coins,
  },
  {
    name: "Lower Unemployment",
    description: "Evidence from the Youth In Transition Survey (YITS) shows that career conversations with teachers and parent/guardian are associated with lower unemployment in adulthood.",
    icon: Briefcase,
  }
]

export default function Features() {
  return (
    <section className="container space-y-8 py-10 md:py-14">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Why This Is Needed</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
        <br />
        One career education class across a students entire high school journey no longer makes sense. 
        <br/> The world has changed. It&apos;s time to adapt.
        <br />
        <br />
        Research from the OECD suggests that consistent, diverse, and reflective two-way career conversations throughout a student&apos;s high school journey contribute to outcomes like:
       <br />
       <br />
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-3">
              <feature.icon className="h-6 w-6 text-primary shrink-0" />
              <h3 className="font-bold text-base">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
