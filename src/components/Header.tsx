import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-emergency p-2 rounded-lg">
            <Phone className="h-6 w-6 text-emergency-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">RoadAssist</h1>
            <p className="text-xs text-muted-foreground">24/7 Emergency Help</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <MapPin className="h-4 w-4" />
            Find Services
          </Button>
          <Button variant="emergency" size="sm">
            Emergency Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;