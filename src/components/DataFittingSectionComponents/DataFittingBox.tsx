import {makeStyles} from '@material-ui/core/styles';
import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle';
import DataBuildTab from './DataBuildTab';
import React, {FC, useState} from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

type Props = {
    trainingPercentage?: number
    testingPercentage?: number
}

const DataFittingBox: FC<Props> = () => {

  const [epochsNumber, setEpochsNumber] = useState(100);

  const [testingPercentage, setTestingPercentage] = useState(20);

  const classes = useStyles();

  return(
    <DataBuildTab
      headerColor="main"
      testingPercentage={testingPercentage}
      setTestingPercentage={setTestingPercentage}
      epochsNumber={epochsNumber}
      setEpochsNumber={setEpochsNumber}
    />
  );
};

export default DataFittingBox;
