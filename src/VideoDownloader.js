// src/VideoDownloader.jsx
import React, { useState } from 'react';
import './VideoDownloader.css';
import AdBanner from './AdBanner';

function formatSize(bytes) {
    if (!bytes) return 'Unknown size';
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}

export default function VideoDownloader() {
    const [url, setUrl] = useState('');
    const [info, setInfo] = useState(null);
    const [selectedFormat, setSelectedFormat] = useState('');
    const [selectedType, setSelectedType] = useState('mp4');
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!url) return;
        setLoading(true);
        try {
            const response = await fetch('https://server-production-bb23.up.railway.app/info', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch video info');
            }

            const data = await response.json();
            setInfo(data);
            setSelectedFormat(''); // reset selected format
        } catch (err) {
            console.error(err);
            alert('Error fetching video info.');
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (!selectedFormat || !info?.bestAudioFormatId) return;
        const link = `https://server-production-bb23.up.railway.app/download?url=${encodeURIComponent(url)}&format_id=${selectedFormat}&audio_id=${info.bestAudioFormatId}`;
        window.open(link, '_blank');
    };

    const formatsAvailable = info?.formats?.[selectedType] || [];

    return (
        <div className="downloader-wrapper">
            <h1 className="title">🎥 Smart Video Downloader</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Enter video URL from YouTube or Facebook"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button onClick={handleSearch} disabled={loading}>
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </div>

            {info && (
                <div className="video-details">
                    <img src={info.thumbnail} alt="Thumbnail" className="video-thumb" />
                    <h2>{info.title}</h2>

                    <div className="type-tabs">
                        <button
                            className={selectedType === 'mp4' ? 'active' : ''}
                            onClick={() => setSelectedType('mp4')}
                        >
                            MP4
                        </button>
                        <button
                            className={selectedType === 'mp3' ? 'active' : ''}
                            onClick={() => setSelectedType('mp3')}
                        >
                            MP3
                        </button>
                    </div>

                    <select
                        value={selectedFormat}
                        onChange={(e) => setSelectedFormat(e.target.value)}
                    >
                        <option value="">Select Quality</option>
                        {formatsAvailable.map((f, i) => (
                            <option key={i} value={f.format_id}>
                                {f.resolution} • {f.ext.toUpperCase()} • {formatSize(f.filesize)}
                            </option>
                        ))}
                    </select>

                    <button
                        className="download-btn"
                        onClick={handleDownload}
                        disabled={!selectedFormat}
                    >
                        Download
                    </button>
                </div>
            )}
            {/* يمكن تكرار الإعلان في الأسفل أيضًا */}
            {info && (
                <>
                <AdBanner />
                <div className="video-details">
                    {/* باقي التفاصيل */}
                </div>
                </>
            )}
        </div>
    );
}
