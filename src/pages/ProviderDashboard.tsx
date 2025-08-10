import React, { useState } from 'react';
import { 
  MapPin, Calendar, DollarSign, Clock, CheckCircle, X, 
  Phone, Navigation, User, Settings, Star, AlertCircle,
  Car, Wrench, Fuel, Battery, Shield
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sidebar, SidebarContent, SidebarProvider } from '@/components/ui/sidebar';

const ProviderDashboard = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [activeTab, setActiveTab] = useState('requests');

  // Mock provider data
  const providerData = {
    name: 'Mike Johnson',
    rating: 4.8,
    completedJobs: 156,
    responseTime: 18, // minutes
    earnings: {
      today: 285,
      week: 1240,
      month: 4850
    },
    vehicle: 'Tow Truck #23',
    services: ['Emergency Towing', 'Flat Tire Fix', 'Battery Jump-Start']
  };

  // Mock service requests
  const serviceRequests = [
    {
      id: 'REQ-001',
      service: 'Emergency Towing',
      customer: 'Sarah Wilson',
      location: 'Highway 101, Mile 42',
      distance: '2.3 miles',
      urgency: 'high',
      estimatedPay: 120,
      requestTime: '10 minutes ago',
      customerPhone: '+1 (555) 987-6543'
    },
    {
      id: 'REQ-002',
      service: 'Flat Tire Fix',
      customer: 'John Davis',
      location: 'Main St & Oak Ave',
      distance: '1.8 miles',
      urgency: 'normal',
      estimatedPay: 65,
      requestTime: '15 minutes ago',
      customerPhone: '+1 (555) 456-7890'
    },
    {
      id: 'REQ-003',
      service: 'Battery Jump-Start',
      customer: 'Emily Chen',
      location: 'Shopping Mall Parking',
      distance: '3.1 miles',
      urgency: 'low',
      estimatedPay: 45,
      requestTime: '22 minutes ago',
      customerPhone: '+1 (555) 123-4567'
    }
  ];

  // Mock active jobs
  const activeJobs = [
    {
      id: 'JOB-001',
      service: 'Emergency Towing',
      customer: 'David Brown',
      location: 'Route 95, Exit 23',
      status: 'en_route',
      startTime: '30 minutes ago',
      estimatedCompletion: '15 minutes',
      customerPhone: '+1 (555) 111-2222'
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'destructive';
      case 'normal': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'Emergency Towing': return <Car className="h-4 w-4" />;
      case 'Flat Tire Fix': return <Wrench className="h-4 w-4" />;
      case 'Battery Jump-Start': return <Battery className="h-4 w-4" />;
      case 'Fuel Delivery': return <Fuel className="h-4 w-4" />;
      case 'Lockout Assistance': return <Shield className="h-4 w-4" />;
      default: return <Wrench className="h-4 w-4" />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Sidebar */}
        <Sidebar className="w-64 bg-gray-900 text-white border-r border-sidebar-border">
          <SidebarContent className="p-6">
            {/* Provider Info */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-secondary p-3 rounded-full">
                  <User className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h2 className="font-semibold text-white">{providerData.name}</h2>
                  <p className="text-sm text-gray-400">{providerData.vehicle}</p>
                </div>
              </div>
              
              {/* Availability Toggle */}
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <span className="text-sm font-medium">Available</span>
                <Switch 
                  checked={isAvailable} 
                  onCheckedChange={setIsAvailable}
                  className="data-[state=checked]:bg-success"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              <Button 
                variant={activeTab === 'requests' ? 'secondary' : 'ghost'}
                className="w-full justify-start text-white hover:bg-gray-800"
                onClick={() => setActiveTab('requests')}
              >
                <AlertCircle className="h-4 w-4 mr-3" />
                Service Requests
              </Button>
              <Button 
                variant={activeTab === 'active' ? 'secondary' : 'ghost'}
                className="w-full justify-start text-white hover:bg-gray-800"
                onClick={() => setActiveTab('active')}
              >
                <Clock className="h-4 w-4 mr-3" />
                Active Jobs
              </Button>
              <Button 
                variant={activeTab === 'earnings' ? 'secondary' : 'ghost'}
                className="w-full justify-start text-white hover:bg-gray-800"
                onClick={() => setActiveTab('earnings')}
              >
                <DollarSign className="h-4 w-4 mr-3" />
                Earnings
              </Button>
              <Button 
                variant={activeTab === 'profile' ? 'secondary' : 'ghost'}
                className="w-full justify-start text-white hover:bg-gray-800"
                onClick={() => setActiveTab('profile')}
              >
                <Settings className="h-4 w-4 mr-3" />
                Profile
              </Button>
            </nav>

            {/* Quick Stats */}
            <div className="mt-8 space-y-4">
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <p className="text-2xl font-bold text-secondary">{providerData.rating}</p>
                <p className="text-sm text-gray-400">Rating</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <p className="text-2xl font-bold text-secondary">{providerData.completedJobs}</p>
                <p className="text-sm text-gray-400">Completed Jobs</p>
              </div>
            </div>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  Service Provider Dashboard
                </h1>
                <p className="text-muted-foreground">
                  {isAvailable ? 'You are currently available for new requests' : 'You are currently offline'}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={isAvailable ? 'default' : 'secondary'}>
                  {isAvailable ? 'Online' : 'Offline'}
                </Badge>
              </div>
            </div>
          </div>

          {/* Content based on active tab */}
          {activeTab === 'requests' && (
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Incoming Service Requests</h2>
              <div className="grid gap-6">
                {serviceRequests.map((request) => (
                  <Card key={request.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            {getServiceIcon(request.service)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{request.service}</h3>
                            <p className="text-sm text-muted-foreground">{request.customer}</p>
                          </div>
                          <Badge variant={getUrgencyColor(request.urgency)} className="ml-auto">
                            {request.urgency} priority
                          </Badge>
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{request.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Navigation className="h-4 w-4" />
                            <span>{request.distance} away</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{request.requestTime}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-foreground font-medium">
                            <DollarSign className="h-4 w-4" />
                            <span>${request.estimatedPay}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3 mt-4">
                      <Button className="flex-1 bg-primary hover:bg-primary/90">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Accept Job
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Customer
                      </Button>
                      <Button variant="outline" size="icon">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'active' && (
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Active Jobs</h2>
              <div className="grid gap-6">
                {activeJobs.map((job) => (
                  <Card key={job.id} className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{job.service}</h3>
                        <p className="text-muted-foreground">{job.customer}</p>
                      </div>
                      <Badge variant="secondary">En Route</Badge>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>ETA: {job.estimatedCompletion}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button className="bg-primary hover:bg-primary/90">
                        <Navigation className="h-4 w-4 mr-2" />
                        Open Navigation
                      </Button>
                      <Button variant="outline">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Customer
                      </Button>
                      <Button variant="outline">
                        Update Status
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'earnings' && (
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Earnings Overview</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Today</p>
                      <p className="text-2xl font-bold text-foreground">${providerData.earnings.today}</p>
                    </div>
                    <div className="bg-success/10 p-3 rounded-lg">
                      <DollarSign className="h-6 w-6 text-success" />
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">This Week</p>
                      <p className="text-2xl font-bold text-foreground">${providerData.earnings.week}</p>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">This Month</p>
                      <p className="text-2xl font-bold text-foreground">${providerData.earnings.month}</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Star className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Profile Settings</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Basic Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-medium text-foreground">{providerData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Vehicle</p>
                      <p className="font-medium text-foreground">{providerData.vehicle}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Services Offered</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {providerData.services.map((service) => (
                          <Badge key={service} variant="secondary">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Performance</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Average Rating</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-foreground">{providerData.rating}</span>
                        <div className="flex">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(providerData.rating) ? 'text-secondary fill-current' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Completed Jobs</p>
                      <p className="text-2xl font-bold text-foreground">{providerData.completedJobs}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Average Response Time</p>
                      <p className="text-2xl font-bold text-foreground">{providerData.responseTime} min</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ProviderDashboard;