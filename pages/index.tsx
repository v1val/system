import { allSettled, fork, serialize } from "effector";
import { HomePage } from "../src/pages/home";
import { homeModel } from "../src/pages/home";

HomePage.getInitialProps = async (params) => {
  const scope = fork();

  await allSettled(homeModel.pageStarted, { scope, params });

  return {
    values: serialize(scope),
  };
};

export default HomePage;
