import React, {FC} from 'react';

type Props = {
    learningRate: number
    setLearningRate:  React.Dispatch<React.SetStateAction<number>>
}

const LearningRateInput : FC<Props> = ({learningRate, setLearningRate}) => {

  const learningRateInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredLearningRate = parseFloat(event.target.value);
    setLearningRate(enteredLearningRate);
  };

  return (
    <div className=" flex flex-col w-2/5 p-6 ml-2 mr-10 mb-1">

      <div className="flex w-32 justify-center">
        <input
          onChange={learningRateInputHandler}
          value={learningRate}
          type="number"
          min={0.01}
          name="learningRate"
          id="learningRate"
          className="h-4 w-full px-3 py-4 font-bold lg:text-lg shadow-md border-1 border-secondary-blue block rounded-2xl"
          aria-describedby="name-description"
        />
      </div>

    </div>
  );
};

export default LearningRateInput;
