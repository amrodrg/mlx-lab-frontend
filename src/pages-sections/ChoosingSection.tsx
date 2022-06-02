import React, {useState} from 'react';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// @material-ui/icons
// core components
import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js';
import ArrowDown from '../components/Buttons/ArrowDown';
import ChoosingBox from '../components/ChoosingSectionCompenents/ChoosingBox';
import {ExplainClassification, ExplainModalDataLink, ExplainRegression} from '../components/ExplainModals';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

export default function ChoosingSection() {
  const classes = useStyles();

  const [showExplainRegression , setShowExplainRegression] = useState(false);
  const [showExplainClassification , setShowExplainClassification] = useState(false);

  return (
    <div className={classes.chooseSection}>
      <div className={classes.container}>
        <div className="flex flex-col">
          <h1 className="text-center font-black">Choose a modeltype</h1>
          <div className="flex flex-col items-center mb-10">
            <h5 className="mx-8 mt-10 text-gray-600 text-center">
                    In a regression problem, the aim is to predict the output of a continuous value,
                    like a price or a probability. Contrast this with a classification problem,
                    where the aim is to select a class from a list of classes (for example,
                    where a picture contains an apple or an orange, recognizing
                    which fruit is in the picture).
            </h5>
            <div>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 1480,
                    behavior: 'smooth',
                  });
                }}
                className="my-1">
                <h5 className="text-main-blue font-normal hover:font-black">
                        See examples ↓
                </h5>
              </button>
            </div>
          </div>


          <div className="flex flex-row justify-between my-5 mx-12">

            <ChoosingBox modelType={'Regression'} pageLink={'/regression-page'} setShowExplain={setShowExplainRegression}/>
            <ChoosingBox modelType={'Classification'} pageLink={'/classification-page'} setShowExplain={setShowExplainClassification}/>

          </div>


          <ArrowDown/>
        </div>
      </div>

      <ExplainRegression showExampleModal={showExplainRegression} setShowExampleModal={setShowExplainRegression}/>
      <ExplainClassification showExampleModal={showExplainClassification} setShowExampleModal={setShowExplainClassification}/>
    </div>
  );
}
