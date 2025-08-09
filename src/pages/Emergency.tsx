import React, { useState, useEffect } from 'react';
import { Phone, MapPin, AlertTriangle, Clock, Shield, Navigation as NavigationIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Emergency = () => {
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const getLocation = () => {
    setIsGettingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setIsGettingLocation(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsGettingLocation(false);
        }
      );
    }
  };

  const emergencyServices = [
    {
      title: 'Immediate Towing',
      description: 'Vehicle breakdown or accident',
      icon: AlertTriangle,
      response: '10-15 min',
      color: 'text-emergency'
    },
    {
      title: 'Medical Emergency',
      description: 'First aid until paramedics arrive',
      icon: Shield,
      response: '5-10 min',
      color: 'text-emergency'
    },
    {
      title: 'Fuel Emergency',
      description: 'Stranded without fuel',
      icon: NavigationIcon,
      response: '15-20 min',
      color: 'text-warning'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Emergency Hero */}
        <section className="bg-gradient-to-br from-emergency/20 to-destructive/20 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <AlertTriangle className="h-8 w-8 text-emergency animate-pulse" />
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Emergency Assistance
                </h1>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Immediate help is available. Share your location and get connected to the nearest service provider.
              </p>
              
              {/* Emergency Call Button */}
              <div className="bg-emergency/10 border-2 border-emergency/30 rounded-lg p-6 max-w-md mx-auto mb-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-6 w-6 text-emergency" />
                    <span className="text-lg font-semibold text-emergency">Emergency Hotline</span>
                  </div>
                  <p className="text-3xl font-bold text-emergency">1-800-ROADHELP</p>
                  <Button 
                    variant="emergency" 
                    size="lg" 
                    className="w-full animate-pulse"
                    onClick={() => window.open('tel:1-800-ROADHELP')}
                  >
                    <Phone className="h-5 w-5" />
                    Call Now - Free 24/7
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Sharing */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Share Your Location for Faster Help
                </h2>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <Button 
                      variant="hero" 
                      size="lg"
                      onClick={getLocation}
                      disabled={isGettingLocation}
                      className="w-full"
                    >
                      <MapPin className="h-5 w-5" />
                      {isGettingLocation ? 'Getting Location...' : 'Get My Location'}
                    </Button>
                    
                    {location && (
                      <div className="mt-4 p-4 bg-success/10 border border-success/20 rounded-lg">
                        <p className="text-success font-medium">Location Detected!</p>
                        <p className="text-sm text-muted-foreground">
                          Lat: {location.lat.toFixed(6)}, Lng: {location.lng.toFixed(6)}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-border pt-6">
                    <h3 className="font-semibold text-foreground mb-4">
                      Or Enter Location Manually
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address or Landmark</Label>
                        <Input 
                          id="address" 
                          placeholder="e.g., Interstate 95 near Exit 42"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="City" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input id="state" placeholder="State" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h3 className="font-semibold text-foreground mb-4">
                      Emergency Details
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="vehicle">Vehicle Information</Label>
                        <Input 
                          id="vehicle" 
                          placeholder="e.g., 2020 Honda Accord, License: ABC123"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergency">Type of Emergency</Label>
                        <select className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                          <option value="">Select emergency type</option>
                          <option value="breakdown">Vehicle Breakdown</option>
                          <option value="accident">Accident</option>
                          <option value="flat">Flat Tire</option>
                          <option value="fuel">Out of Fuel</option>
                          <option value="battery">Dead Battery</option>
                          <option value="lockout">Locked Out</option>
                          <option value="medical">Medical Emergency</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <Button variant="emergency" size="lg" className="w-full">
                    <AlertTriangle className="h-5 w-5" />
                    Send Emergency Request
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Emergency Response Services
              </h2>
              <p className="text-muted-foreground">
                Professional help dispatched immediately to your location
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {emergencyServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="p-6 text-center">
                    <div className="space-y-4">
                      <div className="bg-emergency/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <IconComponent className={`h-8 w-8 ${service.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-success">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-medium">
                            ETA: {service.response}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">
                Emergency Safety Tips
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    If Your Vehicle Breaks Down
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Pull over as far right as possible</li>
                    <li>• Turn on hazard lights immediately</li>
                    <li>• Exit from the side away from traffic</li>
                    <li>• Stay away from your vehicle if on a highway</li>
                    <li>• Call for help from a safe location</li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    While Waiting for Help
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Stay visible with reflective clothing if available</li>
                    <li>• Keep your phone charged for updates</li>
                    <li>• Don't accept help from strangers</li>
                    <li>• Stay warm and hydrated</li>
                    <li>• Be ready to move to safety if needed</li>
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

export default Emergency;