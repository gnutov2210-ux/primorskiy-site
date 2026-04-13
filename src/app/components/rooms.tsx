import { motion } from 'motion/react';
import { Users, DoorOpen, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { BookingModal } from './booking-modal';
import { TerraceRoomModal } from './terrace-room-modal';

import terraceImage from '../../imports/4ter/4/2.png';

import fourPersonRoomImage from '../../imports/4/2.png';
import fourPersonRoomImage1 from '../../imports/4/3.png';
import fourPersonRoomImage2 from '../../imports/4/4.png';
import fourPersonRoomImage3 from '../../imports/4/1.png';

// ===== ДОБАВЬ СВОИ КАРТИНКИ ДЛЯ ОСТАЛЬНЫХ НОМЕРОВ =====
import threePersonRoomImage1 from '../../imports/3s/1.png';
import threePersonRoomImage2 from '../../imports/3s/2.png';
import threePersonRoomImage3 from '../../imports/3s/3.png';
import threePersonRoomImage4 from '../../imports/3s/4.png';
import threePersonRoomImage5 from '../../imports/3s/5.png';
import threePersonRoomImage6 from '../../imports/3s/6.png';
import threePersonRoomImage7 from '../../imports/3s/7.png';
import threePersonRoomImage8 from '../../imports/3s/8.png';
import threePersonRoomImage9 from '../../imports/3s/9.png';
import threePersonRoomImage10 from '../../imports/3s/10.png';
import threePersonRoomImage11 from '../../imports/3s/11.png';
import threePersonRoomImage12 from '../../imports/3s/12.png';

import twoPersonBalconyImage1 from '../../imports/2s/1.png';
import twoPersonBalconyImage2 from '../../imports/2s/2.png';
import twoPersonBalconyImage3 from '../../imports/2s/3.png';
import twoPersonBalconyImage4 from '../../imports/2s/4.png';
import twoPersonBalconyImage5 from '../../imports/2s/5.png';
import twoPersonBalconyImage6 from '../../imports/2s/6.png';
import twoPersonBalconyImage7 from '../../imports/2s/7.png';
import twoPersonBalconyImage8 from '../../imports/2s/8.png';
import twoPersonBalconyImage9 from '../../imports/2s/9.png';
import twoPersonBalconyImage10 from '../../imports/2s/10.png';
import twoPersonBalconyImage11 from '../../imports/2s/11.png';
import twoPersonBalconyImage12 from '../../imports/2s/12.png';

import twoPersonNoBalconyImage1 from '../../imports/2biz/1.png';
import twoPersonNoBalconyImage2 from '../../imports/2biz/2.png';
import twoPersonNoBalconyImage3 from '../../imports/2biz/3.png';
import twoPersonNoBalconyImage4 from '../../imports/2biz/4.png';
import twoPersonNoBalconyImage5 from '../../imports/2biz/5.png';
import twoPersonNoBalconyImage6 from '../../imports/2biz/6.png';
import twoPersonNoBalconyImage7 from '../../imports/2biz/7.png';
import twoPersonNoBalconyImage8 from '../../imports/2biz/8.png';
import twoPersonNoBalconyImage9 from '../../imports/2biz/9.png';

// ===== МАССИВЫ КАРТИНОК =====
const fourPersonRoomImages = [
  fourPersonRoomImage,
  fourPersonRoomImage1,
  fourPersonRoomImage2,
  fourPersonRoomImage3,
];

const threePersonRoomImages = [
  threePersonRoomImage1,
  threePersonRoomImage2,
  threePersonRoomImage3,
  threePersonRoomImage4,
  threePersonRoomImage5,
  threePersonRoomImage6,
  threePersonRoomImage7,
  threePersonRoomImage8,
  threePersonRoomImage9,
  threePersonRoomImage10,
  threePersonRoomImage11,
  threePersonRoomImage12,
];

const twoPersonBalconyImages = [
  twoPersonBalconyImage1,
  twoPersonBalconyImage2,
  twoPersonBalconyImage3,
  twoPersonBalconyImage4,
  twoPersonBalconyImage5,
  twoPersonBalconyImage6,
  twoPersonBalconyImage7,
  twoPersonBalconyImage8,
  twoPersonBalconyImage9,
  twoPersonBalconyImage10,
  twoPersonBalconyImage11,
  twoPersonBalconyImage12,
];

const twoPersonNoBalconyImages = [
  twoPersonNoBalconyImage1,
  twoPersonNoBalconyImage2,
  twoPersonNoBalconyImage3,
  twoPersonNoBalconyImage4,
  twoPersonNoBalconyImage5,
  twoPersonNoBalconyImage6,
  twoPersonNoBalconyImage7,
  twoPersonNoBalconyImage8,
  twoPersonNoBalconyImage9,
];

const rooms = [
  {
    id: 1,
    name: 'Четырехместный номер',
    description: 'Оснащение: кондиционер, ТВ, холодильник, чайник',
    capacity: 4,
    features: ['Кондиционер', 'ТВ', 'Холодильник', 'Чайник'],
    image: fourPersonRoomImage,
    images: fourPersonRoomImages,
  },
  {
    id: 2,
    name: 'Четырехместный с террасой',
    description: 'Все удобства + просторная терраса',
    capacity: 4,
    features: ['Кондиционер', 'ТВ', 'Холодильник', 'Чайник', 'Терраса'],
    image: terraceImage,
    hasVariants: true,
  },
  {
    id: 3,
    name: 'Трехместный с балконом',
    description: 'Балкон, уютный вид',
    capacity: 3,
    features: ['Кондиционер', 'ТВ', 'Холодильник', 'Балкон'],
    image: threePersonRoomImages[0],
    images: threePersonRoomImages,
  },
  {
    id: 4,
    name: 'Двухместный с балконом',
    description: 'Комфортный номер для двоих с балконом',
    capacity: 2,
    features: ['Кондиционер', 'ТВ', 'Холодильник', 'Балкон'],
    image: twoPersonBalconyImages[0],
    images: twoPersonBalconyImages,
  },
  {
    id: 5,
    name: 'Двухместный без балкона',
    description: 'Уютный номер со всеми удобствами',
    capacity: 2,
    features: ['Кондиционер', 'ТВ', 'Холодильник', 'Чайник'],
    image: twoPersonNoBalconyImages[0],
    images: twoPersonNoBalconyImages,
  },
];

export function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const [showTerraceModal, setShowTerraceModal] = useState(false);

  // ===== ОБЩАЯ ГАЛЕРЕЯ ДЛЯ ВСЕХ НОМЕРОВ =====
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryTitle, setGalleryTitle] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (images: string[], title: string) => {
    setGalleryImages(images);
    setGalleryTitle(title);
    setCurrentImageIndex(0);
    setShowGallery(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      <section id="rooms" className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[#2E6F95]">Наши номера</h2>
            <p className="text-lg text-gray-600">Выберите номер, который подходит именно Вам</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                <div
                  className={`h-48 bg-gradient-to-br from-[#2E6F95] to-[#3FBAC2] flex items-center justify-center relative overflow-hidden ${
                    room.hasVariants || room.images ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => {
                    if (room.hasVariants) {
                      setShowTerraceModal(true);
                    } else if (room.images && room.images.length > 0) {
                      openGallery(room.images, room.name);
                    }
                  }}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>

                  {room.image ? (
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <DoorOpen className="w-16 h-16 text-white/80" />
                  )}

                  {(room.hasVariants || room.images) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-black/50 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
                        Посмотреть
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-[#3FBAC2]" />
                    <span className="text-sm text-gray-600">{room.capacity} человека</span>
                  </div>

                  <h3 className="text-xl mb-2 text-gray-800">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#3FBAC2]/10 text-[#2E6F95] text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="w-full mt-auto bg-[#2E6F95] hover:bg-[#2E6F95]/90 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Забронировать
                  </button>
                </div>
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

      {showTerraceModal && (
        <TerraceRoomModal
          onClose={() => setShowTerraceModal(false)}
          onSelectRoom={(type) => {
            setShowTerraceModal(false);
            const terraceRoom = rooms.find((r) => r.id === 2);
            if (terraceRoom) {
              setSelectedRoom(terraceRoom);
            }
          }}
        />
      )}

      {showGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={() => setShowGallery(false)}
        >
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg z-10"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>

          {galleryImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg z-10"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg z-10"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm z-10">
                {galleryTitle}: {currentImageIndex + 1} из {galleryImages.length}
              </div>
            </>
          )}

          <img
            src={galleryImages[currentImageIndex]}
            alt={galleryTitle}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}