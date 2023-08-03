import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "http://localhost:3000/",
            })
          }
          className="bg-red-600 text-white w-full py-3 rounded-md flex items-center justify-center mb-4"
        >
          <i className="fab fa-google mr-3"></i>
          Sign in with Google
        </button>
        <button
          onClick={() =>
            signIn("github", {
              callbackUrl: "http://localhost:3000/",
            })
          }
          className="bg-black text-white w-full py-3 rounded-md flex items-center justify-center"
        >
          <i className="fab fa-github mr-3"></i>
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
