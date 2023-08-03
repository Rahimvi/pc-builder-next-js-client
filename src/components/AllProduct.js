import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const AllProductPage = ({ allProduct }) => {
  if (!Array.isArray(allProduct)) {
    return <div>No products available.</div>;
  }
  return (
    <>
      <div className="text-black text-center p-4 m-4">
        <h2 className="text-3xl font-bold">Featured Category</h2>
        <p className="text-2xl">
          Get Your Desired Product from Featured Category!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 place-items-center pb-5">
        {allProduct?.map((category) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={category.product._id}
            className="card w-80 bg-base-content shadow-xl"
          >
            <figure className="px-10 pt-10">
              <img
                src={category.product.image_url}
                alt="Shoes"
                className="rounded h-40"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{category.product.name}</h2>
              <p>Category: {category.product.category}</p>
              <div className="flex justify-around">
                <p>Price: ${category.product.price}</p>
                <p className="ml-2">Status: {category.product.status}</p>
              </div>
              <p>Rating: {category.product.rating}</p>
              <div className="card-actions">
                <Link href={`/category/${category.product.category}`}>
                  <button className="btn btn-primary">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProductPage;
