import BuildindSection from '../pages-sections/BuildingSection';
import NamingSection from '../pages-sections/NamingSection';
import DataImportingSection from '../pages-sections/DataImportingSection';
import CompilingSection from '../pages-sections/CompilingSection';
import DataFittingSection from '../pages-sections/DataFittingSection';
import RegressionHeader from '../components/RegressionHeader';

export default function BuildRegression() {
  return(
    <div>
      <RegressionHeader/>
      <DataImportingSection/>
      <NamingSection/>
      <BuildindSection/>
      <CompilingSection/>
      <DataFittingSection/>
    </div>);
}

