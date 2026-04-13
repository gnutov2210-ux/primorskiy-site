import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { useState } from 'react';
import { BookingModal } from './booking-modal';

interface PricingRoom {
  id: number;
  room: string;
  name: string;
  capacity: number;
  prices: {
    month: string;
    price: number;
  }[];
}

const pricing: PricingRoom[] = [
  {
    id: 1,
    room: 'Четырехместный номер',
    name: 'Четырехместный номер',
    capacity: 4,
    prices: [
      { month: 'Май', price: 3500 },
      { month: 'Июнь', price: 4500 },
      { month: 'Июль', price: 7500 },
      { month: 'Август', price: 7500 },
      { month: 'Сентябрь', price: 5500 },
    ],
  },
  {
    id: 2,
    room: 'Четырехместный с террасой',
    name: 'Четырехместный с террасой',
    capacity: 4,
    prices: [
      { month: 'Май', price: 4000 },
      { month: 'Июнь', price: 5000 },
      { month: 'Июль', price: 8000 },
      { month: 'Август', price: 8000 },
      { month: 'Сентябрь', price: 6000 },
    ],
  },
  {
    id: 3,
    room: 'Трехместный с балконом',
    name: 'Трехместный с балконом',
    capacity: 3,
    prices: [
      { month: 'Май', price: 3000 },
      { month: 'Июнь', price: 3700 },
      { month: 'Июль', price: 6000 },
      { month: 'Август', price: 6000 },
      { month: 'Сентябрь', price: 5000 },
    ],
  },
  {
    id: 4,
    room: 'Двухместный с балконом',
    name: 'Двухместный с балконом',
    capacity: 2,
    prices: [
      { month: 'Май', price: 2800 },
      { month: 'Июнь', price: 3000 },
      { month: 'Июль', price: 5000 },
      { month: 'Август', price: 5000 },
      { month: 'Сентябрь', price: 4000 },
    ],
  },
  {
    id: 5,
    room: 'Двухместный без балкона',
    name: 'Двухместный без балкона',
    capacity: 2,
    prices: [
      { month: 'Май', price: 2500 },
      { month: 'Июнь', price: 2800 },
      { month: 'Июль', price: 4500 },
      { month: 'Август', price: 4500 },
      { month: 'Сентябрь', price: 3500 },
    ],
  },
];

export function Pricing() {
  const [selectedRoom, setSelectedRoom] = useState<{
    id: number;
    name: string;
    capacity: number;
  } | null>(null);

  return (
    <>
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[#2E6F95]">Цены</h2>
            <p className="text-lg text-gray-600">Стоимость проживания по месяцам (цена за сутки)</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricing.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#F5F5F5] to-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-[#3FBAC2]" />
                  <h3 className="text-lg text-gray-800">{item.room}</h3>
                </div>

                <div className="space-y-3 flex-1">
                  {item.prices.map((priceItem, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                    >
                      <span className="text-gray-600">{priceItem.month}</span>
                      <span className="text-[#2E6F95]">
                        {priceItem.price.toLocaleString()} ₽
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setSelectedRoom({
                      id: item.id,
                      name: item.name,
                      capacity: item.capacity,
                    })
                  }
                  className="w-full mt-6 bg-[#3FBAC2] hover:bg-[#3FBAC2]/90 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Забронировать
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedRoom && (
        <BookingModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </>
  );
}