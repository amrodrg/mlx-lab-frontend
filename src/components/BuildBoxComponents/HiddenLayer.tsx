import {MinusSmIcon, PlusSmIcon as PlusSmIconSolid} from '@heroicons/react/solid';
import ActivationSelection from './ActivationSelection';
import Divider from './Divider';
import {FC} from 'react';

type Props = {
  layerNumber:number
  neuronsNumber:number
  setNeuronsNumber?: (neuronsNumber) => void
}

const HiddenLayer: FC<Props> = ({neuronsNumber, setNeuronsNumber, layerNumber}) => {

  function decreaseNeurons() {
    setNeuronsNumber(prev => prev - 1);
  }

  function increaseNeurons() {
    setNeuronsNumber(prev => prev + 1);
  }

  return (
    <div className="flex flex-col">

      <div className="flex flex-row justify-around  flex-auto w-100 mt-10">



        <div className="flex justify-around flex-1 px-3 py-2">
          {/* eslint-disable-next-line react/prop-types */}
          <h5 style={{color: '#4CA1D3', fontSize: 'x-large'}}>Layer {layerNumber}</h5>
        </div>



        <div className="flex flex-row justify-center flex-auto w-auto">
          <div>
            <button
              onClick={decreaseNeurons}
              type="button"
              className="inline-flex items-center p-2.5 border border-transparent rounded-full shadow-sm text-white bg-secondary-blue hover:bg-primary-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-purple"
            >
              <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>


          <div className="flex justify-center w-auto mx-3">
            <h5 className="text-3xl border-solid border-3 border-secondary-blue px-2.5 py-0.5 rounded-2xl">{neuronsNumber}</h5>
          </div>


          <div>
            <button
              onClick={increaseNeurons}
              type="button"
              className="inline-flex items-center p-2.5 border border-transparent rounded-full shadow-sm text-white bg-secondary-blue hover:bg-primary-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-purple"
            >
              <PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>



        <div className="flex flex-row justify-around content-around flex-auto w-1/5">
          <ActivationSelection></ActivationSelection>
        </div>


      </div>


      <Divider></Divider>


    </div>


  );
};

export default HiddenLayer;
