"use client";
import React, { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import Navbar from "../components/navbar";

export default function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    startTime: "",
    endTime: "",
    guests: "",
    resources: [] as string[],
    message: ""
  });

  // Resource mapping with names and descriptions
  const resourceMap = {
    'main-hall': { name: 'Main Hall', description: 'Large main hall perfect for weddings, parties, and community events', capacity: 150, type: 'Hall' },
    'meeting-room': { name: 'Meeting Room', description: 'Smaller room ideal for meetings, workshops, and intimate gatherings', capacity: 20, type: 'Room' },
    'outdoor-area': { name: 'Outdoor Area', description: 'Covered outdoor area with BBQ facilities', capacity: 100, type: 'Outdoor' }
  };

  // State for selected dates per resource
  const [selectedDates, setSelectedDates] = useState<Record<string, {day: number, month: number, year: number} | null>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleResourceChange = (resourceId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      resources: checked 
        ? [...prev.resources, resourceId]
        : prev.resources.filter(id => id !== resourceId)
    }));
  };

  const handleDateSelect = (dateData: { day: number; month: number; year: number; resourceId?: string }) => {
    if (dateData.resourceId) {
      const resourceId = dateData.resourceId;
      setSelectedDates(prev => ({
        ...prev,
        [resourceId]: { day: dateData.day, month: dateData.month, year: dateData.year }
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that at least one resource is selected
    if (formData.resources.length === 0) {
      alert("Please select at least one resource for your event.");
      return;
    }
    
    // Prepare booking data with selected dates
    const bookingData = {
      ...formData,
      selectedDates: selectedDates,
      resourceDetails: formData.resources.map(resourceId => ({
        id: resourceId,
        name: resourceMap[resourceId as keyof typeof resourceMap].name,
        selectedDate: selectedDates[resourceId]
      }))
    };
    
    // Handle form submission here
    console.log("Booking request:", bookingData);
    alert("Thank you for your booking request! We'll get back to you soon.");
  };

  return (
    <div className="bg-stone-50 font-sans min-h-screen flex flex-col">
      {/* Use existing navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-24 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-black text-[#181411] mb-4">
              Book Your Event
            </h1>
            <p className="text-lg text-[#897561] max-w-2xl mx-auto">
              Reserve Cranbourne Public Hall for your special occasion. Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Calendar and Info - Show first on mobile */}
            <div className="space-y-6 order-1 lg:order-2">
              {/* Calendars for Selected Resources */}
              {formData.resources.length > 0 ? (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-[#181411] mb-4 text-center">Check Availability</h3>
                  <div className="space-y-6">
                    {formData.resources.map((resourceId) => {
                      const resource = resourceMap[resourceId as keyof typeof resourceMap];
                      return (
                        <div key={resourceId} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                          <div className="flex justify-center">
                            <Calendar 
                              resourceId={resourceId}
                              resourceName={resource.name}
                              onDateSelect={handleDateSelect}
                            />
                          </div>
                          {selectedDates[resourceId] && (
                            <div className="mt-3 text-center">
                              <p className="text-sm text-[#897561]">
                                Selected date for {resource.name}: {selectedDates[resourceId]?.day}/{selectedDates[resourceId]?.month + 1}/{selectedDates[resourceId]?.year}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-[#181411] mb-4 text-center">Check Availability</h3>
                  <div className="text-center py-8">
                    <p className="text-[#897561] mb-4">Select resources above to view their availability calendars</p>
                    <div className="flex justify-center">
                      <Calendar />
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-[#181411] mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#ec8013] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📞</span>
                    </div>
                    <span className="text-[#181411]">(61) 400 908 740</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#ec8013] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✉️</span>
                    </div>
                    <span className="text-[#181411]">cranbournepublichall@gmail.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#ec8013] rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <span className="text-[#181411]">Cnr Clarendon High Streets, VIC, Australia, Victoria</span>
                  </div>
                </div>
              </div>

              {/* Pricing Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-[#181411] mb-4">Pricing</h3>
                <div className="space-y-2 text-[#181411]">
                  <p><strong>Half Day (4 hours):</strong> $150</p>
                  <p><strong>Full Day (8 hours):</strong> $250</p>
                  <p><strong>Evening Events:</strong> $200</p>
                  <p className="text-sm text-[#897561] mt-3">
                    * Prices may vary based on event type and requirements. Contact us for custom quotes.
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Form - Show second on mobile */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 order-2 lg:order-1">
              <h2 className="text-2xl font-bold text-[#181411] mb-6">Booking Request</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#181411] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ec8013] focus:border-gray-300 text-[#181411] bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#181411] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ec8013] focus:border-gray-300 text-[#181411] bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#181411] mb-2">
                    Phone Number *
                  </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ec8013] focus:border-gray-300 text-[#181411] bg-white"
                      placeholder="Your phone number"
                    />
                </div>

                {/* Event Details */}
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-[#181411] mb-2">
                    Event Type *
                  </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ec8013] focus:border-gray-300 text-[#181411] bg-white"
                    >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="community">Community Event</option>
                    <option value="meeting">Meeting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Resource Selection */}
                <div>
                  <label className="block text-sm font-medium text-[#181411] mb-3">
                    Select Resources *
                  </label>
                  <div className="space-y-3">
                    {Object.entries(resourceMap).map(([resourceId, resource]) => (
                      <div key={resourceId} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <input
                          type="checkbox"
                          id={`resource-${resourceId}`}
                          checked={formData.resources.includes(resourceId)}
                          onChange={(e) => handleResourceChange(resourceId, e.target.checked)}
                          className="mt-1 h-4 w-4 text-[#ec8013] focus:ring-[#ec8013] border-gray-300 rounded"
                        />
                        <div className="flex-1">
                          <label htmlFor={`resource-${resourceId}`} className="block text-sm font-medium text-[#181411] cursor-pointer">
                            {resource.name}
                          </label>
                          <p className="text-sm text-[#897561] mt-1">
                            {resource.description}
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-[#897561]">
                            <span>Capacity: {resource.capacity} people</span>
                            <span>Type: {resource.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-[#181411] mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ec8013] focus:border-gray-300 text-[#181411] bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-[#181411] mb-2">
                      Number of Guests *
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      required
                      min="1"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ec8013] focus:border-gray-300 text-[#181411] bg-white"
                      placeholder="Expected guests"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="startTime" className="block text-sm font-medium text-[#181411] mb-2">
                      Start Time *
                    </label>
                    <input
                      type="time"
                      id="startTime"
                      name="startTime"
                      required
                      value={formData.startTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ec8013] focus:border-gray-300 text-[#181411] bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="endTime" className="block text-sm font-medium text-[#181411] mb-2">
                      End Time *
                    </label>
                    <input
                      type="time"
                      id="endTime"
                      name="endTime"
                      required
                      value={formData.endTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ec8013] focus:border-gray-300 text-[#181411] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#181411] mb-2">
                    Additional Information
                  </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ec8013] focus:border-gray-300 text-[#181411] bg-white"
                      placeholder="Tell us more about your event, special requirements, or any questions you have..."
                    />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#e63946] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#d62839] transition-colors text-lg"
                >
                  Submit Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
