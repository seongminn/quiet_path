import SvgIcon from '@/components/common/Icon/SvgIcon';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

const Menu = ({
  icon,
  width,
  height,
  strokeWidth = 1.2,
  styles,
  title,
  link,
}: {
  icon: string;
  width: number;
  height: number;
  strokeWidth?: number;
  title?: string;
  styles?: any;
  link?: string;
}) => {
  const Icon = () => (
    <div css={tw`flex justify-center items-center`}>
      <div css={[styles]}>{SvgIcon[icon](width, height, strokeWidth)}</div>
      <p css={tw`p-10`}>{title}</p>
    </div>
  );

  return (
    <div css={[tw`flex justify-between items-center w-full`]}>
      {link ? (
        <Link to={link}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </div>
  );
};

export default Menu;
