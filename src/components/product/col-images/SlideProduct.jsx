import NextIcon from '@/components/icons/NextIcon';
import PrevIcon from '@/components/icons/PrevIcon';
import { useRef, useState, useEffect } from 'react';

export default ({
  ARRAY_IMGS = [],
  ARRAY_IMGS_SMALL = [],
  isOpenModal = false,
  handleOpenMOdal = () => {},
  handleCloseModal = null,
  ...props
}) => {
  const [index, setIndex] = useState(0);
  const btnSlider = useRef(null);

  useEffect(() => {
    isOpenModal && btnSlider.current.classList.remove('md:hidden');
  }, [isOpenModal]);

  const handleClickPrev = () => {
    index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1);
  };

  const handleClickNext = () => {
    index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <section {...props}>
      {isOpenModal && (
        <button onClick={handleCloseModal} className="text-right md:col-span-4">
          cerrar
        </button>
      )}
      <div className="relative col-span-4">
        <img
          src={ARRAY_IMGS[index]}
          alt=""
          className="aspect-[16/12] w-full cursor-pointer rounded-md"
          onClick={handleOpenMOdal}
        />
        <div
          ref={btnSlider}
          className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-5 md:hidden"
        >
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-white"
            onClick={handleClickPrev}
          >
            <PrevIcon />
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-white"
            onClick={handleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>
      {ARRAY_IMGS_SMALL.map((smallImg, i) => (
        <div
          onClick={() => setIndex(i)}
          className="relative cursor-pointer overflow-hidden rounded-md"
          key={i}
        >
          <img src={smallImg} alt="" className="hidden md:block" />
          <span
            className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${i === index && 'bg-[rgba(255,255,255,0.5)]'}`}
          ></span>
        </div>
      ))}
    </section>
  );
};
