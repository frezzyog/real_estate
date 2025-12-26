
import React from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { User } from '../types';
import PropertyCard from '../components/PropertyCard';
import { MOCK_PROPERTIES } from '../constants';

import CreateListing from './CreateListing';

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const location = useLocation();
  const activeTab = location.pathname.split('/').pop() || 'favorites';

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-white">Welcome back, {user.name}</h1>
        <p className="text-gray-500 mt-2">Manage your favorite homes and property listings in Cambodia.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="space-y-1">
            <Link
              to="/dashboard"
              className={`flex items-center px-4 py-3 text-sm font-bold uppercase tracking-widest rounded-sm transition-colors ${activeTab === 'dashboard' || activeTab === 'favorites' ? 'bg-black text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
            >
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Saved Homes
            </Link>
            <Link
              to="/dashboard/listings"
              className={`flex items-center px-4 py-3 text-sm font-bold uppercase tracking-widest rounded-sm transition-colors ${activeTab === 'listings' || activeTab === 'create-listing' ? 'bg-black text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
            >
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              My Listings
            </Link>
            <Link
              to="/dashboard/settings"
              className={`flex items-center px-4 py-3 text-sm font-bold uppercase tracking-widest rounded-sm transition-colors ${activeTab === 'settings' ? 'bg-black text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
            >
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Settings
            </Link>
          </nav>
        </aside>

        {/* Main Dashboard Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<FavoritesView />} />
            <Route path="/listings" element={<MyListingsView />} />
            <Route path="/create-listing" element={<CreateListing user={user} />} />
            <Route path="/settings" element={<SettingsView user={user} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const FavoritesView: React.FC = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold text-black uppercase tracking-widest">Saved Homes</h2>
      <button className="text-gray-400 hover:text-black text-xs font-bold uppercase tracking-widest transition-colors">Remove all</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {MOCK_PROPERTIES.slice(0, 2).map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  </div>
);

const MyListingsView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-sm border border-gray-100 p-12 text-center space-y-4 shadow-sm">
      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="h-10 w-10 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
      </div>
      <h2 className="text-xl font-bold text-black uppercase tracking-widest">No active listings</h2>
      <p className="text-gray-400 max-w-sm mx-auto font-medium">You haven't posted any properties for sale or rent yet. Start listing today to reach buyers in Cambodia.</p>
      <button
        onClick={() => navigate('/dashboard/create-listing')}
        className="bg-black text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-all mt-4"
      >
        Create New Listing
      </button>
    </div>
  );
};

const SettingsView: React.FC<{ user: User }> = ({ user }) => {
  const [avatar, setAvatar] = React.useState(user.avatar || '');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-sm border border-gray-100 p-8 shadow-sm">
      <h2 className="text-xl font-bold mb-8 text-black uppercase tracking-widest">Account Settings</h2>

      {/* Profile Photo Section */}
      <div className="flex items-center space-x-8 mb-12 pb-8 border-b border-gray-50">
        <div className="relative group">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
            {avatar ? (
              <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <svg className="w-12 h-12 text-gray-200" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
            )}
          </div>
          <button
            onClick={() => document.getElementById('avatar-upload')?.click()}
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-full"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </button>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
        <div>
          <h3 className="font-bold text-black uppercase tracking-widest text-xs mb-1">Profile Photo</h3>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest">JPG, PNG or GIF. Max size of 1MB</p>
          <button
            onClick={() => document.getElementById('avatar-upload')?.click()}
            className="text-black text-[10px] font-bold uppercase tracking-widest mt-3 hover:underline"
          >
            Upload New Image
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Display Name</label>
            <input type="text" defaultValue={user.name} className="w-full border-b border-gray-100 py-3 focus:border-black outline-none transition-colors font-bold text-sm" />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Email Address</label>
            <input type="email" defaultValue={user.email} className="w-full border-b border-gray-100 py-3 focus:border-black outline-none transition-colors font-bold text-sm text-gray-400" readOnly />
          </div>
        </div>
        <div className="flex items-center space-x-6 pt-4">
          <button className="bg-black text-white px-10 py-3 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-gray-800 transition-all">Save Changes</button>
          <button className="text-gray-400 hover:text-black font-bold uppercase tracking-widest text-[10px] transition-colors">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
