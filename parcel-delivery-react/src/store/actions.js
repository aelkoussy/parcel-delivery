export const ENTER_PICKUP_TIMESTAMP = "ENTER_PICKUP_TIMESTAMP";
export const ENTER_DELIVERY_TIMESTAMP = "ENTER_DELIVERY_TIMESTAMP";
export const ASSIGN_PARCEL = "ASSIGN_PARCEL";
export const LOGIN = "LOGIN";

export const assignParcel = (parcelID, bikerID) => {
  console.log("action was called");
  console.log(parcelID);
  console.log(bikerID);
  return {
    type: ASSIGN_PARCEL,
    parcelID,
    bikerID
  };
};

export const enterPickupTime = (parcelID, pickupTime) => {
  console.log(parcelID);
  console.log(pickupTime);
  return { type: ENTER_PICKUP_TIMESTAMP, parcelID, pickupTime };
};
export const enterDeliveryTime = (parcelID, deliveryTime) => {
  console.log(parcelID);
  console.log(deliveryTime);
  return { type: ENTER_DELIVERY_TIMESTAMP, parcelID, deliveryTime };
};
