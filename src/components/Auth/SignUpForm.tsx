import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useAuth();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      toast.success('Account created successfully! Please check your email for verification.');
    } catch (error) {
      toast.error('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
      <form onSubmit={handleSignUp} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <div className="mt-1 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="mt-1 relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
              minLength={6}
            />
            <Lock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;