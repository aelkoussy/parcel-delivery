import * as actions from "./actions";

// this shall be the initial state of the application, parcel attributes, these shall be increased to 50 as requested
const parcelArray = [
  { id: 1, origin: "Dresden", destination: "Munich", status: "WAITING" },
  {
    id: 2,
    origin: "Berlin",
    destination: "Hamburg",
    status: "ASSIGNED",
    assignee: "Muller",
    assigneeID: 1234
  },
  { id: 3, origin: "Köln", destination: "	Stuttgart", status: "WAITING" },
  {
    id: 4,
    origin: "Dortmund",
    destination: "Essen",
    status: "ASSIGNED",
    assignee: "David",
    assigneeID: 1534
  },
  { id: 5, origin: "Leipzig", destination: "Bremen", status: "WAITING" },
  {
    id: 6,
    origin: "Nürnberg",
    destination: "Munich",
    status: "ASSIGNED",
    assignee: "Günter",
    assigneeID: 1722
  },
  { id: 7, origin: "Duisburg", destination: "Munich", status: "WAITING" },
  { id: 8, origin: "Bochum", destination: "Munich", status: "WAITING" },
  {
    id: 9,
    origin: "Dresden",
    destination: "Wuppertal",
    status: "ASSIGNED",
    assignee: "Hermann",
    assigneeID: 1994
  },
  { id: 10, origin: "Bonn", destination: "Munich", status: "WAITING" },
  { id: 11, origin: "Dresden", destination: "Mannheim", status: "WAITING" },
  { id: 12, origin: "Chemnitz", destination: "Munich", status: "WAITING" }
];

const bikerNames = [
  { name: "Muller" },
  { name: "Ernst" },
  { name: "Friedrich" },
  { name: "Hans" },
  { name: "Heinrich" },
  { name: "Hermann" },
  { name: "Karl" },
  { name: "Otto" },
  { name: "Paul" },
  { name: "Walter" },
  { name: "Wilhelm" }
];

// TODO the userData shall be filled when user login using the LOGIN action
const userData = { role: "biker", name: "Muller", id: 1234 };

const initialState = {
  parcels: parcelArray,
  userData: userData,
  bikerNames: bikerNames
};

// TODO add logged in user data once he login

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ASSIGN_PARCEL:
      return;

    case actions.ENTER_PICKUP_TIMESTAMP:
      return;

    case actions.ENTER_DELIVERY_TIMESTAMP:
      return;

    case actions.LOGIN:
      return;

    default:
      return state;
  }
};

export default reducer;
