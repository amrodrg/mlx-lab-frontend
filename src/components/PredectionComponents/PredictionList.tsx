/* This example requires Tailwind CSS v2.0+ */
import {FC} from 'react';
import {PredictionObjekt} from '../../pages/prediction-page';

const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@exampwrle.com',
    image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@exagrmple.com',
    image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@examasdple.com',
    image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

type Props = {
  predictionList?: PredictionObjekt[]
  explainFunc?: (number) => void
}
const PredictionList: FC<Props> = ({predictionList, explainFunc}) => {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      <div className="ml-3 mt-1">
        <p className="text-2xl font-bold text-sky-900 mt-4 mx-2"> Results: </p>
      </div>
      {predictionList && predictionList.map((prediction) => (
        <li key={prediction.idx} className="py-4 flex">
          <div className="h-10 w-10 rounded-full bg-main-blue">
            <img src={'img/ai-healing-white.svg'} className="h-10 w-10 p-1"/>
          </div>
          <div className="ml-3 mt-1">
            <p className="text-lg font-bold text-gray-900">{prediction.prediction}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PredictionList;
