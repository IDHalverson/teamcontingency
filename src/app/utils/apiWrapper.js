import superagent from "superagent";

const request = superagent.agent();

const BASE_URL = "http://teamcontingency.herokuapp.com/api";

export const fetchUser = async id => {
  try {
    const res = await request.get(`${BASE_URL}/users/${id}`);
    return res.body;
  } catch (e) {
    console.error(e);
  }
};

export const updatePrudency = async (id, rating, userId) => {
  try {
    const res = await request
      .patch(`${BASE_URL}/update-transaction`)
      .send({ customer_id: userId, transaction_id: id, rating });
    console.log(res.body);
    return res.body;
  } catch (e) {
    console.error(e);
  }
};
