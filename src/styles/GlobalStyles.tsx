import { Global } from '@emotion/react';
import { Fragment } from 'react';
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro';

export const customStyles = css({
  '*, *::before, *::after': tw`box-border`,
  'html, body': [
    tw`text-16 leading-24 tracking-[0] text-black`,
    tw`bg-gray-300 m-0 p-0 h-full`,
    {
      fontFamily: `NSRoundRegular, -apple-system, BlinkMacSystemFont, Segoe, UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira, Sans, Droid, Sans, Helvetica, Neue, sans-serif`,
    },
  ],

  h1: tw`font-Bold text-56 text-black leading-64`,
  h2: tw`font-Bold text-48 text-black leading-56`,
  h3: tw`font-Bold text-40 text-black leading-48`,
  h4: tw`font-Bold text-32 text-black leading-40`,
  h5: tw`font-Bold text-24 text-black leading-32`,
  h6: tw`font-Bold text-18 text-black leading-26`,
});

const GlobalStyles = () => (
  <Fragment>
    <BaseStyles />
    <Global styles={customStyles} />
  </Fragment>
);

export default GlobalStyles;
