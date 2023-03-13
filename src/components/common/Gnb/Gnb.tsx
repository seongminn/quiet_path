import { useCallback, useState } from 'react';
import tw, { styled } from 'twin.macro';
import Menu from './Menu';

const Navigation = styled.nav([
  tw`
  relative min-w-70 hidden
  laptop:(flex-stack bg-white)`,
]);

const MenuContainer = styled.div<{ open: boolean }>(({ open }) => [
  tw`fixed left-2 top-2 duration-150`,
  tw`flex flex-col h-[99.5%] bg-gray-200 rounded-8 z-50 cursor-pointer`,

  open ? tw`w-200` : tw`w-70`,

  tw`[svg]:(box-content duration-100 rounded-7 p-10 m-0 hover:(bg-gray-400))`,
  tw`[li > div > svg]:(p-5 hover:(bg-transparent))`,
]);

const MenuTop = styled.div([
  tw`flex-center m-10 pb-10 border-b-1 border-gray-500`,
]);

const List = styled.div<{ open: boolean }>(({ open }) => [
  tw`px-10 my-20 flex flex-col gap-5`,

  tw`[li]:(flex justify-start items-center pr-10 opacity-[.01])`,

  open ? tw`[li]:(opacity-100 delay-150)` : tw`[li]:delay-[0]`,
]);

const Gnb = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onMouseOver = useCallback(() => setOpen(true), [setOpen]);
  const onMouseLeave = useCallback(() => setOpen(false), [setOpen]);

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
          <ul>
            <li>
              <Menu
                icon={'metro'}
                width={28}
                height={28}
                title='지하철 혼잡도'
                link={'/'}
              />
            </li>
          </ul>
        </List>
      </MenuContainer>
    </Navigation>
  );
};

export default Gnb;
