import React, {FC} from 'react';
import QuestionButton from '../Buttons/QuestionButton';

type Props = {
    modelType: string
}

const ChoosingBox: FC<Props> = ({modelType}) => {
  return (
    <div className="flex bg-main-blue w-5/12 h-64 rounded-2xl">
      <div className="flex flex-col w-full justify-around items-center py-4">
        <div className="flex flex-row items-center">
          <text className="text-white font-bold text-3xl p-3">{modelType}</text>
          <QuestionButton/>
        </div>

        <button className="bg-white hover:ring-4 hover:ring-white hover:shadow-2xl text-main-blue w-3/5 py-2 rounded-full font-bold text-lg">BUILD</button>
      </div>
    </div>
  );
};

export default ChoosingBox;
