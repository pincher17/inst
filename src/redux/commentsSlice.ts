import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { instAPI } from '../api/instapi';

type initialStateType ={
    comments: []
    limit: number
}

const initialState: initialStateType ={
    comments: [],
    limit: 10,
}

const allComments = createSlice({
    name: 'allComments',
    initialState,
    reducers: {
        addComments(state, action:PayloadAction<any>) {
            state.comments = action.payload;
        },
    },
});

export const {addComments} = allComments.actions;


export const getAllComments = (shortcode: any) =>{
    return (dispatch: any) => {

        console.log('send response')
        instAPI.getComments(shortcode).then((response: any) =>{
            dispatch(addComments(response.data))
            console.log(response.data)
    })
    }
}


export default allComments.reducer;