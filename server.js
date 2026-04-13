import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/booking', async (req, res) => {
  try {
    const { room, name, phone, email, checkIn, checkOut, guests } = req.body;
	const formatDate = (dateString) => {
		if (!dateString) return '';
		const [year, month, day] = dateString.split('-');
		return `${day}-${month}-${year}`;
	};
    const message = `
Новая заявка на бронирование

Номер: ${room}
Имя: ${name}
Телефон: ${phone}
Email: ${email || 'не указан'}
Заезд: ${formatDate(checkIn)}
Выезд: ${formatDate(checkOut)}
Гостей: ${guests}
`.trim();

    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const tgRes = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    const tgData = await tgRes.json();

    if (!tgData.ok) {
      throw new Error(tgData.description || 'Telegram error');
    }

    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: 'Ошибка отправки заявки' });
  }
});

app.listen(3001, () => {
  console.log('Booking server running on http://localhost:3001');
});