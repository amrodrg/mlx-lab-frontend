import {ArrowNarrowDownIcon} from '@heroicons/react/outline';
import React from 'react';

export default function ArrowDown() {
  return(
    <button
      type="button"
      className="h-16 w-16 rounded-full bg-transparent place-self-center"
    >
      <ArrowNarrowDownIcon className="h-10 w-10 bg-white rounded-full text-main-blue p-1"/>
    </button>
  );
}
