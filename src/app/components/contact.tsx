import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Send, Users } from 'lucide-react';
import maxLogo from '../../imports/max.png';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#2E6F95]">Контакты</h2>
          <p className="text-lg text-gray-600">Свяжитесь с нами удобным способом</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <a
              href="https://2gis.ru/gelendzhik/firm/70000001087629362/38.017567%2C44.569929?m=38.017928%2C44.569714%2F19.94"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-xl bg-[#F5F5F5] hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#3FBAC2] rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1 text-gray-800">Адрес</h3>
                <p className="text-gray-600">Улица Ботылева, 20</p>
                <p className="text-gray-600">Геленджик, Краснодарский край, 353465</p>
                <p className="text-sm text-gray-500 mt-1">2 минуты от парка «Молодежный»</p>
              </div>
            </a>

            <a
              href="tel:+79530958181"
              className="flex items-start gap-4 p-4 rounded-xl bg-[#F5F5F5] hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#3FBAC2] rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1 text-gray-800">Телефон</h3>
                <p className="text-gray-600">+7 (953) 095-81-81</p>
                <p className="text-sm text-gray-500 mt-1">Ежедневно с 9:00 до 22:00</p>
              </div>
            </a>

            <a
              href="mailto:victoriahotel@bk.ru"
              className="flex items-start gap-4 p-4 rounded-xl bg-[#F5F5F5] hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#3FBAC2] rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1 text-gray-800">Email</h3>
                <p className="text-gray-600">victoriahotel@bk.ru</p>
              </div>
            </a>

            <a
              href="https://max.ru/u/f9LHodD0cOJnyYgSy2cE9LKXP2vpf5JlpvJr63vFleQd6SNwZSdxKBASYw0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-white py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              style={{ background: 'linear-gradient(135deg, #0a011a 0%, #3d1283 20%, #422ab0 40%, #1a1780 60%, #08082d 80%, #000003 100%)' }}
            >
              <img src={maxLogo} alt="Max" className="w-6 h-6" />
              Написать в Max
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=79530958181&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%B8%D1%88%D1%83%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20%D0%BF%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B9."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Написать в WhatsApp
            </a>

            <a
              href="https://t.me/+79189557115"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#0088cc] to-[#229ED9] text-white py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Написать в Telegram
            </a>

            <a
              href="https://vk.com/club230674234"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#0077FF] to-[#4A76A8] text-white py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              Группа ВКонтакте
            </a>
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] rounded-2xl shadow-lg overflow-hidden"
          >
            <iframe
              src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A44.569929%2C%22lon%22%3A38.017567%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22gelendzhik%22%7D%2C%22org%22%3A%2270000001087629362%22%7D"
              className="w-full h-full border-0"
              title="Гостевой дом Приморский на карте"
            ></iframe>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-600"
      >
        <p>&copy; 2026 Гостевой дом «Приморский». Все права защищены.</p>
      </motion.div>
    </section>
  );
}
