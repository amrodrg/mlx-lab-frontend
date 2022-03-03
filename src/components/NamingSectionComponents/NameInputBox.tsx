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
export default function NameInputBox() {
  return (
    <div>
      <label htmlFor="model name" className="block text-sm font-medium text-gray-700">
                Model's name
      </label>
      <div className="mt-1">
        <input
          type="name"
          name="name"
          id="name"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Example: House_Prices_Prediction_Model"
          aria-describedby="name-description"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500" id="name-description">
                Your File will be saved with this name.
      </p>
    </div>
  );
}
