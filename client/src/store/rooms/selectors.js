const reducer = 'roomsReducer';

export const roomsDataSelector = state => state[reducer].rooms;
export const isFetchRoomsSelector = state => state[reducer].isFetchRooms;