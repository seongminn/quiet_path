import SvgIcon from '@/components/common/Icon/SvgIcon';
import { ReactComponent as DownIcon } from '@/assets/icons/icon-chevron-down.svg';
import { ReactNode } from 'react';
import tw from 'twin.macro';

const Menu = ({
  icon,
  width,
  height,
  strokeWidth = 1.2,
  styles,
  title,
  children,
}: {
  icon: string;
  width: number;
  height: number;
  strokeWidth?: number;
  title?: string;
  styles?: any;
  children?: ReactNode;
}) => {
  return (
    <div css={[tw`flex justify-between items-center w-full`]}>
      <div css={tw`flex justify-center items-center`}>
        <div css={[styles]}>{SvgIcon[icon](width, height, strokeWidth)}</div>
        <p css={tw`p-10`}>{title}</p>
      </div>
      {children && (
        <DownIcon width={12} height={12} css={tw`p-0 hover:(bg-current)`} />
      )}
    </div>
  );
};

export default Menu;
