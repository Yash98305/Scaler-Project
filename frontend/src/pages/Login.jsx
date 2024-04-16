import React, { useState, useEffect } from 'react';
import '../css/login.css'; // Assume your CSS is imported from external file

function Login() {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'initial';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 3 && !isOpen) {
        openModal();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.keyCode === 27) closeModal();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="container">
      <div className={`modal ${isOpen ? 'is-open' : ''}`}>
        <div className="modal-container">
          <div className="modal-left">
            <h1 className="modal-title">Welcome!</h1>
            <p className="modal-desc">Fanny pack hexagon food truck, street art waistcoat kitsch.</p>
            <div className="input-block">
              <label htmlFor="email" className="input-label">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="input-block">
              <label htmlFor="password" className="input-label">Password</label>
              <input type="password" name="password" id="password" placeholder="Password" />
            </div>
            <div className="modal-buttons">
              <a href="#" className="">Forgot your password?</a>
              <button className="input-button">Login</button>
            </div>
            <p className="sign-up">Don't have an account? <a href="#">Sign up now</a></p>
          </div>
          <div className="modal-right">
            <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80" alt="" />
          </div>
          <button className="icon-button close-button" onClick={closeModal}>
            {/* SVG code */}
          </button>
        </div>
        <button className="modal-button" onClick={openModal}>Click here to login</button>
      </div>
    </div>
  );
}

export default Login;
