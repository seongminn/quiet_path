import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { Menu, Layout } from '.';
import LogoSrc from '@/assets/icons/icon-logo.png';

const List = styled.div<{ open: boolean }>(({ open }) => [
  tw`px-10 my-20 flex flex-col gap-5`,

  tw`[li]:(flex justify-start items-center pr-10 opacity-[.01])`,

  open ? tw`[li]:(opacity-100 delay-150)` : tw`[li]:delay-[0]`,
]);

const Gnb = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Layout open={open} setOpen={setOpen}>
      <div css={tw`flex justify-start items-center`}>
        <img src={LogoSrc} css={tw`m-16 w-36 h-36`} alt='logo' />
      </div>
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

export default Gnb;
