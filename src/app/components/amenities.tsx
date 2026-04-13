import { motion } from 'motion/react';
import { UtensilsCrossed, Flame, Armchair, Wind, Wifi, Tv } from 'lucide-react';

const amenities = [
  { icon: UtensilsCrossed, text: 'Общая кухня' },
  { icon: Flame, text: 'Мангал / BBQ зона' },
  { icon: Armchair, text: 'Зона отдыха на улице' },
  { icon: Wind, text: 'Кондиционер' },
  { icon: Wifi, text: 'Wi-Fi' },
  { icon: Tv, text: 'Телевизор' },
];

export function Amenities() {
  return (
    <section className="py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#2E6F95]">Удобства</h2>
          <p className="text-lg text-gray-600">Все для вашего комфортного отдыха</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2E6F95] to-[#3FBAC2] rounded-full mb-4">
                <amenity.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm text-gray-700">{amenity.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
