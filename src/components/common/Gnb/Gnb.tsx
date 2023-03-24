import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { Menu, Layout } from '.';
import LogoSrc from '@/assets/icons/icon-logo.png';

const Gnb = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Layout open={open} setOpen={setOpen}>
      <LogoBox>
        <Logo src={LogoSrc} alt='logo' />
      </LogoBox>
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
    </Layout>
  );
};

const List = styled.div<{ open: boolean }>(({ open }) => [
  tw`px-10 my-20 flex flex-col gap-5`,

  tw`[li]:(flex justify-start items-center pr-10 opacity-[.01])`,

  open ? tw`[li]:(opacity-100 delay-150)` : tw`[li]:delay-[0]`,
]);

const LogoBox = styled.div([tw`flex justify-start  items-center`]);

const Logo = styled.img([tw`m-16 w-36 h-36`]);

export default Gnb;
