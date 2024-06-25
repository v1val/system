import { createEvent, createStore } from "effector";
import { atom } from "shared/factory";

interface item {
  title: string;
  children?: item[];
}

export const menuDesktopModel = atom(() => {
  const toggleItem = createEvent<string>();
  const searchChanged = createEvent<string>();
  const $openedItems = createStore<string[]>([]).on(
    toggleItem,
    (state, item) => {
      const index = state.indexOf(item);
      if (index === -1) {
        return [...state, item];
      } else {
        return state.filter((existingItem) => existingItem !== item);
      }
    },
  );

  const $menuStructure = createStore<item[]>([
    {
      title: "Управление заказами",
      children: [
        {
          title: "lorem",
        },
      ],
    },
    {
      title: "Продукты",
      children: [
        {
          title: "lorem",
        },
      ],
    },
    {
      title: "Цифровые инструменты",
    },
    {
      title: "Поддержка",
      children: [
        {
          title: "lorem",
        },
      ],
    },
    {
      title: "Обучение",
      children: [
        {
          title: "lorem",
        },
      ],
    },
    {
      title: "Регистрация проектов",
    },
    {
      title: "Smarteka",
    },
    {
      title: "Сервис",
      children: [
        {
          title: "lorem",
        },
      ],
    },
    {
      title: "Партнерская программа",
    },
    {
      title: "Мотивационные программы",
    },
    {
      title: "Мероприятия",
    },
    {
      title: "Новости",
    },
  ]);

  return {
    $menuStructure,
    $openedItems,
    toggleItem,
    searchChanged,
  };
});
