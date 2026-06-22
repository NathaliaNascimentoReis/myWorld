import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // ◄--- Injeta o motor utilitário do Tailwind
import './index.module.css'; // ◄--- Mantém suas fontes e estilização customizada
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
