import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, DollarSign, Backpack, ClipboardList, Phone, Mail, MapPin } from "lucide-react";
import { visitInfo } from "@shared/content";

export default function PlanVisit() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-primary py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary-foreground/80 font-heading font-semibold text-sm uppercase tracking-wider mb-2">
              Visit Us
            </p>
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-4">
              Plan Your Visit
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Everything you need to know to make the most of your visit to Hard Rock Model Farm.
            </p>
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
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-heading font-bold text-xl text-foreground">
                      Operating Hours
                    </h2>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span>Monday - Friday</span>
                      <span className="font-medium text-foreground">{visitInfo.operatingHours.weekdays}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span>Saturday</span>
                      <span className="font-medium text-foreground">{visitInfo.operatingHours.saturday}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Sunday</span>
                      <span className="font-medium text-foreground">{visitInfo.operatingHours.sunday}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-heading font-bold text-xl text-foreground">
                      Admission Fees
                    </h2>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span>Adults</span>
                      <span className="font-medium text-foreground">{visitInfo.admissionFees.adults}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span>Children</span>
                      <span className="font-medium text-foreground">{visitInfo.admissionFees.children}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span>Groups</span>
                      <span className="font-medium text-foreground">{visitInfo.admissionFees.groups}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Special Programs</span>
                      <span className="font-medium text-foreground">{visitInfo.admissionFees.specialPrograms}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Backpack className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-heading font-bold text-xl text-foreground">
                      What to Bring
                    </h2>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {visitInfo.whatToBring.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ClipboardList className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-heading font-bold text-xl text-foreground">
                      Visitor Guidelines
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {visitInfo.guidelines.map((guideline) => (
                      <li key={guideline} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        {guideline}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <a href="tel:+2560776630948" className="text-muted-foreground hover:text-primary">
                          {visitInfo.contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a href={`mailto:${visitInfo.contactInfo.email}`} className="text-muted-foreground hover:text-primary break-all">
                          {visitInfo.contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-muted-foreground">
                          {visitInfo.contactInfo.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-4">
                    Book a Tour
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    For group visits or special arrangements, contact us in advance to ensure the best experience.
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <a href="tel:+2560776630948">
                      <Phone className="w-4 h-4 mr-2" />
                      Call to Book
                    </a>
                  </Button>
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
