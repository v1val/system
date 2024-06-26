import type { AppProps } from "next/app";
import { BaseLayout } from "widgets/layouts";

import { withProviders } from "./providers";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
};
export default withProviders(App);
