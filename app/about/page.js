import Link from "next/link";
export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-center max-w-2xl">
        Welcome to our website! We are passionate about providing high-quality
        content and resources to help you achieve your goals. Our team is
        dedicated to ensuring that you have the best experience possible.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Home
        </a>
        <a
          href="/contact"
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          Contact Us
        </a>
        <Link href="/about/ourstory">press here </Link>
      </div>
    </div>
  );
}
