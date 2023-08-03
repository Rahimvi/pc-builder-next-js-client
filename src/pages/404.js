import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Oops! The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
