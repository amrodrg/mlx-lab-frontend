import BuildindSection from '../pages-sections/BuildingSection';
import NamingSection from '../pages-sections/NamingSection';
import DataImportingSection from '../pages-sections/DataImportingSection';
import CompilingSection from '../pages-sections/CompilingSection';
import DataFittingSection from '../pages-sections/DataFittingSection';
import RegressionHeader from '../components/RegressionHeader';
import React, {useState} from 'react';
import {Layer} from '../Interfaces';
import {toast} from 'react-toastify';
import useLocalStorage from '@/hooks/useLocalStorage';
import {useDispatch, useSelector} from 'react-redux';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {bindActionCreators} from 'redux';
import {ModelNameActionCreator} from  '../redux/index';
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
  const [labelsRowName, setLabelsRowName] = useLocalStorage('LabelsRowName', '');
  // The List of Layers
  const [layers, setLayers] = useLocalStorage('layersKey', [{layerId:1, neuronsNum:2, activationFun:'ReLu'}]);
  // The list of neuron's numbers for each layer
  const [neuronsList, setNeuronsList] = useLocalStorage('neuronsListKey', [5]);
  // The list of activation functions for each layer
  const [activationList, setActivationList] = useLocalStorage('activationListKey', ['relu']);
  // The number of epochs
  const [epochsNumber, setEpochsNumber] = useState(100);
  // The testing percentage of data set
  const [testingPercentage, setTestingPercentage] = useLocalStorage('TestPercentage', 20);
  // The Lost function
  const [lossFunc, setLossFunc] = useState('mae');
  // Training Optimizer
  const [optimizer, setOptimizer] = useState('adam');
  // Evaluation Metrics
  const [metrics, setMetrics] = useState('accuracy');

  const [loading, setLoading] = useState(false);

  const linkInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredLink = event.target.value;
    setLinkValue(enteredLink);
    console.log(enteredLink);
  };

  const labelsNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setLabelsRowName(enteredName);
    console.log(enteredName);
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        neuronsList: neuronsList,
        activationList: activationList,
        layersNumber: layers.length,
        dataLink: linkValue,
        labelsName: labelsRowName,
        modelName: modelName,
        epochsNumber: epochsNumber,
        testingPercentage: testingPercentage,
        lossFunction: lossFunc,
        optimizer: optimizer,
        metrics: metrics
      })
    };

    if (linkValue == '') {
      toast.error(' Please enter a data link!');
      window.scrollTo({
        top: 240,
        behavior: 'smooth',
      });
    } else if (labelsRowName == '') {
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
    }
    else {
      setLoading(true);
      const mlData = await fetch('http://127.0.0.1:8000/', requestOptions);
      const mlModel = await  mlData.json();
      await console.log(mlModel);
      await setLoading(false);
      router.push('/evaluation-page');
    }
  };
    
  return(
    <div>
      <RegressionHeader/>
      <DataImportingSection dataLinkValue={linkValue} setLink={linkInputHandler} labelsRowName={labelsRowName} setLabelsRowName={labelsNameHandler}/>
      <NamingSection modelName={modelName} setName={nameInputHandler}/>
      <BuildindSection layers={layers} setLayers={setLayers} neuronsList={neuronsList} setNeuronsList={setNeuronsList} activationList={activationList} setActivationList={setActivationList}/>
      <CompilingSection lossFunc={lossFunc} setLosFunc={setLossFunc} optimizer={optimizer} setOptimizer={setOptimizer} metrics={metrics} setMetrics={setMetrics}/>
      <DataFittingSection epochsNum={epochsNumber} setEpochsNum={setEpochsNumber} testingPer={testingPercentage} setTestingPer={setTestingPercentage} makeFetch={makeModelFetch} loading={loading}/>
    </div>);
}

