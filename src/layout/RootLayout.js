import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
