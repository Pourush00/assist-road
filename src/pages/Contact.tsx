import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Emergency Hotline',
      value: '1-800-ROADHELP',
      description: '24/7 emergency assistance',
      color: 'text-emergency',
      bgColor: 'bg-emergency/10'
    },
    {
      icon: MessageSquare,
      title: 'Customer Support',
      value: '1-800-SUPPORT',
      description: 'General inquiries & support',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Mail,
      title: 'Email Support',
      value: 'help@roadassist.com',
      description: 'Non-urgent inquiries',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: MapPin,
      title: 'Service Areas',
      value: 'Regional Coverage',
      description: '50-mile radius coverage',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  const serviceTypes = [
    'Towing Service',
    'Mobile Mechanic',
    'Fuel Delivery',
    'Jump Start/Battery',
    'Lockout Service',
    'First Aid',
    'Other'
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
                Contact RoadAssist
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Need immediate help? Call our emergency hotline. For general inquiries, 
                use the contact form below or reach out through any of our support channels.
              </p>
              <div className="bg-emergency/10 border border-emergency/20 rounded-lg p-4 max-w-md mx-auto">
                <div className="flex items-center justify-center space-x-2 text-emergency">
                  <AlertCircle className="h-5 w-5" />
                  <span className="font-semibold">Emergency? Call Now!</span>
                </div>
                <p className="text-2xl font-bold text-emergency mt-2">1-800-ROADHELP</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to reach us. Choose the method that works best for your situation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="space-y-4">
                      <div className={`${method.bgColor} p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center`}>
                        <IconComponent className={`h-8 w-8 ${method.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {method.title}
                        </h3>
                        <p className={`text-lg font-bold ${method.color} mb-1`}>
                          {method.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type</Label>
                    <select 
                      id="serviceType" 
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service type</option>
                      {serviceTypes.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location (if applicable)</Label>
                    <Input id="location" placeholder="City, State or specific location" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe your situation or inquiry..."
                      rows={4}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" variant="emergency" className="flex-1">
                      Send Message
                    </Button>
                    <Button type="button" variant="outline" className="flex-1">
                      Call Instead
                    </Button>
                  </div>
                </form>
              </Card>

              {/* Business Information */}
              <div className="space-y-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-emergency" />
                      <div>
                        <p className="font-medium text-foreground">Emergency Services</p>
                        <p className="text-sm text-success">24/7 - Always Available</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-secondary" />
                      <div>
                        <p className="font-medium text-foreground">Customer Support</p>
                        <p className="text-sm text-muted-foreground">Mon-Fri: 8AM-8PM, Weekends: 9AM-6PM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-success" />
                      <div>
                        <p className="font-medium text-foreground">Email Response</p>
                        <p className="text-sm text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Service Coverage
                  </h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4 w-4 text-warning mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Primary Coverage</p>
                        <p>Major highways and urban areas within 50-mile radius</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Extended Coverage</p>
                        <p>Rural and remote areas (additional charges may apply)</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-r from-emergency/5 to-secondary/5">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Emergency Tips
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Pull over safely and turn on hazard lights</li>
                    <li>• Stay in or near your vehicle if safe</li>
                    <li>• Have your location and vehicle details ready</li>
                    <li>• Keep our emergency number saved in your phone</li>
                    <li>• Consider roadside assistance insurance</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;