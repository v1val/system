import { createStore } from "effector";
import { atom } from "shared/factory";
import systemPng from "shared/static/images/system.png";

export const secondaryMenuModal = atom(() => {
  const $slides = createStore([
    {
      title: "Систем представляет пускорегулирующую аппаратуру",
      date: "20 декабря 2022",
      image: systemPng,
    },
    {
      title: "Систем представляет пускорегулирующую аппаратуру",
      date: "20 декабря 2023",
      image: systemPng,
    },
  ]);
  const $links = createStore([
    {
      title: "Каталоги и документы",
      to: "",
    },
    {
      title: "Обучение партнёров",
      to: "",
    },
    {
      title: "Платформа Learning 4U",
      to: "",
    },
    {
      title: "Сертификация",
      to: "",
    },
    {
      title: "Подбор оборудования",
      to: "",
    },
    {
      title: "Механотроника",
      to: "",
    },
  ]);
  return {
    $slides,
    $links,
  };
});
