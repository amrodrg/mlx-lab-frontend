
import React, {Fragment, useState} from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  MenuIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid';
import PredictLinkInput from '../components/PredectionComponents/PredictLinkInput';
import {PredictionButton} from '../components/PredectionComponents/PredictionButton';

export default function PredictionPage() {

  const [predictLink, setPredictLink] = useState('');

  const linkInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredLink = event.target.value;
    setPredictLink(enteredLink);
    console.log(enteredLink);
  };

  return (
    <div className="relative overflow-hidden">
      <main>

        <div className="relative bg-gray-200 py-16 sm:py-24 lg:py-32">
        </div>

        {/* Testimonial section */}
        <div className="pb-16 bg-gradient-to-r from-primary-purple to-black lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:pl-40 lg:pr-8 lg:grid lg:grid-cols-3">


            <div className="relative lg:-my-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="aspect-w-10 aspect-h-8 rounded-xl shadow-md overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full bg-white">

                </div>
              </div>
            </div>


            <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8 w-full">
              <div className="flex flex-row items-center mx-auto px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">

                <PredictLinkInput predictLink={predictLink} predictLinkInputHandler={linkInputHandler}/>

                <PredictionButton/>

              </div>
            </div>
          </div>
        </div>

      </main>


      <footer className="bg-gray-50" aria-labelledby="footer-heading">

        <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8 py-8">
        </div>

      </footer>
    </div>
  );
}
