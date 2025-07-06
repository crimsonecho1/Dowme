// src/pages/About.jsx
import React from 'react';
import Header from '../Sliders/Header/Header';
import Footer from '../Sliders/Footer/Footer';
import ContactForm from '../Sliders/ContactForm/ContactForm';
import './About.css';

export default function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <section className="about-header">
          <h1>👋 About DOW-ME</h1>
          <p>Your trusted video & audio downloader built by <strong>ZyroX</strong>.</p>
        </section>

        <section className="about-content">
          <h2>🎯 Our Mission</h2>
          <p>
            We aim to provide users with a fast, clean and safe way to download videos and audios from
            platforms like YouTube and Facebook, without annoying ads or unsafe redirects.
          </p>

          <h2>💡 Why DOW-ME?</h2>
          <ul>
            <li>⚡ Blazing fast downloads.</li>
            <li>🎵 Convert videos to MP3 with high quality.</li>
            <li>🧠 Simple and intuitive interface.</li>
            <li>🔐 100% secure – No personal data collected.</li>
            <li>🕋 Compliant with ethical, Islamic-friendly design principles.</li>
          </ul>

          <h2>🛠️ Tech Stack</h2>
          <p>
            DOW-ME is built with modern technologies like <strong>React</strong>, <strong>Node.js</strong>, and uses
            <strong>yt-dlp</strong> as the backend engine for media processing.
          </p>

          <h2>📬 Stay Connected</h2>
          <p>If you have suggestions, questions, or partnership ideas – feel free to reach out anytime!</p>
        </section>

        <div className="contact-footer-wrap">
          <h2>📨 Contact ZyroX</h2>
          <ContactForm />
        </div>

        <Footer />
      </div>
    </>
  );
}
