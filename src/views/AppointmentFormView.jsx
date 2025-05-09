import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './AppointmentFormView.css';

const AppointmentFormView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const appointmentId = location.state?.appointmentId;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    passportNumber: '',
    birthDate: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleSubmit = () => {
    if (!formData.firstName || !formData.lastName || !formData.passportNumber) {
      alert('Hata: Lütfen zorunlu alanları doldurun');
      return;
    }

    alert('Başarılı: Randevu başvurunuz alındı. En kısa sürede size dönüş yapılacaktır.');
    navigate('/home');
  };

  return (
    <div className="appointment-form-container">
      <h1 className="title">Randevu Formu</h1>
      <p className="subtitle">
        Lütfen randevu başvurusu için gerekli bilgileri doldurun
      </p>

      <div className="form">
        <div className="input-group">
          <label className="label">Ad *</label>
          <input
            className="input"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            placeholder="Adınız"
          />
        </div>

        <div className="input-group">
          <label className="label">Soyad *</label>
          <input
            className="input"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            placeholder="Soyadınız"
          />
        </div>

        <div className="input-group">
          <label className="label">Pasaport Numarası *</label>
          <input
            className="input"
            value={formData.passportNumber}
            onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
            placeholder="Pasaport numaranız"
          />
        </div>

        <div className="input-group">
          <label className="label">Doğum Tarihi</label>
          <input
            className="input"
            value={formData.birthDate}
            onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
            placeholder="GG/AA/YYYY"
          />
        </div>

        <div className="input-group">
          <label className="label">E-posta</label>
          <input
            className="input"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="E-posta adresiniz"
            type="email"
          />
        </div>

        <div className="input-group">
          <label className="label">Telefon</label>
          <input
            className="input"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Telefon numaranız"
            type="tel"
          />
        </div>

        <div className="input-group">
          <label className="label">Adres</label>
          <textarea
            className="input textarea"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder="Açık adresiniz"
            rows={4}
          />
        </div>

        <button className="submit-button" onClick={handleSubmit}>
          Randevu Başvurusu Yap
        </button>
      </div>
    </div>
  );
};

export default AppointmentFormView; 