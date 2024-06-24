import { atom } from "shared/ui/factory";
import { createGate } from "effector-react";

export const homeModel = atom(() => {
  const HomePageGate = createGate();
  return {
    HomePageGate,
  };
});