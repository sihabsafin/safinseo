import { Shield, Award, Clock, Users } from "lucide-react";

const TrustSection = () => {
  const trustItems = [
    { icon: Clock, value: "6+", label: "Years Experience" },
    { icon: Users, value: "60+", label: "Clients Served" },
    { icon: Award, value: "98%", label: "Client Retention" },
    { icon: Shield, value: "15+", label: "Industries" },
  ];

  const tools = [
    "Google Search Console",
    "Google Analytics",
    "Ahrefs",
    "SEMrush",
    "Screaming Frog",
    "PageSpeed Insights",
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      
      <div className="container relative z-10">
        {/* Trust metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustItems.map((item, i) => (
            <div 
              key={i} 
              className="metric-card text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
        
        {/* Tools section */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest">
            Powered by Industry-Leading Tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {tools.map((tool, i) => (
              <div 
                key={i}
                className="px-4 py-2 rounded-lg bg-secondary/50 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
