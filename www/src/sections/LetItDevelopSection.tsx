export default function LetItDevelopSection() {
  return (
    <footer className="bg-blue-800 py-32">
      <div className="py-18 mx-auto flex max-w-7xl flex-col md:flex-row md:justify-between">
        {/*  contact infomation */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-4xl font-bold text-gray-50">Let's Develop</h2>
            <p className="text-xl font-semibold tracking-wider text-gray-50">
              Ask anything or just say it.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3 font-semibold tracking-wide">
            <p className="text-gray-50">Phone: 09770628554</p>
            <p className="text-gray-50">Email: aungmyamoe834@gmail.com</p>
          </div>
        </div>

        {/* form */}
        <div className="w-1/2">
          <form className="flex w-full flex-col">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-100"
              >
                Name
                <span className="mx-1 text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-100"
              >
                Email
                <span className="mx-1 text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your message"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-100"
              >
                Message
                <span className="mx-1 text-red-600">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-xl text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
