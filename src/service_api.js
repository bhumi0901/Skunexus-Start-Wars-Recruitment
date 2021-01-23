let apiUrl = "https://swapi.dev/api/";

const methods = {
  get: (url, version) => {
    return fetch(apiUrl + url, {
      method: "GET",
    })
      .then((response) => {
        return response
          .json()
          .then((json) => {
            return Promise.resolve({
              responseData: json,
              response: response,
            });
          })
          .catch((err) => {
            return Promise.resolve({
              response: response,
            });
          });
      })
      .catch((err) => {
        console.log("api post error:", err);
        throw err;
      });
  },
};
export default methods;
