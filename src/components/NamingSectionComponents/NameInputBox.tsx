import React, {FC} from 'react';

type Props = {
    modelName: string
    setName?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const NameInputBox : FC<Props> = ({modelName, setName}) => {
  return (
    <div className=" flex flex-col w-full p-10 ml-5 mr-32">
      <label htmlFor="model name" className="block text-sm font-medium text-white">
                Model's name
      </label>
      <div className="flex w-full mt-1 justify-center">
        <input
          value={modelName}
          onChange={setName}
          type="name"
          name="name"
          id="name"
          className="h-40 w-full font-bold lg:text-3xl shadow-md border-2 border-main-blue block rounded-md p-10"
          placeholder="Example: House_Prices_Prediction_Model"
          aria-describedby="name-description"
        />
      </div>
    </div>
  );
};

export default NameInputBox;
