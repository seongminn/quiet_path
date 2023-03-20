import { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

const Navigation = styled.header<{ open: boolean }>(({ open }) => [
  tw`
  relative h-68
  tablet:(relative flex-stack bg-white w-70)`,

  open ? tw`z-50` : tw`z-0 delay-150`,
]);

const LaptopContainer = styled.nav<{ open: boolean }>(({ open }) => [
  tw`fixed left-2 top-2 duration-150`,
  tw`flex flex-col h-[99.5%] rounded-8 z-50 cursor-pointer`,
  tw`tablet:(bg-gray-200)`,

  open ? tw`w-200 bg-gray-200` : tw`w-70`,

  tw`[svg]:(box-content duration-100 rounded-7 p-10 m-0 hover:(bg-gray-400))`,
  tw`[li > div > svg]:(p-5 hover:(bg-transparent))`,
]);

const GnbLayout = ({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}) => {
  return (
    <Navigation open={open} onClick={() => setOpen((prev) => !prev)}>
      <LaptopContainer open={open}>{children}</LaptopContainer>
    </Navigation>
  );
};

export default GnbLayout;
