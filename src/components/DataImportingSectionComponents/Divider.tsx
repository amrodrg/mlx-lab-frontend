/* This example requires Tailwind CSS v2.0+ */
export default function Divider() {
  return (
    <div className="w-50">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-500" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-white text-xl font-bold text-main-blue">Or</span>
        </div>
      </div>
    </div>
  );
}
