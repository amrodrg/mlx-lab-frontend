import React, {useEffect, useState} from 'react';
import EvaluationHeader from '../components/EvaluationSectionComponents/EvaluationHeader';
import RegressionEvaluationSection from '../pages-sections/RegressionEvaluationSection';
import {useSelector} from 'react-redux';
import {getSavedValue} from '@/hooks/useLocalStorage';
import ClassificationEvaluationSection from '../pages-sections/ClassificationEvaluationSection';

const initialEvaluationValues = {
  loss: 0,
  mae : 0,
  accuracy: 0,
  median: 0,
  mean: 0,
  isBinary: false,
  truePositives: 0,
  trueNegatives: 0,
  falsePositives: 0,
  falseNegatives: 0,
};


export default function ClassificationEvaluationPage() {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const {modelName} = useSelector((state) => state);

  const [evaluationValues, setEvaluationValues] = useState(initialEvaluationValues);

  const getValues = async () => {
    const dataLink = getSavedValue('DataLink', '');
    const labelsColumnName = getSavedValue('LabelsColumnName', '');
    const testPercentage = getSavedValue('TestPercentage', 20);
    const doNormalize = getSavedValue('DoNormalize', false);
    const lossFunc = getSavedValue('LossFunc', 'sparse_categorical_crossentropy');
    return {dataLink, labelsColumnName, testPercentage, doNormalize, lossFunc};
  };

  const makeEvaluationFetch = async (linkValue, labelsColumnName, testPercentage, doNormalize, lossFunc) => {
    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dataLink: linkValue,
        labelsName: labelsColumnName,
        modelName: modelName,
        testingPercentage: testPercentage,
        doNormalize: doNormalize,
        isClassification: true,
        lossFunc: lossFunc
      })
    };
    const evaluationData = await fetch('http://127.0.0.1:8000/evaluate', requestOptions);
    const evaluationJson = await  evaluationData.json();
    return evaluationJson;
  };


  useEffect(() => {
    getValues()
      .then(values => {
        makeEvaluationFetch(values.dataLink, values.labelsColumnName, values.testPercentage, values.doNormalize, values.lossFunc)
          .then(evaluationData => {
            console.log(evaluationData);
            if(values.lossFunc === 'binary_crossentropy'){
              setEvaluationValues(prevState => {
                return {
                  ...prevState,
                  accuracy: evaluationData.accuracy,
                  truePositives: evaluationData.truePositives,
                  trueNegatives: evaluationData.trueNegatives,
                  falsePositives: evaluationData.falsePositives,
                  falseNegatives: evaluationData.falseNegatives,
                  isBinary: evaluationData.isBinary,
                };
              });
            } else {
              setEvaluationValues(prevState => {
                return {
                  ...prevState,
                  loss: evaluationData.mae,
                  mae: evaluationData.mae,
                  accuracy: evaluationData.accuracy,
                  median: evaluationData.median,
                  mean: evaluationData.mean,
                  isBinary: evaluationData.isBinary,
                };
              });
            }
          }
          );
      }
      );
  }, []);


  return(
    <div>
      <EvaluationHeader/>
      <ClassificationEvaluationSection
        loss={evaluationValues.loss}
        mae={evaluationValues.mae}
        accuracy={evaluationValues.accuracy}
        median={evaluationValues.median}
        mean={evaluationValues.mean}
        isBinary={evaluationValues.isBinary}
        truePositives={evaluationValues.truePositives}
        trueNegatives={evaluationValues.trueNegatives}
        falseNegatives={evaluationValues.falseNegatives}
        falsePositives={evaluationValues.falsePositives}
      />
    </div>);
}

