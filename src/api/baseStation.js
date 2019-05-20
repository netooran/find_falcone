import axios from "axios";

export default {
  getPlanets(onSuccess, onFailure) {
    axios
      .get("https://findfalcone.herokuapp.com/planets")
      .then(response => onSuccess(response.data))
      .catch(e => onFailure(undefined, e));
  },

  getVehicles(onSuccess, onFailure) {
    axios
      .get("https://findfalcone.herokuapp.com/vehicles")
      .then(response => onSuccess(response.data))
      .catch(e => onFailure(undefined, e));
  },

  getToken() {
    return axios
      .post("https://findfalcone.herokuapp.com/token")
      .then(response => response.data);
  },

  findFalcone(data) {
    return axios
      .post("https://findfalcone.herokuapp.com/find", data)
      .then(response => response.data);
  }
};
