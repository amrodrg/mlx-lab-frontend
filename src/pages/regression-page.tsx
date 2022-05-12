import BuildindSection from '../pages-sections/BuildingSection';
import NamingSection from '../pages-sections/NamingSection';
import DataImportingSection from '../pages-sections/DataImportingSection';
import CompilingSection from '../pages-sections/CompilingSection';
import DataFittingSection from '../pages-sections/DataFittingSection';
import RegressionHeader from '../components/RegressionHeader';
import React, {useState} from 'react';
import {toast} from 'react-toastify';
import useLocalStorage from '@/hooks/useLocalStorage';
import {useDispatch, useSelector} from 'react-redux';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {bindActionCreators} from 'redux';
import {ModelNameActionCreator} from '../redux/index';
import {useRouter} from 'next/router';


export default function RegressionPage() {

  const router = useRouter();

  // imported values from Redux Store
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const {modelName} = useSelector((state) => state);

  // Action Creators of Redux
  const dispatch = useDispatch();
  const modelNameAC = bindActionCreators(ModelNameActionCreator, dispatch);

  // The entered data link
  const [linkValue, setLinkValue] = useLocalStorage('DataLink', '');
  // Data labels row name
  const [labelsColumnName, setLabelsColumnName] = useLocalStorage('LabelsColumnName', '');
  // The List of Layers
  const [layers, setLayers] = useLocalStorage('LayersKey', [{layerId: 1, neuronsNum: 2, activationFun: 'ReLu'}]);
  // The list of neuron's numbers for each layer
  const [neuronsList, setNeuronsList] = useLocalStorage('NeuronsListKey', [5]);
  // The list of activation functions for each layer
  const [activationList, setActivationList] = useLocalStorage('ActivationListKey', ['relu']);
  // The number of epochs
  const [epochsNumber, setEpochsNumber] = useState(100);
  // The testing percentage of data set
  const [testingPercentage, setTestingPercentage] = useLocalStorage('TestPercentage', 20);
  // The Lost function
  const [lossFunc, setLossFunc] = useState('mae');
  // Training Optimizer
  const [optimizer, setOptimizer] = useState('adam');
  // Learning Rate
  const [learningRate, setLearningRate] = useState(0.01);
  // Normalize Data
  const [doNormalize, setDoNormalize] = useLocalStorage('DoNormalize', false);


  const [loading, setLoading] = useState(false);

  const linkInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredLink = event.target.value;
    setLinkValue(enteredLink);
  };

  const labelsNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setLabelsColumnName(enteredName);
  };

  const nameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    modelNameAC.enterModelName(enteredName);
  };

  // Build a Model with a given number of layers and a given number of neurons for each layer
  const makeModelFetch = async () => {
    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        neuronsList: neuronsList,
        activationList: activationList,
        layersNumber: layers.length,
        dataLink: linkValue,
        labelsName: labelsColumnName,
        modelName: modelName,
        epochsNumber: epochsNumber,
        testingPercentage: testingPercentage,
        lossFunction: lossFunc,
        optimizer: optimizer,
        learningRate: learningRate,
        doNormalize: doNormalize
      })
    };

    if (linkValue == '') {
      toast.error(' Please enter a data link!');
      window.scrollTo({
        top: 240,
        behavior: 'smooth',
      });
    } else if (labelsColumnName == '') {
      toast.error(' Please enter the name of the labels row of your data set!');
      window.scrollTo({
        top: 240,
        behavior: 'smooth',
      });
    } else if (modelName == '') {
      toast.error(' Please enter a name for your model!');
      window.scrollTo({
        top: 780,
        behavior: 'smooth',
      });
    } else {
      setLoading(true);
      await fetch('http://127.0.0.1:8000/', requestOptions).then((data) => {
        if (data.status === 200) {
          const mlModel = data.json();
          console.log(mlModel);
          setLoading(false);
          router.push('/evaluation-page');
        } else if (data.status === 503) {
          setLoading(false);
          toast.error(' Invalid data link or incorrect labels column name!');
          window.scrollTo({
            top: 240,
            behavior: 'smooth',
          });
        } else if (data.status === 500) {
          setLoading(false);
          toast.error(' Data Fitting Failed! Please check your model\'s setting');
        } else {
          setLoading(false);
        }
      }).catch((error) => {
        console.log(error.message);
      });
    }
  };

  return (
    <div>
      <RegressionHeader/>
      <DataImportingSection dataLinkValue={linkValue} setLink={linkInputHandler} labelsColumnName={labelsColumnName}
        setLabelsColumnName={labelsNameHandler} doNormalize={doNormalize} setDoNormalize={setDoNormalize}/>
      <NamingSection modelName={modelName} setName={nameInputHandler}/>
      <BuildindSection layers={layers} setLayers={setLayers} neuronsList={neuronsList}
        setNeuronsList={setNeuronsList} activationList={activationList}
        setActivationList={setActivationList}/>
      <CompilingSection lossFunc={lossFunc} setLosFunc={setLossFunc} optimizer={optimizer}
        setOptimizer={setOptimizer} learningRate={learningRate}
        setLearningRate={setLearningRate}/>
      <DataFittingSection epochsNum={epochsNumber} setEpochsNum={setEpochsNumber} testingPer={testingPercentage}
        setTestingPer={setTestingPercentage} makeFetch={makeModelFetch} loading={loading}/>
    </div>);
}

