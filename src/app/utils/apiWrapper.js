import request from "superagent";

const BASE_URL = "http://teamcontingency.herokuapp.com/api/v1";

export const fetchUser = id => {
  return request.get(`${BASE_URL}/users/${id}`);
};
