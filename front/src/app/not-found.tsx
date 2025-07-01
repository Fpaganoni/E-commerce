// Vedors
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Página no encontrada</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
