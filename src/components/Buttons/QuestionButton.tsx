import {QuestionMarkCircleIcon} from '@heroicons/react/solid';
import React, {Dispatch, FC, SetStateAction} from 'react';

type Props = {
  setShowExplain: Dispatch<SetStateAction<boolean>>
}

const QuestionButton: FC<Props> = ({setShowExplain}) => {
  return (
    <button
      onClick={() => setShowExplain(true)}
      type="button"
      className="flex h-7 w-7 justify-content-center items-center border border-transparent rounded-full shadow-sm text-white bg-secondary-blue hover:bg-primary-purple focus:outline-nonefocus:ring-offset-2 focus:ring-primary-purple"
    >
      <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default QuestionButton;
