import { useState } from "react";
import axios from 'axios';

const AudioUploader = () => {
    const [file, setFile] = useState(null);
    const [transcription, setTranscription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/api/transcribe', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            setTranscription(response.data);
        } catch (error) {
            console.error("Error transcribing audio", error);
            setTranscription("Error processing transcription. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(transcription);
    };

    return (
        <div className="main-wrapper">
            <div className="card">
                <div className="icon-container">
                    🎙️
                </div>
                <h1 className="title">Audio to Text Transcribe</h1>
                <p className="subtitle">Upload your audio file and convert it to accurate text instantly.</p>

                <div className="dropzone" onClick={() => document.getElementById('audioFileInput').click()}>
                    <div className="upload-icon">☁️</div>
                    <div className="dropzone-text">
                        {file ? file.name : "Drag & drop your audio file here"}
                    </div>
                    <div className="dropzone-subtext">or</div>
                    <button type="button" className="choose-btn">Choose File</button>
                    <input
                        id="audioFileInput"
                        type="file"
                        accept="audio/*"
                        className="file-input-hidden"
                        onChange={handleFileChange}
                    />
                    <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '12px' }}>
                        Supports MP3, WAV, M4A, FLAC (Max 25MB)
                    </div>
                </div>

                <button className="upload-button" onClick={handleUpload} disabled={loading}>
                    {loading ? "Transcribing..." : "✨ Upload and Transcribe"}
                </button>

                <div className="result-card">
                    <div className="result-header">
                        <div className="result-title-wrapper">
                            <span>📄</span> Transcription Result
                        </div>
                        {transcription && (
                            <button className="copy-btn" onClick={handleCopy}>Copy</button>
                        )}
                    </div>
                    <div className="result-box">
                        {transcription || "Your transcription will appear here..."}
                    </div>
                </div>

                <div className="footer-note">
                    🔒 Your audio files are secure and only used for transcription.
                </div>
            </div>
        </div>
    );
}

export default AudioUploader;