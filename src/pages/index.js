import AllProductPage from "@/components/AllProduct";
import Banner from "@/components/ui/Banner";
import RootLayout from "@/layout/RootLayout";

const HomePage = ({ allProduct }) => {
  return (
    <>
      <Banner />
      <AllProductPage allProduct={allProduct} />
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://server-pc.vercel.app/products/one-from-each-category"
  );
  const data = await res.json();
  return {
    props: {
      allProduct: data,
    },
    revalidate: 10,
  };
};
