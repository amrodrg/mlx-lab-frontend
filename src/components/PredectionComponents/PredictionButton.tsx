import React, {FC} from 'react';

type Props = {
  predictionFetch: () => void
}

export const PredictionButton: FC<Props> = ({predictionFetch}) => {
  return (
    <button
      onClick={predictionFetch}
      type="button"
      className="items-center inline-flex w-60 h-14 p-1 mr-2 justify-content-center border border-transparent rounded-2xl shadow-sm text-xl text-white font-bold bg-fuchsia-900 hover:bg-primary-purple"
    >
      <div className="flex flex-row justify-between items-center space-x-2">

        <img src='img/ai-healing-white.svg' className="h-6"/>

        <div> Predict </div>
      </div>
    </button>
  );
};
