import elantra from "./assets/img/elantra.png";

const sliderArr = [
  {
    header: "Бесплатная парковка",
    text: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
    className: "slider__btn slider__btn-first",
    classNameSlide: "slider slider-first",
  },
  {
    header: "Страховка",
    text: "Полная страховка автомобиля.",
    className: "slider__btn slider__btn-second",
    classNameSlide: "slider slider-second",
  },
  {
    header: "Бензин",
    text: "Полный бак на любой заправке города за наш счёт.",
    className: "slider__btn slider__btn-third",
    classNameSlide: "slider slider-third",
  },
  {
    header: "Обслуживание",
    text: "Автомобиль проходит еженедельное ТО.",
    className: "slider__btn slider__btn-fourth",
    classNameSlide: "slider slider-fourth",
  },
];

const rate = [
  {
    divClassName: "order-model__input-group",
    inputClassName: "order-model__input input_first",
    type: "radio",
    id: "perMinute",
    name: "car-options",
    value: "perMinute",
    labelClassName: "rate__label",
    htmlFor: "perMinute",
    content: "Поминутно, 7₽/мин",
  },
  {
    divClassName: "order-model__input-group",
    inputClassName: "order-model__input input_first",
    type: "radio",
    id: "perDay",
    name: "car-options",
    value: "perDay",
    labelClassName: "rate__label",
    htmlFor: "perDay",
    content: "На сутки, 1999 ₽/сутки",
  },
]

const carColorOptions = [
  {
    divClassName: "order-model__input-group",
    inputClassName: "order-model__input input_first",
    type: "radio",
    id: "all",
    name: "car-options",
    value: "all",
    labelClassName: "order-model__label",
    htmlFor: "all",
    content: "Любой",
  },
  {
    divClassName: "order-model__input-group",
    inputClassName: "order-model__input input_first",
    type: "radio",
    id: "red",
    name: "car-options",
    value: "red",
    labelClassName: "order-model__label",
    htmlFor: "red",
    content: "Красный",
  },
  {
    divClassName: "order-model__input-group",
    inputClassName: "order-model__input input_first",
    type: "radio",
    id: "blue",
    name: "car-options",
    value: "blue",
    labelClassName: "order-model__label",
    htmlFor: "blue",
    content: "Голубой",
  },
];

const carListOptions = [
  {
    divClassName: "order-model__input-group",
    inputClassName: "order-model__input input_first",
    type: "radio",
    id: "all",
    name: "car-options",
    value: "all",
    labelClassName: "order-model__label",
    htmlFor: "all",
    content: "Все модели",
  },
  {
    divClassName: "order-model__input-group",
    inputClassName: "order-model__input input_first",
    type: "radio",
    id: "low-cost",
    name: "car-options",
    value: "low-cost",
    labelClassName: "order-model__label",
    htmlFor: "low-cost",
    content: "Эконом",
  },
  {
    divClassName: "order-model__input-group",
    inputClassName: "order-model__input input_first",
    type: "radio",
    id: "premium",
    name: "car-options",
    value: "premium",
    labelClassName: "order-model__label",
    htmlFor: "premium",
    content: "Премиум",
  },
];

const carsParams = [
  {
    name: "Elantra",
    price: "12 000 - 25 000 ₽",
    pic: elantra,
  },
  {
    name: "Elantra",
    price: "12 000 - 25 000 ₽",
    pic: elantra,
  },
  {
    name: "Elantra",
    price: "12 000 - 25 000 ₽",
    pic: elantra,
  },
  {
    name: "Elantra",
    price: "12 000 - 25 000 ₽",
    pic: elantra,
  },
  {
    name: "Elantra",
    price: "12 000 - 25 000 ₽",
    pic: elantra,
  },
  {
    name: "Elantra",
    price: "12 000 - 25 000 ₽",
    pic: elantra,
  },
  {
    name: "Elantra",
    price: "12 000 - 25 000 ₽",
    pic: elantra,
  },
  {
    name: "Elantra",
    price: "12 000 - 25 000 ₽",
    pic: elantra,
  },
  {
    name: "Elantra",
    price: "12 000 - 25 000 ₽",
    pic: elantra,
  },
];

export { sliderArr, carListOptions, carsParams, carColorOptions, rate };
