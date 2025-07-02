import { useState } from 'react';
import './Menu.css';
import myBg from '../public/bg.png';

const Menu = ()   => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('signin');

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="desktop">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="mask">
            <div className="overlap-group">
              <img
                className="download-nero-AI"
                src="https://c.animaapp.com/b6RHuuK8/img/download-nero-ai-background-remover--1--2.png"
                alt="Background Remover"
              />
              <div className="rectangle"></div>
            </div>
          </div>
          <div className="MASUKK">
            <div className="home-menu-contact">
              <a href="index.html">Home</a>
              &nbsp;&nbsp;&nbsp;
              <a href="index2_Menu.html">Menu</a>
              &nbsp;&nbsp;&nbsp;
              <a href="index3_AboutUs.html">About Us</a>
              &nbsp;&nbsp;&nbsp;
              <a href="index4_Contact.html">Contact</a>
            </div>
            <div className="overlap-3">
              <div className="masuk">
                <div className="text-wrapper-5" onClick={() => openModal('signin')}>Sign In</div>
                <div className="text-wrapper-6" onClick={() => openModal('signup')}>Sign Up</div>
              </div>
            </div>
          </div>
          <div className="menu-utama">
            <div className="overlap-4">
              <div className="tulisan-menu">
                <p className="OUR-ITEMS">
                  <span className="text-wrapper-4">OUR</span> <span className="span">ITEMS</span>
                </p>
                <img className="line" src="https://c.animaapp.com/b6RHuuK8/img/line-2.svg" alt="Line 2" />
                <img className="img" src="https://c.animaapp.com/b6RHuuK8/img/line-3.svg" alt="Line 3" />
                <div className="text-wrapper-9">Various Drinks</div>
                <p className="p">Free delivery for first order.</p>
                <div className="text-wrapper-10">Burger</div>
                <p className="text-wrapper-11">Flats 10% discount on Sunday.</p>
                <p className="text-wrapper-12">Get 10% off on your order.</p>
                <div className="text-wrapper-13">Pizza</div>
                <div className="text-wrapper-14">French fries </div>
                <p className="text-wrapper-15">Free delivery for first order.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div id="modalContainer" style={{ display: 'flex', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', zIndex: 1001, alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'transparent', padding: '20px', borderRadius: '10px', width: '300px', position: 'relative' }}>
            <span className="close-btn" onClick={closeModal}>×</span>
            {modalType === 'signin' ? (
              <div id="signinForm">
                <h2>Sign In</h2>
                <input type="text" placeholder="Username" style={{ width: '100%', marginBottom: '10px' }} /><br />
                <input type="password" placeholder="Password" style={{ width: '100%', marginBottom: '10px' }} /><br />
                <button style={{ width: '100%', marginBottom: '10px' }}>Send</button><br />
                <small>Belum punya akun? <a href="#" onClick={() => openModal('signup')}>Sign Up</a></small>
              </div>
            ) : (
              <div id="signupForm">
                <h2>Sign Up</h2>
                <input type="text" placeholder="Name" style={{ width: '100%', marginBottom: '10px' }} /><br />
                <input type="date" style={{ width: '100%', marginBottom: '10px' }} /><br />
                <select style={{ width: '100%', marginBottom: '10px' }}>
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select><br />
                <input type="text" placeholder="Address" style={{ width: '100%', marginBottom: '10px' }} /><br />
                <input type=  "email" placeholder="Email" style={{ width: '100%', marginBottom: '10px' }} /><br />
                <input type="tel" placeholder="Telephone" style={{ width: '100%', marginBottom: '10px' }} /><br />
                <input type="password" placeholder="Password" style={{ width: '100%', marginBottom: '10px' }} /><br />
                <button style={{ width: '100%' }}>Send</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
