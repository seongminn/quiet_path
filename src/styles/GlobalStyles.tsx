import { Global } from '@emotion/react';
import tw, { css, GlobalStyles as BaseStyles, theme } from 'twin.macro';

// const customStyles = css`
//   body {
//     ${tw`text-gray-800 dark:text-gray-300 antialiased dark:bg-gray-900`}
//   }
// `;

export const customStyles = css({
  body: tw`font-BLINKER-Regular text-16 leading-24 tracking-[0] bg-gray-50 text-black m-0`,

  h1: tw`font-BLINKER-Bold text-56 text-black leading-64`,
  h2: tw`font-BLINKER-Bold text-48 text-black leading-56`,
  h3: tw`font-BLINKER-Bold text-40 text-black leading-48`,
  h4: tw`font-BLINKER-Bold text-32 text-black leading-40`,
  h5: tw`font-BLINKER-Bold text-24 text-black leading-32`,
  h6: tw`font-BLINKER-Bold text-18 text-black leading-26`,
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
