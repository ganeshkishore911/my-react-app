import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    mode:"light",
    text:"",
    name:"kishore",
    counter:2
}
const themeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
        toggleTheme:(state)=>{
            state.mode=state.mode==="light"?"dark":"light"
        },
        setText:(state,action)=>{
            state.text=action.payload
        },
        name:(state)=>{
            state.name=state.name
        },
        increament:(state)=>{
            state.counter+=1
        },
        decreament:(state)=>{
            state.counter-=1
        },
        reset:(state)=>{
            state.counter=0
        }
    }
})
export const{toggleTheme,setText,name,increament,decreament,reset}=themeSlice.actions
export default themeSlice.reducer;