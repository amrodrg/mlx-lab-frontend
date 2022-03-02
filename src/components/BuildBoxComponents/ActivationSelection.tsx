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
export default function ActivationSelection() {
  return (
    <div>
      <label htmlFor="activation" className="block text-sm font-light text-gray-500">
                Activation
      </label>
      <select
        id="activation"
        name="activation"
        className="block w-full pl-28 pr-28 py-1 text-xl border-secondary outline-secondary-blue hover:outline-primary-purple focus:ring-main-blue rounded-pill font-bold text-secondary-blue"
        defaultValue="ReLu"
      >
        <option>ReLu</option>
        <option>Sigmoid</option>
      </select>
    </div>
  );
}
