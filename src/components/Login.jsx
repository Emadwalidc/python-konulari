import React, { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login logic (You can replace this with actual authentication logic)
    if (email && password) {
      setModalMessage("Başarıyla giriş yapıldı!");
    } else {
      setModalMessage("Doldurun.");
    }
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Giriş Yap</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="E postanı gir"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              id="password"
              placeholder="Şifreni gir"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Giriş Yap
          </button>
        </form>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal">
          <span className="close-btn" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content">
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
