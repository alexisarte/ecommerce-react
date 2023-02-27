import DetailsProduct from '@/components/product/DetailsProduct';
import SlideProduct from './SlideProduct';

const Main = () => {
  return (
    <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <SlideProduct />
      <DetailsProduct />
    </main>
  );
};

export default Main;
