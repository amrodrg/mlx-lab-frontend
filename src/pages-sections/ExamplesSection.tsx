import ExamplesHeader from '../components/ExamplesSectionComponents/ExamplesHeader';
import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';
import {ArrowNarrowUpIcon} from '@heroicons/react/outline';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

export default function ExamplesSection(){
  const classes = useStyles();
    
  return(
    <div className="flex flex-col">
      <ExamplesHeader></ExamplesHeader>
      <img src="/img/Clas_Reg_Example 1.png" className="px-24 py-12"></img>
      <hr className="bg-secondary-blue"/>
      <img src="/img/Clas_Reg2.png" className="px-24 py-12"></img>

      <div className=" bg-secondary-blue text-white border-2 border-main-blue mx-48 mt-16 text-xl font-bold p-3 rounded-2xl">
        <text>
            The task of classification is, given a new data point, does it belong to class blue or class red? Its output is a discrete value.
            For regression, it tries to predict a continuous value. That's why there is only one color.
        </text>
      </div>

      <img src="/img/reg_class3.png" className="px-24 py-12"></img>

      <button
        type="button"
        className="h-20 w-20 rounded-full place-self-center"
      >
        <ArrowNarrowUpIcon className="h-14 w-14 bg-secondary-blue rounded-full text-white p-2 hover:bg-main-blue"/>
      </button>

    </div>
  );
}
