import { errorMessages } from "../common/utils/constants";
import type { ErrorPageProps } from "../interfaces/types/prop.types";

export default function ErrorPage({ statusCode }: ErrorPageProps) {
  console.log(statusCode);
  const message =
    errorMessages[statusCode] || "An unexpected error has occurred.";
  

  return (
    <div className="centered flex-col min-h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center">
        <span className="text-6xl font-extrabold text-purple-500 mb-2">
          {statusCode}
        </span>
        <p className="text-xl font-medium text-gray-700 mb-4">
          {message}
        </p>
        <a
          href="/"
          className="mt-4 px-6 py-2 rounded bg-purple-500 text-white hover:bg-purple-700 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
