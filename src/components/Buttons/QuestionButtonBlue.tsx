import {QuestionMarkCircleIcon} from '@heroicons/react/solid';
import React from 'react';

export default function QuestionButtonBlue() {
  return (
    <button
      type="button"
      className="flex h-7 w-7 justify-content-center items-center rounded-full shadow-sm text-main-blue bg-transparent hover:text-secondary-blue"
    >
      <QuestionMarkCircleIcon className="h-6 w-6 bg-white rounded-full"/>
    </button>
  );
}
