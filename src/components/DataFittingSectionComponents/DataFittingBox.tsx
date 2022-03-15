import {makeStyles} from '@material-ui/core/styles';
import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle';
import DataBuildTab from './DataBuildTab';
import React, {Dispatch, FC, SetStateAction} from 'react';

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

const DataFittingBox: FC<Props> = ({epochsNum, setEpochsNum, testingPer, setTestingPer, makeFetch, loading}) => {

  const classes = useStyles();

  return(
    <DataBuildTab
      headerColor="main"
      testingPercentage={testingPer}
      setTestingPercentage={setTestingPer}
      epochsNumber={epochsNum}
      setEpochsNumber={setEpochsNum}
      makeFetch={makeFetch}
      loading={loading}
    />
  );
};

export default DataFittingBox;
