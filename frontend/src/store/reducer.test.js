import reducer from "./reducer";
import * as actions from "./actions";

describe("Reducer:", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      parcels: [],
      bikers: [],
      bikerParcels: []
    });
  });

  it("should return initial state even if wrong action is passed", () => {
    expect(
      reducer(
        {
          parcels: [
            {
              id: 456,
              origin: "Berlin",
              destination: "Hamburg",
              status: "WAITING"
            }
          ],
          bikers: [],
          bikerParcels: []
        },
        {
          type: actions.WRONG_ACTION,
          parcelID: 123,
          updatedParcel: {
            id: 123,
            origin: "Berlin",
            destination: "Hamburg",
            status: "ASSIGNED",
            UserID: 1
          }
        }
      )
    ).toEqual({
      parcels: [
        {
          id: 456,
          origin: "Berlin",
          destination: "Hamburg",
          status: "WAITING"
        }
      ],
      bikers: [],
      bikerParcels: []
    });
  });

  it("should assign parcel if it is id is loaded in state parcels array & change its status to ASSIGNED & update its UserID ", () => {
    expect(
      reducer(
        {
          parcels: [
            {
              id: 123,
              origin: "Berlin",
              destination: "Hamburg",
              status: "WAITING"
            }
          ],
          bikers: [],
          bikerParcels: []
        },
        {
          type: actions.ASSIGN_PARCEL,
          parcelID: 123,
          updatedParcel: {
            id: 123,
            origin: "Berlin",
            destination: "Hamburg",
            status: "ASSIGNED",
            UserID: 1
          }
        }
      )
    ).toEqual({
      parcels: [
        {
          id: 123,
          origin: "Berlin",
          destination: "Hamburg",
          status: "ASSIGNED",
          UserID: 1
        }
      ],
      bikers: [],
      bikerParcels: []
    });
  });

  it("should update parcel pickup timestamp & status if it is id is loaded in state parcels array & save the updated parcel recieved from API", () => {
    expect(
      reducer(
        {
          parcels: [
            {
              id: 123,
              origin: "Berlin",
              destination: "Hamburg",
              status: "WAITING"
            }
          ],
          bikers: [],
          bikerParcels: []
        },
        {
          type: actions.ENTER_PICKUP_TIMESTAMP,
          parcelID: 123,
          updatedParcel: {
            id: 123,
            origin: "Berlin",
            destination: "Hamburg",
            status: "PICKED_UP",
            UserID: 1,
            pickupTimestamp: "2018-11-19T00:48:49.304"
          }
        }
      )
    ).toEqual({
      parcels: [
        {
          id: 123,
          origin: "Berlin",
          destination: "Hamburg",
          status: "PICKED_UP",
          UserID: 1,
          pickupTimestamp: "2018-11-19T00:48:49.304"
        }
      ],
      bikers: [],
      bikerParcels: []
    });
  });
  it("should update parcel delivery timestamp & status if it is id is loaded in state parcels array by saving the updated parcel recieved from API", () => {
    expect(
      reducer(
        {
          parcels: [
            {
              id: 123,
              origin: "Berlin",
              destination: "Hamburg",
              status: "PICKED_UP"
            }
          ],
          bikers: [],
          bikerParcels: []
        },
        {
          type: actions.ENTER_DELIVERY_TIMESTAMP,
          parcelID: 123,
          updatedParcel: {
            id: 123,
            origin: "Berlin",
            destination: "Hamburg",
            status: "DELIVERED",
            UserID: 1,
            deliveryTimestamp: "2018-11-19T00:48:49.304"
          }
        }
      )
    ).toEqual({
      parcels: [
        {
          id: 123,
          origin: "Berlin",
          destination: "Hamburg",
          status: "DELIVERED",
          UserID: 1,
          deliveryTimestamp: "2018-11-19T00:48:49.304"
        }
      ],
      bikers: [],
      bikerParcels: []
    });
  });

  it("on successful login, fill the state with login data from the backend response ", () => {
    expect(
      reducer(
        {},
        {
          type: actions.LOGIN,
          authDetails: {
            token: "secretToken",
            firstName: "Muller",
            role: "manager"
          }
        }
      )
    ).toEqual({
      authDetails: {
        firstName: "Muller",
        role: "manager",
        token: "secretToken"
      },
      role: "manager",
      userFirstName: "Muller"
    });
  });
  it("fill the state with parcels recieved from the API & override any parcel array in state", () => {
    expect(
      reducer(
        {
          parcels: [
            {
              id: 123, // note how this shall disappear
              origin: "Berlin",
              destination: "Hamburg",
              status: "WAITING"
            }
          ],
          bikers: [],
          bikerParcels: []
        },
        {
          type: actions.GET_PARCELS,
          parcels: [
            {
              id: 982,
              origin: "Koln",
              destination: "Dusseldurf",
              status: "WAITING"
            },
            {
              id: 985,
              origin: "Koln",
              destination: "Dusseldurf",
              status: "WAITING"
            }
          ]
        }
      )
    ).toEqual({
      parcels: [
        {
          id: 982,
          origin: "Koln",
          destination: "Dusseldurf",
          status: "WAITING"
        },
        {
          id: 985,
          origin: "Koln",
          destination: "Dusseldurf",
          status: "WAITING"
        }
      ],
      bikers: [],
      bikerParcels: []
    });
  });

  it("Get bikers data from API & overwrite current bikers data state", () => {
    expect(
      reducer(
        {
          bikers: [],
          bikerParcels: []
        },
        {
          type: actions.GET_BIKERS,
          bikers: [
            {
              id: 982,
              origin: "Koln",
              destination: "Dusseldurf",
              status: "WAITING"
            },
            {
              id: 985,
              origin: "Koln",
              destination: "Dusseldurf",
              status: "WAITING"
            }
          ]
        }
      )
    ).toEqual(
      // note how this shall disappear
      {
        bikers: [
          {
            id: 982,
            origin: "Koln",
            destination: "Dusseldurf",
            status: "WAITING"
          },
          {
            id: 985,
            origin: "Koln",
            destination: "Dusseldurf",
            status: "WAITING"
          }
        ],
        bikerParcels: []
      }
    );
  });

  it("Get biker parcels from API for this user & overwrite current biker data state", () => {
    expect(
      reducer(
        {
          parcels: [
            {
              id: 123,
              origin: "Berlin",
              destination: "Hamburg",
              status: "WAITING"
            }
          ],
          bikers: [],
          bikerParcels: []
        },
        {
          type: actions.GET_BIKER_PARCELS,
          bikerParcels: [
            {
              id: 982,
              origin: "Koln",
              destination: "Dusseldurf",
              status: "WAITING"
            },
            {
              id: 985,
              origin: "Koln",
              destination: "Dusseldurf",
              status: "WAITING"
            }
          ]
        }
      )
    ).toEqual(
      // note how this shall disappear
      {
        parcels: [
          {
            id: 982,
            origin: "Koln",
            destination: "Dusseldurf",
            status: "WAITING"
          },
          {
            id: 985,
            origin: "Koln",
            destination: "Dusseldurf",
            status: "WAITING"
          }
        ],
        bikers: [],
        bikerParcels: []
      }
    );
  });

  it("assignPacel should create an action to assign pacel", () => {
    const expectedAction = {
      type: actions.ASSIGN_PARCEL,
      parcelID: 123,
      updatedParcel: {
        id: 123,
        origin: "Berlin",
        destination: "Hamburg",
        status: "PICKED_UP",
        UserID: 1,
        pickupTimestamp: "2018-11-19T00:48:49.304"
      }
    };
    expect(
      actions.assignParcel(123, {
        id: 123,
        origin: "Berlin",
        destination: "Hamburg",
        status: "PICKED_UP",
        UserID: 1,
        pickupTimestamp: "2018-11-19T00:48:49.304"
      })
    ).toEqual(expectedAction);
  });
});
