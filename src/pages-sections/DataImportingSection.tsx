import React, {Dispatch, FC, SetStateAction, useState} from 'react';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';

import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js';
import ArrowDown from '../components/Buttons/ArrowDown';
import DataLinkGroup from '../components/DataImportingSectionComponents/DataLinkGroup';
import {FormControlLabel, FormGroup, Switch} from '@mui/material';
import {MaterialUISwitch} from '../components/DataImportingSectionComponents/MaterialUISwitch';
import {padding} from '@mui/system';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

type Props = {
  dataLinkValue: string
  setLink: (event: React.ChangeEvent<HTMLInputElement>) => void
  labelsColumnName: string
  setLabelsColumnName: (event: React.ChangeEvent<HTMLInputElement>) => void
  doNormalize: boolean
  setDoNormalize: Dispatch<SetStateAction<boolean>>
}

const DataImportingSection: FC<Props> = ({dataLinkValue ,setLink, labelsColumnName, setLabelsColumnName, doNormalize, setDoNormalize}) => {

  const classes = useStyles();

  const handleSwitchNormalization = () => {
    setDoNormalize(prevState => !prevState);
  };

  return (
    <div className={classes.dataSection}>
      <div className={classes.secondContainer}>
        <div id="nav-tabs">
          <h1>Upload your training data</h1>
          <GridContainer>
            <GridItem>
              <h5 className="p-4 mr-20">
                In a regression problem, the aim is to predict the output of a continuous value,
                  like a price or a probability. Contrast this with a classification problem,
                  where the aim is to select a class from a list of classes
                  (for example, where a picture contains an apple or an orange, recognizing which fruit is in the picture).
              </h5>
            </GridItem>
          </GridContainer>


          <div className="flex flex-col">

            <DataLinkGroup
              dataLinkValue={dataLinkValue}
              setLink={setLink}
              labelsColumnName={labelsColumnName}
              setLabelsColumnName={setLabelsColumnName}
            />

            <FormGroup>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    value={doNormalize}
                    checked={doNormalize}
                    onChange={() => handleSwitchNormalization()}/>
                }
                label={<p className="text-lg text-primary-purple"> Data Normalization</p>} />
            </FormGroup>

            <ArrowDown/>

          </div>

          
        </div>
      </div>
    </div>
  );
};

export default DataImportingSection;
