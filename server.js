const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); // Nuevo: para manejar CORS

const app = express();
const PORT = 3000;

const TELEGRAM_TOKEN = '<TU_TOKEN>';
const TELEGRAM_CHAT_ID = '<TU_CHAT_ID>';

// Middlewares
app.use(cors()); // Habilitar CORS
app.use(bodyParser.json());
app.use(express.static('public'));

// Endpoint para Telegram
app.post('/send', async (req, res) => {
  const { message } = req.body;
  // IP pública desde header (puede contener múltiples IPs si hay varios proxies)
  const ipRaw = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const ip = ipRaw?.split(',')[0].trim(); // Tomar la primera IP válida

  if (!message) {
    return res.status(400).send("Mensaje vacío");
  }

  const fullMessage = `${message}\n🌐 IP: ${ip}`;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: fullMessage,
      parse_mode: 'Markdown'
    });

    res.send("Mensaje enviado a Telegram");
  } catch (error) {
    console.error("Error al enviar a Telegram:", error.message);
    res.status(500).send("Error al enviar a Telegram");
  }
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
