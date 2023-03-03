import SvgIcon from '@/components/common/Icon/SvgIcon';

const Menu = ({
  icon,
  width,
  height,
  strokeWidth = 1.2,
  styles,
}: {
  icon: string;
  width: number;
  height: number;
  strokeWidth?: number;
  styles?: any;
}) => {
  return <div css={styles}>{SvgIcon[icon](width, height, strokeWidth)}</div>;
};

export default Menu;
