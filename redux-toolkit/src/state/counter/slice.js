import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:0,
    isLoading:false
};

const counterSlice =createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        incrementByValue:(state, action)=>{
            state.value +=action.payload
        },
         decrement:(state)=>{
            state.value -=1
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(incrementAsync.pending,(state)=>{
            state.isLoading = true;
        })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.isLoading = false;
      });
    }
})

export const incrementAsync = createAsyncThunk('counter/incrementAsync',async(value)=>{
    await new Promise((resolve)=>setTimeout(resolve,1500));
    return value
})

export const { increment, incrementByValue, decrement } = counterSlice.actions

export default counterSlice.reducer