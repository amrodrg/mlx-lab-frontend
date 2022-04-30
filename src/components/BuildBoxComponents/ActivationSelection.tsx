import React, {FC} from 'react';

type Props = {
    selectionHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void
    activationFunction: string
}

const ActivationSelection: FC<Props> = ({selectionHandler, activationFunction}) => {

  return (
    <div>
      <label htmlFor="activation" className="block text-sm font-light text-gray-500">
                Activation
      </label>
      <select
        onChange={selectionHandler}
        id="activation"
        name="activation"
        className="block w-full pl-28 pr-28 py-1 text-xl border-secondary outline-secondary-blue focus:ring-main-blue rounded-pill font-bold text-secondary-blue"
        defaultValue={activationFunction}
      >
        <option>linear</option>
        <option>relu</option>
      </select>
    </div>
  );
};

export default ActivationSelection;
