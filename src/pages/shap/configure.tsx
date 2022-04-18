import * as React from 'react'
import {useEffect, useState } from 'react'
import { Container, Row, Col } from "reactstrap"
import styles from '../../styles/Home.module.css'
import NextLink from 'next/link'
import Form from 'react-bootstrap/Form'
import NumericInput from 'react-numeric-input'
import * as Icon from 'react-bootstrap-icons'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {getSavedValue} from '@/hooks/useLocalStorage'
import Card from 'react-bootstrap/Card'
import useLocalStorage from '@/hooks/useLocalStorage';
import {useSelector} from 'react-redux'

interface IFeatures {
    featuresData:{name:string}[];
}

export default function ConfigureExplainer () {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {modelName} = useSelector((state) => state);

    const getValues = async () => {
        const dataLink = getSavedValue('DataLink', '');
        const labelName = getSavedValue('LabelsRowName', '');
        return {dataLink, labelName};
      };

    const getModelInformation = async (linkValue, labelName) => {
        const requestArgs = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                dataLink: linkValue,
                labelName: labelName,
                modelName: modelName
            })
        };

        const modelInformation = await fetch('http://127.0.0.1:8000/shap/model_information', requestArgs);
        const modelInformationJs = await  modelInformation.json();
        return modelInformationJs;
    }
  
    useEffect(() => {
        getValues()
          .then(values => {
            getModelInformation(values.dataLink, values.labelName)
              .then(modelInformation => {

                setModelInformation({
                    modelName: modelInformation.modelName,
                    dataLink: modelInformation.dataLink,
                    lastModified: modelInformation.lastModified,
                    featuresString: modelInformation.modelFeaturesString,
                    labelToPredict: modelInformation.labelToPredict
                });

                setFeatureArray(modelInformation.featureArray);
              }
            );
          }
        );
    }, []);

    const modelList = [
        { key: "Model1", value: "model_1" },
        { key: "real_estate", value: "real estate model" },
        { key: "fashion_model", value: "fashion model" }
      ];
    
    const exampleList = [
        { key: "1", value: "New instance" },
        { key: "2", value: "Feature importance"}
      ];
    
    const plotList = [
        { key: "1", value: "force plot" },
        { key: "2", value: "beeswarm plot"},
        { key: "3", value: "summery plot"}
    ];
    
    const initModelInfo = {
        modelName: "",
        lastModified: "",
        dataLink: "",
        featuresString: "",
        labelToPredict: ""
    }

    // select model
    const [selectedModel, setModelState] = useState("");

    // amount of background examples
    const [backgroundValue, setBackgroundValue] = useState("20");
         
    // choose an example (instance)
    const [selectedExample, setExampleState] = useState("1");
        
    // select a plot
    const [selectedPlot, setPlotState] = useState("1");
        
    // modals
    const [showTestdataModal, setShowTestdataModal] = useState(false);
    const [showExmapleModal , setShowExampleModal] = useState(false);
    const [showPlotModal , setShowPlotModal] = useState(false);
        
    // model Inforamtion box
    const [modelInformation, setModelInformation] = useState(initModelInfo);
    // feature Array
    const [featureArray, setFeatureArray] = useState([]);

    // feature Boolean Array
    const [featureBooleanArray] = useState({});
    // feature Example Array
    const [featureExampleArray] = useState({});

    const handleCheckBox = event => {
        featureBooleanArray[event.target.value] = event.target.checked;
        console.log(featureBooleanArray)
    }

    const handleExampleValues = event => {
        featureExampleArray[event.target.id] = event.target.value;
        console.log(featureExampleArray)
    }

    const NewExample = (props: IFeatures) => {
        if (featureArray.length === 0) {
            return (
                <div></div>
            );
        }

        return (
            <div>
                <div style={{fontWeight: 'bold'}}>Fill feature values</div>
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

    function FeatureImportance(props: IFeatures) {
        if (featureArray.length === 0) {
            return (
                <div></div>
            );
        }

        return (
            <div>
                <div style={{fontWeight: 'bold'}}>Select features to be included</div>
                {props.featuresData.map((item) => {
                return (
                    <div>
                        <Form.Check type="checkbox" 
                                    label={item.name} 
                                    value={item.name} 
                                    onChange={handleCheckBox}
                                    checked={featureBooleanArray[item.name]}/>
                    </div>
                    );
                })}
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
            return <FeatureImportance featuresData={props.features}/>
        }
    }

    const exlpaineModel = async () => {
        const dataLink = getSavedValue('DataLink', '');
        const labelName = getSavedValue('LabelsRowName', ''); 

        const requestArgs = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                modelName: modelName,
                dataLink: dataLink,
                labelName: labelName,
                backgroundValue: backgroundValue,
                example: selectedExample,
                fBooleanArray : featureBooleanArray,
                fExampleArray: featureExampleArray,
                plot: selectedPlot
            })
          };

        const explaindModel = await fetch('http://127.0.0.1:8000/shap/configure', requestArgs);
    }

    return (
        <div>
            <Container className={styles["configure_grid"]}>

                <Row>
                    <Col>
                        <div className={styles['component_title']}> Choose a Model</div>
                        <Button onClick={() => setShowPlotModal(true)} variant="none" className={styles['configure_info_icon']}>
                            <Icon.InfoCircleFill/>
                        </Button>
                    </Col>
                </Row>
                <Row className={styles["shap_row_offset"]}>
                    <Col>
                        <Form.Select className={styles['configure_component_style'] + " " + styles['configure_select_dropdown']}
                                     onChange={e => {
                                        setModelState(e.target.value);
                                     }}
                                     value={selectedModel}>
                            {modelList.map((item) => {
                                return (
                                    <option value={item.key}>{item.value}</option>
                                );
                            })}
                        </Form.Select>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className={styles['component_title']}> Model Inforamtion </div>
                    </Col>
                </Row>
                <Row className={styles["shap_row_offset"]}>
                    <Col>
                        <Card className={styles['explaine_model_info_well']}>
                            <Card.Text> Model Name: {modelInformation.modelName} </Card.Text>
                            <Card.Text> Last Modified: {modelInformation.lastModified} </Card.Text>
                            <Card.Text> Data Link: {modelInformation.dataLink} </Card.Text>
                            <Card.Text> Features: {modelInformation.featuresString} </Card.Text>
                            <Card.Text> Label To Predict: {modelInformation.labelToPredict} </Card.Text>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <div className={styles['component_title']}> Background Examples </div>
                        <Button onClick={() => setShowPlotModal(true)} variant="none" className={styles['configure_info_icon']}>
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
                        <Button onClick={() => setShowPlotModal(true)} variant="none" className={styles['configure_info_icon']}>
                            <Icon.InfoCircleFill/>
                        </Button>
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

                <Row> 
                    <Col>
                        <div className={styles['component_title']}> Choose a Plot </div>
                        <Button onClick={() => setShowPlotModal(true)} variant="none" className={styles['configure_info_icon']}>
                            <Icon.InfoCircleFill/>
                        </Button>
                    </Col>
                </Row>
                <Row className={styles["shap_row_offset"]}>
                    <Col>
                        <Form.Select    className={styles['configure_component_style']}
                                        onChange={e => {
                                            setPlotState(e.target.value);
                                        }} 
                                        value={selectedPlot}>
                                {plotList.map((item) => {
                                    return (
                                        <option value={item.key}>{item.value}</option>
                                    );
                                })}
                        </Form.Select>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className={styles["configure_explaine_button"]}>
                            <NextLink href="/shap/explaination">
                                <a className="py-2 px-20 border border-gray-200 text-indigo-100 transition-colors duration-150 bg-[#0079C1] rounded-lg focus:shadow-outline"
                                    style={{textDecoration: 'none'}}
                                    onClick={exlpaineModel}> 
                                    Explaine
                                </a>
                            </NextLink>
                        </div>
                    </Col>
                </Row>

                <Modal
                    show={showExmapleModal}
                    onHide={() => setShowExampleModal(false)}
                    dialogClassName="modal-90w">
                    <Modal.Header closeButton>
                    <Modal.Title>
                        Custom Modal Styling
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>
                    </Modal.Body>
                </Modal>

                <Modal
                    show={showPlotModal}
                    onHide={() => setShowPlotModal(false)}
                    dialogClassName="modal-90w">
                    <Modal.Header closeButton>
                    <Modal.Title>
                        Custom Modal Styling
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                            ipsam atque a dolores quisquam quisquam adipisci possimus
                            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                            deleniti rem!
                        </p>
                    </Modal.Body>
                </Modal>

                <Modal
                    show={showTestdataModal}
                    onHide={() => setShowTestdataModal(false)}
                    dialogClassName="modal-90w">
                    <Modal.Header closeButton>
                    <Modal.Title>
                        Custom Modal Styling
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                            ipsam atque a dolores quisquam quisquam adipisci possimus
                            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                            deleniti rem!
                        </p>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
}