import {makeStyles} from '@material-ui/core/styles';
import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle';
import Face from '@material-ui/icons/Face';
import Chat from '@material-ui/icons/Chat';
import Build from '@material-ui/icons/Build';
import BuildTab from './BuildTab';
import React, {Fragment} from 'react';
import ButtonLeadingIcon from './Buttons/ButtonLeadingIcon';
import HiddenLayer from './BuildBoxComponents/HiddenLayer';
import {QuestionMarkCircleIcon} from '@heroicons/react/solid';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

export default function ModelBuildBox(){
  const classes = useStyles();
  return(
    <BuildTab
      headerColor="main"
      tabs={[
        {
          tabName: 'Input Layer',
          tabIcon: Face,
          tabContent: (
            <Fragment>
              <div className="flex flex-row">
                <button
                  type="button"
                  className="flex h-7 w-7 justify-content-center items-center my-2 mr-1 border border-transparent rounded-full shadow-sm text-white bg-secondary-blue hover:bg-primary-purple focus:outline-nonefocus:ring-offset-2 focus:ring-primary-purple"
                >
                  <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <ButtonLeadingIcon></ButtonLeadingIcon>
              </div>
              <HiddenLayer number={1}></HiddenLayer>
            </Fragment>

          ),
        },
        {
          tabName: 'Hidden Layers',
          tabIcon: Chat,
          tabContent: (
            <p className={classes.textCenter}>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that
                    things could be at. I will be the leader of a company
                    that ends up being worth billions of dollars, because I
                    got the answers. I understand culture. I am the nucleus.
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that
                    things could be at.
            </p>
          ),
        },
        {
          tabName: 'Output Layer',
          tabIcon: Build,
          tabContent: (
            <p className={classes.textCenter}>
                    think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that
                    things could be at. So when you get something that has
                    the name Kanye West on it, it’s supposed to be pushing
                    the furthest possibilities. I will be the leader of a
                    company that ends up being worth billions of dollars,
                    because I got the answers. I understand culture. I am
                    the nucleus.
            </p>
          ),
        },
      ]}
    />
  );
}
