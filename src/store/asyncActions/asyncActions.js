import api from "../../axios/api";
import { setCarList, setCategoryList } from "../model/actions";
import { setRate } from "../additionally/actions";

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

export function getCarList(catId) {
  let url = "/db/car";
  if (catId) {
    url += `?categoryId=${catId}`;
    return (dispatch) => {
      api
        .get(url, {
          params: {
            limit: "20",
          },
        })
        .then((res) => {
          dispatch(setCarList(res.data.data));
        });
    };
  }
  return (dispatch) => {
    api
      .get(url, {
        params: {
          limit: "20",
        },
      })
      .then((res) => {
        dispatch(setCarList(res.data.data));
      });
  };
}
