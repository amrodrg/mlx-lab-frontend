import Link from 'next/link';

export default function FirstPage() {
  return (
    <section className="bg-main-blue">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">

        <Link href="/landing-page">
          <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-indigo-900 lg:pr-16 hover:bg-secondary-blue hover:shadow-2xl">
            <div className="md:flex-shrink-0">
              <p className="relative text-2xl font-bold text-white md:flex-grow"> BUILDING & TESTING </p>
            </div>
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">

                <p className="relative text-lg">
                  An Educational User Interface for Training, Evaluating, and Testing Deep Learning Models with TensorFlow.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">Amr Dargham</div>
                    <div className="text-base font-medium text-indigo-200">FU-Berlin</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </Link>


        <Link href="">
          <div className="py-12 px-4 border-t-2 border-indigo-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16 hover:bg-secondary-blue hover:shadow-2xl">
            <div className="md:flex-shrink-0">
              <p className="relative text-2xl font-bold text-white md:flex-grow"> Machine Learning Explainability</p>
            </div>
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <p className="relative text-lg">
                  An Educational User Interface for Explaining Blackbox Model decisions using SHAP Framework
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">Mamon Dehabra</div>
                    <div className="text-base font-medium text-indigo-200">FU-Berlin</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </Link>



      </div>
    </section>
  );
}
