import SvgIcon from '@/components/common/Icon/SvgIcon';
import tw from 'twin.macro';

const Menu = ({
  icon,
  width,
  height,
  strokeWidth = 1.2,
  styles,
  title,
}: {
  icon: string;
  width: number;
  height: number;
  strokeWidth?: number;
  title?: string;
  styles?: any;
}) => {
  return (
    <div css={[tw`flex justify-between items-center w-full`]}>
      <div css={tw`flex justify-center items-center`}>
        <div css={[styles]}>{SvgIcon[icon](width, height, strokeWidth)}</div>
        <p css={tw`p-10`}>{title}</p>
      </div>
    </div>
  );
};

export default Menu;
