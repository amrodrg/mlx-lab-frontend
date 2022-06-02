import Modal from 'react-bootstrap/Modal';
import React, {Dispatch, FC, SetStateAction} from 'react';
import Link from 'next/link';


type Props = {
    showExampleModal: boolean
    setShowExampleModal: Dispatch<SetStateAction<boolean>>
}

const ExplainModalDataLink: FC<Props> = ({showExampleModal, setShowExampleModal}) => {
  return (
    <Modal
      show={showExampleModal}
      onHide={() => setShowExampleModal(false)}
      dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title>
                    Custom Modal Styling
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
            Give here a Link to CSV file that is saved on your google drive.
            Make sure that the csv file you are using has a complete set of data.
            That means: every example has the complete set of features.
        </p>
      </Modal.Body>
    </Modal>

  );
};

const ExplainModalLabelName: FC<Props> = ({showExampleModal, setShowExampleModal}) => {
  return (
    <Modal
      show={showExampleModal}
      onHide={() => setShowExampleModal(false)}
      dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title>
                    The name of labels
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="px-1 py-2"
          src="img/labelsName.png"
        />
        <p>
                    It is the name of the column that contains the labels of your
                    training and testing data.
                    (The calculated value)
        </p>
      </Modal.Body>
    </Modal>

  );
};

const ExplainRegression: FC<Props> = ({showExampleModal, setShowExampleModal}) => {
  return (
    <Modal
      show={showExampleModal}
      onHide={() => setShowExampleModal(false)}
      dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title>
                   Regression
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
                    A regression model tries to predict a continuos value.
        </p>
      </Modal.Body>
    </Modal>

  );
};

const ExplainClassification: FC<Props> = ({showExampleModal, setShowExampleModal}) => {
  return (
    <Modal
      show={showExampleModal}
      onHide={() => setShowExampleModal(false)}
      dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title>
                    Classification
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
                    A classification modell can predict if a given data point belongs to a class or another.
        </p>
      </Modal.Body>
    </Modal>

  );
};

const ExplainNormalization: FC<Props> = ({showExampleModal, setShowExampleModal}) => {
  return (
    <Modal
      show={showExampleModal}
      onHide={() => setShowExampleModal(false)}
      dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title>
                    Normalization
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
            Scaling all values from their original range to, e.g. between 0 and 100,000, to be between 0 and 1.
            This is done by subtracting the minimum value then dividing by the maximum value minus the minmum.
            This is also referred to as min-max scaling.
        </p>
      </Modal.Body>
    </Modal>

  );
};

const ExplainBuilding: FC<Props> = ({showExampleModal, setShowExampleModal}) => {
  return (
    <Modal
      show={showExampleModal}
      onHide={() => setShowExampleModal(false)}
      dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title>
            Typical architectures of neural networks
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
            The following are some standard values you will often use in your regression and classification neural networks.
          <br/>
          <br/>
            Typical architecture of a regression neural network:
          <img
            className="px-1 py-2"
            src="img/Typical architecture of regression.png"
          />

            Typical architecture of a binary und multiclass classification neural network:
          <img
            className="px-1 py-2"
            src="img/Typical architecture of classification.png"
          />

          <br/>
            Source: Adapted from Chapter 10 tables 10.1 und 10.2 of
          <Link href="https://learning.oreilly.com/library/view/hands-on-machine-learning/9781492032632/">
             Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow Book by Aurélien Géron
          </Link>
        </p>
      </Modal.Body>
    </Modal>

  );
};


export {ExplainModalDataLink, ExplainModalLabelName, ExplainRegression, ExplainClassification, ExplainNormalization, ExplainBuilding};
