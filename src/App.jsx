import IndexHeader from '@/components/header/IndexHeader';
import IndexProduct from '@/components/product/IndexProduct';

import CartDetailProvider from '@/components/context/UseCartDetails';

const App = () => {
  return (
    <>
      <CartDetailProvider>
        <IndexHeader />
        <IndexProduct />
      </CartDetailProvider>
    </>
  );
};

export default App;
