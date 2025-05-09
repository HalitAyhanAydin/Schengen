import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginView.css';

const TEST_EMAIL = 'test@test.com';
const TEST_PASSWORD = '123456';

const LoginView = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === TEST_EMAIL && password === TEST_PASSWORD) {
      alert('Başarılı! Giriş yapıldı.');
      navigate('/home');
    } else {
      alert('Hata: E-posta veya şifre hatalı!\n\nTest için:\nE-posta: test@test.com\nŞifre: 123456');
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h1 className="title">Giriş Yap</h1>
        <input
          className="input"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input
          className="input"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button className="button" onClick={handleLogin}>Giriş Yap</button>
        <button className="link-button" onClick={() => navigate('/register')}>
          Hesabın yok mu? Kayıt ol
        </button>
        <div className="test-info">
          <p>Test Bilgileri:</p>
          <p>E-posta: {TEST_EMAIL}</p>
          <p>Şifre: {TEST_PASSWORD}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginView; 