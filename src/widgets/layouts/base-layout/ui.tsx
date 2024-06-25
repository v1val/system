import { Open_Sans } from "next/font/google";
import { PropsWithChildren } from "react";
import { Header } from "widgets/header";
const OpenSans = Open_Sans({ subsets: ["latin"] });
export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className={`main ${OpenSans.className}`}>{children}</main>
    </>
  );
};
