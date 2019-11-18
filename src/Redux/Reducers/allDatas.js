import {
    combineReducers
} from 'redux';
import carts from "./carts"
import locations from "./locations"
import images from "./images"

const allReducers = combineReducers({
    carts: carts,
    locations: locations,
    images: images
})

export default allReducers