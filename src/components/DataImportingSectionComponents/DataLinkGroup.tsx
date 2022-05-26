import React, {FC, useState} from 'react';
import {QuestionMarkCircleIcon} from '@heroicons/react/solid';
import QuestionButtonBlue from '../Buttons/QuestionButtonBlue';
import {ExplainModalDataLink, ExplainModalLabelName} from '../ExplainModals';
import {toast} from 'react-toastify';
import {ClipLoader, RiseLoader} from 'react-spinners';
import {Clipboard} from 'react-bootstrap-icons';

type Props = {
    dataLinkValue: string
    setLink: (event: React.ChangeEvent<HTMLInputElement>) => void
    labelsColumnName: string
    setLabelsColumnName: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const DataLinkGroup: FC<Props> = ({dataLinkValue, setLink, labelsColumnName, setLabelsColumnName}) => {

  const [showExampleModalDataLink , setShowExampleModalDataLink] = useState(false);
  const [showExampleModalLabelName , setShowExampleModalLabelName] = useState(false);
  const [loadingLinkCheck, setLoadingLinkCheck] = useState(false);
  const [loadingLabelsCheck, setLoadingLabelsCheck] = useState(false);
  const [linkChecked, setLinkChecked] = useState(false);
  const [labelsNameCheck, setLabelsNameChecked] = useState(false);

  const makeCheckDataLinkFetch = async () => {
    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        dataLink: dataLinkValue,
      })
    };

    if (dataLinkValue == '') {
      toast.error(' Please enter a data link!');
      window.scrollTo({
        top: 240,
        behavior: 'smooth',
      });
    } else {
      setLoadingLinkCheck(true);
      await fetch('http://127.0.0.1:8000/check_datalink', requestOptions).then((data) => {
        if (data.status === 200) {
          setLoadingLinkCheck(false);
          toast.success(' Data Link is Valid!');
        } else if (data.status === 503) {
          setLoadingLinkCheck(false);
          toast.error(' Invalid data link!');
          window.scrollTo({
            top: 240,
            behavior: 'smooth',
          });
        } else {
          setLoadingLinkCheck(false);
        }
      }).catch((error) => {
        console.log(error.message);
      });
    }
  };

  const makeCheckDLabelsNameFetch = async () => {
    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        dataLink: dataLinkValue,
        labelsName: labelsColumnName,
      })
    };

    if (labelsColumnName == '') {
      toast.error(' Please enter the name of the labels row of your data set!');
      window.scrollTo({
        top: 240,
        behavior: 'smooth',
      });
    } else {
      setLoadingLabelsCheck(true);
      await fetch('http://127.0.0.1:8000/check_labelsname', requestOptions).then((data) => {
        if (data.status === 200) {
          setLoadingLabelsCheck(false);
          toast.success(' Labels Column Name is Correct!');
        } else if (data.status === 503) {
          setLoadingLabelsCheck(false);
          toast.error(' Incorrect Labels Column Name!');
          window.scrollTo({
            top: 240,
            behavior: 'smooth',
          });
        } else {
          setLoadingLabelsCheck(false);
        }
      }).catch((error) => {
        console.log(error.message);
      });
    }
  };



  return (
    <div className="flex flex-col items-center">

      <div className="flex flex-row items-center w-full mx-5 mt-5 mb-2">

        <button
          onClick={() => setShowExampleModalDataLink(true)}
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
              onChange={setLink}
              value={dataLinkValue}
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
          onClick={makeCheckDataLinkFetch}
          disabled={loadingLabelsCheck || loadingLinkCheck}
          type="button"
          className="items-center inline-flex w-64 h-14 p-2.5 justify-content-center border border-transparent rounded-full shadow-sm text-2xl text-white font-bold bg-main-blue hover:bg-primary-purple"
        >
          {loadingLinkCheck?
            <div className="flex self-center">
              <ClipLoader color="white" size={30}/>
            </div> : 'Check'}
        </button>

      </div>

      <div className="flex flex-row items-center justify-center w-full mx-5 mt-2 mb-20">

        <QuestionButtonBlue onClick={() => setShowExampleModalLabelName(true)}/>


        <div className=" flex flex-col w-2/5 p-6 ml-2 mr-10 mb-4">

          <label htmlFor="model name" className="block text-sm font-medium text-secondary-blue">
                    Please enter the name of your labels column
          </label>

          <div className="flex w-full mt-1 justify-center">
            <input
              value={labelsColumnName}
              onChange={setLabelsColumnName}
              type="name"
              name="name"
              id="name"
              className="h-4 w-full px-7 py-6 font-bold lg:text-lg shadow-md border-1 border-secondary-blue block rounded-2xl"
              placeholder="Example: charges"
              aria-describedby="name-description"
            />
          </div>

        </div>

        <button
          onClick={makeCheckDLabelsNameFetch}
          disabled={loadingLinkCheck || loadingLabelsCheck}
          type="button"
          className="items-center inline-flex w-36 h-13 p-2 justify-content-center border border-transparent rounded-full shadow-sm text-xl text-white font-bold bg-main-blue hover:bg-primary-purple"
        >
          {loadingLabelsCheck?
            <div className="flex self-center">
              <ClipLoader color="white" size={27}/>
            </div> : 'Check'}
        </button>


      </div>


      <ExplainModalDataLink showExampleModal={showExampleModalDataLink} setShowExampleModal={setShowExampleModalDataLink}/>
      <ExplainModalLabelName showExampleModal={showExampleModalLabelName} setShowExampleModal={setShowExampleModalLabelName}/>

    </div>

  );
};

export default DataLinkGroup;
