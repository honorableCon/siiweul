export const PriceCard = () => (
  <div className="flex h-screen w-screen items-center bg-blue-50 text-gray-700">
    <div className="mx-auto flex max-w-lg flex-col rounded-lg bg-white px-4 pb-4 shadow-lg sm:rounded-3xl sm:px-14 sm:pb-10">
      <h1 className="mt-4 text-center text-lg font-medium">
        Create your own plan
      </h1>
      <hr className="mt-4" />
      <span className="mt-6 text-center font-serifs text-3xl font-bold text-blue-900 sm:mt-12 sm:text-5xl">
        $89
      </span>

      <span className="mt-4 font-medium sm:text-lg">Followers</span>
      <div className="flex flex-wrap gap-2">
        <button className="active:scale-95 rounded-lg bg-blue-100 px-4 py-2 font-medium text-blue-900">
          100
        </button>
        <button className="active:scale-95 rounded-lg bg-blue-100 px-4 py-2 font-medium text-blue-900">
          1000
        </button>
        <button className="active:scale-95 rounded-lg bg-blue-900 px-4 py-2 font-medium text-white">
          5000
        </button>
        <button className="active:scale-95 rounded-lg bg-blue-100 px-4 py-2 font-medium text-blue-900">
          10000
        </button>
        <button className="active:scale-95 rounded-lg bg-blue-100 px-4 py-2 font-medium text-blue-900">
          20000
        </button>
      </div>
      <span className="mt-4 font-medium sm:text-lg">Server</span>
      <div className="flex flex-wrap gap-2">
        <button className="active:scale-95 rounded-lg bg-blue-900 px-4 py-2 font-medium text-white">
          Windows
        </button>
        <button className="active:scale-95 rounded-lg bg-blue-100 px-4 py-2 font-medium text-blue-900">
          Linux
        </button>
      </div>
      <hr className="mt-8" />
      <button className="mx-auto mt-4 block h-12 rounded-full bg-blue-600 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 sm:mt-10 focus:ring hover:bg-blue-500">
        Get Started
      </button>
    </div>
  </div>
);
