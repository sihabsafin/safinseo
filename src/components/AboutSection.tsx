import { Briefcase, Target, TrendingUp, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding bg-surface-elevated/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image / Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
              <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center overflow-hidden">
                {/* Image replacing placeholder visual */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

                  {/* Profile Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/image/sihabsafin.jpeg"
                      alt="Sihab Safin - SEO Expert"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-10 left-10 w-16 h-16 rounded-2xl glass-card flex items-center justify-center animate-float">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 rounded-2xl glass-card flex items-center justify-center animate-float delay-300">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 glow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold">6+ Years</div>
                  <div className="text-sm text-muted-foreground">
                    In SEO & Growth
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              About
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Growth Partner,{" "}
              <span className="gradient-text">Not Just a Consultant</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I’m Sihab Safin, an SEO growth specialist who helps businesses turn
                search visibility into real revenue. Over the years, I’ve worked
                with service brands, local businesses, and growth-focused companies
                to move them from invisible to consistently ranked, booked, and
                profitable through organic search.
              </p>
              <p>
                My approach is simple but effective: deep technical SEO, high-intent
                keyword strategy, and execution that drives measurable results—not
                vanity metrics. From increasing qualified leads to scaling organic
                sales, I focus on SEO that compounds over time and directly impacts
                your bottom line.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Briefcase, text: "50+ Successful Projects" },
                { icon: Target, text: "Data-Driven Approach" },
                { icon: TrendingUp, text: "Proven ROI Focus" },
                { icon: Award, text: "Industry Recognition" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
