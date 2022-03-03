import React from 'react';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// @material-ui/icons
// core components
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';

import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js';
import NameInputBox from '../components/NamingSectionComponents/NameInputBox';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

export default function NamingSection() {
  const classes = useStyles();

  return (
    <div className={classes.nameSection}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Give a name to your model</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={7}>
              <h3>
                <small>Your Model will be saved in your account or local on pc under the entered name:</small>
              </h3>
            </GridItem>
          </GridContainer>
          <NameInputBox/>
        </div>
      </div>
    </div>
  );
}
