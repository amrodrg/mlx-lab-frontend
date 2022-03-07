import React from 'react';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// @material-ui/icons
// core components
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';

import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js';
import ModelCompileBox from '../components/CompileBoxComponents/ModelCompileBox';
import ArrowDown from '../components/Buttons/ArrowDown';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

export default function CompilingSection() {
  const classes = useStyles();
  return (
    <div className={classes.compileSection}>
      <div className={classes.container}>
        <div id="nav-tabs" className="flex flex-col">
          <h1>Compile your model</h1>
          <GridContainer>
            <GridItem>
              <h3 className="p-4">
                <small>Compile your model bei choosing the,
                  <text className="text-main-blue font-bold"> loss function</text>, the
                  <text className="text-main-blue font-bold"> optimizer</text>, and the
                  <text className="text-main-blue font-bold"> metrics </text>
                  for evaluating the model training.
                </small>
              </h3>
            </GridItem>
          </GridContainer>
          <div className="py-10 px-8">
            <ModelCompileBox/>
          </div>
          <ArrowDown/>
        </div>
      </div>
    </div>
  );
}
