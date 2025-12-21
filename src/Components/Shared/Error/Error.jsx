import { Link } from "react-router";

const Error = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-extrabold mb-4 text-[#03045e]">404</h1>

        <h2 className="text-2xl font-bold mb-3">Page Not Found</h2>

        <p className="text-gray-500 mb-8">
          The page you’re looking for doesn’t exist.
        </p>

        <Link to="/">
          <button className="btn btn-lg bg-[#03045e] text-white">
            Back to Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
