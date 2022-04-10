import React, {FC} from 'react';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// @material-ui/icons
// core components
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';

import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js';
import EvaluationStats from '../components/EvaluationSectionComponents/EvaluationStats';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

type Props = {
    loss?: number
    mae?: number
    accuracy?: number
}

const EvaluationSection: FC<Props> = ({loss, mae, accuracy}) => {

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

            <EvaluationStats loss={loss} mae={mae} accuracy={accuracy}/>


          </div>


        </div>
      </div>

      <div className="flex flex-row justify-around p-5">
        <Link href="/regression-page"><button className="bg-primary-purple hover:ring-4 hover:ring-white hover:shadow-2xl text-white w-2/5 py-2 rounded-full font-bold text-lg">TRY IT</button></Link>
        <Link href="/regression-page"><button className="bg-main-blue hover:ring-4 hover:ring-white hover:shadow-2xl text-white w-2/5 py-2 rounded-full font-bold text-lg">SAVE TO USE LATER</button></Link>
      </div>
    </div>
  );
};

export default EvaluationSection;
