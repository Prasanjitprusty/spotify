import React from "react";

function MainComponent() {
  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-900 text-gray-200">
      {/* Popular Artists Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Popular Artists</h2>
          <button className="text-sm text-gray-400 hover:text-white">Show all</button>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {Array(6)
            .fill("Artist Name")
            .map((name, index) => (
              <div
                key={index}
                className="h-24 bg-gray-800 rounded-md flex flex-col items-center justify-center text-center text-gray-400"
              >
                <div className="w-12 h-12 bg-gray-600 rounded-full mb-2"></div>
                {name}
              </div>
            ))}
        </div>
      </section>

      {/* Popular Albums Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Popular Albums and Singles</h2>
          <button className="text-sm text-gray-400 hover:text-white">Show all</button>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {Array(6)
            .fill("Album Name")
            .map((name, index) => (
              <div
                key={index}
                className="h-24 bg-gray-800 rounded-md flex flex-col items-center justify-center text-center text-gray-400"
              >
                <div className="w-12 h-12 bg-gray-600 rounded mb-2"></div>
                {name}
              </div>
            ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 pt-6">
        <div className="grid grid-cols-4 gap-6 text-sm text-gray-400">
          <div>
            <h3 className="text-white mb-2">Company</h3>
            <ul>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Jobs</li>
              <li className="hover:text-white cursor-pointer">For the Records</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-2">Communities</h3>
            <ul>
              <li className="hover:text-white cursor-pointer">For Artists</li>
              <li className="hover:text-white cursor-pointer">Developers</li>
              <li className="hover:text-white cursor-pointer">Advertising</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-2">Useful Links</h3>
            <ul>
              <li className="hover:text-white cursor-pointer">Support</li>
              <li className="hover:text-white cursor-pointer">Free Mobile App</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-2">Spotify Plans</h3>
            <ul>
              <li className="hover:text-white cursor-pointer">Premium Individual</li>
              <li className="hover:text-white cursor-pointer">Premium Duo</li>
              <li className="hover:text-white cursor-pointer">Premium Family</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6"></div>
        <p className="text-center text-gray-400 mt-4">© 2024 Spotify AB</p>
      </footer>
    </div>
  );
}

export default MainComponent;
