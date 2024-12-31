import React from "react";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Kayıt Ol</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="E-postanı gir"
              className="signup-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              id="password"
              placeholder="Şifreni gir"
              className="signup-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Şifre Tekrar</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Şifreni tekrar gir"
              className="signup-input"
            />
          </div>
          <button type="submit" className="signup-button">
            Kayıt Ol
          </button>
        </form>
        <p className="signup-footer">
          Hesabın var mı?  <Link to="/login">Giriş Yap</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;