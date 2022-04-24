import React, {FC} from 'react';

type Props = {
   explainationFetch: () => void
}

export const ExplainationButton: FC<Props> = ({explainationFetch}) => {
  return (
    <button
      onClick={explainationFetch}
      type="button"
      className="items-center inline-flex w-60 h-14 p-1 justify-content-center border border-transparent rounded-2xl shadow-sm text-xl text-white font-bold bg-fuchsia-900 hover:bg-primary-purple">
      <div className="flex flex-row justify-between items-center space-x-5">
        <div> Explain </div>
      </div>
    </button>
  );
};