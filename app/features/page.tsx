import { ArrowRight, BarChart3, DollarSign, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function FeaturesPage() {
  const features = [
    {
      title: "Operations Management",
      description: "Streamline your daily operations with our comprehensive operations management tools.",
      icon: Settings,
      benefits: ["Efficient task management", "Real-time tracking and monitoring", "Automated workflows"],
      image: "/images/features-1.jpg?height=400&width=400",
    },
    {
      title: "Financial Accounting",
      description: "Manage your finances with ease using our robust accounting features.",
      icon: DollarSign,
      benefits: ["Automated bookkeeping", "Invoice and payment management", "Financial reporting"],
      image: "/images/features-2.jpg?height=500&width=500",
    },
    {
      title: "Reporting and Analytics",
      description: "Gain valuable insights into your business with our advanced reporting and analytics tools.",
      icon: BarChart3,
      benefits: ["Customizable reports", "Real-time dashboards", "Data visualization"],
      image: "/images/features-3.jpg?height=300&width=500",
    },
  ]

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Key Features of Cactus ERP
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the powerful features that make Cactus ERP the perfect solution for your business.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 md:gap-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
                <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-sm font-medium">
                      Feature {index + 1}
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Key Benefits:</h3>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3 w-3 text-primary"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Transform your business operations with Cactus ERP's powerful features.
          </p>
          <Button size="lg" className="gap-2">
            Request a Demo <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}

