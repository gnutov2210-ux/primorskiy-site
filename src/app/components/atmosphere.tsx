import { motion } from 'motion/react';
import tableImage from '../../imports/bbq.jpg';
import diningImage from '../../imports/cafe.jpg';

export function Atmosphere() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#2E6F95]">Отдых и атмосфера</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={tableImage} 
              alt="Зона отдыха на улице" 
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Здесь вы сможете насладиться тишиной, свежим воздухом и уютной атмосферой. 
              Для гостей доступны номера с балконами, террасами и видом на море.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Отдохните в тени виноградных лоз, приготовьте шашлык на мангале или 
              просто наслаждайтесь спокойствием вдали от городской суеты.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <img 
            src={diningImage} 
            alt="Общая кухня и столовая" 
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
