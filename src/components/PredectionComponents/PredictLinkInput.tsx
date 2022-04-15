import React, {FC} from 'react';

type Props = {
    predictLink: string
    predictLinkInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const PredictLinkInput: FC<Props> = ({predictLink, predictLinkInputHandler}) => {
  return (
    <div className=" flex flex-col w-full p-6 ml-2 mr-8 mb-4">

      <label htmlFor="model name" className="block text-sm font-medium text-white">
                Please enter a data link
      </label>

      <div className="flex w-full mt-1 justify-center">
        <input
          value={predictLink}
          onChange={predictLinkInputHandler}
          type="name"
          name="name"
          id="name"
          className="h-6 w-full p-7 font-bold lg:text-xl shadow-md border-1 border-main-blue block rounded-2xl"
          placeholder="Data_Link.csv"
          aria-describedby="name-description"
        />
      </div>

    </div>
  );
};

export default PredictLinkInput;
