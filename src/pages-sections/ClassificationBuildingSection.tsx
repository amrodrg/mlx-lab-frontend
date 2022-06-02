import React, {Dispatch, FC, SetStateAction, useState} from 'react';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// @material-ui/icons
// core components
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';

import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js';
import ModelBuildBox from '../components/ClassificationBuildBoxComponents/ModelBuildBox';
import {Layer} from '../Interfaces';
import {ToastContainer} from 'react-toastify';
import {ExplainBuilding} from '../components/ExplainModals';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

type Props = {
  layers: Layer[]
  setLayers: Dispatch<SetStateAction<Layer[]>>
  neuronsList: number[]
  setNeuronsList: Dispatch<SetStateAction<number[]>>
  activationList: string[]
  setActivationList: Dispatch<SetStateAction<string[]>>
  predictionClassesNum: number,
  setPredictionClassesNum: Dispatch<SetStateAction<number>>
  automatedClassesNum: boolean
  setAutomatedClassesNum: Dispatch<SetStateAction<boolean>>
  outputActivation: string
  setOutputActivation: Dispatch<SetStateAction<string>>
}

const ClassificationBuildingSection: FC<Props> = ({layers, setLayers, neuronsList,
  setNeuronsList, activationList, setActivationList, predictionClassesNum, setPredictionClassesNum,
  automatedClassesNum, setAutomatedClassesNum, outputActivation, setOutputActivation
}) => {
  const classes = useStyles();

  const [showExplainBuilding , setShowExplainBuilding] = useState(false);

  return (
    <div className={classes.buildSection}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h1>Build your model</h1>
          <GridContainer>
            <GridItem>
              <h3 className="p-4">
                <small>Start building your model by adding
                  <text className="text-main-blue font-bold"> hidden layers</text>,
                  <text className="text-main-blue font-bold"> hidden units</text> and choosing the
                  <text className="text-main-blue font-bold"> activation function </text>
                  for the neurons of each layer.
                </small>
              </h3>
            </GridItem>
          </GridContainer>
          <div className="py-10 px-8">
            <ModelBuildBox layers={layers} setLayers={setLayers} neuronsList={neuronsList}
              setNeuronsList={setNeuronsList} activationList={activationList} 
              setActivationList={setActivationList} predictionClassesNum={predictionClassesNum}
              setPredictionClassesNum={setPredictionClassesNum} automatedClassesNum={automatedClassesNum}
              setAutomatedClassesNum={setAutomatedClassesNum} outputActivation={outputActivation}
              setOutputActivation={setOutputActivation} setShowExplainBuilding={setShowExplainBuilding}
            />
            <ExplainBuilding showExampleModal={showExplainBuilding} setShowExampleModal={setShowExplainBuilding}/>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassificationBuildingSection;
