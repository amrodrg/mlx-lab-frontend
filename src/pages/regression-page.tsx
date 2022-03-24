import BuildindSection from '../pages-sections/BuildingSection';
import NamingSection from '../pages-sections/NamingSection';
import DataImportingSection from '../pages-sections/DataImportingSection';
import CompilingSection from '../pages-sections/CompilingSection';
import DataFittingSection from '../pages-sections/DataFittingSection';
import RegressionHeader from '../components/RegressionHeader';
import React, {useState} from 'react';
import {Layer} from '../Interfaces';
import {toast} from 'react-toastify';


export default function RegressionPage() {

  // The entered data link
  const [linkValue, setLinkValue] = useState('');
  // Data labels row name
  const [labelsRowName, setLabelsRowName] = useState('');
  // The entered Model's name
  const [nameValue, setNameValue] = useState('');
  // The List of Layers
  const [layers, setLayers] = useState<Layer[]>([{layerId:1, neuronsNum:2, activationFun:'ReLu'}]);
  // The list of neuron's numbers for each layer
  const [neuronsList, setNeuronsList] = useState([5]);
  // The list of activation functions for each layer
  const [activationList, setActivationList] = useState(['relu']);
  // The number of epochs
  const [epochsNumber, setEpochsNumber] = useState(100);
  // The testing percentage of data set
  const [testingPercentage, setTestingPercentage] = useState(20);
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
    setNameValue(enteredName);
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
        modelName: nameValue,
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
    }
    else {
      setLoading(true);
      const mlData = await fetch('http://127.0.0.1:8000/', requestOptions);
      const mlModel = await  mlData.json();
      await console.log(mlModel);
      setLoading(false);
    }
  };
    
  return(
    <div>
      <RegressionHeader/>
      <DataImportingSection setLink={linkInputHandler} setLabelsRowName={labelsNameHandler}/>
      <NamingSection setName={nameInputHandler}/>
      <BuildindSection layers={layers} setLayers={setLayers} neuronsList={neuronsList} setNeuronsList={setNeuronsList} activationList={activationList} setActivationList={setActivationList}/>
      <CompilingSection lossFunc={lossFunc} setLosFunc={setLossFunc} optimizer={optimizer} setOptimizer={setOptimizer} metrics={metrics} setMetrics={setMetrics}/>
      <DataFittingSection epochsNum={epochsNumber} setEpochsNum={setEpochsNumber} testingPer={testingPercentage} setTestingPer={setTestingPercentage} makeFetch={makeModelFetch} loading={loading}/>
    </div>);
}

