export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-center max-w-2xl mb-6">
        Have any questions? Feel free to reach out to us by filling out the form
        below.
      </p>
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <label className="block mb-2 text-sm font-medium">Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your name"
        />

        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your email"
        />

        <label className="block mb-2 text-sm font-medium">Message</label>
        <textarea
          className="w-full p-2 border rounded mb-4"
          rows="4"
          placeholder="Your message"
        ></textarea>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
