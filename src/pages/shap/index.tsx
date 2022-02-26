import { margin } from '@mui/system';
import * as React from 'react';
// @material-ui/icons
// core components
import MainShapSection from '../../pages-sections/Components-Sections/Shap/MainShapSection.js';
import logoUrl from '../../static-images/shap_header.png';
import Image from 'next/image'

export default function ShapIndex() {
  return (
    <div>
      <div>
        <div style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}>

        <Image
          src={logoUrl}
          width={850}
          height={400}
        />
      </div>
        <MainShapSection/>
      </div>
    </div>
  );
}
