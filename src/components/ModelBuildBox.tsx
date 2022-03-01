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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

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

interface Layer {
    name:string
    neuronsN:number
    activationF:string
}

export default function ModelBuildBox(){
  const classes = useStyles();

  const [layers, setLayers] = useState<Layer[]>();


  const [modelData, setModelData] = useState<MLModel>();
  const [neuronsData, setNeuronsData] = useState(3);

  // Build Model with a given number of neurons
  const makeFetch = async () => {
    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ neuronsNumber:neuronsData })
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
          tabName: 'Input Layer',
          tabIcon: Face,
          tabContent: (
            <>

              {/*{data && <div>{data.class_name}</div>}*/}

              <div className="flex flex-row">
                <div className="flex my-2 mr-1">
                  <QuestionButton/>
                </div>
                <ButtonLeadingIcon onClick={makeFetch}/>
              </div>

              <HiddenLayer layerNumber={1} setNeuronsNumber={setNeuronsData} neuronsNumber={neuronsData}/>

            </>

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
