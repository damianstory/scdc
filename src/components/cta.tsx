import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SendIcon, FileText, Download, CalendarDays } from "lucide-react"

export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-background to-background/80">
      <div className="container flex flex-col items-center gap-6 py-24 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Educator Involvement
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mb-8">
          We all want our students to feel prepared to succeed in life after high school. This program will help you play your part in making that happen, without it being one more thing.  
        </p>
        
        <div className="w-full max-w-3xl mx-auto mt-4 pb-16">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-muted/60">
              <AccordionTrigger className="text-lg font-medium text-left py-5 hover:no-underline hover:text-primary">
               What is the time commitment required from participating educators?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                Totally up to you. At a miniumum, we would ask you to commit at least one block per class, per semester to deliver an intentional career-connected learning activity. If you want to do more, we can help support that as well.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-muted/60">
              <AccordionTrigger className="text-lg font-medium text-left py-5 hover:no-underline hover:text-primary">
                What is an example of a career-connected learning activity?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                It&apos;s something that is intentionally designed to help students make connections between what they are learning in class, the durable skills they are developing, and the specific types of occupations that could overlap.
                <br />
                <br />
                For example, during our Biology unit, we might individually research 3-5 related occupations at regional or provincial companies, identify what skills are required to work in each role, relevant post-secondary training, and then engage in a class discussion to share our findings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-muted/60">
              <AccordionTrigger className="text-lg font-medium text-left py-5 hover:no-underline hover:text-primary">
                What if I&apos;m already making intentional career connections in my classroom?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                That&apos;s fantastic. We&apos;re not looking to reinvent the wheel. If you&apos;re already doing something that&apos;s working, let&apos;s highlight that in your school&apos;s custom implementation plan so we can share it with others. 
                <br />
                <br />
                Make sure to communicate that with your school lead so we can include it within your school specific implementation plan. 
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-muted/60">
              <AccordionTrigger className="text-lg font-medium text-left py-5 hover:no-underline hover:text-primary">
                I&apos;m already busy. Isn&apos;t this just one more thing?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                It doesn&apos;t have to be, if it&apos;s done right. The activities and resources we develop for you are going to align with your curriculum.  
              </AccordionContent>
            </AccordionItem>
            
            
            <AccordionItem value="item-5" className="border-b border-muted/60">
              <AccordionTrigger className="text-lg font-medium text-left py-5 hover:no-underline hover:text-primary">
                I don&apos;t have career education qualifications. Will you provide PD? 
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                Talking to young people about relevant occupations, careers, and skills isn&apos;t as scary as many make it out to be. 
                <br />
                <br />
                myBlueprint is collaborating with the team behind the Connecting Career Development and Mental Health for Youth in Schools research to create a short video series that will enable every educator to understand the simple steps they can take to confidently bring career-connected conversations into their classroom.
                <br />
                <br />
                Educators at participating certificate schools will get priority access, along with the opportunity to earn a recognized certificate of completion.              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Feature box instead of button */}
        <div id="get-involved" className="mx-auto w-full max-w-3xl">
          <div className="relative overflow-hidden rounded-lg border bg-background p-8 flex items-start gap-4">
            <SendIcon className="h-8 w-8 text-primary mt-0.5" />
            <div className="flex flex-col w-full">
              <h3 className="font-bold text-base text-white mt-0.5 flex items-center">Want To Get Your School Involved?</h3>
              <div className="text-muted-foreground mt-2 w-full text-left">
                <p>
                  There is room for a few more intrinsically motivated schools to be part of the proof of concept group during the 25-26 school year. 
                </p>
                <p className="mt-6">
                Email Damian today: damian.matheson@myblueprint.ca
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Three horizontal buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-3xl mt-8 mb-3">
          <a
            href="https://docs.google.com/document/d/1yHqhT8OSiG29vQE7k7RtHlG4nHH8XyukTpXi9piboV0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button size="sm" className="w-full gap-2 px-6">
              <FileText className="h-4 w-4" />
              Read The Memo
            </Button>
          </a>
          <a
            href="https://drive.google.com/file/d/1zc6NhbIxr9vm70puM3Ygm2bKRsnR2bSj/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button size="sm" className="w-full gap-2 px-6">
              <Download className="h-4 w-4" />
              Download One Pager
            </Button>
          </a>
          <a
            href="https://docs.google.com/document/d/1v9UdepLRBgQZDDAOD4WVpqT2rPCqw5UbqQTMvPioGXs/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button size="sm" className="w-full gap-2 px-6">
              <CalendarDays className="h-4 w-4" />
              School Level Work-Back
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
