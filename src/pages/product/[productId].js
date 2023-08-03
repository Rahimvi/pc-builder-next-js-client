import RootLayout from "@/layout/RootLayout";

const productDetails = ({ product }) => {
  if (!product || !product.keyFeatures) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="text-center p-5 m-5">
        <h2 className="text-3xl text-black font-bold">Product Details</h2>
      </div>
      <div className="flex max-w-7xl mx-auto items-center text-black border-b border-gray-300">
        <div className="w-[50%]">
          <img src={product?.image_url} alt="product" />
        </div>
        <div className="w-[50%] space-y-3 text-center">
          <h1 className="text-3xl font-semibold">{product?.name}</h1>
          <p className="text-sm">Category: {product?.category}</p>
          <p className="text-sm">Price: {product?.price}</p>
          <p className="text-sm">Status: {product?.status}</p>
          <p className="text-sm">Rating: {product?.rating}</p>
          <p className="text-sm">Description: {product?.description}</p>
          <p className="text-sm">
            KeyFeatures: {product?.keyFeatures[0]},{product?.keyFeatures[1]},
            {product?.keyFeatures[2]}
          </p>
          <p className="text-sm">
            individualRating: {product?.individualRating}
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                checked
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </p>
          <p className="text-sm">
            averageRating: {product?.averageRating}
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                checked
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </p>

          {/* <button className="btn btn-primary">Details</button> */}
        </div>
      </div>
      <div className="mt-10 text-black">
        {product?.reviews?.map((review, index) => (
          <div key={index} className=" pb-5">
            <u className="no-underline">
              <li>User: {review.user}</li>

              <li>Rating: {review.rating}</li>

              <li>Comment: {review.comment}</li>
            </u>
          </div>
        ))}
      </div>
    </>
  );
};

export default productDetails;

productDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  try {
    const res = await fetch("https://server-pc.vercel.app/products");
    const productDetails = await res.json();
    console.log(productDetails);

    if (!Array.isArray(productDetails)) {
      // Handle if productDetails is not an array (e.g., unexpected API response)
      console.error("Invalid API response:", productDetails);
      return { paths: [], fallback: false };
    }

    const paths = productDetails.map((product) => ({
      params: { productId: product._id },
    }));

    return { paths, fallback: false };
  } catch (error) {
    // Handle any error that occurs during the API call
    console.error("Failed to fetch data:", error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://server-pc.vercel.app/product/${params.productId}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
};
