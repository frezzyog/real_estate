
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types';
import { supabase } from '../supabase';

interface CreateListingProps {
    user: User;
}

const CreateListing: React.FC<CreateListingProps> = ({ user }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        address: '',
        price: '',
        beds: '',
        baths: '',
        sqft: '',
        type: 'House',
        listingType: 'Sale',
        description: '',
        imageUrl: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // In a real app, we would insert into Supabase here
            console.log('Submitting listing:', formData, 'for user:', user.id);

            // Simulating a small delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            alert('Listing created successfully! (Simulation)');
            navigate('/dashboard/listings');
        } catch (error) {
            console.error('Error creating listing:', error);
            alert('Failed to create listing.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-sm border border-gray-100 p-10 shadow-sm transition-all duration-300">
            <div className="flex items-center space-x-6 mb-10 pb-6 border-b border-gray-50">
                <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-50 rounded-full transition-colors text-black">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2 / 2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                </button>
                <h2 className="text-xl font-bold text-black uppercase tracking-[0.2em]">Create New Listing</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Property Title</label>
                            <input
                                required
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="e.g. Modern Villa in BKK1"
                                className="w-full border-b border-gray-100 py-3 focus:border-black outline-none transition-colors font-bold text-sm bg-transparent placeholder:text-gray-200"
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Detailed Address</label>
                            <input
                                required
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Street address, District, City"
                                className="w-full border-b border-gray-100 py-3 focus:border-black outline-none transition-colors font-bold text-sm bg-transparent placeholder:text-gray-200"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Price (USD)</label>
                                <input
                                    required
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="250000"
                                    className="w-full border-b border-gray-100 py-3 focus:border-black outline-none transition-colors font-bold text-sm bg-transparent placeholder:text-gray-200"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Category</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-100 py-3 focus:border-black outline-none transition-colors font-bold text-sm bg-transparent cursor-pointer"
                                >
                                    <option value="House">Borey / House</option>
                                    <option value="Condo">Condo</option>
                                    <option value="Townhome">Townhome</option>
                                    <option value="Shophouse">Shophouse</option>
                                    <option value="Land">Land</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="grid grid-cols-3 gap-6">
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Beds</label>
                                <input
                                    type="number"
                                    name="beds"
                                    value={formData.beds}
                                    onChange={handleChange}
                                    placeholder="3"
                                    className="w-full border-b border-gray-100 py-3 focus:border-black outline-none transition-colors font-bold text-sm bg-transparent placeholder:text-gray-200"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Baths</label>
                                <input
                                    type="number"
                                    name="baths"
                                    value={formData.baths}
                                    onChange={handleChange}
                                    placeholder="2"
                                    className="w-full border-b border-gray-100 py-3 focus:border-black outline-none transition-colors font-bold text-sm bg-transparent placeholder:text-gray-200"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Size (m²)</label>
                                <input
                                    type="number"
                                    name="sqft"
                                    value={formData.sqft}
                                    onChange={handleChange}
                                    placeholder="120"
                                    className="w-full border-b border-gray-100 py-3 focus:border-black outline-none transition-colors font-bold text-sm bg-transparent placeholder:text-gray-200"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Listing Nature</label>
                            <div className="flex space-x-8 pt-4">
                                <label className="flex items-center space-x-3 cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="listingType"
                                        value="Sale"
                                        checked={formData.listingType === 'Sale'}
                                        onChange={handleChange}
                                        className="w-4 h-4 border-gray-200 rounded-full text-black focus:ring-0 cursor-pointer"
                                    />
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">For Sale</span>
                                </label>
                                <label className="flex items-center space-x-3 cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="listingType"
                                        value="Rent"
                                        checked={formData.listingType === 'Rent'}
                                        onChange={handleChange}
                                        className="w-4 h-4 border-gray-200 rounded-full text-black focus:ring-0 cursor-pointer"
                                    />
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">For Rent</span>
                                </label>
                            </div>
                        </div>

                        <div className="relative group">
                            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Property Media</label>
                            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-100 rounded-sm p-12 hover:border-black transition-all group-hover:bg-gray-50/50 cursor-pointer relative overflow-hidden"
                                onClick={() => document.getElementById('image-upload')?.click()}>
                                {formData.imageUrl ? (
                                    <div className="absolute inset-0 w-full h-full">
                                        <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="text-white text-[10px] font-bold uppercase tracking-widest">Change Photo</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center space-y-4">
                                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
                                            <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-black">Click to upload photo</p>
                                            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">PNG, JPG up to 10MB</p>
                                        </div>
                                    </div>
                                )}
                                <input
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                setFormData({ ...formData, imageUrl: reader.result as string });
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                    className="hidden"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Property Description</label>
                    <textarea
                        rows={6}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe the property's unique features, orientation, neighborhood, etc."
                        className="w-full border border-gray-100 p-6 focus:border-black outline-none transition-colors font-medium text-sm bg-transparent rounded-sm placeholder:text-gray-200"
                    />
                </div>

                <div className="flex justify-end pt-6 border-t border-gray-50">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-black text-white px-16 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-xl disabled:opacity-50"
                    >
                        {loading ? 'Processing...' : 'Publish Listing'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateListing;
