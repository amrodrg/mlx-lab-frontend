import React from 'react';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// @material-ui/icons
import Face from '@material-ui/icons/Face';
import Chat from '@material-ui/icons/Chat';
import Build from '@material-ui/icons/Build';
// core components
import styles from '../../../styles/jss/nextjs-material-kit/pages/componentsSections/mainShapStyle.js';

const useStyles = makeStyles(styles);

export default function SectionBuild() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>



          hello World



      </div>
    </div>
  );
}