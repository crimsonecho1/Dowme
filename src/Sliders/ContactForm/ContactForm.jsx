// src/components/ContactForm.jsx
import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us, ZyroX will get back to you soon!');
        // يمكنك لاحقًا ربط النموذج بـ EmailJS أو API لإرسال البيانات
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-form-container">
            <h2>Contact ZyroX</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}
