// Incoming Data Types
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

interface MLModel{
    class_name?: string
    config?: MConfig
}

interface Layer {
    layerId:number
    neuronsNum:number
    activationFun:string
}

export type {Layer};
