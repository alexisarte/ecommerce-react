import ImgSmall from '@/assets/images/image-product-1-thumbnail.jpg';
import DeleteIcon from '@/components/icons/DeleteIcon';

export default () => {
  return (
    <section className="absolute top-[125%] left-0 z-10 w-full md:right-0 md:left-full md:max-w-lg md:-translate-x-full">
      <div className=" mx-4 rounded-md bg-white shadow-md">
        <h4 className="px-6 py-8 text-lg font-bold">Cart</h4>
        <hr />
        <article className="grid grid-cols-[1fr_4fr_1fr] gap-4 p-10">
          <img src={ImgSmall} alt="" className="rounded-md" />
          <div>
            <h6>Fall Edition Sneakers</h6>
            <div>
              <span>$125.00 x 3</span>{' '}
              <span className="font-bold">$375.00</span>
            </div>
          </div>
          <button className="ml-auto">
            <DeleteIcon className="hover:fill-orange-primary" />
          </button>
        </article>
        <div className="px-6 pb-8">
          <button className="w-full rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-700">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};
