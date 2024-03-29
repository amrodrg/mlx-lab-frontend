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
  modelName: string
  setName?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const NamingSection: FC<Props> = ({modelName, setName}) => {
  const classes = useStyles();

  return (
    <div className={classes.nameSection}>
      <div className={classes.container}>
        <div className="flex flex-col">
          <h1 className="text-center text-white">Give a name to your model</h1>
          <h3 className="m-10 mb-2">
            <small className="text-white">Your model will be saved in your account or locally on your pc under the entered name:</small>
          </h3>
          <div className="flex flex-row items-center w-full m-5">
            <NameInputBox modelName={modelName} setName={setName}/>
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
