import {QuestionMarkCircleIcon} from '@heroicons/react/solid';
import React from 'react';

export default function QuestionButton() {
  return (
    <button
      type="button"
      className="flex h-7 w-7 justify-content-center items-center border border-transparent rounded-full shadow-sm text-white bg-secondary-blue hover:bg-primary-purple focus:outline-nonefocus:ring-offset-2 focus:ring-primary-purple"
    >
      <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
