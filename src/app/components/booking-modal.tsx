import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, Phone, Mail, User } from 'lucide-react';
import { useState } from 'react';

interface Room {
  id: number;
  name: string;
  capacity: number;
}

interface BookingModalProps {
  room: Room;
  onClose: () => void;
}

export function BookingModal({ room, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
	e.preventDefault();

	try {
		const response = await fetch('/.netlify/functions/booking', {
		  method: 'POST',
		  headers: { 'Content-Type': 'application/json' },
		  body: JSON.stringify({
			room: room.name,
			name: formData.name,
			phone: formData.phone,
			email: formData.email,
			checkIn: formData.checkIn,
			checkOut: formData.checkOut,
			guests: formData.guests,
		}),
	});

    const data = await response.json();

    if (data.ok) {
      alert('Спасибо! Заявка отправлена.');
      onClose();
    } else {
      alert('Не удалось отправить заявку.');
    }
  } catch (error) {
    alert('Ошибка соединения с сервером.');
  }
};

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-[#2E6F95] to-[#3FBAC2] text-white p-6 rounded-t-1xl">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl pr-8">Бронирование</h3>
            <p className="text-white/90 mt-1">{room.name}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white">
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <User className="w-4 h-4 text-[#3FBAC2]" />
                Ваше имя *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3FBAC2] transition-all"
                placeholder="Иван Иванов"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <Phone className="w-4 h-4 text-[#3FBAC2]" />
                Телефон *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3FBAC2] transition-all"
                placeholder="+7 (999) 999-99-99"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <Mail className="w-4 h-4 text-[#3FBAC2]" />
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3FBAC2] transition-all"
                placeholder="email@example.com"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 text-[#3FBAC2]" />
                  Заезд *
                </label>
                <input
                  type="date"
                  required
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3FBAC2] transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 text-[#3FBAC2]" />
                  Выезд *
                </label>
                <input
                  type="date"
                  required
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3FBAC2] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <Users className="w-4 h-4 text-[#3FBAC2]" />
                Количество гостей *
              </label>
              <select
                required
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3FBAC2] transition-all"
              >
                {[...Array(room.capacity)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i === 0 ? 'гость' : i < 4 ? 'гостя' : 'гостей'}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-4 space-y-3">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#2E6F95] to-[#3FBAC2] text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Отправить заявку
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full bg-gray-100 text-gray-700 py-4 rounded-xl hover:bg-gray-200 transition-colors duration-300"
              >
                Отмена
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              * После отправки заявки наш менеджер свяжется с вами для подтверждения бронирования
            </p>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
