import * as actions from "./actions";

const parcelArray = [];
const bikerArray = [];
const bikerParcels = [];

const initialState = {
  parcels: parcelArray,
  bikers: bikerArray,
  bikerParcels: bikerParcels
};

// TODO add logged in user data once he login

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ASSIGN_PARCEL:
      return {
        ...state,
        parcels: state.parcels.map(parcel =>
          parcel.id === action.parcelID
            ? {
                ...parcel,
                ...action.updatedParcel // getting the updated parcel from the API to make sure it was really updated in DB
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
                ...action.updatedParcel // getting the updated parcel from the API to make sure it was really updated in DB
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
                ...action.updatedParcel // getting the updated parcel from the API to make sure it was really updated in DB
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
