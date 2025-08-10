import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, User, Phone, Mail, Car } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Booking = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    description: '',
    urgency: 'normal'
  });

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  const services = [
    'Emergency Towing',
    'Flat Tire Fix',
    'Fuel Delivery',
    'Battery Jump-Start',
    'Lockout Assistance',
    'Minor Repairs',
    'First Aid Assistance',
    'Vehicle Recovery'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', { ...formData, location: userLocation });
    alert('Booking submitted successfully! Our team will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="bg-primary/5 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Book Emergency Service
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and our nearest service provider will be dispatched to your location
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form */}
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">Service Details</h2>
                    
                    {/* Service Type */}
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="focus:border-secondary">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Urgency Level */}
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger className="focus:border-secondary">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - Within 2 hours</SelectItem>
                          <SelectItem value="normal">Normal - Within 1 hour</SelectItem>
                          <SelectItem value="high">High - Within 30 minutes</SelectItem>
                          <SelectItem value="emergency">Emergency - ASAP</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Personal Information */}
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Personal Information</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="focus:border-secondary"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="focus:border-secondary"
                          placeholder="(555) 123-4567"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="focus:border-secondary"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Vehicle Information */}
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Vehicle Information</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="vehicle">Vehicle Details</Label>
                      <Input 
                        id="vehicle"
                        value={formData.vehicle}
                        onChange={(e) => handleInputChange('vehicle', e.target.value)}
                        className="focus:border-secondary"
                        placeholder="e.g., 2020 Honda Civic, Red"
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description">Problem Description</Label>
                      <Textarea 
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        className="focus:border-secondary min-h-[100px]"
                        placeholder="Describe the issue you're experiencing..."
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    <Clock className="h-5 w-5 mr-2" />
                    Book Service Now
                  </Button>
                </form>
              </Card>

              {/* Location & Info */}
              <div className="space-y-6">
                {/* Current Location */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Your Location
                  </h3>
                  <div className="space-y-4">
                    {userLocation ? (
                      <div className="bg-success/10 text-success p-4 rounded-lg">
                        <p className="font-medium">Location detected successfully!</p>
                        <p className="text-sm opacity-90">
                          Lat: {userLocation.lat.toFixed(6)}, Lng: {userLocation.lng.toFixed(6)}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-warning/10 text-warning-foreground p-4 rounded-lg">
                        <p className="font-medium">Location not detected</p>
                        <p className="text-sm">Please enable location services for faster service</p>
                      </div>
                    )}
                    
                    {/* Mock Map Placeholder */}
                    <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Map will show here</p>
                        <p className="text-sm text-muted-foreground">Google Maps integration</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Service Info */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Fast Response</p>
                        <p className="text-sm text-muted-foreground">Average response time: 15-30 minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-secondary/10 p-2 rounded-lg">
                        <User className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Professional Service</p>
                        <p className="text-sm text-muted-foreground">Certified and insured technicians</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-success/10 p-2 rounded-lg">
                        <Phone className="h-4 w-4 text-success" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Real-time Updates</p>
                        <p className="text-sm text-muted-foreground">Track your service provider's arrival</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Emergency Contact */}
                <Card className="p-6 border-accent/20 bg-accent/5">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Need Immediate Help?</h3>
                  <p className="text-muted-foreground mb-4">For life-threatening emergencies, call 911 first</p>
                  <Button variant="emergency" className="w-full" size="lg">
                    <Phone className="h-5 w-5 mr-2" />
                    Emergency Hotline: 1-800-ROADHELP
                  </Button>
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

export default Booking;