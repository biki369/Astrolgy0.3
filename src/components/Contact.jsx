const Contact = () => {
  return (
    <section className="px-8 py-16 bg-gray-200 text-gray-900">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <form className="mt-8 max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 border rounded"
            rows="4"
          />
          <button className="w-full p-2 bg-indigo-900 text-white rounded hover:bg-indigo-700 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
