/* This example requires Tailwind CSS v2.0+ */

import {FC} from 'react';

type Props = {
    onClick: () => void
}

const Example: FC<Props> = ({onClick}) => {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-main-blue hover:bg-primary-purple focus:outline-none focus:ring-offset-2 focus:ring-indigo-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{marginRight:5}}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
            Add Layer
      </button>
    </>
  );
};

export default Example;
