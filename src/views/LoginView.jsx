import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './LoginView.css';

const TEST_EMAIL = 'test@test.com';
const TEST_PASSWORD = '123456';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/home');
    } catch (error) {
      setError('Giriş yapılamadı. Lütfen bilgilerinizi kontrol edin.');
    }
    setLoading(false);
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Giriş Yap</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit" 
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>
        <div className="register-link">
          Hesabınız yok mu? <Link to="/register">Kayıt Ol</Link>
        </div>
        <div className="test-info">
          <p>Test Bilgileri:</p>
          <p>E-posta: {TEST_EMAIL}</p>
          <p>Şifre: {TEST_PASSWORD}</p>
        </div>
      </div>
    </div>
  );
} 