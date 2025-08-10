import React, { useState } from 'react';
import { Calendar, MapPin, Star, Clock, CheckCircle, AlertTriangle, CreditCard, User, Settings } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings');

  // Mock user data
  const userData = {
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1 (555) 123-4567',
    memberSince: '2023',
    totalBookings: 12,
    avgRating: 4.8
  };

  // Mock booking data
  const bookings = [
    {
      id: 'RAS-2024-001',
      service: 'Emergency Towing',
      date: '2024-01-15',
      time: '14:30',
      location: 'Highway 101, Mile 42',
      status: 'completed',
      provider: 'Mike Johnson',
      rating: 5,
      cost: 120
    },
    {
      id: 'RAS-2024-002',
      service: 'Flat Tire Fix',
      date: '2024-01-10',
      time: '09:15',
      location: 'Main St & Oak Ave',
      status: 'completed',
      provider: 'Sarah Davis',
      rating: 4,
      cost: 65
    },
    {
      id: 'RAS-2024-003',
      service: 'Battery Jump-Start',
      date: '2024-01-08',
      time: '16:45',
      location: 'Shopping Mall Parking',
      status: 'cancelled',
      provider: null,
      rating: null,
      cost: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'default';
      case 'in_progress': return 'secondary';
      case 'cancelled': return 'destructive';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'in_progress': return <Clock className="h-4 w-4" />;
      case 'cancelled': return <AlertTriangle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-secondary fill-current' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="bg-primary/5 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  Welcome back, {userData.name}
                </h1>
                <p className="text-lg text-muted-foreground">
                  Manage your emergency roadside assistance services
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <Button className="bg-primary hover:bg-primary/90">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book New Service
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Stats Cards */}
              <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Bookings</p>
                      <p className="text-2xl font-bold text-foreground">{userData.totalBookings}</p>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Rating</p>
                      <p className="text-2xl font-bold text-foreground">{userData.avgRating}</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Star className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Member Since</p>
                      <p className="text-2xl font-bold text-foreground">{userData.memberSince}</p>
                    </div>
                    <div className="bg-success/10 p-3 rounded-lg">
                      <User className="h-6 w-6 text-success" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Quick Access</p>
                      <p className="text-lg font-bold text-foreground">Emergency</p>
                    </div>
                    <Button variant="emergency" size="sm">
                      SOS
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="bookings">Bookings</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>

                  <TabsContent value="bookings" className="mt-6">
                    <Card className="p-6">
                      <h2 className="text-2xl font-semibold text-foreground mb-6">Recent Bookings</h2>
                      <div className="space-y-4">
                        {bookings.map((booking) => (
                          <div key={booking.id} className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h3 className="font-semibold text-foreground">{booking.service}</h3>
                                  <Badge variant={getStatusColor(booking.status)} className="flex items-center space-x-1">
                                    {getStatusIcon(booking.status)}
                                    <span className="capitalize">{booking.status.replace('_', ' ')}</span>
                                  </Badge>
                                </div>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                  <p className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    {booking.date} at {booking.time}
                                  </p>
                                  <p className="flex items-center">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    {booking.location}
                                  </p>
                                  {booking.provider && (
                                    <p className="flex items-center">
                                      <User className="h-4 w-4 mr-2" />
                                      {booking.provider}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="mt-4 sm:mt-0 sm:text-right">
                                <p className="font-semibold text-foreground">${booking.cost}</p>
                                {booking.rating && (
                                  <div className="flex items-center mt-1">
                                    {renderStars(booking.rating)}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="history" className="mt-6">
                    <Card className="p-6">
                      <h2 className="text-2xl font-semibold text-foreground mb-6">Service History</h2>
                      <div className="space-y-4">
                        {bookings.filter(b => b.status === 'completed').map((booking) => (
                          <div key={booking.id} className="border border-border rounded-lg p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold text-foreground mb-2">{booking.service}</h3>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                  <p>{booking.date} • {booking.provider}</p>
                                  <p>{booking.location}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-foreground">${booking.cost}</p>
                                <div className="flex items-center mt-1">
                                  {renderStars(booking.rating!)}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="reviews" className="mt-6">
                    <Card className="p-6">
                      <h2 className="text-2xl font-semibold text-foreground mb-6">Your Reviews</h2>
                      <div className="space-y-6">
                        {bookings.filter(b => b.rating).map((booking) => (
                          <div key={booking.id} className="border border-border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-semibold text-foreground">{booking.service}</h3>
                                <p className="text-sm text-muted-foreground">{booking.provider} • {booking.date}</p>
                              </div>
                              <div className="flex items-center">
                                {renderStars(booking.rating!)}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {booking.rating === 5 ? "Excellent service! Very professional and quick response time." :
                               booking.rating === 4 ? "Good service, arrived on time and fixed the issue efficiently." :
                               "Service was okay, could have been faster."}
                            </p>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Profile Card */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Profile</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-medium text-foreground">{userData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">{userData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">{userData.phone}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </Card>

                {/* Quick Actions */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Service
                    </Button>
                    <Button variant="emergency" className="w-full">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Emergency SOS
                    </Button>
                    <Button variant="outline" className="w-full">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Payment Methods
                    </Button>
                  </div>
                </Card>

                {/* Support */}
                <Card className="p-6 border-primary/20 bg-primary/5">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our support team is available 24/7 to assist you
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Support
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

export default Dashboard;