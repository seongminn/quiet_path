import svgIcon from '@/lib/svgIcon';
import { Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

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
    <IconWrapper>
      <div css={styles}>{svgIcon[icon](width, height, strokeWidth)}</div>
      <p>{title}</p>
    </IconWrapper>
  );

  return (
    <Wrapper>
      {link ? (
        <Link to={link}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div([tw`flex justify-between items-center w-full`]);

const IconWrapper = styled.div([
  tw`flex justify-center items-center`,
  tw`[p]:p-10`,
]);

export default Menu;
