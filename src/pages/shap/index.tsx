import * as React from 'react';
import shapLogoUrl from '../../static-images/shap_header.png';
import trainingDataUrl from '../../static-images/xai_pipeline.png';
import logoUrl from '../../static-images/xai_logo.png';
import Image from 'next/image';
import { Container, Row, Col } from "reactstrap";
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import styles from '../../styles/Home.module.css';
import xai_taxonomy_Url from '../../static-images/xai_tax.png';
import workflow_conf_1_url from '../../static-images/workflow/workflow_conf_1.png';
import workflow_conf_import_url from '../../static-images/workflow/workflow_conf_import.png';
import workflow_conf_manuelly_url from '../../static-images/workflow/workflow_conf_manuelly.png';
import workflow_conf_summary_url from '../../static-images/workflow/workflow_conf_summary.png';
import workflow_conf_encoding_url from '../../static-images/workflow/workflow_conf_encoding.png';
import YouTube from 'react-youtube';
import NextLink from 'next/link';
import { List } from 'semantic-ui-react'

const ShapIndex = () => {
  const opts = {
    height: '460',
    width: '900',
  };

  return (
    <div>
      <Container className={styles["shap_grid"]}>
        <Row className={styles["shap_row_offset shap_title_font"] + " " + styles["shap_title_font"]}>
          <Col>
            Machine Learning explainability 
          </Col>
        </Row>
        <Row className={styles["shap_row_offset"]}>
          <Col>
            <a  href='https://www.darpa.mil/program/explainable-artificial-intelligence' 
                target="_blank"
                style={{textDecoration: 'none'}}>
                  <Image
                    src={logoUrl}
                    width={700}
                    height={400}
                  />
            </a>
          </Col>
        </Row>

        <Accordion defaultActiveKey={['0','5']} alwaysOpen>

          <Accordion.Item eventKey="0">
            <Accordion.Header>What is ML Explainability ?</Accordion.Header>
            <Accordion.Body>
              <p style={{fontSize: 22, fontWeight: '600'}}>
              Explainability in machine learning is the process of explaining to a human why and how a machine learning model
              made a decision. Model explainability means the algorithm and its decision or output can be understood by a human.
              It is the process of analysing machine learning model decisions and results to understand the reasoning behind the system’s decision. 
              </p>

              <p style={{fontSize: 22, fontWeight: '600'}}>
                Explainable AI (XAI) is the more formal way to describe it
              </p>

              <p>
                {/* <a href='https://christophm.github.io/interpretable-ml-book/shapley.html#general-idea' 
                    target="_blank"
                    style={{textDecoration: 'none'}}
                    className={"py-2 px-4 border border-gray-200 text-indigo-100 transition-colors duration-150 bg-[#0079C1] rounded-l-lg focus:shadow-outline"}>
                    Read more about what is ML Explainability
                  </a> 
                  
                  https://www.seldon.io/explainability-in-machine-learning

                  */}
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Why is ML Explainability important ?</Accordion.Header>
            <Accordion.Body>
              <p style={{fontSize: 22, fontWeight: '600'}}>
                When a model makes a wrong or rogue decision, knowing the factors that
                caused that decision, or who is responsible for that failure, is necessary
                to avoid similar problems in the future. With XAI, data science teams can 
                give organizations more control over their AI tools
              </p>

              <p style={{fontSize: 18, fontWeight: '600', textAlign: 'left'}}>
                In high-risk domains (like healthcare or finance), trust is critical.
                Before ML solutions can be used and trusted, all stakeholders must fully 
                understand what the model does. If you claim that your model makes better decisions 
                and notices patterns that humans don’t see, you need to be able to back it up with evidence.
                Domain experts will be naturally skeptical towards any technology that claims to see more than them.
              </p>

              <p style={{fontSize: 18, fontWeight: '600', textAlign: 'left'}}>
                Model explainability is critical for data scientists, auditors, and business decision-makers
                alike to ensure compliance with company policies, industry standards, and government regulations.
                According to article 14 of the European data protection laws (GDPR), when a company uses automated
                decision-making tools it must provide meaningful information about the logic involved, as well as
                the significance and the envisaged consequences of such processing for the data subject. Similar 
                regulations are being put in place across the world. 
              </p>

              <p style={{fontSize: 18, fontWeight: '600', textAlign: 'left'}}>
                Explainability can also improve performance. If you understand why and how your model works,
                you know exactly what to fine-tune and optimize. 
              </p>

              <p style={{fontSize: 18, fontWeight: '600', textAlign: 'left'}}>
                Understanding the decision-making process of your models shows you unknown vulnerabilities and flaws.
                With these insights, control is easy. The ability to rapidly identify and correct mistakes in low-risk
                situations adds up, especially when applied across all models in production.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header> ML Explainability approaches </Accordion.Header>
            <Accordion.Body>
              <p style={{fontSize: 22, fontWeight: '600', textAlign: 'left' }}>
                Model-agnostic techniques/tools can be used on any machine learning model, no matter how complicated.
                These agnostic methods usually work by analyzing feature input and output pairs. A good example is SHAP.
              </p>
              
              <p style={{fontSize: 22, fontWeight: '600', textAlign: 'left'}}>
                Model-specific techniques/tools are specific to a single type of model or a group of models.
                They depend on the nature and functions of the specific model, for example, tree interpreters.
              </p>

              <p style={{fontSize: 22, fontWeight: '600', textAlign: 'left'}}>
                Local explanation techniques/tools are able to explain a single prediction, that is 
                they are not valid for general behavior of the model, but only for one prediction at a time.
              </p>

              <p style={{fontSize: 22, fontWeight: '600', textAlign: 'left'}}>
                Global explanation modelstechniques/tools are able to describe the average behaviour of your black-box models
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header> ML Explainability Techniques </Accordion.Header>
            <Accordion.Body>
            <p style={{textAlign: 'center'}}>
              <a  href='https://christophm.github.io/interpretable-ml-book/intro.html' 
                  target="_blank"
                  style={{textDecoration: 'none'}}>
                    <Image
                      src={xai_taxonomy_Url}
                      width={800}
                      height={650}
                    />
              </a>
            </p>
            
            <p>
              Click the Image to read more (image Source: dx.doi.org/10.3389/fdata.2021.688969)
            </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>ML Explainability using SHAP</Accordion.Header>
            <Accordion.Body>
              <p>
                <Image
                src={shapLogoUrl}
                width={800}
                height={370}
                />
              </p>

              <p>
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
              </p>
          
              <p style={{fontSize: 22, fontWeight: '600'}}>
                SHAP uses the game theory concept of Shapley values to optimally assign feature importances.
              </p>

              <p style={{fontSize: 22, fontWeight: '600'}}>
                The Shapley Value SHAP (SHapley Additive exPlanations) is the average marginal contribution
                of a feature value over all possible coalitions. 
              </p>

              <p style={{fontSize: 22, fontWeight: '600'}}>
                Coalitions are combinations of features used to estimate the Shapley value of a specific feature.
                It’s a unified approach to explain the output of machine learning models like linear- and logistics
                regression, NLP, boosted tree model, and addictive models. 
              </p>

              <p style={{fontSize: 22, fontWeight: '600'}}>
                <Col xl className={styles["shap_youtube_frame"]}>
                  <YouTube videoId='VB9uV-x0gtg' opts={opts}/>
                </Col>
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header> Workflow </Accordion.Header>
            <Accordion.Body> 
              <p style={{fontSize: 22, fontWeight: '600'}}>
                Press 'Start Configuring' to start configuring the KernelSHAP Explainer and Testing it
              </p>

              <p>
                <Image
                  src={workflow_conf_1_url}
                  width={500}
                  height={400}
                />
              </p>

              <p style={{fontSize: 22, fontWeight: '600'}}>
                1) Start by choosing your saved Modell from the DropDown List.<p/>

                2) Pick the Percentage of background Examples for the KenelSHAP.<p/>

                3) For Testing the KenelSHAP you can import or enter new examples (Test Data).<p/>
              </p>

              <p>
                you can choose to import new examples from google Drive csv file
              </p>
              <p>
                <Image
                  src={workflow_conf_import_url}
                  width={700}
                  height={150}
                />
              </p>
              <p>
                Or Enter your feature values manuelly. the feature values have to be entered in One Hot encoding.
              </p>
              <p>
                <a  href='https://www.darpa.mil/program/explainable-artificial-intelligence' 
                  target="_blank"
                  style={{textDecoration: 'none'}}>
                  <Image
                    src={workflow_conf_encoding_url}
                    width={600}
                    height={150}
                    />      
                </a>
              </p>

              <p>
                <Image
                  src={workflow_conf_manuelly_url}
                  width={700}
                  height={300}
                />
              </p>

              <p style={{fontSize: 22, fontWeight: '600'}}>
                  By choosing 'include summary Plot' additional Visualisation will be added
                  giving an overview how the model behave.
                  The Calculation of the shapley Values may take alot of time but 
                  the Summary Plot needs to be evaluated only once for each Model.
              </p>
              <p>
                <Image
                  src={workflow_conf_summary_url}
                  width={700}
                  height={100}
                />
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* https://neptune.ai/blog/explainability-auditability-ml-definitions-techniques-tools */}

        </Accordion>

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
