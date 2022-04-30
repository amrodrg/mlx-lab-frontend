import React, {useEffect, useState} from 'react';
import EvaluationHeader from '../components/EvaluationSectionComponents/EvaluationHeader';
import EvaluationSection from '../pages-sections/EvaluationSection';
import {useSelector} from 'react-redux';
import {getSavedValue} from '@/hooks/useLocalStorage';

const initialEvaluationValues = {
  loss: 0,
  mae : 0,
  accuracy: 0,
  median: 0,
  mean: 0
};


export default function EvaluationPage() {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const {modelName} = useSelector((state) => state);

  const [evaluationValues, setEvaluationValues] = useState(initialEvaluationValues);

  const getValues = async () => {
    const dataLink = getSavedValue('DataLink', '');
    const labelsColumnName = getSavedValue('LabelsColumnName', '');
    const testPercentage = getSavedValue('TestPercentage', 20);
    return {dataLink, labelsColumnName, testPercentage};
  };

  const makeEvaluationFetch = async (linkValue, labelsColumnName, testPercentage) => {
    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dataLink: linkValue,
        labelsName: labelsColumnName,
        modelName: modelName,
        testingPercentage: testPercentage,
      })
    };
    const evaluationData = await fetch('http://127.0.0.1:8000/evaluate', requestOptions);
    const evaluationJson = await  evaluationData.json();
    return evaluationJson;
  };


  useEffect(() => {
    getValues()
      .then(values => {
        makeEvaluationFetch(values.dataLink, values.labelsColumnName, values.testPercentage)
          .then(evaluationData => {
            console.log(evaluationData);
            setEvaluationValues({
              loss: evaluationData.loss,
              mae: evaluationData.loss,
              accuracy: evaluationData.accuracy,
              median: evaluationData.median,
              mean: evaluationData.mean
            });
          }
          );
      }
      );
  }, []);


  return(
    <div>
      <EvaluationHeader/>
      <EvaluationSection
        loss={evaluationValues.loss}
        mae={evaluationValues.mae}
        accuracy={evaluationValues.accuracy}
        median={evaluationValues.median}
        mean={evaluationValues.mean}
      />
    </div>);
}

