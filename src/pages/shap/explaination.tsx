import * as React from 'react';
import {useEffect, useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import styles from '../../styles/Home.module.css';
import Card from 'react-bootstrap/Card'
import Image from 'next/image'
import NextLink from 'next/link';
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


function PlotComponent(prop) {
    const buttons = prop.plot;
    if (buttons === "1") {
        return <Placeholder/>
    } else if (buttons == "2") {
        return <ForcePlot/>
    }
}

// Buttons
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

    const getValues = async () => {
        const shapValues = getSavedValue('shapValues', {});
        return {shapValues};
      };

    const getExplainerInformation = async (shapValues) => {

        const requestArgs = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                shapValues: shapValues
            })
        };

        const explainer_information = await fetch('http://127.0.0.1:8000/shap/explainer_information', requestArgs);
        // const modelInformationJs = await  explainer_information.json();
        return explainer_information;
    }

    useEffect(
        
        () => {
        getValues()
          .then(values => {
            getExplainerInformation(values.shapValues)
          }
        );
    }, []);

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
                            <Card.Text> Model Name :</Card.Text>
                            <Card.Text> Create on :</Card.Text>
                            <Card.Text> Features : </Card.Text>
                            <Card.Text> Example : </Card.Text>
                            <Card.Text> Plot : </Card.Text>
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

                        <PlotComponent plot={"1"}/>

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