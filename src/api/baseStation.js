import axios from "axios";

export default {
  getPlanets(onSuccess, onFailure) {
    axios
      .get("https://findfalcone.herokuapp.com/planets")
      .then(response => onSuccess(response.data))
      .catch(e => onFailure(undefined, e));
  }
};
