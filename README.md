# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# Audio Transcribe — Frontend

A React interface for uploading an audio file and displaying its transcription, powered by a Spring Boot backend using Whisper (via Groq's API).

Backend repo: https://github.com/Tragiic1x/Audio-Transcribe-Backend

## Tech Stack
React, Vite, Axios

## How It Works
1. Select an audio file
2. Click "Upload and Transcribe" — the file is sent to the backend API
3. The transcribed text is displayed on the page

## Setup

1. Clone this repo
2. Install dependencies:
   ```
   npm install
   ```
3. Make sure the backend (see linked repo above) is running locally at `http://localhost:8080`
4. Start the dev server:
   ```
   npm run dev
   ```
5. Open the local URL it gives you in your browser

## Notes
This project requires the backend to be running to function, since it calls `POST /api/transcribe` on that server. See the backend repo for setup instructions.
