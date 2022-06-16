import React, {FC} from 'react';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// @material-ui/icons
// core components
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';

import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js';
import Link from 'next/link';
import ClassificationEvaluationStats from '../components/EvaluationSectionComponents/ClassificationEvaluationStats';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

type Props = {
    loss?: number
    mae?: number
    accuracy?: number
    median?: number
    mean?: number
    isBinary?: boolean
    truePositives?: number
    trueNegatives?: number
    falsePositives?: number
    falseNegatives?: number
}

const ClassificationEvaluationSection: FC<Props> = ({loss, mae, accuracy, median, mean,
  isBinary, truePositives, trueNegatives, falseNegatives, falsePositives}) => {

  const classes = useStyles();
  return (
    <div className={classes.dataSection}>
      <div className={classes.secondContainer}>
        <div id="nav-tabs">
          <h1>Model Evaluation Values</h1>
          <GridContainer>
            <GridItem>
              <h5 className="p-4 mr-20">
                  The following numbers show the performance and accuracy of your model.
              </h5>
            </GridItem>
          </GridContainer>


          <div className="flex flex-col">

            <ClassificationEvaluationStats loss={loss} mae={mae} accuracy={accuracy} median={median} mean={mean}
              isBinary={isBinary}
              truePositives={truePositives}
              trueNegatives={trueNegatives}
              falseNegatives={falseNegatives}
              falsePositives={falsePositives}/>


          </div>


        </div>
      </div>

      <div className="flex flex-row justify-around p-5">
        <Link href="/classification-prediction-page"><button className="bg-primary-purple hover:ring-4 hover:ring-white hover:shadow-2xl text-white w-2/5 py-2 rounded-full font-bold text-lg">TRY IT</button></Link>
        <Link href="/classification-page"><button className="bg-main-blue hover:ring-4 hover:ring-white hover:shadow-2xl text-white w-2/5 py-2 rounded-full font-bold text-lg">SAVE TO USE LATER</button></Link>
      </div>
    </div>
  );
};

export default ClassificationEvaluationSection;
