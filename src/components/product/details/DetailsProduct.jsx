import CartIcon from '@/components/icons/CartIcon';

export default ({ objectProduct }) => {
  return (
    <section className="container mx-auto px-4 md:px-0">
      <p className="mb-3 font-bold uppercase tracking-wide text-orange-primary">
        {objectProduct.subtitle}
      </p>
      <h2 className="mb-4 text-3xl font-bold">{objectProduct.title}</h2>
      <p className="text-dark-grayish-blue">{objectProduct.description}</p>
      <div className="mb-5 grid grid-cols-3  gap-1 font-bold md:grid-cols-[1fr_3fr]">
        <span className="text-3xl">
          ${(objectProduct.price * (1 - objectProduct.discount)).toFixed(2)}
        </span>
        <span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary">
          {objectProduct.discount * 100}%
        </span>
        <span className="text-right text-lg text-grayish-blue line-through md:col-span-2 md:text-left">
          ${objectProduct.price.toFixed(2)}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.7fr]">
        <div className="col-span-3 flex items-baseline justify-between rounded-md bg-gray-200 py-3 px-5 md:col-span-1">
          <button className="text-3xl text-orange-primary">-</button>
          <span className="text-xl">0</span>
          <button className="text-3xl text-orange-primary">+</button>
        </div>
        <button className="col-span-3 flex items-center justify-center gap-x-3 rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-700 md:col-span-1">
          <CartIcon fill="#fff" className="fill-white" />
          <span className="">Add to cart</span>
        </button>
      </div>
    </section>
  );
};
