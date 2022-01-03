import axios from "axios";

// Redux type
import { GET_IMAGE } from "./image.type";

export const getImage = (id) => async (dispatch) => {
  try {
    const image = await axios({
      method: "GET",
      url: `http://localhost:5000/image/${id}`,
    });

    return dispatch({ type: GET_IMAGE, payload: image.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};