import React from 'react';
import { Shield, Clock, Users, Award, Phone, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Service Providers' },
    { icon: Clock, value: '15min', label: 'Average Response' },
    { icon: Shield, value: '98%', label: 'Customer Satisfaction' },
    { icon: Award, value: '24/7', label: 'Support Available' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Operations Director',
      experience: '12 years in emergency services',
      image: '/placeholder.svg'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Technical Lead',
      experience: '15 years automotive experience',
      image: '/placeholder.svg'
    },
    {
      name: 'Emily Chen',
      role: 'Customer Success Manager',
      experience: '8 years customer service',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emergency/10 to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About RoadAssist
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Since 2015, we've been providing reliable, professional roadside assistance 
                to drivers across the region. Our mission is to ensure no one is left stranded 
                on the road, day or night.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="emergency" size="lg">
                  <Phone className="h-5 w-5" />
                  Emergency: 1-800-ROADHELP
                </Button>
                <Button variant="hero" size="lg">
                  Our Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Trusted by Thousands
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our track record speaks for itself. We're proud to be the most reliable 
                roadside assistance service in the region.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="bg-emergency/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-emergency" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    RoadAssist was founded in 2015 by a team of automotive professionals 
                    who experienced firsthand the frustration of being stranded without 
                    reliable help. We saw the need for a service that combined quick 
                    response times with professional, trustworthy technicians.
                  </p>
                  <p>
                    What started as a small local operation has grown into the region's 
                    most trusted roadside assistance network. We've helped over 50,000 
                    drivers get back on the road safely, and we're available 24/7, 365 
                    days a year.
                  </p>
                  <p>
                    Our commitment to excellence means continuous training for our 
                    technicians, modern equipment, and a customer-first approach that 
                    has earned us a 98% satisfaction rating.
                  </p>
                </div>
              </div>
              
              <Card className="p-8 bg-background">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Why Choose RoadAssist?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-emergency/10 p-1 rounded">
                      <Shield className="h-4 w-4 text-emergency" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Licensed & Insured</h4>
                      <p className="text-sm text-muted-foreground">
                        All technicians are certified and fully insured
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-secondary/10 p-1 rounded">
                      <Clock className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Fast Response</h4>
                      <p className="text-sm text-muted-foreground">
                        Average 15-minute response time in urban areas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-success/10 p-1 rounded">
                      <Award className="h-4 w-4 text-success" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Quality Guarantee</h4>
                      <p className="text-sm text-muted-foreground">
                        100% satisfaction guarantee on all services
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our experienced team ensures every service call meets our high standards 
                for professionalism and reliability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="w-24 h-24 bg-muted rounded-full mx-auto flex items-center justify-center">
                      <Users className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-emergency font-medium text-sm">
                        {member.role}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {member.experience}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-emergency to-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Emergency Assistance?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Don't wait until you're stranded. Save our number and know that help 
              is just a phone call away, 24 hours a day, 7 days a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Phone className="h-5 w-5" />
                Call 1-800-ROADHELP
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <MapPin className="h-5 w-5" />
                Find Services
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;