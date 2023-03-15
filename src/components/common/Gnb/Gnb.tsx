import { useCallback, useState } from 'react';
import tw, { styled } from 'twin.macro';
import GnbLayout from './GnbLayout';
import Menu from './Menu';

const List = styled.div<{ open: boolean }>(({ open }) => [
  tw`px-10 my-20 flex flex-col gap-5`,

  tw`[li]:(flex justify-start items-center pr-10 opacity-[.01])`,

  open ? tw`[li]:(opacity-100 delay-150)` : tw`[li]:delay-[0]`,
]);

const Gnb = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <GnbLayout open={open} setOpen={setOpen}>
      <div css={tw`flex justify-start items-center`}>
        <img src='src/assets/icons/icon-logo.png' css={tw`m-16`} alt='logo' />
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
    </GnbLayout>
  );
};

export default Gnb;
