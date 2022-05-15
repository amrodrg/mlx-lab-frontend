import * as React from 'react'
import {useEffect, useState } from 'react'
import { Container, Row, Col } from "reactstrap"
import styles from '../../styles/Home.module.css'
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import NumericInput from 'react-numeric-input'
import useLocalStorage from '@/hooks/useLocalStorage';
import {toast, ToastContainer} from 'react-toastify';
import * as Icon from 'react-bootstrap-icons'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {getSavedValue} from '@/hooks/useLocalStorage'
import Card from 'react-bootstrap/Card'
import {useRouter} from 'next/router';
import Spinner from 'react-bootstrap/Spinner'
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from 'react-redux';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {bindActionCreators} from 'redux';
import {ModelNameActionCreator} from  '../../redux/index';

interface IFeatures {
    featuresData:{name:string}[];
}

export default function ConfigureExplainer () {

    const router = useRouter();

    // Action Creators of Redux
    const dispatch = useDispatch();
    const modelNameAC = bindActionCreators(ModelNameActionCreator, dispatch);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {modelName} = useSelector((state) => state);

    const updateModelInformation = async (modelName) => {

        const requestArgs = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                modelName: modelName
            })
        };

        const modelInformation = await fetch('http://127.0.0.1:8000/shap/model_information', requestArgs);
        const modelInformationJs = await  modelInformation.json();

        setModelInformation({
            modelName: modelInformationJs.modelName,
            lastModified: modelInformationJs.lastModified,
            featuresString: modelInformationJs.modelFeaturesString,
            labelName: modelInformationJs.labelName,
            dataLink: modelInformationJs.dataLink,
            loss: modelInformationJs.loss,
            accuracy: modelInformationJs.accuracy,
            median: modelInformationJs.median,
            mean: modelInformationJs.mean
        });

        setFeatureArray(modelInformationJs.featureArray);
        setModelList(modelInformationJs.modelList)
    }

    const getModelInformation = async () => {
        const requestArgs = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                modelName: modelName
            })
        };

        const modelInformation = await fetch('http://127.0.0.1:8000/shap/model_information', requestArgs);
        const modelInformationJs = await  modelInformation.json();
        return modelInformationJs;
    }
  
    useEffect(
        () => {
        getModelInformation()
            .then(modelInformation => {

              setModelInformation({
                  modelName: modelInformation.modelName,
                  lastModified: modelInformation.lastModified,
                  featuresString: modelInformation.modelFeaturesString,
                  labelName: modelInformation.labelName,
                  dataLink: modelInformation.dataLink,
                  loss: modelInformation.loss,
                  accuracy: modelInformation.accuracy,
                  median: modelInformation.median,
                  mean: modelInformation.mean
              });
              setFeatureArray(modelInformation.featureArray);
              setModelList(modelInformation.modelList);
              setSummaryExist(modelInformation.summaryExist);
            }
          );
    }, []);
    
    const exampleList = [
        { key: "1", value: "New instance" },
        { key: "2", value: "Import Google Drive CSV file"}
      ];

    const initModelInfo = {
        modelName: "",
        lastModified: "",
        featuresString: "",
        labelName: "",
        dataLink: "",
        loss: "",
        accuracy: "",
        median: "",
        mean: ""
    }

    // amount of background examples
    const [backgroundValue, setBackgroundValue] = useLocalStorage('backgroundValue', "20");
         
    // choose an example (instance)
    const [selectedExample, setExampleState] = useLocalStorage('example', "2");
        
    // modal
    const [showTestdataModal, setShowTestdataModal] = useState(false);
        
    // model Inforamtion box
    const [modelInformation, setModelInformation] = useState(initModelInfo);
    // feature Array
    const [featureArray, setFeatureArray] = useState([]);
    // modell array 
    const [modelList, setModelList] = useState([]);

    // feature Example Array
    const [featureExampleArray] = useState({});

    const [loading, setLoading] = useState(false);

    const [summaryExist, setSummaryExist] = useState(true);
    const [calculateSummary, setCalculateSummary] = useState(false);

    const [shapValues, setShapValues] = useLocalStorage('shapValues', []);

    const [predictionDataLink, setPredictionDataLink] = useState('');

    const handleExampleValues = event => {
        featureExampleArray[event.target.id] = event.target.value;
    }

    const linkInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredLink = event.target.value;
        setPredictionDataLink(enteredLink);
    };

    const modelNameInputHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const enterdName = event.target.value;
        modelNameAC.enterModelName(enterdName);
        updateModelInformation(enterdName);
    } 

    const NewExample = (props: IFeatures) => {
        if (featureArray.length === 0) {
            return (
                <div></div>
            );
        }

        return (
            <div>
                <InputGroup size="sm">
                    {props.featuresData.map(prop => (
                        <div>
                            <InputGroup.Text id="inputGroup-sizing-sm">{prop.name}</InputGroup.Text>
                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                         value={featureExampleArray[prop.name]} 
                                         id={prop.name}
                                         onChange={handleExampleValues}/>
                        </div>
                    ))}
                </InputGroup>
            </div>
        );
    }

    function ImportCSV() {
        if (featureArray.length === 0) {
            return (
                <div></div>
            );
        }

        return (
            <div>
                <input
                    value={predictionDataLink}
                    onChange={linkInputHandler}
                    className="form-control"
                    placeholder="link.csv"
                    aria-describedby="name-description"
                />
            </div>
        );
    }

    function myBackgroundInputFormat(num) {
        return num + '%';
    }

    function ExampleComponent(props) {
        const instance = props.example;
        if (instance === "1") {
            return <NewExample featuresData={props.features}/>
        } else if (instance === "2") {
            return <ImportCSV/>
        }
    }

    function SummaryCheckComponent(props) {
        const exist = props.exist;

        if (exist === false) {
            return (
                <div>
                    <Row className={styles["shap_row_offset"]}>
                        <Col>
                            <Form.Check
                                type="checkbox"
                                onChange={() => setCalculateSummary(!calculateSummary)}
                                checked={calculateSummary}
                                label="Include Summary Plot"
                            />
                        </Col>
                    </Row>
                </div>
            )
        } else {
            return <div></div>
        }
    }

    function SpinnerComponent(props) {
        const show = props.spinnerStatus
        if (show) {
            return (
                <div className={styles["spinners"]}>
                    <Spinner animation="border" variant="dark" />
                </div>
                );
        } else {
            return <div></div>
        }
    }

    const exlpaineModel = async () => {
        const dataLink = getSavedValue('DataLink', '');
        const labelName = getSavedValue('LabelsColumnName', ''); 

        const requestArgs = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                modelName: modelName,
                dataLink: dataLink,
                labelName: labelName,
                backgroundValue: backgroundValue,
                calculateSummary: calculateSummary,
                example: selectedExample,
                predictionDataLink: predictionDataLink,
                fExampleArray: featureExampleArray
            })
          };

        if (Object.keys(featureExampleArray).length === 0 && selectedExample === '1') {
            toast.error('At least one instance value must be given');
        } else if (predictionDataLink ===  "" && selectedExample === '2') {
            toast.error('Data Link must be given');
        } else {
            setLoading(true);
            const explaindModel = await fetch('http://127.0.0.1:8000/shap/configure', requestArgs);
            const explaindModeljs = await  explaindModel.json()

            setShapValues(explaindModeljs)

            if (explaindModel.status === 200) {
                setLoading(false);
                router.push('/shap/explaination');
            } else {
                toast.error('Explainer could not be build please make sure all your entries are currect');
            }
        }
    }

    return (
        <div>
            <Container className={styles["configure_grid"]}>

                <Row>
                    <Col>
                        <div className={styles['component_title']}> Modell </div>
                    </Col>
                </Row>
                <Row className={styles["shap_row_offset"]}>
                    <Col>
                        <Form.Select className={styles['configure_component_style']}
                                     onChange={modelNameInputHandler} 
                                     value={modelName}>
                            {modelList.map((item) => {
                                return (
                                    <option value={item}>{item}</option>
                                );
                            })}
                        </Form.Select>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className={styles['component_title']}> Modell Inforamtion </div>
                    </Col>
                </Row>
                <Row className={styles["shap_row_offset"]}>
                    <Col>
                        <Card className={styles['explaine_model_info_well']}>
                            <Card.Text> Model Name: {modelInformation.modelName} </Card.Text>
                            <Card.Text> Last Modified: {modelInformation.lastModified} </Card.Text>
                            <Card.Text> Features: {modelInformation.featuresString} </Card.Text>
                            <Card.Text> Label Name: {modelInformation.labelName} </Card.Text>

                            <Card.Text> Data Link: 
                                <a href={modelInformation.dataLink}
                                    target="_blank"
                                    style={{textDecoration: 'none'}}>
                                    Training Data Link
                                </a>
                            </Card.Text>

                            <Card.Text> Loss: {modelInformation.loss} </Card.Text>
                            <Card.Text> Accuracy: {modelInformation.accuracy} </Card.Text>
                            <Card.Text> Median: {modelInformation.median} </Card.Text>
                            <Card.Text> Mean: {modelInformation.mean} </Card.Text>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <div className={styles['component_title']}> Background Examples </div>
                        <Button onClick={() => setShowTestdataModal(true)} variant="none" className={styles['configure_info_icon']}>
                            <Icon.InfoCircleFill/>
                        </Button>
                    </Col>
                </Row>
                <Row className={styles["shap_row_offset"]}>
                    <Col md={6}>
                        <div className={styles['configure_component_style']}>
                            <NumericInput className="form-control"
                                      value={backgroundValue} step={1} max={100} min={10}
                                      onChange={(backgroundValue) => setBackgroundValue(backgroundValue)}
                                      format={myBackgroundInputFormat}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className={styles['component_title']}> Example </div>
                    </Col>
                </Row>
                <Row className={styles["shap_row_offset"]}>
                    <Col>
                        <Form.Select className={styles['configure_component_style']}
                                     onChange={e => {
                                        setExampleState(e.target.value);
                                     }} 
                                     value={selectedExample}>
                            {exampleList.map((item) => {
                                return (
                                    <option value={item.key}>{item.value}</option>
                                );
                            })}
                        </Form.Select>
                    </Col>
                    <Col>
                        <ExampleComponent example={selectedExample} features={featureArray}/>
                    </Col>
                </Row>

                <SummaryCheckComponent exist={summaryExist}/>

                <Row>
                    <Col>
                        <div className={styles["configure_explaine_button"]}>

                            <a className="py-2 px-20 border border-gray-200 text-indigo-100 transition-colors duration-150 bg-[#0079C1] rounded-lg focus:shadow-outline"
                                style={{textDecoration: 'none'}}
                                onClick={exlpaineModel}> 
                                Explain
                            </a>

                            <ToastContainer/>

                        </div>
                    </Col>
                </Row>

                <Row>
                </Row>
                <Row className={styles["shap_row_offset"]}>
                    <Col>
                        <SpinnerComponent spinnerStatus={loading}/>
                    </Col>
                </Row>

                <Modal
                    show={showTestdataModal}
                    onHide={() => setShowTestdataModal(false)}
                    dialogClassName="modal-90w">
                    <Modal.Header closeButton>
                    <Modal.Title>
                        Background Examples (Training Set)
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                        To solve is the feature omission problem. Lundberg and Lee do this by simpling 
                        reframing what it means to omit a feature. Rather then omit a feature entirely 
                        from the model input, they instead replace it with a variety of its typical values,
                        called the background (noise) of the feature. This background feature values are
                        taken from a background dataset, a set of around 100 or so typical inputs to 
                        the model. Instead of computing the marginal contribution as the difference between
                        the model output with the feature included versus excluded, we instead find the
                        difference between the model output with the desired feature value versus a 
                        background value of that feature. We do this for every background feature value
                        from the background dataset, and take the average of all of those comparisons as
                        our marginal contribution
                        </p>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
}