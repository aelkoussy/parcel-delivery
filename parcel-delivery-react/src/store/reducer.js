import * as actions from "./actions";

// this shall be the initial state of the application, parcel attributes, these shall be increased to 50 as requested
const parcelArray = [
  { id: 1, origin: "Dresden", destination: "Munich", status: "WAITING" },
  { id: 2, origin: "Berlin", destination: "Hamburg", status: "WAITING" },
  { id: 3, origin: "Köln", destination: "	Stuttgart", status: "WAITING" },
  { id: 4, origin: "Dortmund", destination: "Essen", status: "WAITING" },
  { id: 5, origin: "Leipzig", destination: "Bremen", status: "WAITING" },
  { id: 6, origin: "Nürnberg", destination: "Munich", status: "WAITING" },
  { id: 7, origin: "Duisburg", destination: "Munich", status: "WAITING" },
  { id: 8, origin: " Bochum", destination: "Munich", status: "WAITING" },
  { id: 9, origin: "Dresden", destination: "Wuppertal", status: "WAITING" },
  { id: 10, origin: "Bonn", destination: "Munich", status: "WAITING" },
  { id: 11, origin: "Dresden", destination: "Mannheim", status: "WAITING" },
  { id: 12, origin: " Chemnitz", destination: "Munich", status: "WAITING" }
];

const initialState = {
  parcelArray
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ASSIGN_PARCEL:
      return;

    case actions.ENTER_PICKUP_TIMESTAMP:
      return;

    case actions.ENTER_DELIVERY_TIMESTAMP:
      return;

    default:
      return state;
  }
};

export default reducer;
