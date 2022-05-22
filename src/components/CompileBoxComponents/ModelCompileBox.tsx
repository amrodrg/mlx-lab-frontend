import React, {Dispatch, FC, SetStateAction} from 'react';
import SelectionComponent from './SelectionComponent';
import QuestionButtonBlue from '../Buttons/QuestionButtonBlue';
import LearningRateInput from './LearningRateInput';

type Props = {
    lossFunc: string
    setLosFunc: Dispatch<SetStateAction<string>>
    optimizer: string
    setOptimizer: Dispatch<SetStateAction<string>>
    learningRate: number
    setLearningRate:  React.Dispatch<React.SetStateAction<number>>
}

const ModelCompileBox: FC<Props> = ({lossFunc, setLosFunc, optimizer, setOptimizer, learningRate, setLearningRate}) => {
  return(
    <div className="flex flex-col bg-main-blue p-1 items-center rounded-2xl">
      <div className="bg-main-blue w-3/5 py-2 mb-3 mt-2.5 rounded-full font-bold text-lg"></div>

      <div className="flex flex-col bg-white h-full w-full pt-16 pb-12 rounded-b-2xl space-y-10">

        <div className="flex flex-row justify-between px-16 font-bold text-gray-600 items-center">
          <div className="flex flex-row items-center space-x-1"><
            text>Choose the loss function: </text>
          <QuestionButtonBlue/>
          </div>
          <SelectionComponent options={['mae', 'mse']} defaultValue={lossFunc} setValue={setLosFunc}/>
        </div>

        <div className="flex flex-row justify-between px-16 font-bold text-gray-600 items-center">
          <div className="flex flex-row items-center space-x-1"><
            text>Choose the optimizer: </text>
          <QuestionButtonBlue/>
          </div>
          <SelectionComponent options={['adam', 'sgd']} defaultValue={optimizer} setValue={setOptimizer}/>
        </div>

        <div className="flex flex-row self-end justify-between px-14 font-bold text-gray-600">
          <div className="flex flex-row items-center space-x-1 w-2/3">
            <text>Choose the learning rate: </text>
            <QuestionButtonBlue/>
          </div>
          <LearningRateInput learningRate={learningRate} setLearningRate={setLearningRate}/>
        </div>

      </div>
    </div>
  );
};

export default ModelCompileBox;
