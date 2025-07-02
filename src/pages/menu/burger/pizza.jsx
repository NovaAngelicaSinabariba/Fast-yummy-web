import React, { useState } from "react";
import "./globals.css";
import "./styleguide.css";
import "./style.css";

export default function PizzaPage() {
  const [keranjang, setKeranjang] = useState([]);
  const [showKeranjang, setShowKeranjang] = useState(false);

  const produkList = [
    { nama: "Hawaiian Pizza", harga: 45000 },
    { nama: "Vegetarian Pizza", harga: 40000 },
    { nama: "Pepperoni Pizza", harga: 45000 },
    { nama: "Four Cheese Pizza", harga: 55000 },
  ];

  const tambahKeranjang = (nama, harga) => {
    setKeranjang([...keranjang, { nama, harga }]);
  };

  const hapusItem = (index) => {
    const newKeranjang = [...keranjang];
    newKeranjang.splice(index, 1);
    setKeranjang(newKeranjang);
  };

  const totalHarga = keranjang.reduce((total, item) => total + item.harga, 0);

  return (
    <div className="pizza">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="mask">
            <div className="overlap-group">
              <img
                className="download-nero-AI"
                src="https://c.animaapp.com/3oWeXpYn/img/download-nero-ai-background-remover--1--2.png"
                alt="background"
              />
              <div className="rectangle"></div>
            </div>
          </div>
          <div className="div"></div>

          {/* Header */}
          <div className="MASUKK">
            <div className="overlap-2">
              <div className="group">
                <div className="logo">
                  <div className="overlap-group-2">
                    <div className="text-wrapper">Fast</div>
                    <div className="text-wrapper-2">Yummy</div>
                  </div>
                </div>
              </div>
              <div className="group-2" />
            </div>
            <p className="home-menu-contact">
              <span className="span">Home</span>
              <span className="text-wrapper-3">&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="text-wrapper-4">
                Menu&nbsp;&nbsp;&nbsp;&nbsp; Contact&nbsp;&nbsp;&nbsp;&nbsp;
                About Us
              </span>
            </p>
            <div className="overlap-3">
              <div className="rectangle-2"></div>
              <div className="rectangle-3"></div>
              <div className="masuk">
                <div className="text-wrapper-5">Sign In</div>
                <div className="text-wrapper-6">Sign Up</div>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="search">
            <div className="value">
              <input type="text" placeholder="search" />
            </div>
            <img
              className="x"
              src="https://c.animaapp.com/3oWeXpYn/img/x.svg"
              alt="close"
            />
          </div>

          {/* Produk */}
          <div className="group-produk">
            {produkList.map((produk, index) => (
              <div key={index} className="card">
                <div className="card-title">{produk.nama}</div>
                <div className="card-price">
                  Rp. {produk.harga.toLocaleString()}
                </div>
                <div className="card-add">
                  <div
                    className="div-wrapper"
                    onClick={() => tambahKeranjang(produk.nama, produk.harga)}
                  >
                    <div className="text-wrapper-9">Add</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gambar dekoratif */}
          <img
            className="whatsapp-image"
            src="https://c.animaapp.com/3oWeXpYn/img/whatsapp-image-2025-06-17-at-11-02-54-1442b40a-1@2x.png"
            alt=""
          />
          <img
            className="img"
            src="https://c.animaapp.com/3oWeXpYn/img/whatsapp-image-2025-06-17-at-11-02-53-22633cd7-2@2x.png"
            alt=""
          />
          <img
            className="whatsapp-image-2"
            src="https://c.animaapp.com/3oWeXpYn/img/whatsapp-image-2025-06-17-at-11-02-53-1d687f45-1@2x.png"
            alt=""
          />
          <img
            className="whatsapp-image-3"
            src="https://c.animaapp.com/3oWeXpYn/img/whatsapp-image-2025-06-17-at-11-02-53-22633cd7-2@2x.png"
            alt=""
          />
          <img
            className="shopping-cart"
            src="https://c.animaapp.com/3oWeXpYn/img/shopping-cart.svg"
            alt="cart"
            onClick={() => setShowKeranjang(!showKeranjang)}
          />
          <img
            className="arrow-back"
            src="https://c.animaapp.com/3oWeXpYn/img/arrow-back.svg"
            alt="back"
          />
        </div>
      </div>

      {/* Keranjang */}
      {showKeranjang && (
        <div id="keranjang">
          <ul id="daftar-keranjang">
            {keranjang.map((item, index) => (
              <li key={index} className="keranjang-item">
                {item.nama} - Rp. {item.harga.toLocaleString()}
                <button onClick={() => hapusItem(index)}>x</button>
              </li>
            ))}
          </ul>
          <div id="total-harga">Total: Rp. {totalHarga.toLocaleString()}</div>
          <button
            id="checkout-button"
            onClick={() => {
              if (keranjang.length === 0) {
                alert("Keranjang masih kosong!");
              } else {
                alert(
                  "Terima kasih sudah memesan!\nTotal: Rp. " +
                    totalHarga.toLocaleString()
                );
                setKeranjang([]);
                setShowKeranjang(false);
              }
            }}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
