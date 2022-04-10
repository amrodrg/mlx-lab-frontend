/* This example requires Tailwind CSS v2.0+ */
import {MinusIcon, PlusIcon} from '@heroicons/react/solid';
import {FC} from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

type Props = {
    loss?: number
    mae?: number
    accuracy?: number
}

const EvaluationStats: FC<Props> = ({ loss, mae, accuracy}) => {

  const stats = [
    { name: 'Loss in Prediction to Mean Value', stat: loss? loss: '0', previousStat: '70,946', change: '12%', changeType: 'increase' },
    { name: 'Loss in Prediction to Median Value', stat: mae? mae: '0', previousStat: '56.14', change: '2.02%', changeType: 'increase' },
    { name: 'Model Accuracy', stat: accuracy||accuracy === 0? accuracy: '0%', previousStat: '100%', change: '76.00%', changeType: 'decrease' },
  ];
    
  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">Evaluation Values: </h3>
      <dl className="mt-3 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">

            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-main-blue">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-gray-500">from {item.previousStat}</span>
              </div>

              <div
                className={classNames(
                  item.changeType === 'increase' ? 'bg-red-100 text-red-800' : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                {item.changeType === 'increase' ? (
                  <PlusIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-4 w-4 text-red-500"
                    aria-hidden="true"
                  />
                ) : (
                  <MinusIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-4 w-4 text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                {item.change}
              </div>
            </dd>

          </div>
        ))}
      </dl>
    </div>
  );
};

export default EvaluationStats;
