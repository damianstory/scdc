import { Brain, Cloud, Shield, Zap, BarChart2, Users, Star } from "lucide-react"

const features = [
  {
    name: "Custom Implementation Plan",
    description: "Document school priorities, community goals, and available resources. Promote opportunity to interested educators.",
    icon: Brain,
  },
  {
    name: "Resource Development",
    description: "myBlueprint will create and adapt activities to align with curriculum outcomes, to be used by participating educators.",
    icon: Cloud,
  },
  {
    name: "Pre-Benchmark Analysis",
    description: "Survey community to assess existing school career development and life-preparedness efforts.",
    icon: Shield,
  },
  {
    name: "Implementation & Support",
    description: "Ongoing implementation support, and sharing of real-time learnings across participating certificate schools.",
    icon: Zap,
  },
  {
    name: "Post-Benchmark Analysis",
    description: "Reassess community sentiment towards career development efforts and compare against benchmark.",
    icon: BarChart2,
  },
  {
    name: "Award Certificate",
    description: "A symbol to communicate that career and life-preparedness is a top priority for your school community.",
    icon: Users,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-20 md:py-28">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">How it Works</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
        Co-designed at the school level based on your unique priorities, resources, and community goals.</p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <span className="font-bold text-2xl text-white">{idx + 1}</span>
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
        <div className="relative overflow-hidden rounded-lg border bg-background p-8 lg:col-span-3">
          <h3 className="font-bold text-base text-white mb-2">⭐️ Bonus</h3>
          <p className="text-muted-foreground leading-normal">
            myBlueprint is collaborating with the team behind the
            {' '}
            <a
              href="https://ccdmhy.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              Connecting Career Development and Mental Health for Youth in Schools research
            </a>
            {' '}
            to create a short video series that will enable every educator to understand the simple steps they can take to confidently bring career-connected conversations into their classroom.  
            <br />
            <br />
            Educators at participating certificate schools will get priority access, along with the opportunity to earn a recognized certificate of completion.
          </p>
        </div>
      </div>
    </section>
  )
}
