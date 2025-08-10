import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, CheckCircle, AlertCircle, Navigation as NavigationIcon, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Tracking = () => {
  const [currentStatus, setCurrentStatus] = useState('dispatched');
  const [estimatedArrival, setEstimatedArrival] = useState(18);

  // Mock tracking data
  const trackingInfo = {
    bookingId: 'RAS-2024-001',
    service: 'Emergency Towing',
    customerLocation: 'Highway 101, Mile Marker 42',
    serviceProvider: {
      name: 'Mike Johnson',
      phone: '+1 (555) 123-4567',
      vehicle: 'Tow Truck #23',
      rating: 4.8,
      completedJobs: 156
    }
  };

  const statusSteps = [
    { id: 'confirmed', label: 'Booking Confirmed', completed: true },
    { id: 'dispatched', label: 'Service Provider Dispatched', completed: true },
    { id: 'enroute', label: 'En Route to Location', completed: currentStatus === 'enroute' || currentStatus === 'arrived' },
    { id: 'arrived', label: 'Arrived at Location', completed: currentStatus === 'arrived' }
  ];

  useEffect(() => {
    // Simulate status updates
    const statusTimer = setInterval(() => {
      if (currentStatus === 'dispatched') {
        setCurrentStatus('enroute');
        setEstimatedArrival(12);
      } else if (currentStatus === 'enroute') {
        setCurrentStatus('arrived');
        setEstimatedArrival(0);
      }
    }, 10000); // Update every 10 seconds for demo

    return () => clearInterval(statusTimer);
  }, [currentStatus]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-primary';
      case 'dispatched': return 'text-secondary';
      case 'enroute': return 'text-warning';
      case 'arrived': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'confirmed': return 'default';
      case 'dispatched': return 'secondary';
      case 'enroute': return 'destructive';
      case 'arrived': return 'default';
      default: return 'outline';
    }
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
                Live Service Tracking
              </h1>
              <p className="text-lg text-muted-foreground">
                Track your service provider in real-time
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Map Area */}
              <div className="lg:col-span-2">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-foreground">Live Map</h2>
                    <Badge variant={getStatusBadgeVariant(currentStatus)} className="capitalize">
                      {currentStatus.replace('_', ' ')}
                    </Badge>
                  </div>
                  
                  {/* Mock Map */}
                  <div className="h-96 bg-muted rounded-lg relative overflow-hidden">
                    {/* Map background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                    
                    {/* Route line */}
                    <svg className="absolute inset-0 w-full h-full">
                      <path
                        d="M 100 300 Q 200 200 400 250 T 600 200"
                        stroke="hsl(var(--primary))"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="10,5"
                        className="animate-pulse"
                      />
                    </svg>
                    
                    {/* Customer location pin */}
                    <div className="absolute bottom-20 right-20 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-secondary p-3 rounded-full shadow-lg animate-bounce">
                        <MapPin className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div className="bg-secondary/90 text-secondary-foreground px-2 py-1 rounded text-xs mt-1 whitespace-nowrap">
                        Your Location
                      </div>
                    </div>
                    
                    {/* Service provider location */}
                    <div className={`absolute transition-all duration-1000 ${
                      currentStatus === 'arrived' ? 'bottom-20 right-20' : 'top-20 left-20'
                    } transform -translate-x-1/2 -translate-y-1/2`}>
                      <div className="bg-primary p-3 rounded-full shadow-lg">
                        <NavigationIcon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs mt-1 whitespace-nowrap">
                        Service Provider
                      </div>
                    </div>
                    
                    {/* Distance/ETA overlay */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">
                          {estimatedArrival > 0 ? `ETA: ${estimatedArrival} minutes` : 'Arrived!'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm mt-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Distance: {estimatedArrival > 0 ? '2.3 miles' : '0 miles'}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Tracking Info */}
              <div className="space-y-6">
                {/* Booking Details */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Booking Details</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Booking ID</p>
                      <p className="font-medium text-foreground">{trackingInfo.bookingId}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Service</p>
                      <p className="font-medium text-foreground">{trackingInfo.service}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">{trackingInfo.customerLocation}</p>
                    </div>
                  </div>
                </Card>

                {/* Service Provider Info */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Service Provider</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{trackingInfo.serviceProvider.name}</p>
                        <p className="text-sm text-muted-foreground">{trackingInfo.serviceProvider.vehicle}</p>
                        <p className="text-sm text-muted-foreground">
                          ★ {trackingInfo.serviceProvider.rating} • {trackingInfo.serviceProvider.completedJobs} jobs
                        </p>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      <Phone className="h-5 w-5 mr-2" />
                      Call {trackingInfo.serviceProvider.name}
                    </Button>
                  </div>
                </Card>

                {/* Status Timeline */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Service Status</h3>
                  <div className="space-y-4">
                    {statusSteps.map((step, index) => (
                      <div key={step.id} className="flex items-start space-x-3">
                        <div className={`mt-1 ${step.completed ? 'text-success' : 'text-muted-foreground'}`}>
                          {step.completed ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <div className="h-5 w-5 border-2 border-muted-foreground rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium ${step.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {step.label}
                          </p>
                          {step.id === currentStatus && (
                            <p className="text-sm text-primary font-medium">Current Status</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Emergency Actions */}
                <Card className="p-6 border-accent/20 bg-accent/5">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-accent" />
                    Need Help?
                  </h3>
                  <div className="space-y-3">
                    <Button variant="emergency" className="w-full">
                      <Phone className="h-5 w-5 mr-2" />
                      Emergency: 911
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Phone className="h-5 w-5 mr-2" />
                      Support: 1-800-ROADHELP
                    </Button>
                  </div>
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

export default Tracking;