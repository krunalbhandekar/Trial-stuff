import * as types from "./action.types"

export const ADD=(item)=>(dispatch)=>{
        dispatch({type:types.ADD,payload:item})
}

export const REMOVEONE=(item)=>(dispatch)=>{
    dispatch({type:types.REMOVEONE,payload:item})
}

export const REMOVECART=(id)=>(dispatch)=>{
    dispatch({type:types.REMOVECART,payload:id})
}