import {makeStyles} from '@material-ui/core/styles';
import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle';
import Face from '@material-ui/icons/Face';
import Chat from '@material-ui/icons/Chat';
import Build from '@material-ui/icons/Build';
import BuildTab from './BuildTab';
import React, {useState} from 'react';
import ButtonLeadingIcon from './Buttons/ButtonLeadingIcon';
import HiddenLayer from './BuildBoxComponents/HiddenLayer';
import QuestionButton from './Buttons/QuestionButton';
import {List} from 'postcss/lib/list';
import {MinusSmIcon} from '@heroicons/react/solid';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

// Incoming Data Types
interface LayerConfig {
    batch_input_shape?:List
    dtype?:number
    sparse?:boolean
    ragged?:boolean
    name?:string
}

interface MLayer {
    class_name?:string
    config?:LayerConfig
}

interface MConfig {
    name?:string
    layers: MLayer[]
}

interface MLModel{
    class_name?: string
    config?: MConfig
}

// Outgoing Data Types
interface Layer {
    layerId:number
    neuronsNum:number
    activationFun:string
}

export default function ModelBuildBox(){
  const classes = useStyles();

  // State variable to translate the incoming Json
  const [modelData, setModelData] = useState<MLModel>();

  // The List of Layers
  const [layers, setLayers] = useState<Layer[]>([{layerId:1, neuronsNum:2, activationFun:'ReLu'}]);

  // The list of neuron's numbers for each layer
  const [neuronsList, setNeuronsList] = useState([5]);

  // Add a new Layer
  const addLayer = (layerId, neuronsNumber, activationFunction) => {
    setNeuronsList(prevState => [...prevState, neuronsNumber]);
    setLayers(prevState => [...prevState, {layerId:layerId, neuronsNum:neuronsNumber, activationFun:activationFunction}]);
  };

  // Remove the last Layer
  const removeLastLayer = () => {
    setLayers(prevState => [...prevState.slice(0, -1)]);
  };

  // Build Model with a given list of numbers of neurons for each layer
  const makeFetch = async () => {
    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ neuronsNumber:neuronsList, layersNumber:layers.length })
    };
      
    const mlData = await fetch('http://127.0.0.1:8000/', requestOptions);
    const mlModel = await  mlData.json();
    await setModelData(mlModel);
    await console.log(mlModel);
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
                <ButtonLeadingIcon onClick={()=> addLayer(layers.length+1, 1, 'ReLu')}/>
              </div>

              {layers.map(layer => {
                return (<HiddenLayer key={layer.layerId} layerNumber={layer.layerId} setNeuronsNumber={setNeuronsList} neuronsNumber={neuronsList[layer.layerId-1]}/>);
              })}

              <div className="flex flex-row-reverse justify-content-between">
                <button
                  onClick={removeLastLayer}
                  type="button"
                  className="inline-flex w-16 p-2.5 items-center, justify-content-center border border-transparent rounded-full shadow-sm text-white bg-main-blue hover:bg-primary-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-purple"
                >
                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                </button>

                <button
                  onClick={makeFetch}
                  type="button"
                  className="inline-flex w-20 p-2.5 items-center, justify-content-center border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-primary-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-purple"
                >
                  Fetch
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
}
