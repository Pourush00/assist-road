import React from 'react';
import { Car, Wrench, Fuel, Battery, Shield, Clock, MapPin, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Professional Towing',
      description: 'Safe and reliable towing for all vehicle types',
      features: [
        'Flatbed and wheel-lift towing',
        'Local and long-distance service',
        'Motorcycle and heavy-duty vehicles',
        'Accident recovery',
        'Vehicle storage options'
      ],
      price: 'From $80',
      responseTime: '15-30 minutes',
      availability: '24/7'
    },
    {
      icon: Wrench,
      title: 'Mobile Mechanic',
      description: 'Expert on-site repairs and diagnostics',
      features: [
        'Engine diagnostics and repair',
        'Brake system service',
        'Tire installation and repair',
        'Battery replacement',
        'Oil changes and maintenance'
      ],
      price: 'From $120',
      responseTime: '20-45 minutes',
      availability: '24/7'
    },
    {
      icon: Fuel,
      title: 'Emergency Fuel Delivery',
      description: 'Fast fuel delivery to get you moving',
      features: [
        'Gasoline and diesel delivery',
        '2-5 gallon emergency supply',
        'Premium fuel options',
        'Eco-friendly disposal',
        'Payment on delivery'
      ],
      price: 'From $35',
      responseTime: '10-20 minutes',
      availability: '24/7'
    },
    {
      icon: Battery,
      title: 'Battery & Jump Start',
      description: 'Battery testing, jump start, and replacement',
      features: [
        'Professional battery testing',
        'Jump start service',
        'New battery installation',
        'Charging system check',
        'Warranty on new batteries'
      ],
      price: 'From $45',
      responseTime: '15-25 minutes',
      availability: '24/7'
    },
    {
      icon: Shield,
      title: 'Lockout Service',
      description: 'Safe vehicle entry without damage',
      features: [
        'Professional lockout tools',
        'No damage guarantee',
        'All vehicle makes and models',
        'Key replacement service',
        'Transponder programming'
      ],
      price: 'From $60',
      responseTime: '15-30 minutes',
      availability: '24/7'
    },
    {
      icon: Clock,
      title: 'Emergency First Aid',
      description: 'Basic medical assistance until help arrives',
      features: [
        'Certified first aid technicians',
        'Emergency medical supplies',
        'Coordination with emergency services',
        'Basic wound care',
        'Emergency transportation'
      ],
      price: 'From $150',
      responseTime: '8-15 minutes',
      availability: '24/7'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emergency/10 to-secondary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Complete Roadside Assistance Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Professional emergency services available 24/7 across the region. 
              Our certified technicians respond quickly to get you back on the road safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="emergency" size="lg">
                <Phone className="h-5 w-5" />
                Call Emergency: 1-800-ROADHELP
              </Button>
              <Button variant="hero" size="lg">
                <MapPin className="h-5 w-5" />
                Find Nearest Service
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Professional Emergency Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive roadside assistance with certified technicians and modern equipment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-emergency/10 p-3 rounded-lg">
                          <IconComponent className="h-6 w-6 text-emergency" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Response:</span>
                            <p className="font-medium text-foreground">{service.responseTime}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Available:</span>
                            <p className="font-medium text-success">{service.availability}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground">Service Includes:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-center">
                                <div className="w-1 h-1 bg-emergency rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-lg font-semibold text-foreground">
                            {service.price}
                          </span>
                          <span className="text-xs text-success bg-success/10 px-2 py-1 rounded">
                            Licensed & Insured
                          </span>
                        </div>
                        <Button variant="emergency" className="w-full">
                          Request Service
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Coverage Areas
              </h2>
              <p className="text-muted-foreground">
                We provide emergency roadside assistance across major highways and urban areas
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="bg-emergency/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-emergency" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Highway Coverage</h3>
                <p className="text-sm text-muted-foreground">
                  Complete coverage of major highways and interstates within 50-mile radius
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Urban Areas</h3>
                <p className="text-sm text-muted-foreground">
                  City-wide service including residential areas, business districts, and parking facilities
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-success/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Shield className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Remote Areas</h3>
                <p className="text-sm text-muted-foreground">
                  Extended coverage to rural roads and remote locations with specialized equipment
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;