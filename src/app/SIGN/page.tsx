import Link from 'next/link';
import Image from 'next/image'; // Import Image for logo

export default function BuyCoursePage() {
    return (
        <div className="bg-cover bg-center min-h-screen flex flex-col" style={{ backgroundImage: `url('/hero23.jpg')` }}>
            {/* Main Content */}
            <div className="flex flex-col items-center justify-center flex-1 p-4">
                <h1 className="text-4xl font-bold mb-8 text-white text-center">Sign In</h1>

                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-5 text-center">Sign In</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <Link href="/login">
                            <button
                                type="button" // Use type="button" to prevent form submission
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                            >
                                Sign In
                            </button>
                        </Link>
                    </form>
                </div>

                <div className="flex justify-center mt-8 mb-4">
                    <Link href="/">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}