/* This example requires Tailwind CSS v2.0+ */
import React, {FC} from 'react';
import {PredictionObjekt} from '../../pages/regression-prediction-page';
import {GridLoader, RiseLoader} from 'react-spinners';

type Props = {
  predictionList?: PredictionObjekt[]
  explainFunc?: (number) => void
  loading?: boolean
}
const PredictionList: FC<Props> = ({predictionList, explainFunc, loading}) => {
  if (loading)
    return(
      <ul role="list" className="">
        <div className="ml-3 mt-1">
          <p className="text-2xl font-bold text-sky-900 mt-4 mx-2"> Results: </p>
        </div>
        <div className="flex self-center mx-24 mt-10">
          <GridLoader color='#0079C1' size={20} margin={20} speedMultiplier={2}/>
        </div>
      </ul>
    );
  return (
    <ul role="list" className="divide-y divide-gray-200">
      <div className="ml-3 mt-1">
        <p className="text-3xl font-bold text-sky-900 mt-4 mx-2"> Results: </p>
      </div>
      {predictionList && predictionList.map((prediction) => (
        <li key={prediction.idx} className="py-4 flex">
          <div className="h-10 w-10 rounded-full bg-main-blue text-center">
            {
              predictionList.length>1
                ? <p className="text-white text-2xl font-bold mt-1">{prediction.idx + 1}</p>
                : <img src={'img/ai-healing-white.svg'} className="h-10 w-10 p-1"/>
            }
          </div>
          <div className="ml-4 mt-1">
            <p className="text-2xl font-bold text-gray-900">{prediction.prediction}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PredictionList;
