import { createSlice } from "@reduxjs/toolkit";
import DigitalMarket from '../../Asset/pics/Dm.png'
import WD from '../../Asset/pics/Wd.png'
import MobileApp from '../../Asset/pics/MAD.png'
import Its from '../../Asset/pics/ItS.png'
import IOT from '../../Asset/pics/Iot.png'
import uxui from '../../Asset/pics/UUD.png'
const initialState ={
    value:[
        {
            id:'1',
            img:DigitalMarket,
            CardName:"DIGITAL MARKETING",
            Content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            color:'digitalMarkating',
            Link:'/',
        },
        {
            id:'2',
            img:WD,
            CardName:"WEB DEVELOPMENT",
            Content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            Link:'/',
            color:"webDev" 
        },
        {
            id:'3',
            img:MobileApp,
            CardName:"APP DEVELOPMENT",
            Content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            Link:'/',
            color:"appDev",
        },
        {
            id:"4",
            img:Its,
            CardName:"IT SERVICES",
            Content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            Link:'/',
            color:"Itsupport"
        },
        {
            id:'5',
            img:IOT,
            CardName:"IOT",
            Content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            Link:'/',
            color:"iot"
        },
        {
            id:'6',
            img:uxui,
            CardName:"UX UI DESIGNING",
            Content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            Link:'/',
            color:"uxui"
        },

    ]
}

export const surviceApiSlice = createSlice({
    name:'SurviceApi',
    initialState,
    reducers:{

    }
})
export const {} = surviceApiSlice.actions;
export default surviceApiSlice.reducer