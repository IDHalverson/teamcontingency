import request from "superagent";

const BASE_URL = "http://teamcontingency.herokuapp.com/api";

export const fetchUser = async id => {
  const res = await request.get(`${BASE_URL}/users/${id}`);
  return res.body;
};
