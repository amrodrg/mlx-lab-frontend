import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes, {number} from 'prop-types';

// material-ui components
import {makeStyles} from '@material-ui/core/styles';
// core components
import Card from '../Card/Card.js';
import CardBody from '../Card/CardBody.js';
import CardHeader from '../Card/CardHeader.js';

import styles from '../../styles/jss/nextjs-material-kit/components/buildTabStyle.js';
import {MinusSmIcon, PlusSmIcon as PlusSmIconSolid} from '@heroicons/react/solid';
import QuestionButtonWhite from '../Buttons/QuestionButtonWhite';
import QuestionButtonBlue from '../Buttons/QuestionButtonBlue';

const useStyles = makeStyles(styles);

export default function DataBuildTab(props) {

  const classes = useStyles();
  const { headerColor, plainTabs, title, rtlActive } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive,
  });

  function decreaseEpochs() {
    props.setEpochsNumber(prev => {
      if (prev>10)
        prev -= 10;
      return prev;
    });
  }

  function increaseEpochs() {
    props.setEpochsNumber(prev => prev + 10);
  }

  function decreaseTestingPer() {
    props.setTestingPercentage(prev => {
      if (prev>1)
        prev -= 1;
      return prev;
    });
  }

  function increaseTestingPer() {
    props.setTestingPercentage(prev => {
      if (prev<99)
        prev += 1;
      return prev;
    });
  }

  return (


    <Card className=" w-96">

      <div className="px-4">
        <CardHeader color={headerColor} plain={plainTabs}>
          {title !== undefined ? <div className={cardTitle}>{title}</div> : null}

          <div className="flex flex-col justify-between flex-auto w-100 my-4">

            <div className="flex flex-row justify-center items-center space-x-2 flex-auto w-auto mb-10">
              <QuestionButtonWhite/>
              <text className="text-lg font-bold">Choose the number of epochs:</text>
            </div>

            <div className="flex flex-row justify-center items-center justify-items-center flex-auto w-auto">
              <div>
                <button
                  onClick={decreaseEpochs}
                  type="button"
                  className="inline-flex items-center p-2.5 hover:border-2 rounded-full shadow-sm text-main-blue bg-white"
                >
                  <MinusSmIcon className="h-7 w-7" aria-hidden="true" />
                </button>
              </div>


              <div className="flex w-auto mx-3">
                <h5 className="text-3xl text-main-blue bg-white border-solid border-3 border-secondary-blue px-3 py-1 rounded-2xl">{props.epochsNumber}</h5>
              </div>


              <div>
                <button
                  onClick={increaseEpochs}
                  type="button"
                  className="inline-flex items-center p-2.5 hover:border-2 rounded-full shadow-sm text-main-blue bg-white"
                >
                  <PlusSmIconSolid className="h-7 w-7" aria-hidden="true" />
                </button>
              </div>
            </div>

          </div>

        </CardHeader>
      </div>


      <CardBody>

        <div className="flex flex-col p-10 justify-between space-y-24">


          <div className="flex flex-row justify-center space-x-32">


            <div className="flex flex-col items-center">

              <div className="flex flex-row space-x-1 my-4">
                <div className=" text-lg text-main-blue font-semibold text-gray-600 shadow-md px-2 mb-4 shadow-gray-300 rounded-md">
                  Training dataset
                </div>

                <QuestionButtonBlue/>

              </div>

              <button
                onClick={decreaseTestingPer}
                type="button"
                className="inline-flex items-center p-2.5 hover:bg-secondary-purple rounded-full shadow-sm text-white bg-main-blue"
              >
                <PlusSmIconSolid className="h-7 w-7" aria-hidden="true" />
              </button>


              <div className="flex w-auto mb-4 mt-8">
                <h5 className="text-3xl text-main-blue bg-white border-solid border-3 border-secondary-blue px-5 py-3 rounded-full">{100 - props.testingPercentage}%</h5>
              </div>



              <button
                onClick={increaseTestingPer}
                type="button"
                className="inline-flex items-center p-2.5 hover:bg-secondary-purple rounded-full shadow-sm text-white bg-main-blue"
              >
                <MinusSmIcon className="h-7 w-7" aria-hidden="true" />
              </button>

            </div>


            <div className="flex flex-col items-center">

              <div className="flex flex-row space-x-1 my-4">

                <div className=" text-lg text-primary-purple font-semibold text-gray-600 shadow-md px-2 mb-4 shadow-gray-300 rounded-md">
                  Testing dataset
                </div>

                <QuestionButtonBlue/>

              </div>

              <button
                onClick={increaseTestingPer}
                type="button"
                className="inline-flex items-center p-2.5 hover:bg-secondary-purple rounded-full shadow-sm text-white bg-primary-purple"
              >
                <PlusSmIconSolid className="h-7 w-7" aria-hidden="true" />
              </button>



              <div className="flex w-auto mb-4 mt-8">
                <h5 className="text-3xl text-primary-purple bg-white border-solid border-3 border-primary-purple px-5 py-3 rounded-full">{props.testingPercentage}%</h5>
              </div>



              <button
                onClick={decreaseTestingPer}
                type="button"
                className="inline-flex items-center p-2.5 hover:bg-secondary-purple rounded-full shadow-sm text-white bg-primary-purple"
              >
                <MinusSmIcon className="h-7 w-7" aria-hidden="true" />
              </button>
            </div>


          </div>


          <button className="text-4xl font-medium text-secondary-purple hover:border-2 border-secondary-purple rounded-full">Fit</button>


        </div>
        
        
      </CardBody>
    </Card>
  );
}



DataBuildTab.propTypes = {
  headerColor: PropTypes.oneOf([
    'warning',
    'success',
    'danger',
    'info',
    'primary',
    'rose',
    'main',
  ]),
  title: PropTypes.string,
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool,
  testingPercentage: number,
  setTestingPercentage: PropTypes.func,
  epochsNumber:number,
  setEpochsNumber: PropTypes.func

};
