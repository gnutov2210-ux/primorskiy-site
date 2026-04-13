import { motion } from 'motion/react';
import { Waves, Trees, Volume2, Armchair } from 'lucide-react';

const features = [
  { icon: Trees, text: '2 минуты до парка' },
  { icon: Waves, text: 'Рядом море' },
  { icon: Volume2, text: 'Тихое место' },
  { icon: Armchair, text: 'Зона отдыха' },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-[#2E6F95]">О гостевом доме</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Гостевой дом «Приморский» в Геленджике — это идеальное место для отдыха, если вы ищете комфорт и уют на побережье Черного моря. Он расположен всего в 2 минутах ходьбы от парка «Молодежный», рядом с природой и морем.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#F5F5F5] to-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3FBAC2]/10 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-[#3FBAC2]" />
              </div>
              <p className="text-gray-800">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}