import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Stats from "../components/stats";

interface data {
    city?: string
    zipcode?: number
}

interface IProps {
    data: data
}

export default function Amr(props: IProps) {

    return (
        <>
            <div className="min-h-full">

                <div className="py-10">
                    <header>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">{props.data.city} {props.data.zipcode}</h1>
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
    )
}

export async function getStaticProps(context: any) {

    const res = await fetch('https://api.around.pet/v1/places/pin/1');

    const data = await res.json();

    data.data.city = 'test';
    console.log(data)

    return {
        props: data,
        revalidate: 60
    }
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
