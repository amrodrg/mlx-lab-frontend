import { margin } from '@mui/system';
import * as React from 'react';
// @material-ui/icons
// core components
import MainShapSection from '../../pages-sections/Components-Sections/Shap/MainShapSection.js';
import logoUrl from '../../static-images/shap_header.png';
import Image from 'next/image'
import { Container, Row, Col } from "reactstrap";


export default function ShapIndex() {
  return (
    <div>
      <Container>
        <Row>
          <Col md>
            <Image
              src={logoUrl}
              
            />
          </Col>
        </Row>
        <Row>
          <Col lg>
          <MainShapSection/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
