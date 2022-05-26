import React, {Dispatch, FC, SetStateAction} from 'react';

type Props = {
    setActivationFunction?: Dispatch<SetStateAction<string>>
    activationFunction?: string
    disable?: boolean
}

const OutputActivationSelection: FC<Props> = ({setActivationFunction, activationFunction, disable}) => {

  const activationFunctionHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const enteredFName = event.target.value;
    setActivationFunction(enteredFName);
  };

  return (
    disable
      ?
      <div>
        <label htmlFor="activation" className="block text-sm font-light text-gray-500">
                  Activation
        </label>
        <select
          onChange={activationFunctionHandler}
          id="activation"
          name="activation"
          className="block w-full pl-28 pr-28 py-2.5 text-xl border-main-blue outline-secondary-blue focus:ring-main-blue font-bold text-gray-400"
          defaultValue={activationFunction}
          disabled={disable}
        >
          <option>softmax</option>
          <option>sigmoid</option>
        </select>
      </div>
      :
      <div>
        <label htmlFor="activation" className="block text-sm font-light text-gray-500">
                Activation
        </label>
        <select
          onChange={activationFunctionHandler}
          id="activation"
          name="activation"
          className="block w-full pl-28 pr-28 py-2.5 text-xl border-main-blue outline-secondary-blue focus:ring-main-blue font-bold text-secondary-blue"
          defaultValue={activationFunction}
          disabled={disable}
        >
          <option>softmax</option>
          <option>sigmoid</option>
        </select>
      </div>
  );
};

export default OutputActivationSelection;
