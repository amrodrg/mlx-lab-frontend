import {QuestionMarkCircleIcon} from '@heroicons/react/solid';
import React, {FC} from 'react';

type Props = {
  onClick?: (bool) => void
}
const QuestionButtonBlue: FC<Props> = ({onClick}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex h-7 w-7 justify-content-center items-center rounded-full text-main-blue bg-transparent hover:text-secondary-blue"
    >
      <QuestionMarkCircleIcon className="h-6 w-6 bg-white rounded-full"/>
    </button>
  );
};

export default QuestionButtonBlue;
