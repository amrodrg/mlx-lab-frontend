import React, {FC} from 'react';
import SelectionComponent from './SelectionComponent';
import QuestionButtonBlue from '../Buttons/QuestionButtonBlue';

type Props = {
    lossFunc?: string
    optimizer?: string
    metrics?: string
}

const ModelCompileBox: FC<Props> = ({lossFunc, optimizer, metrics}) => {
  return(
    <div className="flex flex-col bg-main-blue p-1 items-center rounded-2xl">
      <button className="bg-white hover:ring-4 hover:ring-white hover:shadow-2xl text-main-blue w-3/5 py-2 mb-3 mt-2.5 rounded-full font-bold text-lg">Learn More</button>

      <div className="flex flex-col bg-white h-full w-full pt-16 pb-12 rounded-b-2xl space-y-10">

        <div className="flex flex-row justify-between px-16 font-bold text-gray-600 items-center">
          <div className="flex flex-row items-center space-x-1"><
            text>Choose the loss function: </text>
          <QuestionButtonBlue/>
          </div>
          <SelectionComponent options={['MAE', 'MSE']}/>
        </div>

        <div className="flex flex-row justify-between px-16 font-bold text-gray-600 items-center">
          <div className="flex flex-row items-center space-x-1"><
            text>Choose the optimizer: </text>
          <QuestionButtonBlue/>
          </div>
          <SelectionComponent options={['Adam', 'SGD']}/>
        </div>

        <div className="flex flex-row px-16 font-bold text-gray-600 items-center">
          <div className="flex flex-row w-1/2 items-center">
            <text className="w-2/3">Choose the metrics to measure the performance of your model: </text>
            <QuestionButtonBlue/>
          </div>
          <SelectionComponent options={['MAE', 'ACCURACY']}/>
        </div>

      </div>
    </div>
  );
};

export default ModelCompileBox;
