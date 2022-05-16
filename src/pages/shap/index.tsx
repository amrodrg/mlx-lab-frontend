import * as React from 'react';
import shapLogoUrl from '../../static-images/shap_header.png';
import trainingDataUrl from '../../static-images/xai_pipeline.png';
import logoUrl from '../../static-images/xai_logo.png';
import Image from 'next/image';
import { Container, Row, Col } from "reactstrap";
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import styles from '../../styles/Home.module.css';
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
                Explainability in machine learning means that you can explain what happens in your 
                model from input to output. It makes models transparent and solves the black box problem.
              </p>

              <p style={{fontSize: 22, fontWeight: '600'}}>
                Explainable AI (XAI) is the more formal way to describe this and applies 
                to all artificial intelligence.
              </p>

              <p>
                {/* <a href='https://christophm.github.io/interpretable-ml-book/shapley.html#general-idea' 
                    target="_blank"
                    style={{textDecoration: 'none'}}
                    className={"py-2 px-4 border border-gray-200 text-indigo-100 transition-colors duration-150 bg-[#0079C1] rounded-l-lg focus:shadow-outline"}>
                    Read more about what is ML Explainability
                  </a> */}
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>What is ML Explainability for ?</Accordion.Header>
            <Accordion.Body>
            <p style={{fontSize: 22, fontWeight: '600'}}>
              you’re building a model that predicts pricing trends in the fashion industry.
              The model might be interpretable — you can see what you’re doing. But it’s not
              explainable yet. It will be explainable once you dig into the data and features
              behind the generated results. Understanding what features contribute to the 
              model’s prediction and why they do is what explainability is all about.
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

              <p style={{fontSize: 22, fontWeight: '600', textAlign: 'left'}}>
                In high-risk domains (like healthcare or finance), trust is critical.
                Before ML solutions can be used and trusted, all stakeholders must fully 
                understand what the model does. If you claim that your model makes better decisions 
                and notices patterns that humans don’t see, you need to be able to back it up with evidence.
                Domain experts will be naturally skeptical towards any technology that claims to see more than them.
              </p>

              <p style={{fontSize: 22, fontWeight: '600', textAlign: 'left'}}>
                Model explainability is critical for data scientists, auditors, and business decision-makers
                alike to ensure compliance with company policies, industry standards, and government regulations.
                According to article 14 of the European data protection laws (GDPR), when a company uses automated
                decision-making tools it must provide meaningful information about the logic involved, as well as
                the significance and the envisaged consequences of such processing for the data subject. Similar 
                regulations are being put in place across the world. 
              </p>

              <p style={{fontSize: 22, fontWeight: '600', textAlign: 'left'}}>
                Explainability can also improve performance. If you understand why and how your model works,
                you know exactly what to fine-tune and optimize. 
              </p>

              <p style={{fontSize: 22, fontWeight: '600', textAlign: 'left'}}>
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
                These agnostic methods usually work by analyzing feature input and output pairs. A good example is LIME.
              </p>
              
              <p style={{fontSize: 22, fontWeight: '600', textAlign: 'left'}}>
                Model-specific techniques/tools are specific to a single type of model or a group of models.
                They depend on the nature and functions of the specific model, for example, tree interpreters.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header> ML Explainability Techniques </Accordion.Header>
            <Accordion.Body>
              <p style={{fontSize: 22, fontWeight: '600', textAlign: 'left' }}>
                Partial Dependence Plots (PDP): Get a global visual representation of how one or two features 
                influence the predicted outcome of the model, with other features held constant. 
                PDP tells you if the relationship between the target and chosen feature is linear or complex.
                PDP is model-agnostic.  
              </p>
              
              <p style={{fontSize: 22, fontWeight: '600', textAlign: 'left'}}>
                Individual Condition Expectations plots (ICE): This gives you a local visual representation of the effect of a feature in the model with
                respect to the target feature. Unlike PDP, ICE shows separate predictions of the dependence
                on the feature with one line per sample. It’s also model-agnostic.
              </p>

              <p style={{fontSize: 22, fontWeight: '600', textAlign: 'left'}}>
                Leave One Column Out (LOCO): This is a very simplistic approach. It leaves one column out, retrains the model, and then
                computes the differences of each LOCO model to the original model prediction score. 
                If the score changes a lot, the variable that was left out must be important. 
                Depending on model width (amount of features), this approach can be time-consuming.
              </p>

              <p style={{fontSize: 22, fontWeight: '600', textAlign: 'left'}}>
                Accumulated Local Effects (ALE): ALE plots were originally proposed by D. Apley (et al) 
                in the paper “Visualizing the Effects of Predictor Variables in Black Box Supervised 
                Learning Models”. It’s different from PDP in the way that it uses a small window on the features,
                and makes differences between the predictions instead of averages. Since it’s not based on comparing
                averages, ALE is less biased and has better performance. 
              </p>

              <p style={{fontSize: 22, fontWeight: '600', textAlign: 'left'}}>
                Local Interpretable Model-Agnostic Explanations (LIME): LIME was developed by University Of Washington
                researchers to see what happens inside an algorithm by capturing feature interactions. 
                LIME performs various multi-feature perturbations around a particular prediction and measures the results.
                It also handles irregular input.

                When the number of dimensions is high, maintaining local fidelity for such models becomes increasingly hard.
                LIME solves a much more feasible task — finding a model that approximates the original model locally.

                LIME tries to replicate the output of a model through a series of experiments. The creators also introduced 
                SP-LIME, a method for selecting representative and non-redundant predictions, providing a global view of the model to users.
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
            <Accordion.Body> </Accordion.Body>
          </Accordion.Item>

          {/* https://neptune.ai/blog/explainability-auditability-ml-definitions-techniques-tools */}

        </Accordion>

        {/*             
        <Row className={styles["shap_row_offset"] + " " + styles["shap_default_font"]}>
          <Col>
            <ul className={styles["xai_bullet_list"]}>
              <li>Can you explain why the stroke was predicted? </li>
              <li>What can be done to avoid it?</li>
            </ul>
            </Col>
        </Row>

        <Row className={styles["shap_row_offset"] + " " + styles["shap_default_font"]}>
          <Col>
            In order to answer these questions, you will need Explainable AI. 
            Such situations are applicable for various domains such as healthcare, 
            credit risk, product recommendation, and many others.
            </Col>
        </Row>

        <Row className={styles["shap_row_offset"] + " " + styles["shap_default_font"]}>
          <Col>
            Let us start by understanding the patient situation for whom the stroke 
            is predicted. The patient is a male, 67 years of age. He has a medical 
            history of heart diseases, an average glucose level of 228, Body mass index
            of 37. AI has made a prediction that this patient will suffer a stroke.
            </Col>
        </Row>

        <Row className={styles["shap_row_offset"] + " " + styles["shap_default_font"]}>
          <Col>
            Now as a medical professional, you will have to be ready to explain 
            the prediction and let us start with a techniques which will
            help you to do so.
            Here we will not use any sophisticated ways, but a simple data visualization technique.
            The idea is simple.
          </Col>
        </Row>

        <Row className={styles["shap_row_offset"] + " " + styles["shap_default_font"]}>
          <Col>
            <ul className={styles["xai_bullet_list"]}>
              <li>First, take the data which was used for training AI. The training data will
                 have patients which suffered a stroke as well as those who did not.</li>
              <li>Using visualization techniques, analyze what is the difference between the 
                patients who suffered a stroke and those who did not. This will help you 
                understand the factors that cause a stroke.</li>
              <li>You can then compare it with the patient situation. This will help you 
                understand why the patient is at risk.</li>
            </ul>
          </Col>
        </Row>

        <Row className={styles["shap_row_offset"]}>
          <Col>
            <Image
              src={trainingDataUrl}
              width={900}
              height={400}
              />
          </Col>
        </Row> */}


            {/* <Row className={styles["shap_row_offset"] + " " + styles["shap_default_font"]}>
              <Col>
                For Explaining the Model Prediction SHAP (SHapley Additive exPlanations) is used.  
                SHAP is a game theoretic approach to explain the output of any machine learning model. 
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
                    Explainable AI
              </Col>
            </Row>
            <Row className={styles["shap_row_offset"] + " " + styles["shap_default_font"]}>
              <Col>

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
            </Row> */}

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
