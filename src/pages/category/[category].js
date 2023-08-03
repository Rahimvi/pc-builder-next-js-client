/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import RootLayout from "@/layout/RootLayout";
import { addToCart } from "@/redux/features/products/cardSlice";
import Link from "next/link";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";

const CategoryPage = ({ category }) => {
  if (!category) {
    return <div>No products available for this category.</div>;
  }
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  const handleAddProduct = (product) => {
    dispatch(addToCart(product));
    router.push("/pc-builder");
    // toast({
    //   description: "Product Added",
    // });
  };
  return (
    <>
      <div className="text-black text-center p-4 m-4">
        <h2 className="text-3xl font-bold">
          Category: {category[0]?.category}
        </h2>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-5 pb-5">
        {category.map((product) => (
          <div className="card card-side w-4/5 bg-base-content shadow-xl">
            <figure className="w-96">
              <img
                src={product.image_url}
                className="rounded h-32 w-32"
                alt="product"
              />
            </figure>
            <div className="card-body items-center text-center">
              <div>
                <h2 className="card-title">{product.name}</h2>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <p>Status: {product.status}</p>
                <p>Rating: {product.rating}</p>
              </div>
              <div className="card-actions justify-end">
                {"Choose" && (
                  <>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddProduct(product)}
                    >
                      Add
                    </button>
                    <Link href={`/product/${product._id}`}>
                      <button className="btn btn-primary">Details</button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  try {
    const res = await fetch("https://server-pc.vercel.app/products"); // Fetch all products data or categories
    const allData = await res.json();

    // Check if allData is an array before mapping over it
    const paths = Array.isArray(allData)
      ? allData.map((data) => ({
          params: { category: data.category }, // Assuming each data item has a "category" property
        }))
      : [];

    return { paths, fallback: false };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps = async ({ params }) => {
  const { category } = params;
  const res = await fetch(
    `https://server-pc.vercel.app/products/by-category/${category}`
  );
  const data = await res.json();
  return {
    props: {
      category: data,
    },
    revalidate: 10,
  };
};
