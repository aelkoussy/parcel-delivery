import * as actions from "./actions";

// this shall be the initial state of the application, parcel attributes, these shall be increased to 50 as requested
const parcelArray = [];

const bikerArray = [];
const bikerParcels = [];

// TODO the userData shall be filled when user login using the LOGIN action
// const userData = { role: "biker", name: "Muller", id: 1 };

const initialState = {
  parcels: parcelArray,
  bikers: bikerArray,
  bikerParcels: bikerParcels
};

// TODO add logged in user data once he login

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ASSIGN_PARCEL:
      // here we grab the chosenBiker object
      // const chosenBiker = state.bikers.find(i => i.id === action.bikerID);
      return {
        ...state,
        parcels: state.parcels.map(parcel =>
          parcel.id === action.parcelID
            ? {
                ...parcel,
                UserID: action.chosenBiker.id,
                status: "ASSIGNED"
              }
            : parcel
        )
      };

    case actions.ENTER_PICKUP_TIMESTAMP:
      return {
        ...state,
        parcels: state.parcels.map(parcel =>
          parcel.id === action.parcelID
            ? {
                ...parcel,
                pickupTime: action.pickupTime,
                status: "PICKED_UP"
              }
            : parcel
        )
      };

    case actions.ENTER_DELIVERY_TIMESTAMP:
      return {
        ...state,
        parcels: state.parcels.map(parcel =>
          parcel.id === action.parcelID
            ? {
                ...parcel,
                deliveryTime: action.deliveryTime,
                status: "DELIVERED"
              }
            : parcel
        )
      };

    case actions.LOGIN:
      return {
        ...state,
        authDetails: action.authDetails,
        role: action.authDetails.role
      };

    case actions.GET_PARCELS:
      console.log(action);
      return { ...state, parcels: action.parcels };

    case actions.GET_BIKERS:
      return { ...state, bikers: action.bikers };
    case actions.GET_BIKER_PARCELS:
      return { ...state, parcels: action.bikerParcels };

    default:
      return state;
  }
};

export default reducer;
