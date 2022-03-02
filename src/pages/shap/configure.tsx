import * as React from 'react';
import { useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import styles from '../../styles/Home.module.css';
import NextLink from 'next/link';
import Form from 'react-bootstrap/Form';
import NumericInput from 'react-numeric-input';
import Image from 'next/image'
import configurePlaceholder from '../../static-images/placeholder.png';
import * as Icon from 'react-bootstrap-icons';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { color } from '@mui/system';

const modelList = [
    { key: "Model1", value: "model_1" },
    { key: "real_estate", value: "real estate model" },
    { key: "fashion_model", value: "fashion model" }
  ];

const exampleList = [
    { key: "1", value: "New instance" },
    { key: "2", value: "User instance"},
    { key: "3", value: "Feature importance"}
  ];

const plotList = [
    { key: "1", value: "force plot" },
    { key: "2", value: "beeswarm plot"},
    { key: "3", value: "summery plot"}
];

function myTestInputFormat(num) {
    return num + '%';
}

function Placeholder() {
    return (
        <div>
            <Image
                src={configurePlaceholder}
                width={700}
                height={400}
            />
        </div>
    );
}

function FeatureImportance() {
    return (
        <div>
            FeatureImportance
        </div>
    );
}

function UserExample() {
    return (
        <div>
            UserExample 
        </div>
    );
}

function NewExample() {
    return (
        <div>
            NewExample
        </div>
    );
}

function ExampleComponent(example) {
    const instance = example.example;
    if (instance === "1") {
        return <NewExample/>
    } else if (instance == "2") {
        return <UserExample/>
    } else if (instance == "3") {
        return <FeatureImportance/>
    } else {
        return <Placeholder/>
    }
}

export default function ConfigureExplainer () {

    // select item
    const [selectedModel, setModelState] = useState("");
    const [selectedExample, setExampleState] = useState("");
    const [selectedPlot, setPlotState] = useState("");

    // modals
    const [showTestdataModal, setShowTestdataModal] = useState(false);
    const [showExmapleModal , setShowExampleModal] = useState(false);
    const [showPlotModal , setShowPlotModal] = useState(false);

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
                                        console.log("e.target.value", e.target.value);
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
                    <Col md={6}>
                        <div className={styles['component_title']}> Testdata </div>
                        <Button onClick={() => setShowPlotModal(true)} variant="none" className={styles['configure_info_icon']}>
                            <Icon.InfoCircleFill/>
                        </Button>
                    </Col>
                </Row>
                <Row className={styles["shap_row_offset"]}>
                    <Col md={6}>
                        <div className={styles['configure_component_style']}>
                            <NumericInput className="form-control"
                                      value={80} step={1} max={100} min={10} 
                                      format={myTestInputFormat}/>
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
                                        console.log("e.target.value", e.target.value);
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
                        <ExampleComponent example={selectedExample}/>
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
                                            console.log("e.target.value", e.target.value);
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
                                    style={{textDecoration: 'none'}}> 
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