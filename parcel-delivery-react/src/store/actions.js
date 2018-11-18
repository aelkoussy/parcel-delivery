import axios from "axios";

export const ENTER_PICKUP_TIMESTAMP = "ENTER_PICKUP_TIMESTAMP";
export const ENTER_DELIVERY_TIMESTAMP = "ENTER_DELIVERY_TIMESTAMP";
export const ASSIGN_PARCEL = "ASSIGN_PARCEL";
export const LOGIN = "LOGIN";
export const GET_PARCELS = "GET_PARCELS";
export const GET_BIKERS = "GET_BIKERS";
export const GET_BIKER_PARCELS = "GET_BIKER_PARCELS";

export const assignParcel = (parcelID, chosenBiker, updatedParcel) => {
  return { type: ASSIGN_PARCEL, parcelID, chosenBiker, updatedParcel };
};

export const assignParcelAsync = (parcelID, chosenBiker) => {
  return dispatch => {
    axios
      .put("/parcel/assign", {
        parcelID: parcelID,
        UserID: chosenBiker.id,
        status: "ASSIGNED"
      })
      .then(response =>
        dispatch(assignParcel(parcelID, chosenBiker, response.data.parcel))
      )
      .catch(console.log("Sorry, something went wrong"));
  };
};

export const enterPickupTime = (parcelID, updatedParcel) => {
  return { type: ENTER_PICKUP_TIMESTAMP, parcelID, updatedParcel };
};

export const enterPickupTimeAsync = (parcelID, pickupTime) => {
  return dispatch =>
    axios
      .put("/parcel/submitPickupTimestamp", {
        parcelID: parcelID,
        pickupTimestamp: pickupTime
      })
      .then(response =>
        dispatch(enterPickupTime(parcelID, response.data.parcel))
      )
      .catch(console.log("Sorry, something went wrong"));
};
export const enterDeliveryTime = (parcelID, updatedParcel) => {
  return { type: ENTER_DELIVERY_TIMESTAMP, parcelID, updatedParcel };
};

export const enterDeliveryTimeAsync = (parcelID, deliveryTime) => {
  return dispatch =>
    axios
      .put("/parcel/submitDeliveryTimestamp", {
        parcelID: parcelID,
        deliveryTimestamp: deliveryTime
      })
      .then(response =>
        dispatch(enterDeliveryTime(parcelID, response.data.parcel))
      )
      .catch(console.log("Sorry, something went wrong"));
};

// TODO The getter actions below shall be called in the ManagerLayout & BikerLayout, when user is redirected after validation
// & all requests to API shall include the jwt (except ONLY the login request call)

export const getParcels = parcels => {
  console.log(parcels);
  return {
    type: GET_PARCELS,
    parcels
  };
};

export const getParcelsAsync = () => {
  return dispatch => {
    axios
      .get("/parcels")
      .then(response => dispatch(getParcels(response.data.parcels)))
      .catch(console.log("Sorry, something went wrong"));
  };
};

export const getBikers = bikers => {
  console.log(bikers);
  return { type: GET_BIKERS, bikers };
};

export const getBikersAsync = () => {
  return dispatch => {
    axios
      .get("/users/bikersData")
      .then(response => dispatch(getBikers(response.data.bikers)))
      .catch(console.log("Sorry, something went wrong"));
  };
};

export const getBikerParcels = bikerParcels => {
  return { type: GET_BIKER_PARCELS, bikerParcels };
};

export const getBikerParcelsAsync = () => {
  return dispatch => {
    axios
      .get("/user/parcels")
      .then(response => dispatch(getBikerParcels(response.data.parcels)))
      .catch(console.log("Sorry, something went wrong"));
  };
};

export const login = authDetails => {
  console.log(authDetails);
  sessionStorage.setItem("jwtToken", authDetails.token);
  return { type: LOGIN, authDetails };
};

export const loginAsync = (email, password) => {
  return dispatch => {
    axios
      .post("/user/login/", {
        email: email,
        password: password
      })
      // response here contains token, firstName, lastName, role
      .then(response => dispatch(login(response.data)))
      .catch(console.log("Sorry, something went wrong"));
  };
};
