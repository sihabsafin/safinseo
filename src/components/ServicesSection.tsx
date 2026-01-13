import { Code, FileSearch, Lightbulb, MapPin, ShoppingCart, Rocket, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Technical SEO",
      description: "Fix crawl errors, improve site speed, implement structured data, and ensure your site is fully optimized for search engines.",
    },
    {
      icon: FileSearch,
      title: "On-Page SEO",
      description: "Optimize meta tags, headings, content structure, and internal linking to maximize relevance and rankings.",
    },
    {
      icon: Lightbulb,
      title: "Keyword Research",
      description: "Uncover high-intent keywords your audience actually searches for, with clear prioritization for quick wins.",
    },
    {
      icon: FileSearch,
      title: "Content Strategy",
      description: "Develop a content roadmap that attracts, educates, and converts—from blog posts to pillar pages and beyond.",
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Dominate local search results, optimize Google Business Profile, and drive foot traffic to your locations.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce SEO",
      description: "Product page optimization, category structure, and technical fixes tailored for online stores and marketplaces.",
    },
    
  ];

  return (
    <section className="section-padding">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            SEO Solutions for <span className="gradient-text">Every Business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're a local business or a global SaaS, I offer tailored SEO services 
            designed to meet your specific goals and industry demands.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="service-card group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all duration-300">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
