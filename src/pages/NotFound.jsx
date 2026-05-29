import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-7xl font-bold">
        404
      </h1>

      <p className="my-4">
        Page Not Found
      </p>

      <Link
        to="/"
        className="border px-6 py-3 rounded-xl"
      >
        Go Home
      </Link>

    </div>
  );
}

export default NotFound;