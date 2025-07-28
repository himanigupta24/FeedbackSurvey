import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Globe, Shield, Smartphone, TrendingUp, Users } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "Easy Survey Creation",
    description: "Create professional surveys in minutes with our intuitive drag-and-drop builder.",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: Globe,
    title: "Public Distribution",
    description: "Share surveys with unique URLs that work without requiring user registration.",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    icon: Shield,
    title: "Role-based Access",
    description: "Secure admin and user roles with proper authentication and authorization.",
    gradient: "from-amber-500 to-orange-400"
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Beautiful, responsive design that works perfectly on all devices and screen sizes.",
    gradient: "from-emerald-500 to-teal-400"
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Comprehensive analytics dashboard with charts, graphs, and detailed insights.",
    gradient: "from-violet-500 to-fuchsia-400"
  },
  {
    icon: Users,
    title: "User Management",
    description: "Manage users, track responses, and organize feedback efficiently.",
    gradient: "from-rose-500 to-pink-400"
  },
]

export function Features() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Everything you need to collect feedback
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you create, distribute, and analyze surveys effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden bg-background/50 hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
