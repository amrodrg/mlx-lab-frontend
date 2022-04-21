import * as React from 'react';
import {useEffect, useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import styles from '../../styles/Home.module.css';
import Card from 'react-bootstrap/Card'
import Image from 'next/image'
import NextLink from 'next/link';
import {useSelector} from 'react-redux'
import configurePlaceholder from '../../static-images/placeholder.png';
import {getSavedValue} from '@/hooks/useLocalStorage';

function Placeholder() {
    return (
        <div>
            <Image
                src={configurePlaceholder}
                width={800}
                height={400}
            />
        </div>
    );
}

function ForcePlot() {
    return (
        <div>
            Force Plot
        </div>
    );
}

function SummeryPlot() {
    return (
        <div>
            Summeery Plot
        </div>
    );
}

function PlotComponent(prop) {
    const buttons = prop.plot;
    if (buttons === "1") {
        return <ForcePlot/>
    } else if (buttons == "2") {
        return <SummeryPlot/>
    } else if (buttons === "3") {
        return <Placeholder/>
    } 
}

function ShapConfigureButtons() {
    return (
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
      );
}

function ConfigureButtons() {
    return (
        <div>
            <div className={styles["configure_explaine_button"]}>
                <NextLink href="/shap/explaination">
                    <a className="py-2 px-20 border border-gray-200 text-indigo-100 transition-colors duration-150 bg-[#0079C1] rounded-lg focus:shadow-outline"
                        style={{textDecoration: 'none'}}> 
                        Configure
                    </a>
                </NextLink>
            </div>
        </div>
    );
}

function ButtonsComponent(prop) {
    const buttons = prop.buttonGroup;
    if (buttons === "1") {
        return <ShapConfigureButtons/>
    } else if (buttons == "2") {
        return <ConfigureButtons/>
    }
}

export default function ExplainationPlot () {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {modelName} = useSelector((state) => state);

    const getValues = async () => {
        const shapValues = getSavedValue('shapValues', {});
        const labelName = getSavedValue('LabelsRowName', ''); 
        const dataLink = getSavedValue('DataLink', '');
        const plot = getSavedValue('plot', '');
        const example = getSavedValue('example', '');
        const backgroundValue = getSavedValue('backgroundValue', '');
        return {shapValues, labelName, dataLink, plot, example, backgroundValue};
      };

    const getExplainerInformation = async (shapValues, labelName, dataLink, plot, example, backgroundValue) => {

        const requestArgs = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                modelName: modelName,
                dataLink: dataLink,
                shapValues: shapValues,
                labelName: labelName,
                plot:plot,
                example:example,
                backgroundValue:backgroundValue
            })
        };

        const explainer_information = await fetch('http://127.0.0.1:8000/shap/explainer_information', requestArgs);
        const modelInformationJs = await  explainer_information.json();
        return modelInformationJs;
    }

    const initExplainationlInfo = {
        modelName: "",
        lastModified: "",
        dataLink: "",
        plot:"",
        backgroundData:"",
        featuresString: "",
        labelToPredict: ""
    }

    useEffect(
        () => {
        getValues()
          .then(values => {
            getExplainerInformation(values.shapValues, values.labelName, values.dataLink, values.plot, values.example, values.backgroundValue)
            .then(explainsationInformation => {
                setExplainerInformation({
                    plot: explainsationInformation.plot,
                    backgroundData: explainsationInformation.background_value,
                    modelName: explainsationInformation.modelName,
                    dataLink: explainsationInformation.dataLink,
                    lastModified: explainsationInformation.lastModified,
                    featuresString: explainsationInformation.modelFeaturesString,
                    labelToPredict: explainsationInformation.labelToPredict
                });
            }
            );
          }
        );
    }, []);

    const [explainerInformation, setExplainerInformation] = useState(initExplainationlInfo);

    // Plot Const
    const [plotNumber, setPlotNumber] = getSavedValue('plot', '');

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
                            <Card.Text> Create on: {explainerInformation.lastModified}</Card.Text>
                            <Card.Text> Background data: {explainerInformation.backgroundData}%</Card.Text>
                            <Card.Text> Features: {explainerInformation.featuresString}</Card.Text>
                            <Card.Text> Label To Predict: {explainerInformation.labelToPredict}</Card.Text>
                            <Card.Text> Plot: {explainerInformation.plot}</Card.Text>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card className={styles['explaine_model_info_well'] + " " + styles["shap_row_offset"]}>
                            <Card.Title> Legende </Card.Title>
                        </Card>
                    </Col>
                </Row>

                <Row className={styles["shap_row_offset"]}>
                    <Col>

                        <PlotComponent plot={plotNumber}/>

                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ButtonsComponent buttonGroup={"1"}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}