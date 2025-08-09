import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-emergency p-2 rounded-lg">
                <Phone className="h-5 w-5 text-emergency-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">RoadAssist</h3>
                <p className="text-xs text-background/70">24/7 Emergency Help</p>
              </div>
            </div>
            <p className="text-sm text-background/80">
              Professional roadside assistance services. We're here when you need us most.
            </p>
          </div>

          {/* Emergency Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-emergency">Emergency Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emergency" />
                <span className="text-sm">1-800-ROADHELP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-emergency" />
                <span className="text-sm">24/7 Available</span>
              </div>
            </div>
            <Button variant="emergency" size="sm" className="w-full">
              Call Now
            </Button>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Towing Service</li>
              <li>Mobile Mechanic</li>
              <li>Fuel Delivery</li>
              <li>Jump Start</li>
              <li>Tire Change</li>
              <li>Lockout Service</li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Track Service</li>
              <li>Service History</li>
              <li>Help Center</li>
              <li>Contact Support</li>
              <li>Provider Portal</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2024 RoadAssist. All rights reserved. Professional emergency roadside assistance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;