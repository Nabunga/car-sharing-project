import React, { useEffect, useRef, useState } from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import { useDispatch, useSelector } from "react-redux";
import baloon from "../../assets/icons/baloon.svg";

const styleIcons = {
  iconLayout: "default#image",
  iconImageHref: baloon,
  iconImageSize: [14, 14],
};
const modules = ["geocode", "Placemark"];

const orderData = {
  location: {
    city: null,
    point: null,
    cityId: null,
    pointId: null,
  },
};

export const YMapContainer = () => {
  const ymaps = useRef(null);
  const dispatch = useDispatch();
  const { selectedCity, pointsForSelectedCity, points } = useSelector(
    (state) => state.locationReducer
  );
  const [orderInfo, setOrderInfo] = useState(orderData);
  const [coordsOfAllPoints, setCoordsOfAllPoints] = useState([]);
  const [defaultStateCity, setDefaultStateCity] = useState({
    center: [54.3187, 48.3978],
    zoom: 12,
  });

  function getSelectedCityCoords(city) {
    ymaps.current.geocode(city, { result: 1 }).then((res) => {
      const firstGeoObject = res.geoObjects.get(0);
      const coordsCity = firstGeoObject.geometry.getCoordinates();
      setDefaultStateCity((prev) => ({
        ...prev,
        center: coordsCity,
        zoom: 12,
      }));
    });
  }

  useEffect(() => {
    if (selectedCity && ymaps.current) {
      getSelectedCityCoords(selectedCity);
    }
  }, [selectedCity]); 

  useEffect(() => {
    const getGeo = async (points) => {
      const temp = [];
      for (const point of points) {
        await ymaps.current
          .geocode(`${point.cityId?.name} ${point.address}`, {
            result: 1,
          })
          .then(async (res) => {
            const firstGeoObject = await res.geoObjects.get(0);
            const coordsPoint = await firstGeoObject.geometry.getCoordinates();

            temp.push({
              point: point.address,
              lat: coordsPoint[0],
              long: coordsPoint[1],
            });
          })
          .catch((error) => console.log("getGeo", error));
      }
      setCoordsOfAllPoints([...temp]);
      
    }
    if (ymaps.current) {
      getGeo(points);
    }
  }, [points])

  useEffect(() => {
    if (pointsForSelectedCity && coordsOfAllPoints.length > 0) {
      const pointNow = coordsOfAllPoints.find(
        (item) => item.point === pointsForSelectedCity
      );

      setDefaultStateCity((prev) => ({
        ...prev,
        center: [pointNow.lat, pointNow.long],
        zoom: 15,
      }));
    }
  }, [orderInfo.location.point]);

  const onClickHandler = async (point) => {
    setOrderInfo((prev) => ({
      ...prev,
      location: { ...prev.location, point },
    }));
    dispatch({ type: "SET_POINTS_FOR_SELECTED_CITY", payload: point });
  };

  return (
    <YMaps
      query={{
        apikey: "5fffcc84-ff6f-4485-8452-953e76b0c536",
      }}
    >
      <Map
        className="map"
        defaultState={defaultStateCity}
        state={defaultStateCity}
        modules={modules}
        onLoad={(api) => {
          ymaps.current = api;
        }}
      >
        {coordsOfAllPoints.map((item) => (
          <Placemark
            className="placemark"
            key={item.point}
            geometry={[item.lat, item.long]}
            options={styleIcons}
            onClick={() => onClickHandler(item.point)}
          />
        ))}
      </Map>
    </YMaps>
  );
};
