import React, {FC} from 'react';
import {QuestionMarkCircleIcon} from '@heroicons/react/solid';
import Divider from './Divider';
import QuestionButtonBlue from '../Buttons/QuestionButtonBlue';

type Props = {
    link?: string
}

const DataLinkGroup: FC<Props> = ({link}) => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex flex-row items-center w-full mx-5 mt-5 mb-20">

        <button
          type="button"
          className="flex h-10 w-10 justify-content-center items-center rounded-full text-main-blue bg-transparent hover:text-secondary-blue"
        >
          <QuestionMarkCircleIcon className="h-10 w-10 bg-white rounded-full"/>
        </button>


        <div className=" flex flex-col w-full p-6 ml-2 mr-20 mb-4">

          <label htmlFor="model name" className="block text-sm font-medium text-main-blue">
                      Please enter a data link
          </label>

          <div className="flex w-full mt-1 justify-center">
            <input
              type="name"
              name="name"
              id="name"
              className="h-6 w-full p-7 font-bold lg:text-xl shadow-md border-1 border-main-blue block rounded-2xl"
              placeholder="Data Link . csv"
              aria-describedby="name-description"
            />
          </div>

        </div>

        <button
          type="button"
          className="items-center inline-flex w-64 h-14 p-2.5 justify-content-center border border-transparent rounded-full shadow-sm text-xl text-white font-bold bg-main-blue hover:bg-primary-purple"
        >
                  Import
        </button>

      </div>

      <Divider/>

      <div className="flex flex-row items-center w-full mx-5 mt-20 mb-5">


        <div className="flex flex-col w-1/2 items-center mt-1">
          <QuestionButtonBlue/>
          <div className="flex w-full p-6 justify-center">
            <input
              type="name"
              name="name"
              id="name"
              className="h-40 w-full p-3 font-bold lg:text-lg shadow-md border-1 border-main-blue block rounded-2xl justify-center"
              placeholder={'Training data like: “[33, 52, 12, ...]”.'}
              aria-describedby="name-description"
            />
          </div>
        </div>


        <div className="flex flex-col w-1/2 items-center mt-1 mr-20">
          <QuestionButtonBlue/>
          <div className="flex w-full p-6 justify-center">
            <input
              type="name"
              name="name"
              id="name"
              className="h-40 w-full p-7 font-bold lg:text-lg shadow-md border-1 border-main-blue block rounded-2xl"
              placeholder='Labels: “[3000, 5000, 1000, ...]”.'
              aria-describedby="name-description"
            />
          </div>
        </div>
          

        <button
          type="button"
          className="items-center inline-flex w-64 h-14 p-2.5 justify-content-center border border-transparent rounded-full shadow-sm text-xl text-white font-bold bg-main-blue hover:bg-primary-purple"
        >
                Import
        </button>

      </div>

      <div></div>

    </div>

  );
};

export default DataLinkGroup;
