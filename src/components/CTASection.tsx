import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-3xl gradient-border bg-card flex items-center justify-center mx-auto mb-8 glow">
            <Sparkles className="h-10 w-10 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
            Ready to <span className="gradient-text">Dominate Search</span>?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Stop leaving traffic (and revenue) on the table. Let's build an SEO strategy 
            that drives sustainable, compounding growth for your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://wa.link/ywigj3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get My Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button variant="hero-outline" size="xl" asChild>
              <a
                href="https://calendly.com/sihab_safin/book-an-seo-strategy-consultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Call
              </a>
            </Button>
          </div>

          {/* Trust note */}
          <p className="text-sm text-muted-foreground mt-8">
            ✓ No obligation &nbsp;&nbsp;•&nbsp;&nbsp; ✓ 100% Free &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Get actionable insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
