import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../assets/styles/global';
import defaultTheme from '../assets/styles/themes/default';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
