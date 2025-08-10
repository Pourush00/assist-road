import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeNewsletter: false
  });

  const handleLoginChange = (field: string, value: string | boolean) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignupChange = (field: string, value: string | boolean) => {
    setSignupData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', loginData);
    // Handle login logic here
    alert('Login successful! (Demo)');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup:', signupData);
    // Handle signup logic here
    alert('Account created successfully! (Demo)');
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login`);
    alert(`${provider} login (Demo)`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="bg-primary/5 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Join Emergency Roadside Assistance
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get access to 24/7 emergency services and manage your roadside assistance needs
            </p>
          </div>
        </section>

        {/* Auth Forms */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-md">
            <Card className="p-8">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="login" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger value="signup" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Sign Up
                  </TabsTrigger>
                </TabsList>

                {/* Login Tab */}
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-semibold text-foreground">Welcome Back</h2>
                      <p className="text-muted-foreground">Sign in to your account</p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="login-email"
                            type="email"
                            className="pl-10 focus:border-secondary"
                            placeholder="your.email@example.com"
                            value={loginData.email}
                            onChange={(e) => handleLoginChange('email', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="login-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            className="pl-10 pr-10 focus:border-secondary"
                            placeholder="Enter your password"
                            value={loginData.password}
                            onChange={(e) => handleLoginChange('password', e.target.value)}
                            required
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <Eye className="h-4 w-4 text-muted-foreground" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="remember-me"
                            checked={loginData.rememberMe}
                            onCheckedChange={(checked) => handleLoginChange('rememberMe', checked as boolean)}
                          />
                          <Label htmlFor="remember-me" className="text-sm">Remember me</Label>
                        </div>
                        <Button variant="link" className="text-primary hover:text-primary/90 p-0 h-auto">
                          Forgot password?
                        </Button>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      size="lg"
                    >
                      Sign In
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>

                    {/* Social Login */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSocialLogin('Google')}
                        className="hover:bg-secondary/10 hover:border-secondary"
                      >
                        Google
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSocialLogin('Facebook')}
                        className="hover:bg-secondary/10 hover:border-secondary"
                      >
                        Facebook
                      </Button>
                    </div>
                  </form>
                </TabsContent>

                {/* Signup Tab */}
                <TabsContent value="signup">
                  <form onSubmit={handleSignup} className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-semibold text-foreground">Create Account</h2>
                      <p className="text-muted-foreground">Join our emergency roadside assistance network</p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="first-name"
                              className="pl-10 focus:border-secondary"
                              placeholder="John"
                              value={signupData.firstName}
                              onChange={(e) => handleSignupChange('firstName', e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input
                            id="last-name"
                            className="focus:border-secondary"
                            placeholder="Doe"
                            value={signupData.lastName}
                            onChange={(e) => handleSignupChange('lastName', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="signup-email"
                            type="email"
                            className="pl-10 focus:border-secondary"
                            placeholder="your.email@example.com"
                            value={signupData.email}
                            onChange={(e) => handleSignupChange('email', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            className="pl-10 focus:border-secondary"
                            placeholder="(555) 123-4567"
                            value={signupData.phone}
                            onChange={(e) => handleSignupChange('phone', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="signup-password"
                            type={showPassword ? "text" : "password"}
                            className="pl-10 pr-10 focus:border-secondary"
                            placeholder="Create a password"
                            value={signupData.password}
                            onChange={(e) => handleSignupChange('password', e.target.value)}
                            required
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <Eye className="h-4 w-4 text-muted-foreground" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="confirm-password"
                            type={showConfirmPassword ? "text" : "password"}
                            className="pl-10 pr-10 focus:border-secondary"
                            placeholder="Confirm your password"
                            value={signupData.confirmPassword}
                            onChange={(e) => handleSignupChange('confirmPassword', e.target.value)}
                            required
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <Eye className="h-4 w-4 text-muted-foreground" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="agree-terms"
                            checked={signupData.agreeToTerms}
                            onCheckedChange={(checked) => handleSignupChange('agreeToTerms', checked as boolean)}
                            required
                          />
                          <Label htmlFor="agree-terms" className="text-sm">
                            I agree to the{' '}
                            <Button variant="link" className="text-primary hover:text-primary/90 p-0 h-auto text-sm">
                              Terms of Service
                            </Button>{' '}
                            and{' '}
                            <Button variant="link" className="text-primary hover:text-primary/90 p-0 h-auto text-sm">
                              Privacy Policy
                            </Button>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="subscribe-newsletter"
                            checked={signupData.subscribeNewsletter}
                            onCheckedChange={(checked) => handleSignupChange('subscribeNewsletter', checked as boolean)}
                          />
                          <Label htmlFor="subscribe-newsletter" className="text-sm">
                            Subscribe to newsletter for emergency tips and updates
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      size="lg"
                      disabled={!signupData.agreeToTerms}
                    >
                      Create Account
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>

                    {/* Social Signup */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">Or sign up with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSocialLogin('Google')}
                        className="hover:bg-secondary/10 hover:border-secondary"
                      >
                        Google
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSocialLogin('Facebook')}
                        className="hover:bg-secondary/10 hover:border-secondary"
                      >
                        Facebook
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </Card>

            {/* Emergency Contact Info */}
            <Card className="mt-8 p-6 border-accent/20 bg-accent/5">
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">Need Immediate Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You don't need an account for emergency assistance
                </p>
                <Button variant="emergency" size="lg" className="w-full">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency Hotline: 1-800-ROADHELP
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;