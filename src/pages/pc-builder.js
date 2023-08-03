/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/layout/RootLayout";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const PcBuilderPage = ({ allCategory }) => {
  if (!Array.isArray(allCategory)) {
    return <div>No products available.</div>;
  }
  const { products } = useSelector((state) => state.cart);
  console.log(products);
  const dispatch = useDispatch();
  const isBuildComplete = () => {
    const selectedComponentsCount = products.filter((product) =>
      allCategory.some(
        (category) => category.product.category === product.category
      )
    ).length;
    return selectedComponentsCount >= 5;
  };
  return (
    <>
      <div className="flex justify-center p-10 font-bold">
        <h2 className="text-black text-2xl">
          PC Builder - Build Your Own Computer
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="overflow-x-auto text-black w-5/6 border-solid border-2 border-black">
          <form>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {allCategory?.map((category) => (
                  <tr key={category._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={category.product.image_url}
                              alt="category"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {category.product.category}
                          </div>
                        </div>
                      </div>
                    </td>
                    {products.map((product) => (
                      <>
                        {product.category == category.product.category && (
                          <td key={product?._id}>
                            {product.name}
                            <br />
                            <span className="font-normal">
                              {product.status}
                            </span>
                          </td>
                        )}
                      </>
                    ))}
                    <td>
                      {products.some(
                        (product) =>
                          product.category === category.product.category
                      ) ? (
                        // Product already added to PC Builder, show product price
                        <span className="font-bold">
                          Price:{" "}
                          {
                            products.find(
                              (product) =>
                                product.category === category.product.category
                            ).price
                          }
                        </span>
                      ) : (
                        // Product not added to PC Builder, show "Choose" button
                        <Link href={`/category/${category.product.category}`}>
                          <button className="btn btn-xs">Choose</button>
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <th className="flex justify-center">
                    <button
                      className="btn btn-outline btn-success"
                      disabled={!isBuildComplete()}
                    >
                      Complete Build
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://server-pc.vercel.app/products/one-from-each-category"
  );
  const data = await res.json();
  return {
    props: {
      allCategory: data,
    },
  };
};
