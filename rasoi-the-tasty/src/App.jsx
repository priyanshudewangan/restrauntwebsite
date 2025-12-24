import React, { useState, useEffect } from 'react';
import { Sun, Moon, Phone, MapPin, MessageCircle, Leaf, Utensils, ChefHat, Sparkles } from 'lucide-react';
import menuData from './data/menu.json';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [activeCategory, setActiveCategory] = useState(menuData.menu[0]?.category);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentCategoryData = menuData.menu.find(cat => cat.category === activeCategory);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app">
      {/* HEADER / NAVBAR */}
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <h1 className="logo-main">Rasoi – The Tasty</h1>
          </div>
          
          <nav className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#menu" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}>Menu</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </nav>

          <div className="navbar-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="hero-title">Rasoi – The Tasty</h2>
          <p className="hero-subtitle">Authentic Vegetarian Cuisine</p>
          <div className="hero-buttons">
            <a href="#menu" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }} className="btn btn-primary">
              View Menu
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About the Restaurant</h2>
          <div className="about-content">
            <div className="about-grid">
              <div className="about-item">
                <Leaf className="about-icon" size={32} />
                <h3>100% Vegetarian</h3>
                <p>Pure vegetarian cuisine with no compromise on taste</p>
              </div>
              <div className="about-item">
                <Utensils className="about-icon" size={32} />
                <h3>Family-Friendly Dining</h3>
                <p>Welcoming atmosphere for families and friends</p>
              </div>
              <div className="about-item">
                <Sparkles className="about-icon" size={32} />
                <h3>Fresh Ingredients</h3>
                <p>Daily fresh ingredients for authentic flavors</p>
              </div>
              <div className="about-item">
                <ChefHat className="about-icon" size={32} />
                <h3>Indian, Chinese & Pizza</h3>
                <p>Diverse menu offering the best of all cuisines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="menu">
        <div className="container">
          <h2 className="section-title">Our Menu</h2>
          
          {/* Category Tabs */}
          <div className="menu-categories">
            {menuData.menu.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`category-tab ${activeCategory === category.category ? 'active' : ''}`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="menu-items">
            {currentCategoryData?.items.map((item, index) => (
              <div key={`${item.name}-${index}`} className="menu-item">
                <div className="menu-item-left">
                  <div className="veg-icon">
                    <div className="veg-dot"></div>
                  </div>
                  <span className="menu-item-name">{item.name}</span>
                </div>
                <span className="menu-item-price">₹{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALITY SECTION */}
      <section className="speciality">
        <div className="container">
          <h2 className="section-title">Our Specialities</h2>
          <div className="speciality-grid">
            <div className="speciality-item">
              <h3>Paneer Special Dishes</h3>
              <p>Authentic paneer preparations with rich gravies</p>
            </div>
            <div className="speciality-item">
              <h3>Authentic Indian Gravies</h3>
              <p>Traditional recipes passed down through generations</p>
            </div>
            <div className="speciality-item">
              <h3>Fresh Tandoor Breads</h3>
              <p>Hot, fresh breads straight from the tandoor</p>
            </div>
            <div className="speciality-item">
              <h3>Hygienic Kitchen</h3>
              <p>Maintaining the highest standards of cleanliness</p>
            </div>
            <div className="speciality-item">
              <h3>Wide Variety Menu</h3>
              <p>Something for everyone, from traditional to modern</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Visit Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-name">Rasoi – The Tasty</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <Phone size={20} />
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
                <div className="contact-item">
                  <MapPin size={20} />
                  <span>123 Restaurant Street, Food City, 123456</span>
                </div>
              </div>
              <div className="contact-actions">
                <a href="tel:+919876543210" className="btn btn-primary">
                  <Phone size={18} />
                  Call Now
                </a>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Rasoi+The+Tasty" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MapPin size={18} />
                  Get Directions
                </a>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  WhatsApp Order
                </a>
              </div>
            </div>
            <div className="contact-map">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1234567890123!2d72.12345678901234!3d19.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzI0LjQiTiA3MsKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Rasoi – The Tasty</h3>
              <p>Authentic Vegetarian Cuisine</p>
            </div>
            <div className="footer-links">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
              <a href="#menu" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}>Menu</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
            </div>
            <div className="footer-contact">
              <p><Phone size={16} /> +91 98765 43210</p>
              <p><MapPin size={16} /> 123 Restaurant Street, Food City</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Rasoi – The Tasty. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

export default App;
