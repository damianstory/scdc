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
    <section className="border-t bg-gradient-to-b from-background to-background/80">
      <div className="container flex flex-col items-center gap-6 py-24 pb-12 text-center md:py-32 md:pb-16">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Ready to revolutionize your business?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mb-8">
          Join leading companies who trust Amane Soft to drive their digital transformation and stay ahead in the
          rapidly evolving tech landscape.
        </p>
        
        <div className="w-full max-w-3xl mx-auto mt-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-muted/60">
              <AccordionTrigger className="text-lg font-medium text-left py-5 hover:no-underline hover:text-primary">
                How does Amane Soft's AI integration work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                Our AI integration seamlessly connects with your existing systems to analyze data, automate processes, and provide actionable insights. We customize each implementation to address your specific business challenges and goals, ensuring you get maximum value with minimal disruption to your operations.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-muted/60">
              <AccordionTrigger className="text-lg font-medium text-left py-5 hover:no-underline hover:text-primary">
                What industries do you specialize in?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                Amane Soft works across multiple industries including healthcare, finance, manufacturing, retail, and technology. Our solutions are tailored to meet industry-specific challenges while leveraging cross-industry insights to bring innovative approaches to your business challenges.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-muted/60">
              <AccordionTrigger className="text-lg font-medium text-left py-5 hover:no-underline hover:text-primary">
                How long does implementation typically take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                Implementation timelines vary based on project scope and complexity. Most clients see initial deployment within 4-8 weeks, with full integration completed within 3-6 months. We use an agile approach that delivers value incrementally, allowing you to see results quickly while we continue to build out the complete solution.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b border-muted/60">
              <AccordionTrigger className="text-lg font-medium text-left py-5 hover:no-underline hover:text-primary">
                What kind of support do you provide after implementation?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                We offer comprehensive post-implementation support including 24/7 technical assistance, regular maintenance updates, performance optimization, and continuous training for your team. Our dedicated support team ensures your systems operate at peak efficiency, and we proactively monitor for opportunities to enhance performance.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-b border-muted/60">
              <AccordionTrigger className="text-lg font-medium text-left py-5 hover:no-underline hover:text-primary">
                How do you ensure data security and compliance?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                Security is built into every layer of our solutions. We adhere to industry standards like ISO 27001, GDPR, HIPAA, and SOC 2, implementing end-to-end encryption, regular security audits, and strict access controls. Our compliance team works closely with your organization to ensure all regulatory requirements are met for your industry and region.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Divider line */}
        <div className="w-full border-t border-muted/60 my-10"></div>
        
        {/* Feature box instead of button */}
        <div id="get-involved" className="mx-auto max-w-md w-full scroll-mt-16">
          <div className="relative overflow-hidden rounded-lg border bg-background p-8 text-left transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <SendIcon className="h-8 w-8 text-primary" />
              <h3 className="font-bold">Want To Get Involved?</h3>
            </div>
            <p className="mt-2 text-muted-foreground">
              Join our community of innovators and be part of the digital transformation revolution. Connect with us today to explore partnership opportunities.
            </p>
          </div>
        </div>
        
        {/* Three horizontal buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-3xl mt-12 mb-3">
          <Button variant="outline" className="flex-1 gap-2">
            <FileText className="h-4 w-4" />
            Read The Memo
          </Button>
          <Button variant="outline" className="flex-1 gap-2">
            <Download className="h-4 w-4" />
            Download One Pager
          </Button>
          <Button variant="outline" className="flex-1 gap-2">
            <CalendarDays className="h-4 w-4" />
            School Level Work-Back
          </Button>
        </div>
      </div>
    </section>
  )
}
