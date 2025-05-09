import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeView.css';

const HomeView = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <h1 className="welcome">Schengen Vize Randevu</h1>
      <p className="description">
        Boşalan randevuları takip edin, anında haberdar olun!
      </p>

      <div className="card-container">
        <div className="card" onClick={() => navigate('/appointments')}>
          <h2 className="card-title">Müsait Randevular</h2>
          <p className="card-text">
            • Almanya{'\n'}
            • Fransa{'\n'}
            • İtalya{'\n'}
            • İspanya
          </p>
          <span className="card-badge">4 yeni randevu</span>
        </div>

        <div className="card" onClick={() => navigate('/appointment-form')}>
          <h2 className="card-title">Randevu Takibi</h2>
          <p className="card-text">
            Takip ettiğiniz randevular:{'\n'}
            • Almanya Konsolosluğu - İstanbul{'\n'}
            • Fransa Konsolosluğu - Ankara
          </p>
        </div>

        <div className="card" onClick={() => navigate('/notification-settings')}>
          <h2 className="card-title">Bildirim Ayarları</h2>
          <p className="card-text">
            • Anlık bildirimler aktif{'\n'}
            • E-posta bildirimleri aktif{'\n'}
            • SMS bildirimleri pasif
          </p>
        </div>
      </div>

      <button className="logout-button" onClick={handleLogout}>Çıkış Yap</button>
    </div>
  );
};

export default HomeView; 