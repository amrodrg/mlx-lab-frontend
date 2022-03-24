import {BounceLoader} from 'react-spinners';
import React from 'react';


export default function TestingPage() {
  return (
    <>
      <div className="flex flex-col">
        <div className="self-center">
          <BounceLoader color='#0079C1'/>
        </div>
      </div>
    </>
  );
}
