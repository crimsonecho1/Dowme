// src/pages/HowToUse.jsx
import React from 'react';
import ContactForm from '../Sliders/ContactForm/ContactForm';
import Footer from '../Sliders/Footer/Footer';
import Header from '../Sliders/Header/Header';
import './HowToUse.css';

export default function HowToUse() {
  return (
    <>
      <Header />

      <div className="howto-container">
        <header className="howto-header">
          <h1>📘 How to Use DOW-ME</h1>
          <p>Follow these simple steps to download your favorite videos.</p>
        </header>

        <section className="howto-step">
          <h2>🔗 Step 1: Copy the Video URL</h2>
          <p>Go to YouTube or Facebook, and copy the link of the video you want to download.</p>
        </section>

        <section className="howto-step">
          <h2>📥 Step 2: Paste the URL</h2>
          <p>Paste the copied video link into the input field on the homepage.</p>
        </section>

        <section className="howto-step">
          <h2>🎞️ Step 3: Choose Format & Quality</h2>
          <p>Select the format (MP4 or MP3) and the desired quality from the dropdown.</p>
        </section>

        <section className="howto-step">
          <h2>⬇️ Step 4: Download</h2>
          <p>Click on the <strong>Download</strong> button and your file will start downloading.</p>
        </section>

        <section className="howto-note">
          <p>🚨 <strong>Note:</strong> Please use this tool responsibly and respect copyright laws.</p>
        </section>

        <div className="contact-footer-wrap">
          <h2>📨 Contact ZyroX</h2>
          <ContactForm />
          <Footer />
        </div>
      </div>
    </>
  );
}
