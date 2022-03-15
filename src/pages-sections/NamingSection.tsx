import React, {FC} from 'react';
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

type Props = {
  setName?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const NamingSection: FC<Props> = ({setName}) => {
  const classes = useStyles();

  return (
    <div className={classes.nameSection}>
      <div className={classes.container}>
        <div className="flex flex-col">
          <h1 className="text-center text-white">Give a name to your model</h1>
          <h3 className="m-10 mb-2">
            <small className="text-white">Your model will be saved in your account or local on pc under the entered name:</small>
          </h3>
          <div className="flex flex-row items-center w-full m-5">
            <NameInputBox setName={setName}/>
            <button
              type="button"
              className="items-center inline-flex w-64 h-12 p-2.5 justify-content-center border border-transparent rounded-full shadow-sm text-main-blue font-bold bg-white hover:bg-primary-purple"
            >
              Enter
            </button>
          </div>
          <button
            type="button"
            className="h-16 w-16 rounded-full bg-transparent place-self-center"
          >
            <ArrowNarrowDownIcon className="h-10 w-10 bg-white rounded-full text-main-blue p-1"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NamingSection;
