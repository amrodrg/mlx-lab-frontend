import React from 'react';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// @material-ui/icons
// core components
import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js';
import NameInputBox from '../components/NamingSectionComponents/NameInputBox';
import {ArrowNarrowDownIcon} from '@heroicons/react/outline';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

export default function NamingSection() {
  const classes = useStyles();

  return (
    <div className={classes.nameSection}>
      <div className={classes.container}>
        <div className="flex flex-col">
          <h3 className="text-center">Give a name to your model</h3>
          <h3 className="m-10 mb-5">
            <small>Your model will be saved in your account or local on pc under the entered name:</small>
          </h3>
          <div className="flex flex-row items-center m-5">
            <NameInputBox/>
            <button
              type="button"
              className="items-center inline-flex w-64 h-12 p-2.5 items-center, justify-content-center border border-transparent rounded-full shadow-sm text-white bg-main-blue hover:bg-primary-purple"
            >
              Enter
            </button>
          </div>
          <button
            type="button"
            className="h-16 w-16 rounded-full bg-transparent place-self-center"
          >
            <ArrowNarrowDownIcon className="h-10 w-10 bg-white rounded-full text-main-blue"/>
          </button>
        </div>
      </div>
    </div>
  );
}
