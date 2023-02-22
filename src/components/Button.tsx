import { css } from '@emotion/react';
import { ReactNode } from 'react';
import tw, { TwStyle } from 'twin.macro';

type ButtonType = 'primary' | 'secondary' | 'danger' | 'default';
type ButtonSize = 'large' | 'medium' | 'small';

type ContainerProps = {
  type?: ButtonType;
  size?: ButtonSize;
  children: ReactNode;
};

const getButtonType: Record<ButtonType, TwStyle> = {
  primary: tw`bg-primary text-white`,
  secondary: tw`bg-secondary text-darker`,
  danger: tw`text-white bg-error`,
  default: tw`bg-gray-200 text-gray-700`,
};

const getButtonSize: Record<ButtonSize, TwStyle> = {
  large: tw`px-12 py-16`,
  medium: tw` px-10 py-14`,
  small: tw`px-8 py-12`,
};

const BASE_STYLE = [
  tw`rounded-2`,
  tw`cursor-pointer block`,
  tw`bg-white text-black font-bold `,
];

const Button = ({
  type = 'default',
  size = 'medium',
  children = 'Button',
}: ContainerProps) => {
  return (
    <button
      css={[
        BASE_STYLE,
        css`
          ${getButtonType[type]}
          ${getButtonSize[size]}
        `,
      ]}
    >
      {children}
    </button>
  );
};

export default Button;

// const getType: any = {
//   primary: `#66740c`,
//   secondary: `#dfe6b2`,
//   danger: `#f15a5a`,
//   default: `#d1d1d1`,
// };

// const Button = ({
//   type = 'default',
//   size = 'medium',
//   children = 'Button',
// }: ContainerProps) => {
//   return (
//     <button css={{ backgroundColor: getType[type], padding: '1rem 2rem' }}>
//       {children}
//     </button>
//   );
// };
