import React from 'react';
import Tabs from './components/Tabs';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block lg:w-1/2 bg-gray-900"></div>
      <div className="w-full lg:w-1/2 bg-gray-800 text-white p-6">
        <div className="mb-12">
          <Tabs />
        </div>
        <div className="mt-8">
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
