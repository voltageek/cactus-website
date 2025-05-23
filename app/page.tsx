import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
            Simplify Your Business Operations with CactusERP
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The all-in-one ERP solution designed to streamline your operations, manage finances, and provide valuable
            insights for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://portal.cactuserp.org/dashboard">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Content Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Businesses Worldwide</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of businesses that use CactusERP to optimize their operations
          </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-muted/30 p-8 rounded-lg text-center">
            <p className="text-lg mb-4">Explore our features or check out our pricing plans</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/features">View Features</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/pricing">See Pricing</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

