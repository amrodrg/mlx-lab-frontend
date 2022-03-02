import * as React from 'react';
import logoUrl from '../../static-images/shap_header.png';
import Image from 'next/image'
import { Container, Row, Col } from "reactstrap";
import styles from '../../styles/Home.module.css';
import YouTube from 'react-youtube';
import NextLink from 'next/link';

const ShapIndex = () => {
  const opts = {
    height: '460',
    width: '1000',
  };

  return (
      <div>
          <Container className={styles["shap_grid"]}>
          <Row className={styles["shap_row_offset"]}>
              <Col>
                <Image
                  src={logoUrl}
                  width={700}
                  height={400}
                />
              </Col>
            </Row>
            <Row className={styles["shap_row_offset"] + " " + styles["shap_default_font"]}>
              <Col>
                For Explaining the Model Prediction SHAP (SHapley Additive exPlanations) is used.  
                SHAP is a game theoretic approach to explain the output of any machine learning model. 
              {/* <MainShapSection/> */}
              </Col>
            </Row>
            <Row className={styles["shap_row_offset shap_title_font"] + " " + styles["shap_title_font"]}>
              <Col>
                SHAP
              </Col>
            </Row>
            <Row className={styles["shap_row_offset"]}>
              <Col xl className={styles["shap_youtube_frame"]}>
                <YouTube videoId='VB9uV-x0gtg' opts={opts}/>
              </Col>
            </Row>
            <Row className={styles["shap_row_offset"]}>
              <Col>
                <div role="group" aria-label="Button group" className={styles["configure_explaine_button"]}>
                  <a href='https://christophm.github.io/interpretable-ml-book/shapley.html#general-idea' 
                    target="_blank"
                    style={{textDecoration: 'none'}}
                    className={"py-2 px-4 border border-gray-200 text-indigo-100 transition-colors duration-150 bg-[#0079C1] rounded-l-lg focus:shadow-outline"}>
                    Shapley Values
                  </a>
                  <a href='https://shap-lrjball.readthedocs.io/en/latest/index.html' 
                    target="_blank"
                    style={{textDecoration: 'none'}}
                    className={"py-2 px-4 border border-gray-200 text-indigo-100 transition-colors duration-150 bg-[#0079C1] rounded-r-lg focus:shadow-outline"}>
                      SHAP Documentation
                  </a>
                </div>
              </Col>
            </Row>
            <Row className={styles["shap_row_offset"] + " " + styles["shap_title_font"]}>
              <Col>
                Short Shapley Values Tutorial
              </Col>
            </Row>
            <Row className={styles["shap_row_offset"] + " " + styles["shap_default_font"]}>
              <Col>
                A prediction can be explained by assuming that each feature value of the instance is a “player” in a game where the prediction is the payout.
                Shapley values tells us how to fairly distribute the “payout” among the players.<p/>

                The Game is the Prediction task for a single instance of the dataset.
                if we consider a machine learning model to predict apartment prices, an instanse could have the following form<p/> 

                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                  x =  Park: near   Cat: not allowed   Living-space: 50  Floor: 2
                </div> <p/> 

                the feature values of x worked together to achive the prediction of €300,000.
                our goal is to explain the difference between the actual prediction of €300,000
                and the average prediction of €310,000 : a difference of €-10,000. <p/> 

                How do we calculate the Shapley value for one feature ?
                the following shows all coalitions of feature values that are needed to determine the Shapley value for cat: not allowed. <p/> 
              </Col>
            </Row>
            <Row className={styles["shap_row_offset"] + " " + styles["shap_title_font"]}>
              <Col>
                Example
              </Col>
            </Row>
            <Row className={styles["shap_row_offset"] + " " + styles["shap_default_font"]}>
              <Col>
                <ul className={styles["shap_bullet_list"]}>
                  <li>No Feature Values </li>
                  <li>Park: near</li>
                  <li>Living-space: 50</li>
                  <li>Floor: 2</li>
                  <li>Park: near + Living-space 50</li>
                </ul>
              </Col>
              <Col>
                <ul className={styles["shap_bullet_list"]}>
                  <li>Park: near + Floor:  2</li>
                  <li>Living-space: 50 + Floor: 2</li>
                  <li>Park: near + Living-space: 50 + Floor: 2</li>
                </ul>
              </Col>
            </Row>
            <Row className={styles["shap_row_offset"] + " " + styles["shap_default_font"]}>
              <Col>
                For each of these coalitions we compute the predicted apartment price with 
                and without the feature value Cat: not allowed and take the difference to get the marginal contribution.
                The Shapley value is the (weighted) average of marginal contributions.
                We replace the feature values of features that are not in a coalition with random feature values from the apartment
                dataset to get a predection from the machine learning model. <p/> 

                All clear now ?  <p/> 

                In the following we evaluate the contribution of the 
                Cat: banned  feature value when it is added to a coalition of Park:
                near + Living-space: 50  . For the Floor  feature value that is missing we randomly draw another apartment
                from the data and using its value for the floor  <p/> 
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                  Y = park: near  cat: allowed  Living-space: 50  Floor: 1 
                </div><p/>

                The value Floor: 2 from the instance x was replaced by the random drawn Floor: 1.
                The predicted price with this combination is €310,000. 
                Then we remove Cat: banned from the coalition by replacing it with a random value of the cat allowd/banned feature from Y. <p/>

                We predict the aparment price of €320,00 for the coalition of Park: near and Living-space: 50.
                The contribution of Cat: banned was €310,000 - €320,000 = €-10,000. <p/>

                This estimate depends on the value of the randomly drawn apartment Y that served as a “donor” 
                for the cat and floor feature values. We will get better estimates if we repeate this sampling step
                and average the contributions.
                The computation time increases exponentially with the number of features so we compute contributions 
                for only a few samples of the possible coalitions.
                If we estimate the Shapley values for all feature values, we get the complete distribution of the prediction among the feature values <p/>

                Be careful to interpret the Shapley value correctly : The Shapley Value is the avarage contribution of 
                a feature value to the prediction in different coalitions. The Shapley value is NOT the difference in prediction when we woud remove the feature from the model. 

              </Col>
            </Row>

            <div className={styles["shap_sticky_button"]}>
              <NextLink href="/shap/configure">
                  <a className="py-2 px-20 border border-gray-200 text-indigo-100 transition-colors duration-150 bg-[#0079C1] rounded-lg focus:shadow-outline"
                      style={{textDecoration: 'none'}}> 
                    Start Configuring 
                  </a>
              </NextLink>
            </div>
          </Container>
      </div>
  );
}

export default ShapIndex;
