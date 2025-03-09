import Link from "next/link"
import { ArrowRight, Calendar, Users, Lightbulb, Code, Globe, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const timeline = [
    {
      year: "2004",
      title: "Foundation",
      description:
        "Cactus Corporation was established to provide innovative software solutions in a competitive market.",
    },
    {
      year: "2009",
      title: "Vertical Market Expansion",
      description: "Expanded into multiple vertical markets including schools, doctors, pharmacies, and more.",
    },
    {
      year: "2014",
      title: "Web Development Services",
      description: "Launched web development services using Joomla and PHP to complement our software solutions.",
    },
    {
      year: "2021",
      title: "Cloud Transformation",
      description:
        "Began transitioning our solutions to cloud-based platforms for improved accessibility and scalability.",
    },
    {
      year: "2025",
      title: "AI Integration",
      description: "Started exploring AI solutions to enhance our products and prepare for the future of technology.",
    },
  ]

  const values = [
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "We prioritize our clients' needs, offering pragmatic solutions tailored to their specific circumstances.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously explore new technologies and methodologies to stay at the forefront of digital transformation.",
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "We maintain high standards in our software development, ensuring reliable and secure solutions.",
    },
    {
      icon: Globe,
      title: "Adaptability",
      description: "We embrace change and adapt our strategies to navigate the evolving technology landscape.",
    },
  ]

  const leadership = [
    {
      name: "Sebastian Gavor",
      position: "Chief Executive Officer",
      image: "/placeholder.svg?height=300&width=300",
      initials: "SG",
    },
    {
      name: "Kofi Bayitse",
      position: "Chief Operations Officer",
      image: "/placeholder.svg?height=300&width=300",
      initials: "KB",
    },
    {
      name: "Kwame Nkansah",
      position: "",
      image: "/placeholder.svg?height=300&width=300",
      initials: "KN",
    },
    {
      name: "Isaac Woollams",
      position: "",
      image: "/placeholder.svg?height=300&width=300",
      initials: "IW",
    },
  ]

  const technologies = [
    {
      title: "Cloud Computing",
      description: "Financial systems, data, and software development in the cloud",
      icon: "☁️",
    },
    {
      title: "Mobile Solutions",
      description: "Real-time, on-the-move transaction processing and reporting",
      icon: "📱",
    },
    {
      title: "Big Data & Analytics",
      description: "Supporting clients with deeper insights into customer behavior, risk, and fraud",
      icon: "📊",
    },
    {
      title: "Internet of Things (IoT)",
      description: "Sensor-driven software solutions for modern business needs",
      icon: "🌐",
    },
    {
      title: "Artificial Intelligence",
      description: "Software development, document processing, audit, and predictive analysis",
      icon: "🤖",
    },
  ]

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">About Cactus Corporation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 20 years, we've been delivering innovative software solutions to help businesses navigate the
            digital landscape.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Cactus Corporation, our mission is to empower businesses through innovative software solutions that
                drive digital transformation and create lasting value.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in taking an agile strategic approach to ensure our clients remain relevant and competitive
                in an ever-evolving technological landscape.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Cactus Corporation Mission"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two decades of innovation and growth in the software solutions industry.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary hidden md:block"></div>

                    {/* Content */}
                    <div className="md:w-1/2 p-4">
                      <div className={`bg-card rounded-lg p-6 shadow ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                        <div className="flex items-center mb-4">
                          <div className="bg-primary/10 text-primary rounded-full p-2 mr-4">
                          </div>
                          <h3 className="text-xl font-bold">
                            {item.year} - {item.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>

                    {/* Empty Space for Alignment */}
                    <div className="md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our approach to business and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals guiding Cactus Corporation's vision and strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto w-40 h-40 mb-4 rounded-full overflow-hidden bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-primary">
                    {leader.initials}
                  </div>
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover opacity-0"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                <p className="text-muted-foreground">{leader.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Focus Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Technology Focus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We embrace digital transformation through a range of innovative technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <CardTitle>{tech.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Initiatives</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ongoing and future projects that drive our innovation and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="bg-primary/10 text-primary rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Award className="h-7 w-7" />
                </div>
                <CardTitle>Vertical Market Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuing to develop and refine software solutions for various sectors including schools, healthcare,
                  and more.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="bg-primary/10 text-primary rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Code className="h-7 w-7" />
                </div>
                <CardTitle>AI Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Exploring artificial intelligence solutions to enhance our products and prepare for the future of
                  technology.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="bg-primary/10 text-primary rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Lightbulb className="h-7 w-7" />
                </div>
                <CardTitle>Training Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expanding our training offerings under the ThinkingInstitute brand to help clients maximize their
                  technology investments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us on Our Journey</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover how Cactus Corporation can help your business navigate the digital transformation landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/solutions">Explore Our Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

