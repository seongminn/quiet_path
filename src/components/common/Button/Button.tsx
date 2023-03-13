import { css } from '@emotion/react';
import { ReactNode } from 'react';
import tw, { TwStyle } from 'twin.macro';

type ButtonType = 'primary' | 'secondary' | 'danger' | 'default';
type ButtonSize = 'large' | 'medium' | 'small';

type ContainerProps = {
  type?: ButtonType;
  size?: ButtonSize;
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  props?: TwStyle[];
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
  small: tw`px-8 py-8`,
};

const BASE_STYLE = [
  tw`rounded-2 max-w-full w-65`,
  tw`cursor-pointer block truncate`,
  tw`bg-white text-black font-bold `,
];

const Button = ({
  type = 'default',
  size = 'medium',
  children = 'Button',
  onClick,
  props,
}: ContainerProps) => {
  return (
    <button
      onClick={onClick}
      css={[
        BASE_STYLE,
        css`
          ${getButtonType[type]}
          ${getButtonSize[size]}
        `,
        props,
      ]}
    >
      {children}
    </button>
  );
};

export default Button;
