import {makeStyles} from '@material-ui/core/styles';
import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle';
import Face from '@material-ui/icons/Face';
import InputIcon from '@mui/icons-material/Input';
import OutputIcon from '@mui/icons-material/Output';
import LayersIcon from '@mui/icons-material/Layers';
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
          tabIcon: LayersIcon,
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
          tabIcon: InputIcon,
          tabContent: (
            <div className="flex flex-row">
              <div className="flex mr-1.5">
                <QuestionButton/>
              </div>
              <p className={classes.textCenterBold}>
                      The input layer has the same shape of your data
                      (same number for neurals and features)
                      so you don’t have to change anything in it.
              </p>
            </div>
          ),
        },
        {
          tabName: 'Output Layer',
          tabIcon: OutputIcon,
          tabContent: (
            <div className="flex flex-row">
              <div className="flex mr-1.5">
                <QuestionButton/>
              </div>
              <p className={classes.textCenterBold}>
                      Regression has only one neural in the output layer.
              </p>
            </div>
          ),
        },
      ]}
    />
  );
};

export default ModelBuildBox;
