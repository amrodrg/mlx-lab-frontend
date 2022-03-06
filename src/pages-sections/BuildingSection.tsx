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
          <div className="py-10">
            <ModelBuildBox/>
          </div>
        </div>
      </div>
    </div>
  );
}
