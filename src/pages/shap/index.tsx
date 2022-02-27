import * as React from 'react';
import MainShapSection from '../../pages-sections/Components-Sections/Shap/MainShapSection.js';
import logoUrl from '../../static-images/shap_header.png';
import Image from 'next/image'
import { Container, Row, Col } from "reactstrap";
import styles from '../../styles/Home.module.css';
import YouTube from 'react-youtube';

export default function ShapIndex() {

  const opts = {
    height: '460',
    width: '1000',
  };

  return (
    <div>
      <Container className={styles.shap_grid}>
      <Row className={styles["shap_row_offset"]}>
          <Col xl>
            <Image
              src={logoUrl}
              width={700}
              height={400}
            />
          </Col>
        </Row>
        <Row className={styles["shap_row_offset"] + " " + styles["shap_default_font"]}>
          <Col xl>
            For Explaining the Model Prediction SHAP (SHapley Additive exPlanations) is used.  
            SHAP is a game theoretic approach to explain the output of any machine learning model. 
          {/* <MainShapSection/> */}
          </Col>
        </Row>
        <Row className={styles["shap_row_offset"] + " " + styles["shap_title_font"]}>
          <Col xl>
            Shapley Values
          </Col>
        </Row>
        <Row className={styles["shap_row_offset"]}>
          <Col xl className={styles["shap_youtube_frame"]}>
            <YouTube videoId='VB9uV-x0gtg' opts={opts}/>
          </Col>
        </Row>
        <Row className={styles["shap_row_offset"]}>
          <Col xl>
            <div className="inline-flex" role="group" aria-label="Button group">
              <a href='https://christophm.github.io/interpretable-ml-book/shapley.html#general-idea' 
                target="_blank"
                className={styles["shap_button_style"]}>
                Shapley Values
              </a>
              <a href='https://shap-lrjball.readthedocs.io/en/latest/index.html' 
                target="_blank"
                className={styles["shap_button_style"]}>
                  SHAP Documentation
              </a>
            </div>
          </Col>
        </Row>
        <Row className={styles["shap_row_offset"] + " " + styles["shap_title_font"]}>
          <Col xl>
            Learn more about Shapley Values
          </Col>
        </Row>
        <Row className={styles["shap_row_offset"] + " " + styles["shap_default_font"]}>
          <Col xl>
            A prediction can be explained by assuming that each feature value of the instance is a “player” in a game where the prediction is the payout.
            Shapley values tells us how to fairly distribute the “payout” among the players.<p/>

            The Game is the Prediction task for a single instance of the dataset.
            if we consider a machine learning model to predict apartment prices, an instanse could have the following form 
          </Col>
        </Row>







      </Container>
    </div>
  );
}
