import React from 'react'

export default function NoPage() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 flex flex-col">
                  <h2 className='text-5xl font-semibold'>Error: 404</h2>
                  <p className='text-5xl font-medium'>Page Not Found</p>
              </div>
          </div>
      </div>
  );
}