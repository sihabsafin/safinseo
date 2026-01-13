import { Search, Target, Code, FileText, Link2, BarChart3 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "SEO Audit & Research",
      description: "Deep-dive analysis of your current site health, competitor landscape, and market opportunities to build a data-driven foundation.",
    },
    {
      icon: Target,
      number: "02",
      title: "Keyword Strategy & Search Intent",
      description: "Identify high-value keywords that match your audience's intent and map them to your business goals for maximum ROI.",
    },
    {
      icon: Code,
      number: "03",
      title: "Technical SEO Optimization",
      description: "Fix critical technical issues—site speed, crawlability, indexation, schema markup—to ensure search engines love your site.",
    },
    {
      icon: FileText,
      number: "04",
      title: "On-Page SEO & Content",
      description: "Optimize every page for target keywords while creating content that ranks, engages, and converts visitors into customers.",
    },
    {
      icon: Link2,
      number: "05",
      title: "Authority Building & Links",
      description: "Build high-quality backlinks and brand mentions through strategic outreach, digital PR, and content partnerships.",
    },
    {
      icon: BarChart3,
      number: "06",
      title: "Tracking, Analytics & Growth",
      description: "Continuous monitoring, A/B testing, and data analysis to refine strategy and scale your organic growth month over month.",
    },
  ];

  return (
    <section className="section-padding bg-surface-elevated/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            The Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How SEO <span className="gradient-text">Actually Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            SEO isn't magic—it's a systematic, data-driven process. Here's exactly how I help 
            businesses achieve sustainable organic growth.
          </p>
        </div>
        
        {/* Process steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="process-step flex gap-6 pb-12 last:pb-0">
              {/* Step number and icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl gradient-border bg-card flex items-center justify-center relative glow-sm">
                  <step.icon className="h-7 w-7 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="pt-2">
                <h3 className="text-xl md:text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
