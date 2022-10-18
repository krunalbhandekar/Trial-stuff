import * as types from "./action.types"

const initialstate={
    carts:[]
}

export const reducer =(state=initialstate,action)=>{
    let {type,payload}=action
    switch(type){
        case types.ADD:{
            const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === payload.id); 

            if(IteamIndex >= 0){
            state.carts[IteamIndex].qnty +=1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            const temp = {...payload,qnty:1}
             return {
                ...state,
                carts: [...state.carts, temp]
            }
        }
        }

        case types.REMOVECART:{
             const data = state.carts.filter((el)=>el.id !== payload); 

            return {
                ...state,
                carts:data
            }
        }

        case types.REMOVEONE:{
            const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === payload.id);
   
            if(state.carts[IteamIndex_dec].qnty >= 1){
                const dltiteams = state.carts[IteamIndex_dec].qnty -= 1
                // console.log([...state.carts,dltiteams]);

                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else if(state.carts[IteamIndex_dec].qnty === 1 ){
                const data = state.carts.filter((el)=>el.id !== payload);

                return {
                    ...state,
                    carts:data
                }
            }
        }
         default:{ 
            return state
        }
    }
}