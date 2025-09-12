"use client";

import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import ProfileModal from './ProfileModal';

export default function ProfileIcon() {
  const { user, isAuthenticated, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleProfileClick = () => {
    if (isAuthenticated) {
      setShowProfileModal(true);
    } else {
      setShowLoginModal(true);
    }
  };

  return (
    <>
      {/* Profile Icon - Fixed bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleProfileClick}
          className="w-14 h-14 bg-[#e63946] hover:bg-[#d62839] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#e63946]/30"
          title={isAuthenticated ? 'View Profile' : 'Login'}
        >
          {isAuthenticated && user?.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
          ) : (
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onSuccess={() => setShowLoginModal(false)}
        />
      )}

      {/* Profile Modal */}
      {showProfileModal && (
        <ProfileModal
          onClose={() => setShowProfileModal(false)}
          onLogout={() => {
            logout();
            setShowProfileModal(false);
          }}
        />
      )}
    </>
  );
}
