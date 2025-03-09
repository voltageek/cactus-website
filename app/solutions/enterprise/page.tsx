import { ArrowRight, CheckCircle2, Shield, Zap, BarChart3, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EnterprisePage() {
  const problems = [
    {
      'subtitle': "Integrating disparate systems and data sources",
      'details': "Enterprises often struggle with integrating various systems and data sources, leading to data silos and inefficiencies.",
    },
    {
      'subtitle': "Managing complex workflows and processes",
      'details': "Complex workflows and processes can be difficult to manage, resulting in bottlenecks and reduced productivity.",
    },
    {
      'subtitle': "Ensuring data security and compliance",
      'details': "Maintaining data security and complying with industry regulations is a critical challenge for enterprises.",
    },
    {
      'subtitle': "Gaining real-time visibility into business performance",
      'details': "Enterprises need real-time visibility into their business performance to make informed decisions and respond quickly to changing market conditions.",
    },
  ]

  const solutions = [
    {
      'subtitle': "Customizable integrations with existing systems",
      'details': "Our platform offers customizable integrations with existing systems, breaking down data silos and improving data flow.",
    },
    {
      'subtitle': "Advanced workflow automation capabilities",
      'details': "We provide advanced workflow automation capabilities to streamline complex processes and improve productivity.",
    },
    {
      'subtitle': "Robust security features and compliance certifications",
      'details': "Our solution includes robust security features and compliance certifications to ensure data security and meet regulatory requirements.",
    },
    {
      'subtitle': "Real-time dashboards and reporting for data-driven decision-making",
      'details': "We offer real-time dashboards and reporting tools that provide enterprises with the insights they need to make data-driven decisions.",
    },
    {
      'subtitle': "Scalable architecture to support global operations",
      'details': "Our scalable architecture supports global operations, allowing enterprises to expand their reach without compromising performance.",
    },
  ]


  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
                Optimize Your Enterprise Operations
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Empower your enterprise with a comprehensive ERP solution designed to handle complex operations at
                scale.
              </p>
              <Button size="lg" className="gap-2">
                Contact Sales <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="/images/solutions-enterprise.jpg?height=500&width=500"
                alt="Enterprise with interconnected systems"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Enterprise Challenges</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Large organizations face unique challenges when managing complex operations across multiple locations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {index + 1}
                    </span>
                    {problem.subtitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{problem.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Cactus ERP Helps</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our enterprise-grade platform is built to handle the most demanding business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{solution.subtitle}</h3>
                  <p className="text-muted-foreground">{solution.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful capabilities designed for large-scale operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Shield className="h-10 w-10 mx-auto text-primary mb-2" />
                <CardTitle>Advanced Security</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Enterprise-grade security with role-based access control and data encryption.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Zap className="h-10 w-10 mx-auto text-primary mb-2" />
                <CardTitle>Workflow Automation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Automate complex business processes across departments and systems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <BarChart3 className="h-10 w-10 mx-auto text-primary mb-2" />
                <CardTitle>Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Gain deep insights with customizable dashboards and business intelligence tools.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Globe className="h-10 w-10 mx-auto text-primary mb-2" />
                <CardTitle>Global Scalability</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Support for multiple currencies, languages, and regional compliance requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Enterprise Success Story</h2>
            <p className="text-lg text-muted-foreground">
              See how a global manufacturing company transformed their operations with Cactus ERP.
            </p>
          </div>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Global Manufacturing Inc.</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Challenges:</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Managing operations across 12 countries</li>
                  <li>Integrating legacy systems with new technologies</li>
                  <li>Ensuring compliance with regional regulations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Results:</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>30% reduction in operational costs</li>
                  <li>50% faster financial close process</li>
                  <li>Seamless integration of all business units</li>
                </ul>
              </div>
            </div>
            <blockquote className="border-l-4 border-primary pl-6 italic">
              <p className="text-lg mb-4">
                "Cactus ERP has transformed how we operate globally. We now have real-time visibility across all our
                business units and can make data-driven decisions faster than ever before."
              </p>
              <footer className="font-medium">— Jennifer Martinez, CIO</footer>
            </blockquote>
          </Card>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to optimize your enterprise?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact our enterprise sales team for a personalized consultation and custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Contact Sales <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

