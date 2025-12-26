
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../supabase';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
            },
          },
        });
        if (error) throw error;
        alert('Check your email for the confirmation link!');
      }
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'An authentication error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6 bg-white">
      <div className="max-w-md w-full">
        {/* Logo Section */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center group">
            <div className="w-12 h-12 bg-black flex items-center justify-center rounded-sm mr-3 transform group-hover:rotate-12 transition-transform shadow-xl">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
            <span className="text-2xl font-bold text-black tracking-[0.2em] uppercase">La Maison</span>
          </Link>
        </div>

        <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 shadow-2xl space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black uppercase tracking-widest">
              {isLogin ? 'Member Login' : 'Private Access'}
            </h2>
            <p className="mt-3 text-sm text-gray-400 font-medium tracking-wide uppercase">
              {isLogin ? 'Enter your credentials to continue' : 'Join our exclusive Cambodian membership'}
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border-l-2 border-red-500 p-4 text-xs font-bold uppercase tracking-widest text-red-600">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {!isLogin && (
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors font-bold text-sm"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors font-bold text-sm"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Secret Password</label>
                <input
                  type="password"
                  required
                  className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors font-bold text-sm"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 border-gray-200 rounded-sm text-black focus:ring-0" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-black transition-colors">Remember me</span>
              </label>
              {isLogin && (
                <button type="button" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-black transition-colors">
                  Forgot?
                </button>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all shadow-xl disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
                </div>
              ) : (
                isLogin ? 'Sign In Now' : 'Create Account'
              )}
            </button>
          </form>

          <div className="text-center pt-4">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] hover:text-black transition-all border-b border-transparent hover:border-black pb-1"
            >
              {isLogin ? "Become a Member" : "Back to Login"}
            </button>
          </div>
        </div>

        <p className="mt-12 text-center text-[10px] text-gray-300 font-bold uppercase tracking-[0.2em]">
          Copyright © 2024 La Maison <br />Kingdom of Cambodia
        </p>
      </div>
    </div>
  );
};

export default Auth;
