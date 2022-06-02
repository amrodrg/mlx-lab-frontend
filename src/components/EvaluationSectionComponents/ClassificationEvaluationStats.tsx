/* This example requires Tailwind CSS v2.0+ */
import {MinusIcon, PlusIcon} from '@heroicons/react/solid';
import {FC, useEffect, useState} from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

type Props = {
    loss?: number
    mae?: number
    accuracy?: number
    median?: number
    mean?: number
    isBinary?: boolean
    truePositives?: number
    trueNegatives?: number
    falsePositives?: number
    falseNegatives?: number
}

const ClassificationEvaluationStats: FC<Props> = ({ loss, mae, accuracy, median, mean,
  isBinary, truePositives, trueNegatives, falseNegatives, falsePositives}) => {

  const [totalPositives, setTotalPositives] = useState(0);
  const [totalNegatives, setTotalNegatives] = useState(0);
  const [totalPredicts, setTotalPredicts] = useState(0);

  const [negativesLoss, setNegativesLoss] = useState(0);
  const [positivesLoss, setPositivesLoss] = useState(0);


  const calculatePerformanceValues = () => {
    const totalPositivesNumb = truePositives + falsePositives;
    const totalNegativesNumb = trueNegatives + falseNegatives;
    const totalPredicts = truePositives + falseNegatives + trueNegatives + falsePositives;

    if (totalPositivesNumb) {
      const positivesToAllPredP = (truePositives/totalPositivesNumb) * 100;
      const accu = 100 - positivesToAllPredP;
      setPositivesLoss(accu);
    }

    if (totalNegativesNumb) {
      const negativeToAllPredN = (trueNegatives/totalNegativesNumb) * 100;
      const accu = 100 - negativeToAllPredN;
      setNegativesLoss(accu);
    }

    setTotalPositives(totalPositivesNumb);
    setTotalNegatives(totalNegativesNumb);
    setTotalPredicts(totalPredicts);
  };
  


  const stats = [
    { name: 'Number of true predictions from positive predictions', positiveEffect: false, stat: truePositives||truePositives === 0? truePositives: '0', previousStat: totalPositives||totalPositives === 0? totalPositives: '0', change: (positivesLoss).toFixed(2) + '%', changeType: 'decrease' },
    { name: 'Number of true predictions from negative predictions', positiveEffect: false, stat: trueNegatives||trueNegatives === 0? trueNegatives: '0', previousStat: totalNegatives||totalNegatives === 0? totalNegatives: '0', change: (negativesLoss.toFixed(2)) + '%', changeType: 'decrease' },
    { name: 'Model Accuracy', positiveEffect: true, stat: accuracy||accuracy === 0? accuracy * 100 + '%': '0' + '%', previousStat: '100%', change: (100 - (accuracy * 100)) + '%', changeType: 'decrease' },
  ];


  useEffect(() => {
    calculatePerformanceValues();
  }, [truePositives, trueNegatives, falsePositives, falseNegatives]);
    
  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">Evaluation Values: </h3>
      {isBinary
        ?
        <dl
          className="mt-3 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 sm:p-6">

              <dt className="text-base font-normal text-gray-900">{item.name}</dt>
              <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div
                  className={classNames(item.positiveEffect ? 'text-green-600 text-4xl mt-3' : 'text-main-blue text-2xl', 'flex items-baseline font-semibold')}>
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

                  <span
                    className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                  {item.change}
                </div>
              </dd>

            </div>
          ))}
        </dl>
        :
        <dl
          className="mt-3 justify-center items-center grid grid-cols-1 rounded-lg bg-white shadow divide-y divide-gray-200 md:grid-cols-1 md:divide-y-0 md:divide-x">

          <div key='Model Accuracy' className="flex flex-col px-4 py-5 sm:p-6 items-center">

            <dt className="text-xl font-medium text-gray-900">Model Accuracy</dt>

            <dd className="mt-4 flex justify-center space-x-12 items-baseline md:block lg:flex">
              <div
                className={classNames('text-green-600', 'flex items-baseline text-3xl font-semibold')}>
                {accuracy||accuracy === 0? accuracy * 100 + '%': '0' + '%'}
                <span className="ml-4 text-sm font-medium text-gray-500"> from {'100%'}</span>
              </div>

              <div
                className={classNames(
                  'bg-red-100 text-red-800',
                  'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >

                <MinusIcon
                  className="-ml-1 mr-0.5 flex-shrink-0 self-center h-4 w-4 text-red-500"
                  aria-hidden="true"
                />

                <span
                  className="sr-only">{'Decreased'} by</span>
                {(100 - (accuracy * 100)) + '%'}
              </div>
            </dd>

          </div>
        </dl>
      }
    </div>
  );
};

export default ClassificationEvaluationStats;
