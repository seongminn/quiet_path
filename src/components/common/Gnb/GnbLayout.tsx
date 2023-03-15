import { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';
import useMediaQuery from '@/hooks/useMediaQuery';

const Navigation = styled.header<{ open: boolean }>(({ open }) => [
  tw`
  fixed top-0 left-0 w-full
  tablet:(relative flex-stack bg-white w-70)`,

  open ? tw`z-50` : tw`z-0 delay-150`,
]);

const LaptopContainer = styled.nav<{ open: boolean }>(({ open }) => [
  tw`fixed left-2 top-2 duration-150`,
  tw`flex flex-col h-[99.5%] bg-gray-200 rounded-8 z-50 cursor-pointer`,

  open ? tw`w-200` : tw`w-70`,

  tw`[svg]:(box-content duration-100 rounded-7 p-10 m-0 hover:(bg-gray-400))`,
  tw`[li > div > svg]:(p-5 hover:(bg-transparent))`,
]);

const MobileContainer = styled.nav<{ open: boolean }>(({ open }) => [
  tw`relative h-150 duration-150 m-20 drop-shadow-xl`,
  tw`flex flex-col justify-start items-start border-black rounded bg-gray-200`,

  open ? tw`h-150` : tw`h-68`,

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
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <Navigation open={open} onClick={() => setOpen((prev) => !prev)}>
      {matches ? (
        <LaptopContainer open={open}>{children}</LaptopContainer>
      ) : (
        <MobileContainer open={open}>{children}</MobileContainer>
      )}
    </Navigation>
  );
};

export default GnbLayout;
