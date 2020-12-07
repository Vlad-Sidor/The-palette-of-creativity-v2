import axios from "axios";

export const sendFeedBack = async (data) => {
    try {
      const response = await axios.post(`https://politrafedback.herokuapp.com/sendFeedBack`, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };