import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterView.css';

const RegisterView = () => {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <div className="form-container">
        <h1 className="title">Kayıt Ol</h1>
        <input
          className="input"
          placeholder="Ad Soyad"
          type="text"
        />
        <input
          className="input"
          placeholder="E-posta"
          type="email"
        />
        <input
          className="input"
          placeholder="Şifre"
          type="password"
        />
        <button className="button">Kayıt Ol</button>
        <button className="link-button" onClick={() => navigate('/login')}>
          Zaten hesabın var mı? Giriş yap
        </button>
      </div>
    </div>
  );
};

export default RegisterView; 