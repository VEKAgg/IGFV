'use client';

import { signIn, useSession } from 'next-auth/react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FaDiscord, FaGoogle, FaApple, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MotionDiv } from '@/components/Motion/MotionDiv';
import { useState, useEffect, Suspense } from 'react';

const socialLogins = [
  { provider: 'discord', icon: FaDiscord, color: '#5865F2', label: 'Discord' },
  { provider: 'google', icon: FaGoogle, color: '#DB4437', label: 'Google' },
  { provider: 'facebook', icon: FaFacebook, color: '#1877F2', label: 'Facebook' },
  { provider: 'apple', icon: FaApple, color: '#000000', label: 'Apple' },
  { provider: 'github', icon: FaGithub, color: '#333', label: 'GitHub' },
  { provider: 'linkedin', icon: FaLinkedin, color: '#0A66C2', label: 'LinkedIn' },
];

// Loading component for Suspense fallback
function SignInLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
        <div className="text-primary text-xl font-bold">Loading...</div>
      </div>
    </div>
  );
}

// Main SignIn component that uses hooks requiring Suspense
function SignInContent() {
  const { status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const isSignUp = searchParams.get('signup') === 'true';
  const [activeTab, setActiveTab] = useState(isSignUp ? 'signup' : 'login');
  
  // Redirect to callbackUrl or home if already authenticated
  useEffect(() => {
    if (status === 'authenticated') {
      router.push(callbackUrl);
    }
  }, [status, router, callbackUrl]);

  // Show loading state while checking authentication
  if (status === 'loading') {
    return <SignInLoading />;
  }

  // Don't render the sign-in page if already authenticated
  if (status === 'authenticated') {
    return null;
  }

  return (
    <div className="min-h-screen relative bg-dark overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,107,0,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,107,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }} />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-accent/5 rounded-full blur-xl animate-pulse delay-700" />
        <div className="absolute top-40 right-40 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      <div className="flex flex-col md:flex-row min-h-screen relative z-10">
        {/* Left Side - Social Logins */}
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 p-8 hidden md:flex items-center justify-center bg-dark-lighter/50 backdrop-blur-sm"
        >
          <div className="w-full max-w-md space-y-4">
            <h2 className="text-2xl font-bold text-white mb-8">
              Continue with
            </h2>
            
            {socialLogins.map(({ provider, icon: Icon, color, label }) => (
              <button
                key={provider}
                onClick={() => signIn(provider, { callbackUrl })}
                className="w-full px-6 py-3 bg-dark-lighter hover:bg-dark-light rounded-lg transition-all flex items-center justify-center gap-3 group"
                style={{ transform: 'scale(1)' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Icon className="text-xl" style={{ color }} />
                <span className="text-white font-medium group-hover:text-primary transition-colors">
                  Continue with {label}
                </span>
              </button>
            ))}
          </div>
        </MotionDiv>

        {/* Right Side - Email Sign Up/Login */}
        <MotionDiv
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 bg-dark-lighter/50 backdrop-blur-sm p-8 flex items-center justify-center"
        >
          <div className="w-full max-w-md">
            {/* Tabs */}
            <div className="flex mb-8 bg-dark rounded-lg p-1">
              <button
                className={`flex-1 py-2 rounded-md transition-colors ${
                  activeTab === 'login'
                    ? 'bg-primary text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 rounded-md transition-colors ${
                  activeTab === 'signup'
                    ? 'bg-primary text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('signup')}
              >
                Sign Up
              </button>
              <button
                className={`flex-1 py-2 rounded-md transition-colors md:hidden ${
                  activeTab === 'social'
                    ? 'bg-primary text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('social')}
              >
                Social
              </button>
            </div>

            {activeTab === 'social' ? (
              // Mobile Social Login Options
              <div className="space-y-4 md:hidden">
                {socialLogins.map(({ provider, icon: Icon, color, label }) => (
                  <button
                    key={provider}
                    onClick={() => signIn(provider, { callbackUrl })}
                    className="w-full px-6 py-3 bg-dark-lighter hover:bg-dark-light rounded-lg transition-all flex items-center justify-center gap-3 group"
                  >
                    <Icon className="text-xl" style={{ color }} />
                    <span className="text-white font-medium group-hover:text-primary transition-colors">
                      Continue with {label}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              // Login/Signup Form
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-dark border border-dark rounded-lg focus:outline-none focus:border-primary text-white"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 bg-dark border border-dark rounded-lg focus:outline-none focus:border-primary text-white"
                    placeholder="Enter your password"
                  />
                </div>
                {activeTab === 'signup' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 bg-dark border border-dark rounded-lg focus:outline-none focus:border-primary text-white"
                      placeholder="Confirm your password"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-primary rounded bg-dark border-dark" />
                    <span className="ml-2 text-sm text-gray-400">Remember me</span>
                  </label>
                  {activeTab === 'login' && (
                    <a href="/auth/forgot-password" className="text-sm text-primary hover:text-primary-light">
                      Forgot password?
                    </a>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors shadow-glow hover:shadow-glow-hover"
                >
                  {activeTab === 'login' ? 'Login' : 'Create Account'}
                </button>
              </form>
            )}

            <div className="mt-6 text-center text-sm text-gray-400">
              By continuing, you agree to our{' '}
              <a href="/terms" className="text-primary hover:text-primary-light">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-primary hover:text-primary-light">
                Privacy Policy
              </a>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}

// Export the wrapped component with Suspense
export default function SignIn() {
  return (
    <Suspense fallback={<SignInLoading />}>
      <SignInContent />
    </Suspense>
  );
} 