import {FC} from 'react';

type Props = {
    options: string[]
}

const SelectionComponent: FC<Props> = ({options}) => {
  return (
    <div>
      <label htmlFor="activation" className="block text-sm font-light text-gray-500">
                Activation
      </label>
      <select
        id="activation"
        name="activation"
        className="block w-full px-32 py-1 text-xl border-2 border-main-blue outline-secondary-blue focus:ring-main-blue rounded-pill font-bold text-main-blue"
        defaultValue="ReLu"
      >
        {options.map(option => {
          return (<option className="text-center" key={option}>{option}</option>);
        })}
      </select>
    </div>
  );
};

export default SelectionComponent;
