// ...existing code...
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-xl md:text-2xl font-semibold mb-2">Page not found</p>
        <p className="text-gray-600 mb-6">We couldn't find the page you're looking for.</p>
        <div className="flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Go home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
