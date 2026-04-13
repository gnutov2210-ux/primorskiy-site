import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Екатерина М.',
    date: 'Август 2025',
    rating: 5,
    text: 'Прекрасное место для отдыха! Очень уютно, чисто, радушные хозяева. До моря действительно близко. Обязательно вернемся снова!',
  },
  {
    id: 2,
    name: 'Алексей П.',
    date: 'Июль 2025',
    rating: 5,
    text: 'Отдыхали семьей, всем очень понравилось. Тихое место, красивая территория, вкусные шашлыки на мангале. Рекомендуем!',
  },
  {
    id: 3,
    name: 'Марина С.',
    date: 'Сентябрь 2025',
    rating: 5,
    text: 'Замечательный гостевой дом! Комфортные номера, есть все необходимое. Парк рядом - отлично для прогулок. Спасибо за гостеприимство!',
  },
];

export function Reviews() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#F5F5F5] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#2E6F95]">Отзывы гостей</h2>
          <p className="text-lg text-gray-600">Что говорят наши посетители</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#3FBAC2]/20" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#3FBAC2] text-[#3FBAC2]" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{review.text}</p>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-800">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
            <Star className="w-5 h-5 fill-[#3FBAC2] text-[#3FBAC2]" />
            <span className="text-2xl text-[#2E6F95]">5.0</span>
            <span className="text-gray-600">на основе 127 отзывов</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
