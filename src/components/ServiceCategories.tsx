import React from 'react';
import { Car, Wrench, Fuel, Battery, Phone, MapPin, Clock, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServiceCategories = () => {
  const services = [
    {
      icon: Car,
      title: 'Towing Service',
      description: 'Professional towing for breakdowns and accidents',
      features: ['24/7 availability', 'Flatbed & wheel-lift', 'Local & long distance'],
      price: 'From $80',
      color: 'text-emergency'
    },
    {
      icon: Wrench,
      title: 'Mobile Mechanic',
      description: 'On-site mechanical repairs and diagnostics',
      features: ['Engine diagnostics', 'Brake repairs', 'Tire changes'],
      price: 'From $120',
      color: 'text-secondary'
    },
    {
      icon: Fuel,
      title: 'Fuel Delivery',
      description: 'Emergency fuel delivery to your location',
      features: ['Gasoline & diesel', '2-5 gallon delivery', 'Quick response'],
      price: 'From $35',
      color: 'text-warning'
    },
    {
      icon: Battery,
      title: 'Jump Start & Battery',
      description: 'Battery testing, jump start, and replacement',
      features: ['Battery testing', 'Jump start service', 'New battery installation'],
      price: 'From $45',
      color: 'text-success'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Emergency Services Available
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional roadside assistance services available 24/7. 
            Quick response times with certified technicians.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg [box-shadow:var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 border-0 bg-background"
              >
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-lg bg-muted ${service.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>

                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-border">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-foreground">{service.price}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-warning text-warning" />
                        <span className="text-xs text-muted-foreground">4.8</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <MapPin className="h-4 w-4" />
                      Request Service
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-emergency">500+</div>
            <div className="text-sm text-muted-foreground">Service Providers</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-secondary">15min</div>
            <div className="text-sm text-muted-foreground">Average Response</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-success">98%</div>
            <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-warning">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;