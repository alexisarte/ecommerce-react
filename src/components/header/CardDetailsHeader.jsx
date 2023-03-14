import { useContext } from 'react';
import { useCartDetails } from '@/components/context/UseCartDetails';

import ImgSmall from '@/assets/images/image-product-1-thumbnail.jpg';
import DeleteIcon from '@/components/icons/DeleteIcon';

export default () => {
  const { cartProduct, removeCartProduct } = useContext(useCartDetails);

  return (
    <section className="absolute top-[125%] left-0 z-10 w-full md:right-0 md:left-full md:max-w-lg md:-translate-x-full">
      <div className=" mx-4 rounded-md bg-white shadow-md">
        <h4 className="px-6 py-8 text-lg font-bold">Cart</h4>
        <hr />
        {cartProduct.length === 0 && (
          <p className="py-16 text-center"> Your cart is empty</p>
        )}
        {cartProduct.map((product) => (
          <article
            key={product.id}
            className="grid grid-cols-[1fr_4fr_1fr] gap-4 p-10"
          >
            <img src={ImgSmall} alt="" className="rounded-md" />
            <div>
              <h6>{product.subtitle}</h6>
              <div>
                <span>
                  ${product.discountPrice.toFixed(2)} x {product.quantity}
                </span>{' '}
                <span className="font-bold">
                  ${(product.discountPrice * product.quantity).toFixed(2)}
                </span>
              </div>
            </div>
            <button className="ml-auto" onClick={() => removeCartProduct(product.id)}>
              <DeleteIcon className="hover:fill-orange-primary" />
            </button>
          </article>
        ))}
        {cartProduct.length !== 0 && (
          <div className="px-6 pb-8">
            <button className="w-full rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-700">
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
