/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

export default function RegressionHeader() {
  return (
    <div className="bg-main-blue rounded-b-full">
      <div className="flex max-w-7xl mx-auto py-10 px-4 sm:py-14 sm:px-6 lg:px-8 justify-center items-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                        REGRESSION
        </h2>
      </div>
    </div>
  );
}
