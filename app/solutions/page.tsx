import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Solopreneurs & Freelancers",
      description: "Streamline Your Solo Operations",
      image: "/images/solutions-solopreneur.jpg?height=200&width=400",
      href: "/solutions/solopreneurs",
      cta: "Learn More",
    },
    {
      title: "Small Businesses",
      description: "Grow Your Business with Confidence",
      image: "/images/solutions-small-business.jpg?height=200&width=400",
      href: "/solutions/small-business",
      cta: "Learn More",
    },
    {
      title: "Enterprises",
      description: "Optimize Your Enterprise Operations",
      image: "/images/solutions-enterprise.jpg?height=200&width=400",
      href: "/solutions/enterprise",
      cta: "Learn More",
    },
  ]

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Solutions Tailored to Your Business
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a solopreneur, small business, or enterprise, Cactus ERP has the right solution for you.
          </p>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader className="pb-4">
                  <CardTitle>{solution.title}</CardTitle>
                  <CardDescription className="text-lg">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <img
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-muted-foreground">
                    Discover how Cactus ERP can help {solution.title.toLowerCase()} overcome challenges and achieve
                    success.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={solution.href}>
                      {solution.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for a personalized demo and see how Cactus ERP can help you achieve your business goals.
          </p>
          <Button size="lg" className="gap-2">
            Request a Demo <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}

