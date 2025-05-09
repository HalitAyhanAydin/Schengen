import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import HomeView from './views/HomeView';
import AppointmentListView from './views/AppointmentListView';
import AppointmentFormView from './views/AppointmentFormView';
import NotificationSettingsView from './views/NotificationSettingsView';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/appointments" element={<AppointmentListView />} />
        <Route path="/appointment-form" element={<AppointmentFormView />} />
        <Route path="/notification-settings" element={<NotificationSettingsView />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
