import { useRoute, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Calendar, Phone, Clock } from "lucide-react";
import { programs, getProgramBySlug } from "@shared/content";
import { getProgramImage } from "@/lib/images";

export default function ProgramDetail() {
  const [match, params] = useRoute("/programs/:slug");
  const [, setLocation] = useLocation();
  
  if (!match || !params?.slug) {
    return <NotFoundContent />;
  }

  const program = getProgramBySlug(params.slug);
  
  if (!program) {
    return <NotFoundContent />;
  }

  const imageUrl = getProgramImage(program.slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <p className="text-primary-foreground/80 font-heading font-semibold text-sm uppercase tracking-wider mb-2">
                Featured Program
              </p>
              <h1 className="font-heading font-bold text-3xl md:text-5xl mb-2">
                {program.title}
              </h1>
              <p className="text-white/80 italic text-lg">
                "{program.subtitle}"
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button 
            variant="ghost" 
            className="mb-8 gap-2"
            onClick={() => setLocation("/")}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  About This Program
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {program.fullDescription}
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  Program Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {program.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  Benefits
                </h2>
                <ul className="space-y-3">
                  {program.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {program.schedule && (
                <div>
                  <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                    Schedule
                  </h2>
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground">{program.schedule}</p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                    Join This Program
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Ready to participate? Contact us to register or learn more about this program.
                  </p>
                  <div className="space-y-4">
                    <Button 
                      className="w-full gap-2"
                      onClick={() => setLocation("/plan-your-visit")}
                    >
                      <Calendar className="w-4 h-4" />
                      Plan Your Visit
                    </Button>
                    <Button variant="outline" className="w-full gap-2" asChild>
                      <a href="tel:+2560776630948">
                        <Phone className="w-4 h-4" />
                        Call Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                    Other Programs
                  </h3>
                  <div className="space-y-2">
                    {programs.filter(p => p.slug !== program.slug).map((p) => (
                      <Button 
                        key={p.slug}
                        variant="ghost" 
                        className="w-full justify-start text-left h-auto py-2"
                        onClick={() => setLocation(`/programs/${p.slug}`)}
                      >
                        {p.title}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function NotFoundContent() {
  const [, setLocation] = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-heading font-bold text-4xl text-foreground mb-4">
            Program Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The program you're looking for doesn't exist or has been moved.
          </p>
          <Button onClick={() => setLocation("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
