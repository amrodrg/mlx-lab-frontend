import React, {Dispatch, FC, SetStateAction} from 'react';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// @material-ui/icons
// core components
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';

import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js';
import DataFittingBox from '../components/DataFittingSectionComponents/DataFittingBox';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

type Props = {
  epochsNum: number
  setEpochsNum: Dispatch<SetStateAction<number>>
  testingPer: number
  setTestingPer: Dispatch<SetStateAction<number>>
  makeFetch: () => void
  loading: boolean
}

const DataFittingSection: FC<Props> = ({epochsNum, setEpochsNum, testingPer, setTestingPer, makeFetch, loading}) => {
  const classes = useStyles();
  return (
    <div className={classes.dataFit}>
      <div className={classes.secondContainer}>
        <div id="nav-tabs">
          <h1>Fit your data</h1>
          <GridContainer>
            <GridItem>
              <h3 className="p-4">
                <small>Split your
                  <text className="text-main-blue font-bold"> Data </text> into a
                  <text className="text-main-blue font-bold"> training set </text>to train your model on, and a
                  <text className="text-main-blue font-bold"> testing set </text>
                  to measure the accuracy of your model on it later.
                </small>
              </h3>
            </GridItem>
          </GridContainer>
          <div className="py-10 px-52">
            <DataFittingBox epochsNum={epochsNum} setEpochsNum={setEpochsNum} testingPer={testingPer} setTestingPer={setTestingPer} makeFetch={makeFetch} loading={loading}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataFittingSection;
