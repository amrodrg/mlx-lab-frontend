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

export default function BuildingSection() {
  const classes = useStyles();
  return (
    <div className={classes.buildSection}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Build your model</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={7}>
              <h3>
                <small>Start building your model by adding hidden layers, hidden units and choosing the activation function for the neurons of each layer.</small>
              </h3>
            </GridItem>
          </GridContainer>
          <div className="py-10">
            <ModelBuildBox/>
          </div>
        </div>
      </div>
    </div>
  );
}
