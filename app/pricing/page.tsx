import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Free",
      description: "Ideal for solopreneurs & freelancers",
      price: {
        monthly: "Free",
        annually: "Free",
      },
      features: [
        "Receipts Management",
        "Expenses Management",
        "Tax Calculations",
        "Cash-flow, income & expense reports",
        "Email support",
      ],
      cta: "Get Started for Free",
      popular: false,
    },
    {
      name: "Business",
      description: "Ideal for small to medium-sized businesses",
      price: {
        monthly: "GHS 350",
        annually: "GHS 300",
      },
      features: [
        "All Free Tier features",
        "Up to 25 users",
        "Invoicing",
        "Bank Lodgements",
        "Bank Statement Reconciliation",
        "Tax Reports",
        "Inventory Management",
        "Custom Chart of Accounts",
        "Trial Balances",
        "Balance Sheet",
      ],
      cta: "Choose Business Plan",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Ideal for large organizations with complex needs",
      price: {
        monthly: "Contact Us",
        annually: "Contact Us",
      },
      features: [
        "All Business Plan features",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security",
        "Workflow automation",
        "Advanced reporting",
        "API access",
        "24/7 phone support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const addOns = [
    {
      name: "Payroll Integration",
      description: "Streamline your payroll process with our integrated payroll module.",
      price: {
        monthly: "$40",
        annually: "$35",
      },
      icon: "💰",
    },
    {
      name: "Hospital Management System",
      description: "One-stop shop for managing all aspects of your private clinic/hospital.",
      price: {
        monthly: "$199",
        annually: "$185",
      },
      icon: "🏥",
    },
    {
      name: "School Management System",
      description: "One-stop shop for managing all aspects of your private clinic/hospital.",
      price: {
        monthly: "$100",
        annually: "$95",
      },
      icon: "🏫",
    },
    {
      name: "AI Integration",
      description: "Enhance your ERP with AI-powered insights and automation. (3,000 credits included)",
      price: {
        monthly: "$15",
        annually: "$12",
      },
      icon: "🤖",
    },
    {
      name: "Advanced Analytics",
      description: "Gain deeper insights with our advanced analytics module.",
      price: {
        monthly: "$25",
        annually: "$19",
      },
      icon: "📊",
    },
  ]

  const faqs = [
    {
      question: "How does the billing cycle work?",
      answer:
        "You can choose between monthly or annual billing. Annual billing comes with a discount, saving you money over the course of a year.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can upgrade your plan at any time. Downgrades will take effect at the end of your current billing cycle.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial on our Business plan so you can experience all the features before committing.",
    },
    {
      question: "How many users can I add to my account?",
      answer:
        "The Free plan supports up to 5 users. The Business plan includes unlimited users. For Enterprise, we can customize based on your needs.",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer:
        "Yes, we offer special pricing for non-profit organizations. Please contact our sales team for more information.",
    },
  ]

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Flexible Pricing Plans to Fit Your Business Needs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that's right for you. Scale up as your business grows with our flexible and affordable
            pricing options.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <Tabs defaultValue="monthly" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                <TabsTrigger value="annually">
                  Annual Billing
                  <Badge variant="outline" className="ml-2 bg-primary/10 text-primary">
                    Save 20%
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price.monthly}</span>
                    {plan.price.monthly !== "Free" && plan.price.monthly !== "Contact Us" && (
                      <span className="text-muted-foreground ml-1">/month</span>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Optional Add-ons</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your ERP experience with these powerful add-ons
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-3xl mb-2">{addon.icon}</div>
                  <CardTitle>{addon.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{addon.description}</p>
                  <div className="font-bold text-xl">
                    {addon.price.monthly}
                    <span className="text-muted-foreground text-sm ml-1">/month</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Add to Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our pricing and plans
            </p>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact our sales team for a personalized consultation and find the perfect plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Contact Sales <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

