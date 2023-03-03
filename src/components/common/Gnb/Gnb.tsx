import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Menu from './Menu';

const Navigation = styled.nav([
  tw`
  relative min-w-70
  mobile:(hidden)
  laptop:(flex-stack bg-white)`,
]);

const MenuContainer = styled.div<{ open: boolean }>(({ open }) => [
  tw`fixed left-2 top-2 duration-150`,
  tw`flex flex-col h-[99.5%] bg-gray-200 rounded-8`,

  open ? tw`w-200` : tw`w-70`,

  tw`[svg]:(box-content duration-100 rounded-7 p-10 m-0 hover:(bg-gray-400))`,
]);

const MenuTop = styled.div([
  tw`flex-center mx-20 my-10 pb-10 w-28 border-b-1 border-gray-500`,
]);

const List = styled.ul<{ open: boolean }>(({ open }) => [
  tw`px-10 my-20 flex flex-col gap-5`,

  tw`[p]:px-10`,
  tw`[> li]:(flex justify-start items-center pr-10 opacity-[.01])`,

  open ? tw`[li]:(opacity-100 delay-150)` : tw`[li]:delay-[0]`,
]);

const Gnb = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onMouseOver = () => setOpen(true);
  const onMouseLeave = () => setOpen(false);

  return (
    <Navigation onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <MenuContainer open={open}>
        <MenuTop>
          <Menu
            icon={'bars'}
            width={28}
            height={28}
            styles={tw`rounded-7 transition-all duration-100 hover:bg-gray-400`}
          />
        </MenuTop>
        <List open={open}>
          <li>
            <Menu icon={'metro'} width={28} height={28} strokeWidth={1.5} />
            <p>지하철 혼잡도</p>
          </li>
          <li>
            <Menu icon={'people'} width={28} height={28} />
            <p>사람들</p>
          </li>
          <li>
            <Menu icon={'map'} width={28} height={28} />
            <p>지도</p>
          </li>
        </List>
      </MenuContainer>
    </Navigation>
  );
};

export default Gnb;
