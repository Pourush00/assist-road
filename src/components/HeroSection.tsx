import React from 'react';
import { MapPin, Phone, AlertTriangle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-roadside.jpg';

const HeroSection = () => {
  const handleLocationRequest = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Location:', position.coords.latitude, position.coords.longitude);
          // Handle successful location
        },
        (error) => {
          console.error('Location error:', error);
          // Handle location error
        }
      );
    }
  };

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-background via-muted/30 to-secondary/10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Emergency roadside assistance" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-emergency">
                <AlertTriangle className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-wide">Emergency Response</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Help is Just 
                <span className="text-emergency"> One Click </span>
                Away
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                24/7 roadside assistance for tire issues, engine problems, fuel delivery, 
                and emergency towing. Professional help when you need it most.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleLocationRequest}
                className="text-lg"
              >
                <MapPin className="h-5 w-5" />
                Find Help Near Me
              </Button>
              <Button variant="emergency" size="lg" className="text-lg">
                <Phone className="h-5 w-5" />
                Call Emergency
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-emergency">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">15min</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </div>
            </div>
          </div>

          {/* Emergency Quick Actions */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-0 shadow-lg [box-shadow:var(--shadow-card)]">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-5 w-5 text-emergency" />
                <h3 className="text-lg font-semibold">Quick Emergency Request</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-16 flex-col">
                  <span className="text-2xl">🚗</span>
                  <span className="text-xs">Towing</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <span className="text-2xl">⚙️</span>
                  <span className="text-xs">Mechanic</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <span className="text-2xl">⛽</span>
                  <span className="text-xs">Fuel</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <span className="text-2xl">🔋</span>
                  <span className="text-xs">Jump Start</span>
                </Button>
              </div>
            </Card>

            {/* SOS Button */}
            <Card className="p-6 bg-gradient-to-r from-emergency/10 to-warning/10 border-emergency/20">
              <div className="text-center space-y-4">
                <AlertTriangle className="h-8 w-8 text-emergency mx-auto" />
                <h3 className="text-lg font-semibold text-emergency">Emergency SOS</h3>
                <p className="text-sm text-muted-foreground">
                  Share your location instantly with emergency contacts and nearby providers
                </p>
                <Button variant="emergency" size="lg" className="w-full">
                  <AlertTriangle className="h-5 w-5" />
                  Send SOS Alert
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;