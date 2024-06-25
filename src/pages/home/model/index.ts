import { atom } from "shared/factory";
import { createEvent } from "effector";
import { NextPageContext } from "next";

export const homeModel = atom(() => {
  const pageStarted = createEvent<NextPageContext>();
  return {
    pageStarted,
  };
});