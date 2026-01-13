import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Within months, our grooming salon started showing up at the top of Google. We’re now fully booked most weeks from organic searches alone.",
      name: "Laura Mitchell",
      role: "Owner, The London Grooming Co.",
      rating: 5,
      image: "/image/testimonials/Amelia Richer.webp",
    },
    {
      quote:
        "Local SEO finally made sense. Calls increased, map rankings improved, and we saw a clear jump in new daycare and boarding bookings.",
      name: "Jessica Miller",
      role: "Founder, Toms' Hundewelt",
      rating: 5,
      image: "/image/testimonials/Elizabeth Baker.webp",
    },
    {
      quote:
        "As a veterinary clinic, trust matters. The SEO strategy brought more qualified pet owners—not just traffic—and appointments increased steadily.",
      name: "Dr. Amanda Lewis",
      role: "Veterinarian, Clinica Veterinaria San Francesco",
      rating: 5,
      image: "/image/testimonials/Gabriela Portela.webp",
    },
    {
      quote:
        "Mobile grooming depends on local visibility. After the optimization, we started ranking across multiple service areas consistently.",
      name: "Lauren Chen",
      role: "Owner, PawMobile Grooming",
      rating: 5,
      image: "/image/testimonials/Jessica Morgan.webp",
    },
    {
      quote:
        "We saw real results fast. More website inquiries, better keyword rankings, and repeat clients finding us through Google.",
      name: "Sarah Jenkins",
      role: "Manager, Zurich Pet Spa",
      rating: 5,
      image: "/image/testimonials/Laura Mitchell.webp",
    },
    {
      quote:
        "SEO became a revenue channel for our pet store. Product pages started ranking, and organic sales grew month after month.",
      name: "Megan Taylor",
      role: "Co-Founder, Petbarn Metro",
      rating: 5,
      image: "/image/testimonials/mary licon.webp",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 relative">
              {/* Quote icon */}
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
