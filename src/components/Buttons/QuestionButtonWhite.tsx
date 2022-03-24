import {QuestionMarkCircleIcon} from '@heroicons/react/solid';
import React from 'react';

export default function QuestionButtonWhite() {
  return (
    <button
      type="button"
      className="flex h-7 w-7 justify-content-center items-center rounded-full shadow-sm text-white hover:bg-secondary-blue"
    >
      <QuestionMarkCircleIcon className="h-6 w-6 bg-main-blue rounded-full"/>
    </button>
  );
}
