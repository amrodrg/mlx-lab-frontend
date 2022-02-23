import {PlusSmIcon as PlusSmIconSolid} from '@heroicons/react/solid';
import {Col, Container, Row} from 'react-bootstrap';

export default function HiddenLayer(props) {
  return (

    <Container style={{margin: 10, justifyContent:'start'}}>
      <Row>

        <Col xs={2} style={{marginTop:5}}>
          {/* eslint-disable-next-line react/prop-types */}
          <h5 style={{color: '#0079C1'}}>Layer {props.number}</h5>
        </Col>

        <Col xs={4}>
          <Container>
            <Row>
              <Col>
                <button
                  type="button"
                  className="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-main-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />
                </button>
              </Col>

              <Col>
                <h5>3</h5>
              </Col>


              <Col>
                <button
                  type="button"
                  className="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-main-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />
                </button>
              </Col>

            </Row>
          </Container>
        </Col>

        <Col>
          <div style={{borderRadius:'1rem', border:' 2px solid #0079C1', padding:3, display:'flex', justifyContent: 'start'}}>
            <h6 style={{margin:2}}>ReLu</h6>
          </div>
        </Col>



      </Row>


    </Container>

  );
}
