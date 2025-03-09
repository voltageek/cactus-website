import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+233 59 456 4419",
      action: "tel:+233594564419",
      actionText: "Call Us",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@cactuserp.org",
      action: "mailto:info@cactuserp.org",
      actionText: "Email Us",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Accra, Ghana",
      action: "#map",
      actionText: "View Map",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9AM - 5PM",
      action: null,
      actionText: null,
    },
  ]

  const faqs = [
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer:
        "We strive to respond to all inquiries within 24 business hours. For urgent matters, we recommend calling our support line directly.",
    },
    {
      question: "Do you offer product demonstrations?",
      answer:
        "Yes, we offer personalized product demonstrations for all our solutions. You can request a demo through our contact form or by calling us directly.",
    },
    {
      question: "Can I get technical support through this contact form?",
      answer:
        "While you can use the contact form for initial technical support inquiries, existing customers are encouraged to use our dedicated support portal for faster assistance.",
    },
    {
      question: "Do you have offices outside of Ghana?",
      answer:
        "Currently, our main office is located in Accra, Ghana. However, we serve clients globally and can arrange virtual meetings regardless of your location.",
    },
  ]

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our products or services? We're here to help. Reach out to our team.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">{item.details}</p>
                  {item.action && (
                    <Button variant="outline" asChild size="sm">
                      <a href={item.action}>
                        {item.actionText} <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <iframe
                src="https://n8n.cactuserp.org/form/871532b6-f606-43ad-8a66-09664bbf746c"
                width="100%"
                height="600"
                frameBorder="0"
                title="Contact Form"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Visit our office in Accra, Ghana.</p>
          </div>

          <div className="bg-muted rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
            {/* Placeholder for map - in a real implementation, you would use Google Maps or another map service */}
            <div className="text-center p-8">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Cactus Corporation</h3>
              <p className="text-muted-foreground">Accra, Ghana</p>
              <Button variant="outline" className="mt-4">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Find answers to common questions about contacting us.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Explore our solutions or contact our sales team to learn how Cactus ERP can help your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+233594564419">Call Sales</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

