import * as React from 'react';
import {useEffect, useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import styles from '../../styles/Home.module.css';
import Card from 'react-bootstrap/Card'
import NextLink from 'next/link';
import Image from 'next/image';
import forcePlotUrl from '../../static-images/force_plot.png';
import {useSelector} from 'react-redux'
import {getSavedValue} from '@/hooks/useLocalStorage';
import AdditiveForceVisualizer from './AdditiveForceVisualizer';
import Accordion from 'react-bootstrap/Accordion';

export default function ExplainationPlot () {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {modelName} = useSelector((state) => state);

    const shapValues = getSavedValue('shapValues', []);
    const [selectedExample, setExampleState] = getSavedValue('example', "2");

    const getValues = async () => {
        const backgroundValue = getSavedValue('backgroundValue', '');
        return {backgroundValue};
    };

    const getExplainerInformation = async (backgroundValue) => {

        const requestArgs = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                modelName: modelName,
                backgroundValue:backgroundValue
            })
        };

        const explainer_information = await fetch('http://127.0.0.1:8000/shap/explainer_information', requestArgs);
        const modelInformationJs = await  explainer_information.json();
        return modelInformationJs;
    }

    useEffect(
        () => {
        getValues()
          .then(values => {
            getExplainerInformation(values.backgroundValue)
            .then(explainsationInformation => {
                setExplainerInformation({
                    backgroundData: explainsationInformation.background_value,
                    modelName: explainsationInformation.modelName,
                    dataLink: explainsationInformation.dataLink,
                    baseValue: explainsationInformation.baseValue,
                    lastModified: explainsationInformation.lastModified,
                    featuresString: explainsationInformation.modelFeaturesString,
                    labelToPredict: explainsationInformation.labelToPredict,
                    loss: explainsationInformation.loss,
                    accuracy: explainsationInformation.accuracy,
                    median: explainsationInformation.median,
                    mean: explainsationInformation.mean
                });
            }
            );
          }
        );
    }, []);

    /////////////////////////////////////////////// Variables
    const initExplainationlInfo = {
        modelName: "",
        lastModified: "",
        dataLink: "",
        baseValue: "",
        backgroundData:"",
        featuresString: "",
        labelToPredict: "",
        loss: "",
        accuracy: "",
        median: "",
        mean: ""
    }
    const [explainerInformation, setExplainerInformation] = useState(initExplainationlInfo);

    const ShapVisual = (props) => {
        const explainations = props.shapValues

        if (explainations.length === 0) {
            return (
                <div></div>
            );
        }

        console.log("selected Example: ", selectedExample)

        if (selectedExample === "1") {
            return (
                <div>
                <AdditiveForceVisualizer
                    outNames={[explainerInformation.labelToPredict]}
                    baseValue={explainerInformation.baseValue}
                    link="identity"
                    features={explainations}
                />
                </div>
            );
        } else {
            return (
                <div>
                    {explainations.map((entries) => {
                        return (
                            <AdditiveForceVisualizer
                                outNames={[explainerInformation.labelToPredict]}
                                baseValue={explainerInformation.baseValue}
                                link="identity"
                                features={entries}
                            />
                        );
                    })}
                </div>
            );
        }
    }

    ///////////////////////////////////////////// Page Content
    return (
        <div>
            <Container className={styles["explaine_grid"]}>

                <Row>
                    <Col>
                        <div className={styles['component_title']}> Model Inforamtion </div>
                    </Col>
                </Row>
                <Row className={styles["shap_row_offset"]}>
                    <Col>
                        <Card className={styles['explaine_model_info_well']}>
                            <Card.Text> Model Name: {explainerInformation.modelName}</Card.Text>
                            <Card.Text> Created on: {explainerInformation.lastModified}</Card.Text>
                            <Card.Text> Background data: {explainerInformation.backgroundData}%</Card.Text>
                            <Card.Text> Features: {explainerInformation.featuresString}</Card.Text>
                            <Card.Text> Label To Predict: {explainerInformation.labelToPredict}</Card.Text>
                            <Card.Text> Loss: {explainerInformation.loss}</Card.Text>
                            <Card.Text> Accuracy: {explainerInformation.accuracy}</Card.Text>
                            <Card.Text> Median: {explainerInformation.median}</Card.Text>
                            <Card.Text> Mean: {explainerInformation.mean}</Card.Text>

                            <Card.Text> Data Link: 
                                <a href={explainerInformation.dataLink}
                                    target="_blank"
                                    style={{textDecoration: 'none'}}>
                                    Training Data Link
                                </a>
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Accordion className={styles["shap_row_offset"]}>
                            <Accordion.Item eventKey="0">
                            <Accordion.Header>  Visual Explanation </Accordion.Header>
                            <Accordion.Body>
                                <Image
                                    src={forcePlotUrl}
                                    width={700}
                                    height={500}
                                />
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Accordion className={styles["shap_row_offset"]}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> Summary Plot </Accordion.Header>
                                <Accordion.Body>
                                    <img style={{paddingLeft: '300px'}}
                                        src={"http://localhost:8000/static/" + explainerInformation.modelName  + "_summary_plot.png"}
                                        alt="summary_plot"
                                    />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>

                <Row className={styles["shap_row_offset"]}>
                    <Col>
                        <ShapVisual shapValues={shapValues}/> 
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div>
                            <div role="group" aria-label="Button group" className={styles["configure_explaine_button"]}>
                                <NextLink href="/shap">
                                    <a className="py-2 px-4 border border-gray-200 text-indigo-100 transition-colors duration-150 bg-[#0079C1] rounded-l-lg focus:shadow-outline"
                                        style={{textDecoration: 'none'}}> 
                                        SHAP tutorial
                                    </a>
                                </NextLink>
                
                                <NextLink href="/shap/configure">
                                    <a className="py-2 px-4 border border-gray-200 text-indigo-100 transition-colors duration-150 bg-[#0079C1] rounded-r-lg focus:shadow-outline"
                                        style={{textDecoration: 'none'}}> 
                                        New configuration
                                    </a>
                                </NextLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}