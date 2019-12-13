import {ACTION} from '../constants';

const initialState = {
    images = []
}

const imagesReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION.ADD_IMAGES :
            return {
                ...state,
                images: [...images, ...action.images],
            }
        default : 
            return state;
    }
}

export default imagesReducer;