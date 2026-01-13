import { TrendingUp, Users, Target, DollarSign } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      industry: "🐕 DOG GROOMING",
      title: "Premium Dog Grooming Salon",
      metrics: [
        { icon: TrendingUp, value: "+310%", label: "Organic Traffic" },
        { icon: Target, value: "#1-3", label: "For “dog grooming near me” & service keywords" },
        { icon: DollarSign, value: "+65%", label: "Online Booking Growth" },
      ],
      period: "7 months",
    },
    {
      industry: "🏠 PET BOARDING / DAYCARE",
      title: "Luxury Pet Boarding & Dog Daycare",
      metrics: [
        { icon: TrendingUp, value: "+420%", label: "Local Search Visibility" },
        { icon: Users, value: "Top 3-Pack", label: "Google Maps Rankings" },
        { icon: DollarSign, value: "+88%", label: "Booking Inquiries" },
      ],
      period: "6 months",
    },
    {
      industry: "🩺 VETERINARY CLINIC",
      title: "Multi-Service Vet Clinic (Dog & Cat)",
      metrics: [
        { icon: TrendingUp, value: "+260%", label: "Local Traffic" },
        { icon: Target, value: "#1–5", label: "Treatment & emergency keywords" },
        { icon: Users, value: "+72%", label: "New Patient Appointments" },
      ],
      period: "4 months",
    },

    /* ================== DEMO CASE STUDIES ================== */

    {
      industry: "🚐 MOBILE DOG GROOMING",
      title: "On-Demand Mobile Dog Grooming Service",
      metrics: [
        { icon: TrendingUp, value: "+390%", label: "Service-Area Traffic" },
        { icon: Users, value: "Top 3-Pack", label: "Multiple Neighborhoods" },
        { icon: DollarSign, value: "+110%", label: "Monthly Bookings" },
      ],
      period: "5 months",
    },
    {
      industry: "🚶 DOG WALKING SERVICES",
      title: "Professional Dog Walking Company",
      metrics: [
        { icon: TrendingUp, value: "+240%", label: "Organic Leads" },
        { icon: Target, value: "#1–3", label: "Local Intent Keywords" },
        { icon: Users, value: "+95%", label: "Recurring Clients" },
      ],
      period: "3 months",
    },
    {
      industry: "🛒 PET E-COMMERCE",
      title: "Pet Supplies & Accessories Brand",
      metrics: [
        { icon: TrendingUp, value: "+510%", label: "Organic Revenue" },
        { icon: Target, value: "#1–5", label: "Product Category Keywords" },
        { icon: DollarSign, value: "+$100K", label: "SEO-Driven Sales" },
      ],
      period: "9 months",
    },
  ];

  return (
    <section className="section-padding bg-surface-elevated/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Real Results, <span className="gradient-text">Real Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Numbers don't lie. Here's what happens when strategy meets execution.
          </p>
        </div>

        {/* Case studies grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-glow-gradient" />

              {/* Header */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                  {study.industry}
                </span>
                <h3 className="text-xl font-bold mt-1">{study.title}</h3>
                <span className="text-sm text-muted-foreground">
                  {study.period}
                </span>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                {study.metrics.map((metric, j) => (
                  <div key={j} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                      <metric.icon className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-success">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
