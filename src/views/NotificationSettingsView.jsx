import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotificationSettingsView.css';

const NotificationSettingsView = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    newAppointments: true,
    statusUpdates: true,
    reminderNotifications: true,
  });

  const handleSave = () => {
    alert('Başarılı: Bildirim ayarlarınız kaydedildi.');
    navigate('/home');
  };

  return (
    <div className="notification-settings-container">
      <h1 className="title">Bildirim Ayarları</h1>
      <p className="subtitle">
        Hangi durumlarda bildirim almak istediğinizi seçin
      </p>

      <div className="section">
        <h2 className="section-title">Bildirim Kanalları</h2>

        <div className="setting-item">
          <div className="setting-info">
            <h3 className="setting-title">Anlık Bildirimler</h3>
            <p className="setting-description">Uygulama bildirimleri (push)</p>
          </div>
          <input
            type="checkbox"
            checked={settings.pushNotifications}
            onChange={(e) => setSettings({ ...settings, pushNotifications: e.target.checked })}
          />
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <h3 className="setting-title">E-posta Bildirimleri</h3>
            <p className="setting-description">E-posta ile bilgilendirme</p>
          </div>
          <input
            type="checkbox"
            checked={settings.emailNotifications}
            onChange={(e) => setSettings({ ...settings, emailNotifications: e.target.checked })}
          />
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <h3 className="setting-title">SMS Bildirimleri</h3>
            <p className="setting-description">SMS ile bilgilendirme</p>
          </div>
          <input
            type="checkbox"
            checked={settings.smsNotifications}
            onChange={(e) => setSettings({ ...settings, smsNotifications: e.target.checked })}
          />
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Bildirim Türleri</h2>

        <div className="setting-item">
          <div className="setting-info">
            <h3 className="setting-title">Yeni Randevular</h3>
            <p className="setting-description">Yeni randevu müsaitliği olduğunda</p>
          </div>
          <input
            type="checkbox"
            checked={settings.newAppointments}
            onChange={(e) => setSettings({ ...settings, newAppointments: e.target.checked })}
          />
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <h3 className="setting-title">Durum Güncellemeleri</h3>
            <p className="setting-description">Randevu durumu değiştiğinde</p>
          </div>
          <input
            type="checkbox"
            checked={settings.statusUpdates}
            onChange={(e) => setSettings({ ...settings, statusUpdates: e.target.checked })}
          />
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <h3 className="setting-title">Hatırlatmalar</h3>
            <p className="setting-description">Randevu tarihinden önce hatırlatma</p>
          </div>
          <input
            type="checkbox"
            checked={settings.reminderNotifications}
            onChange={(e) => setSettings({ ...settings, reminderNotifications: e.target.checked })}
          />
        </div>
      </div>

      <button className="save-button" onClick={handleSave}>
        Ayarları Kaydet
      </button>
    </div>
  );
};

export default NotificationSettingsView; 