import React from 'react';
import '../views/ProfileView.css';

const ProfileView = () => {
  return (
    <div className="container">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">👤</div>
          <h1 className="profile-name">Kullanıcı Adı</h1>
          <p className="profile-email">kullanici@email.com</p>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <h2>Kişisel Bilgiler</h2>
            <div className="profile-info">
              <div className="info-group">
                <label>Ad Soyad</label>
                <p>Kullanıcı Adı</p>
              </div>
              <div className="info-group">
                <label>E-posta</label>
                <p>kullanici@email.com</p>
              </div>
              <div className="info-group">
                <label>Telefon</label>
                <p>+90 555 123 4567</p>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>Vize Bilgileri</h2>
            <div className="profile-info">
              <div className="info-group">
                <label>Pasaport No</label>
                <p>U12345678</p>
              </div>
              <div className="info-group">
                <label>Son Vize Tarihi</label>
                <p>01.01.2024</p>
              </div>
              <div className="info-group">
                <label>Vize Tipi</label>
                <p>Turistik</p>
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <button className="btn btn-primary">Bilgileri Güncelle</button>
            <button className="btn btn-secondary">Şifre Değiştir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView; 