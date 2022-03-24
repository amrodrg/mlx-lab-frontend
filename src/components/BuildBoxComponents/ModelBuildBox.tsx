import {makeStyles} from '@material-ui/core/styles';
import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle';
import Face from '@material-ui/icons/Face';
import Chat from '@material-ui/icons/Chat';
import Build from '@material-ui/icons/Build';
import BuildTab from './BuildTab';
import React, {Dispatch, FC, SetStateAction} from 'react';
import ButtonLeadingIcon from '../Buttons/ButtonLeadingIcon';
import HiddenLayer from './HiddenLayer';
import QuestionButton from '../Buttons/QuestionButton';
import {MinusSmIcon} from '@heroicons/react/solid';
import {Layer} from '../../Interfaces';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

type Props = {
    layers: Layer[]
    setLayers: Dispatch<SetStateAction<Layer[]>>
    neuronsList: number[]
    setNeuronsList: Dispatch<SetStateAction<number[]>>
    activationList: string[]
    setActivationList: Dispatch<SetStateAction<string[]>>
}

const ModelBuildBox: FC<Props> = ({layers, setLayers, neuronsList, setNeuronsList, activationList, setActivationList}) => {
  const classes = useStyles();


  // Add a new Layer
  const addLayer = (layerId, neuronsNumber, activationFunction) => {
    setActivationList(prevState => [...prevState, activationFunction]);
    setNeuronsList(prevState => [...prevState, neuronsNumber]);
    setLayers(prevState => [...prevState, {layerId:layerId, neuronsNum:neuronsNumber, activationFun:activationFunction}]);
  };

  // Remove the last Layer
  const removeLastLayer = () => {
    setLayers(prevState => [...prevState.slice(0, -1)]);
    setNeuronsList(prevState => [...prevState.slice(0, -1)]);
    setActivationList(prevState => [...prevState.slice(0, -1)]);
  };



  return(
    <BuildTab
      headerColor="main"
      tabs={[

        {
          tabName: 'Hidden Layers',
          tabIcon: Face,
          tabContent: (
            <>

              {/*{data && <div>{data.class_name}</div>}*/}

              <div className="flex flex-row">
                <div className="flex my-2 mr-1">
                  <QuestionButton/>
                </div>
                <ButtonLeadingIcon onClick={()=> addLayer(layers.length+1, 1, 'relu')}/>
              </div>

              {layers.map(layer => {
                return (
                  <HiddenLayer key={layer.layerId}
                    layerNumber={layer.layerId}
                    setNeuronsNumber={setNeuronsList}
                    neuronsNumber={neuronsList[layer.layerId-1]}
                    activationFunction={activationList[layer.layerId-1]}
                    setActivationList={setActivationList}
                  />);
              })}

              <div className="flex flex-row-reverse justify-content-between">
                <button
                  onClick={removeLastLayer}
                  type="button"
                  className="inline-flex w-16 p-2.5 items-center, justify-content-center border border-transparent rounded-full shadow-sm text-white bg-main-blue hover:bg-primary-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-purple"
                >
                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                </button>

              </div>

            </>

          ),
        },







        {
          tabName: 'Input Layer',
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
};

export default ModelBuildBox;
