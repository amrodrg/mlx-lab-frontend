import Stats from '../components/stats';
import {List} from 'postcss/lib/list';

interface LayerConfig {
  batch_input_shape?:List
  dtype?:number
  sparse?:boolean
  ragged?:boolean
  name?:string
}

interface MLayer {
  class_name?:string
  config?:LayerConfig
}

interface MConfig {
  name?:string
  layers: MLayer[]
}

interface MLData {
  class_name?: string
  config?: MConfig
}

interface IProps {
    mlData:MLData
}

export default function Amr(props: IProps) {
  
  console.log(props.mlData.config.layers);

  return (
    <>
      <div className="min-h-full">

        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">{'Layers:'}</h1>
              <h2 className="text-3xl font-bold leading-tight text-gray-900">{props.mlData.config.layers.map(layer =>(<div key={layer.class_name}>{layer.class_name}</div>))}</h2>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-8 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
              </div>
              {/* /End replace */}
            </div>
            <Stats/>
          </main>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context: any) {

  const mlmodel = await fetch('http://127.0.0.1:8000/');

  const mlData = await  mlmodel.json();


  return {
    props: {mlData},
    revalidate: 60
  };
}


// export async function getServerSideProps(context: any) {
//     const res = await fetch('https://api.around.pet/v1/places/pin/1');
//
//     const data = await res.json();
//
//     data.data.city = 'test';
//     console.log(data)
//
//     return {
//         props: data,
//     }
// }
