import api from "../../axios/api";
import {
  setCarList,
  setCategoryList,
  setCarListByCategory,
} from "../model/actions";
import { setRate } from "../additionally/actions";

export function getCarList() {
  return (dispatch) => {
    api.get("/db/car").then((res) => {
      dispatch(setCarList(res.data.data));
    });
  };
}

export function getCarListByCategory(catId) {
  return (dispatch) => {
    api
      .get("/db/car", {
        params: {
          categoryId: catId,
        },
      })
      .then((res) => {
        dispatch(setCarListByCategory(res.data.data));
      });
  };
}

export function getCategoryList() {
  return (dispatch) => {
    api.get("/db/category").then((res) => {
      dispatch(setCategoryList(res.data.data));
    });
  };
}

export function getRate() {
  return (dispatch) => {
    api.get("/db/rateType").then((res) => {
      dispatch(setRate(res.data.data));
    });
  };
}
