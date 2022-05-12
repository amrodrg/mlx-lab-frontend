
import React, {useEffect, useState} from 'react';
import PredictLinkInput from '../components/PredectionComponents/PredictLinkInput';
import {PredictionButton} from '../components/PredectionComponents/PredictionButton';
import { ExplainationButton } from 'components/PredectionComponents/ExplainationButton';
import {toast, ToastContainer} from 'react-toastify';
import {useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import useLocalStorage from '@/hooks/useLocalStorage';
import PredictionList from '../components/PredectionComponents/PredictionList';
import {getSavedValue} from '@/hooks/useLocalStorage';

export interface PredictionObjekt {
  idx: number
  prediction: number
}

export default function PredictionPage() {

  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const {modelName} = useSelector((state) => state);
  const originalDataLink = getSavedValue('DataLink', '');
  const labelsName = getSavedValue('LabelsColumnName', '');
  const testPercentage = getSavedValue('TestPercentage', 20);
  const doNormalize = getSavedValue('DoNormalize', false);

  const [predictionDataLink, setPredictionDataLink] = useState('');
  const [predictionItems, setPredictionItems] = useState();
  const [loading, setLoading] = useState(false);

  // for explainations
  const [shapValues, setShapValues] = useLocalStorage('shapValues', []);
  const [selectedExample, setExampleState] = useLocalStorage('example', "2");
  const [backgroundValue, setBackgroundValue] = useLocalStorage('backgroundValue', "20");

  const linkInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredLink = event.target.value;
    setPredictionDataLink(enteredLink);
    console.log(enteredLink);
  };

  const makePredictionFetch = async () => {
    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        modelName: modelName,
        predictionDataLink: predictionDataLink,
        originalDataLink: originalDataLink,
        labelsName: labelsName,
        testingPercentage: testPercentage,
        doNormalize: doNormalize
      })
    };

    if (predictionDataLink == '') {
      toast.error(' Please enter a data link!');
      window.scrollTo({
        top: 100,
        behavior: 'smooth',
      });
    }
    else {
      setLoading(true);
      const predictionData = await fetch('http://127.0.0.1:8000/predict', requestOptions);
      const predictionString = await  predictionData.json();
      await setPredictionItems(predictionString);
      await setLoading(false);
      await console.log(predictionString);
    }
  };

  const makeExplainationFetch = async () => {
    // POST request using fetch with async/await
    const dataLink = getSavedValue('DataLink', '');
    const labelsColumnName = getSavedValue('LabelsColumnName', '');

    const requestShapOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        modelName: modelName,
        predictionDataLink: predictionDataLink,
        dataLink: dataLink,
        labelName: labelsColumnName
      })
    };

    if (predictionDataLink == '') {
      toast.error(' Please enter a data link!');
      window.scrollTo({
        top: 100,
        behavior: 'smooth',
      });
    }
    else {
      setLoading(true);
      const shapValuesData = await fetch('http://127.0.0.1:8000/shap/prediction_shap_values', requestShapOptions);
      const shapValuesDatajs = await  shapValuesData.json();
      await setShapValues(shapValuesDatajs);
      await setExampleState("2");
      await setBackgroundValue("20")
      await setLoading(false);
      router.push('/shap/explaination');
    }
  };

  return (
    <div className="relative overflow-hidden">
      <main>

        <div className="relative bg-gray-200 py-16 sm:py-24 lg:py-32">
        </div>

        {/* Testimonial section */}
        <div className="pb-16 bg-gradient-to-r from-primary-purple to-black lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:pl-40 lg:pr-8 lg:grid lg:grid-cols-3">


            <div className="relative lg:-my-8 h-96 ">
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="aspect-w-10 aspect-h-8 rounded-xl shadow-md overflow-scroll sm:aspect-w-4 sm:aspect-h-7 lg:aspect-none lg:h-full bg-white">

                  <PredictionList predictionList={predictionItems} loading={loading}/>

                </div>
              </div>
            </div>


            <div className="mt-12 col-span-2 pl-8 w-full">
              <div className="flex flex-row items-center">

                <PredictLinkInput predictLink={predictionDataLink} predictLinkInputHandler={linkInputHandler}/>

                <PredictionButton predictionFetch={makePredictionFetch}/>

                <ExplainationButton explainationFetch={makeExplainationFetch}/>

                <ToastContainer/>

              </div>
            </div>
          </div>
        </div>

      </main>


      <footer className="bg-gray-50" aria-labelledby="footer-heading">

        <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8 py-8">
        </div>

      </footer>
    </div>
  );
}
