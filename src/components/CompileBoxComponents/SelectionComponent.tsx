import React, {Dispatch, FC, SetStateAction} from 'react';

type Props = {
    options: string[]
    defaultValue: string
    setValue: Dispatch<SetStateAction<string>>
}

const SelectionComponent: FC<Props> = ({options, defaultValue, setValue}) => {

  const lossFunctionHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const enteredValue = event.target.value;
    setValue(enteredValue);
    console.log(enteredValue);
  };

  return (
    <div className="w-1/2">
      <label htmlFor="activation" className="block text-sm font-light text-gray-500">
                Activation
      </label>
      <select
        onChange={lossFunctionHandler}
        id="activation"
        name="activation"
        className="block w-full px-30 py-1 text-xl border-2 border-main-blue outline-secondary-blue focus:ring-main-blue rounded-pill font-bold text-main-blue"
        defaultValue={defaultValue}
      >
        {options.map(option => {
          return (<option className="text-center" key={option}>{option}</option>);
        })}
      </select>
    </div>
  );
};

export default SelectionComponent;
