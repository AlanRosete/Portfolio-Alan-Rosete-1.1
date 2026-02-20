/**
 * Prebuild script: genera firebase-env.js con las variables de entorno.
 * Se ejecuta ANTES de Parcel build para inyectar los valores directamente.
 * Esto funciona tanto en local (.env) como en Netlify (env vars del dashboard).
 */
const fs = require('fs');
const path = require('path');

try {
  require('dotenv').config();
} catch (e) {
  console.warn("dotenv no disponible")
}

const config = {
  API_KEY: process.env.API_KEY || '',
  AUTH_DOMAIN: process.env.AUTH_DOMAIN || '',
  PROJECT_ID: process.env.PROJECT_ID || '',
  STORAGE_BUCKET: process.env.STORAGE_BUCKET || '',
  MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID || '',
  APP_ID: process.env.APP_ID || '',
  MEASUREMENT_ID: process.env.MEASUREMENT_ID || '',
};

const output = `// Auto-generado por generate-env.js — NO editar manualmente
window.__FIREBASE_CONFIG__ = ${JSON.stringify(config, null, 2)};
`;

const outPath = path.join(__dirname, 'assets', 'js', 'firebase-env.js');
fs.writeFileSync(outPath, output, 'utf-8');
