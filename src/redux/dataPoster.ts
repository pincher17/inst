import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { instAPI } from '../api/instapi';

type initialStateType ={
    dataPoster: {}
    limit: number
}

const initialState: initialStateType ={
    dataPoster: {},
    limit: 10,
}

const allComments = createSlice({
    name: 'dataPoster',
    initialState,
    reducers: {
        addDataPoster(state, action:PayloadAction<any>) {
            state.dataPoster = action.payload;
        },
    },
});

export const {addDataPoster} = allComments.actions;


/* export const getAllComments = (shortcode: any) =>{
    return (dispatch: any) => {

        console.log('send response')
        getServerSideProps.then((response: any) =>{
            dispatch(addComments(response.data))
            console.log(response.data)
    })
    }
}
 */

export default allComments.reducer;