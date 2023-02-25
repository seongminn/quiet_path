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
  large: tw`px-24 py-16`,
  medium: tw` px-16 py-14`,
  small: tw`px-10 py-10`,
};

const BASE_STYLE = [
  tw`rounded-2 max-w-full`,
  tw`cursor-pointer block truncate`,
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
