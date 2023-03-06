import SlideProduct from '@/components/product/col-images/SlideProduct';
import { useState } from 'react';

export default ({ ARRAY_IMGS, ARRAY_IMGS_SMALL }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenMOdal = () => window.innerWidth >= 768 && setIsOpenModal(true);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <SlideProduct
        ARRAY_IMGS={ARRAY_IMGS}
        ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
        className="grid md:grid-cols-4 md:gap-4"
        handleOpenMOdal={handleOpenMOdal}
      />
      {isOpenModal && (
        <SlideProduct
          ARRAY_IMGS={ARRAY_IMGS}
          ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
          isOpenModal={isOpenModal}
          className="hidden md:grid md:absolute md:left-1/2 md:top-1/2 md:max-w-md md:-translate-x-1/2 md:-translate-y-1/2 md:grid-cols-4 md:gap-4"
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};
