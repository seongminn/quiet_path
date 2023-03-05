/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

// Arbitrary values를 간편하게 작성하도록 도와주는 코드
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

// px 단위의 값을 rem 단위로 변환하는 코드
const pxToRem = (px, base = 16) => `${px / base}rem`;

const flexCenterPlugin = plugin(({ addUtilities }) =>
  addUtilities({
    '.flex-center': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

const stackPlugin = plugin(({ addUtilities }) =>
  addUtilities({
    '.flex-stack': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  })
);

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // 다해상도 중단점 재정의
      mobile: '360px', // @media (min-width: 360px)
      foldable: '523px', // @media (min-width: 523px)
      tablet: '768px', // @media (min-width: 768px)
      laptop: '1350px',
    },

    extend: {
      borderWidth: px0_10,
      borderRadius: px0_100,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
    },

    colors: {
      // 커스텀 컬러 정의
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#00b890',
      secondary: '#d6fff6',
      white: '#fff',
      black: '#1d1d1d',
      accent: '#ff285f',
      darker: '#00382f',
      lighter: '#aee4da',
      error: '#F16063',
      warning: '#ffcc00',

      gray: {
        50: '#FAFAFA',
        100: '#F7FAFC',
        200: '#EDF2F7',
        300: '#E2E8F0',
        400: '#CBD5E0',
        500: '#A0AEC0',
        600: '#718096',
        700: '#4A5568',
        800: '#2D3748',
        900: '#1A202C',
      },

      subway: {
        1: '#0052A4',
        2: '#00A84D',
        3: '#EF7C1C',
        4: '#00A4E3',
        5: '#996CAC',
        6: '#CD7C2F',
        7: '#747F00',
        8: '#E6186C',
      },
    },

    border: {
      dark: '#cccccc',
      light: '#e1e1e1',
    },

    fontFamily: {
      Bold: ['NSRoundBold'],
      Regular: ['NSRoundRegular'],
    },

    spacing: {
      ...Array.from({ length: 100 }, (_, idx) => idx + 1).reduce((acc, px) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
    },
  },
  plugins: [flexCenterPlugin, stackPlugin],
};
