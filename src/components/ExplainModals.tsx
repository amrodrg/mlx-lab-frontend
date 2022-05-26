import Modal from 'react-bootstrap/Modal';
import React, {Dispatch, FC, SetStateAction} from 'react';


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
                    It is the name of the row that contains the labels of your
                    training and testing data.
                    (The calculated value)
        </p>
      </Modal.Body>
    </Modal>

  );
};

export {ExplainModalDataLink, ExplainModalLabelName};
