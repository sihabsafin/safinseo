import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Target } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float delay-500" />
      
      <div className="container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Trusted by 50+ Growth-Focused Brands
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 animate-fade-in-up delay-100">
            Data-Driven SEO That{" "}
            <span className="gradient-text">Turns Traffic Into Revenue</span>
          </h1>
          
          {/* Sub headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            I help ambitious businesses dominate search results, attract qualified leads, 
            and build sustainable organic growth through strategic, results-driven SEO.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://wa.link/ywigj3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button variant="hero-outline" size="xl" asChild>
              <a
                href="https://calendly.com/sihab_safin/book-an-seo-strategy-consultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Strategy Call
              </a>
            </Button>
          </div>
          
          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-fade-in-up delay-400">
            {[
              { icon: TrendingUp, value: "5M+", label: "Qualified Organic Visits" },
              { icon: BarChart3, value: "500%", label: "Average Growth Achieved" },
              { icon: Target, value: "150+", label: "Keywords Ranked Top 10" },
              { icon: ArrowRight, value: "$3M+", label: "Revenue from SEO Channels" },
            ].map((stat, i) => (
              <div key={i} className="glass-card rounded-xl p-4 md:p-6 text-center">
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
