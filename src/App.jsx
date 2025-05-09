import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import HomeView from './views/HomeView';
import AppointmentListView from './views/AppointmentListView';
import AppointmentFormView from './views/AppointmentFormView';
import NotificationSettingsView from './views/NotificationSettingsView';
import ProfileView from './views/ProfileView';
import './App.css';

const Header = () => {
  const location = useLocation();
  const isAuthenticated = true; // Bu değer gerçek uygulamada auth state'inden gelecek
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!isAuthenticated) return null;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/home" className="logo">
          Schengen Vize
        </Link>
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menüyü aç/kapat"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/home" className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}>
            Ana Sayfa
          </Link>
          <Link to="/appointments" className={`nav-link ${location.pathname === '/appointments' ? 'active' : ''}`}>
            Randevular
          </Link>
          <Link to="/notification-settings" className={`nav-link ${location.pathname === '/notification-settings' ? 'active' : ''}`}>
            Bildirimler
          </Link>
          <div className="user-menu">
            <button 
              className="btn btn-secondary"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <span className="user-avatar">👤</span>
              <span className="user-name">Kullanıcı</span>
            </button>
            {isProfileMenuOpen && (
              <div className="profile-dropdown">
                <Link to="/profile" className="profile-item">
                  <span className="profile-icon">👤</span>
                  Profilim
                </Link>
                <Link to="/settings" className="profile-item">
                  <span className="profile-icon">⚙️</span>
                  Ayarlar
                </Link>
                <div className="profile-divider"></div>
                <button className="profile-item logout">
                  <span className="profile-icon">🚪</span>
                  Çıkış Yap
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/home" element={<HomeView />} />
            <Route path="/appointments" element={<AppointmentListView />} />
            <Route path="/appointment-form" element={<AppointmentFormView />} />
            <Route path="/notification-settings" element={<NotificationSettingsView />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
