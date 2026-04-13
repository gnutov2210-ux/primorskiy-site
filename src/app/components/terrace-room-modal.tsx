import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import viewTerraceImage1 from '../../imports/4ter/4/1.png';
import viewTerraceImage2 from '../../imports/4ter/4/2.png';
import viewTerraceImage3 from '../../imports/4ter/4/3.png';
import viewTerraceImage4 from '../../imports/4ter/4/4.png';
import viewTerraceImage5 from '../../imports/4ter/4/5.png';
import viewTerraceImage6 from '../../imports/4ter/4/6.png';
import viewTerraceImage7 from '../../imports/4ter/4/7.png';
import viewTerraceImage8 from '../../imports/4ter/4/8.png';
import largeTerraceImage1 from '../../imports/4ter/1/1.png';
import largeTerraceImage2 from '../../imports/4ter/1/2.png';
import largeTerraceImage3 from '../../imports/4ter/1/3.png';
import largeTerraceImage4 from '../../imports/4ter/1/4.png';
import largeTerraceImage5 from '../../imports/4ter/1/5.png';
import largeTerraceImage6 from '../../imports/4ter/1/6.png';

interface TerraceRoomModalProps {
  onClose: () => void;
  onSelectRoom: (type: 'view' | 'large') => void;
}

const viewTerraceImages = [
  viewTerraceImage1,
  viewTerraceImage2,
  viewTerraceImage3,
  viewTerraceImage4,
  viewTerraceImage5,
  viewTerraceImage6,
  viewTerraceImage7,
  viewTerraceImage8,
];

const largeTerraceImages = [
  largeTerraceImage1,
  largeTerraceImage2,
  largeTerraceImage3,
  largeTerraceImage4,
  largeTerraceImage5,
  largeTerraceImage6,
];

export function TerraceRoomModal({ onClose, onSelectRoom }: TerraceRoomModalProps) {
  const [viewingGallery, setViewingGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedGalleryType, setSelectedGalleryType] = useState<'view' | 'large'>('view');

  const currentGallery = selectedGalleryType === 'view' ? viewTerraceImages : largeTerraceImages;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>

          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl text-[#2E6F95] mb-6 text-center">
              Выберите номер с террасой
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Номер с видовой террасой (4 этаж) */}
              <div className="bg-[#F5F5F5] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div
                  className="h-48 bg-gradient-to-br from-[#2E6F95] to-[#3FBAC2] flex items-center justify-center cursor-pointer relative"
                  onClick={() => {
                    setCurrentImageIndex(0);
                    setSelectedGalleryType('view');
                    setViewingGallery(true);
                  }}
                >
                  <img
                    src={viewTerraceImages[0]}
                    alt="Номер с видовой террасой"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black/50 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
                      Посмотреть
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-gray-800">Номер с видовой террасой</h3>
                  <p className="text-gray-600 mb-4">4 этаж</p>
                  <button
                    onClick={() => onSelectRoom('view')}
                    className="w-full bg-[#3FBAC2] hover:bg-[#3FBAC2]/90 text-white py-3 rounded-xl transition-all duration-300"
                  >
                    Выбрать
                  </button>
                </div>
              </div>

              {/* Номер с большой террасой (1 этаж) */}
              <div className="bg-[#F5F5F5] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-[#2E6F95] to-[#3FBAC2] flex items-center justify-center cursor-pointer relative"
                  onClick={() => {
                    setCurrentImageIndex(0);
                    setSelectedGalleryType('large');
                    setViewingGallery(true);
                  }}
                >
                  <img
                    src={largeTerraceImages[0]}
                    alt="Номер с большой террасой"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black/50 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
                      Посмотреть
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-gray-800">Номер с большой террасой</h3>
                  <p className="text-gray-600 mb-4">1 этаж</p>
                  <button
                    onClick={() => onSelectRoom('large')}
                    className="w-full bg-[#3FBAC2] hover:bg-[#3FBAC2]/90 text-white py-3 rounded-xl transition-all duration-300"
                  >
                    Выбрать
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Viewer */}
        {viewingGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90"
            onClick={() => setViewingGallery(false)}
          >
            <button
              onClick={() => setViewingGallery(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg z-10"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Navigation buttons */}
            {currentGallery.length > 1 && (
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

                {/* Dots indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {currentGallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-white w-6'
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Photo counter */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm z-10">
                  {currentImageIndex + 1} из {currentGallery.length}
                </div>
              </>
            )}

            <img
              src={currentGallery[currentImageIndex]}
              alt="Просмотр фото"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
