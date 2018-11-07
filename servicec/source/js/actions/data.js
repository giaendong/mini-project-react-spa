export const GET_DATA_START = 'GET_DATA_START';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';


export function getData(page) {
  return {
    type: GET_DATA_START,
    page,
  };
}
