import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SmallBusinessPage() {
  const problems = [
    {
      'subtitle': "Navigating Tax Requirements",
      'details': "Understanding and complying with local tax regulations can be complex and time-consuming, often requiring resources that small businesses may not have readily available.",
    },
    {
      'subtitle': "Access to Financing",
      'details': "Securing funding is a significant challenge, with many small businesses struggling to access loans or investment due to stringent requirements and limited financial history.",
    },
    {
      'subtitle': "Infrastructure Limitations",
      'details': "Inconsistent power supply and limited internet connectivity can hinder operations, making it difficult to maintain smooth business processes and communication.",
    },
  ]

  const solutions = [
    {
      'subtitle': "Simplified Tax Management",
      'details': "Our platform offers tools to help you easily navigate and comply with local tax regulations, saving you time and reducing the risk of errors.",
    },
    {
      'subtitle': "Flexible Financing Options",
      'details': "We provide resources and guidance to help small businesses access financing, including loan application support and connections to potential investors.",
    },
    {
      'subtitle': "Reliable Infrastructure Solutions",
      'details': "Our solutions include tools to help manage operations efficiently, even in areas with inconsistent power supply and limited internet connectivity.",
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
                Grow Your Business with Confidence
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Empower your small business with the tools and insights needed to thrive in today's competitive market.
              </p>
              <Button size="lg" className="gap-2">
                Request a Demo <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="/images/solutions-small-business.jpg?height=500&width=500"
                alt="Small business team collaborating"
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
            <h2 className="text-3xl font-bold mb-4">Challenges Faced by Small Businesses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Small businesses face unique challenges when trying to grow and scale efficiently.
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
              Our platform provides small businesses with the tools they need to operate efficiently and scale
              effectively.
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

      {/* Features Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features for Small Businesses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed specifically to address the needs of growing businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track stock levels, set reorder points, and manage suppliers all in one place.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Financial Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Generate detailed financial reports and gain insights into your business performance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Improve communication and workflow with built-in collaboration tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              See how other small businesses have transformed with Cactus ERP.
            </p>
          </div>

          <blockquote className="border-l-4 border-primary pl-6 italic">
            <p className="text-lg mb-4">
              "Since implementing Cactus ERP, we've reduced inventory costs by 15% and improved our order fulfillment
              time by 30%. The system has paid for itself many times over."
            </p>
            <footer className="font-medium">— Michael Chen, Retail Store Owner</footer>
          </blockquote>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to grow your business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of small businesses that are scaling efficiently with Cactus ERP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Request a Demo <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

