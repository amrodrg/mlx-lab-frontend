import BuildindSection from '../pages-sections/BuildingSection';
import NamingSection from '../pages-sections/NamingSection';
import DataSection from '../pages-sections/DataSection';
import CompilingSection from '../pages-sections/CompilingSection';
import DataFittingSection from '../pages-sections/DataFittingSection';

export default function BuildRegression() {
  return(
    <div>
      <DataSection/>
      <NamingSection/>
      <BuildindSection/>
      <CompilingSection/>
      <DataFittingSection/>
    </div>);
}

