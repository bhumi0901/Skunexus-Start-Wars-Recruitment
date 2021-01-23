export const getPlanet = () => (dispatch, getState, Api) => {
  return Api.get("planets").then((response) => {
    return response.responseData;
  });
};
export const getPlanetDetail = (id) => (dispatch, getState, Api) => {
  return Api.get("planets/" + id).then((response) => {
    return response.responseData;
  });
};
export const getFlimsDetail = (id) => (dispatch, getState, Api) => {
  return Api.get("films/" + id).then((response) => {
    return response.responseData;
  });
};
export const getResidentsDetail = (id) => (dispatch, getState, Api) => {
  return Api.get("people/" + id).then((response) => {
    return response.responseData;
  });
};
