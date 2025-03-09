import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SolopreneursPage() {
  const problems = [
    {
      'subtitle': "Keeping your books",
      'details': "Managing finances and accounting on your own can be daunting when you're starting. Getting it wrong can cause unneccessary delays when you're seeking financing or investment as your business grows.",
    },
    {
      'subtitle': "Managing your cashflow",
      'details': "Cash is the lifeblood of your business. Understanding where every cedi coming into and going out of your business is critical to keep your dream alive.",
    },
    {
      'subtitle': "Money is tight",
      'details': "Being an soloprenuer is hard. Each cedi has a lot of jobs to do and it can be difficult to find the right kind of help keeping your business's records in good shape.",
    },
  ]

  const solutions = [
    {
      'subtitle': "Free plan",
      'details': "We've been there and we understand the struggle. Our free solopreneur plan is here to help, providing your with the essentials you need to keep your books properly. ",
    },
    {
      'subtitle': "Intuitive Tools",
      'details': "Our team has used its very extensive understanding of the African business environemnt to build a platform that is easy to use so you can focus on the core of your business.",
    },
    {
      'subtitle': "Accessible Financial reporting",
      'details': "Our financial reporting tools provide you with realtime data and insights about your business.",
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
                Streamline Your Solo Operations
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                As a solopreneur or freelancer, you wear many hats. Let Cactus ERP handle the administrative burden so
                you can focus on what you do best.
              </p>
              <Button size="lg" className="gap-2">
                Get Started for Free <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="/images/solutions-solopreneur.jpg?height=500&width=500"
                alt="Solopreneur working efficiently"
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
            <h2 className="text-3xl font-bold mb-4">Challenges Faced by Solopreneurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Running a business on your own comes with unique challenges. We understand the obstacles you face.
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
              Our platform is designed to address the specific needs of solopreneurs and freelancers.
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

      {/* Testimonial Section
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Hear from solopreneurs who have transformed their businesses with Cactus ERP.
            </p>
          </div>

          <blockquote className="border-l-4 border-primary pl-6 italic">
            <p className="text-lg mb-4">
              "As a freelance designer, I was spending too much time on invoicing and tracking expenses. Cactus ERP has
              automated these tasks, giving me back hours each week to focus on my clients."
            </p>
            <footer className="font-medium">— Sarah Johnson, Graphic Designer</footer>
          </blockquote>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to streamline your business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of solopreneurs who have simplified their operations with Cactus ERP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Get Started for Free <ArrowRight className="h-4 w-4" />
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

