import React from 'react';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// @material-ui/icons
// core components
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';

import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js';
import ModelBuildBox from '../components/ModelBuildBox';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

export default function SectionBuild() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Build your model</h3>
          <GridContainer>
            <GridItem>
              <h3>
                <small>Start building your model by adding hidden layers, hidden units and choosing the activation function for the neurons of each layer.</small>
              </h3>
            </GridItem>
          </GridContainer>
          <ModelBuildBox></ModelBuildBox>
        </div>
      </div>
    </div>
  );
}
