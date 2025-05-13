import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
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
  const { currentUser, logout } = useAuth();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!currentUser) return null;

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Çıkış yapılırken hata oluştu:', error);
    }
  };

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
              <span className="user-name">{currentUser.email}</span>
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
                <button onClick={handleLogout} className="profile-item logout">
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
      <AuthProvider>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/login" element={<LoginView />} />
              <Route path="/register" element={<RegisterView />} />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <HomeView />
                  </PrivateRoute>
                }
              />
              <Route
                path="/appointments"
                element={
                  <PrivateRoute>
                    <AppointmentListView />
                  </PrivateRoute>
                }
              />
              <Route
                path="/appointment-form"
                element={
                  <PrivateRoute>
                    <AppointmentFormView />
                  </PrivateRoute>
                }
              />
              <Route
                path="/notification-settings"
                element={
                  <PrivateRoute>
                    <NotificationSettingsView />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <ProfileView />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
