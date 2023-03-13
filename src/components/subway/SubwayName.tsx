import tw, { css, styled } from 'twin.macro';
import colorConverter from '@/lib/colorConverter';
import { ReactComponent as DownIcon } from '@/assets/icons/icon-chevron-down.svg';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { lineState } from '@/recoil/atoms/lineState';

const TopContainer = styled.div([
  tw`relative flex items-center cursor-pointer`,
  tw`hover:([svg]:animate-bounce)`,

  tw`mobile:p-0 mb-20`,
  tw`laptop:p-0`,
]);

const Title = styled.h4<{ name: string }>(({ name }) => [
  css({
    color: colorConverter[`${name}`],
  }),
]);

const DropdownContainer = styled.div<{ isDropped: boolean }>(
  ({ isDropped }) => [
    tw`absolute w-full min-w-200 max-w-max bg-white rounded-5 z-50 drop-shadow-xl border-1 mt-10`,
    isDropped ? tw`opacity-100` : tw`opacity-0 z-[-1]`,
  ]
);

const DropList = styled.li([tw`px-20 py-10 hover:(bg-gray-200)`]);

const subways = [1, 2, 3, 4, 5, 6, 7, 8];

const SubwayName = () => {
  const [line, setLine] = useRecoilState(lineState);
  const [isDropped, toggleDropdown] = useState<boolean>(false);
  const handleToggle = () => toggleDropdown(!isDropped);
  const onClickLine = (subwayLine: number) => {
    setLine(subwayLine);
    handleToggle();
  };

  return (
    <div css={tw`flex-1`}>
      <TopContainer onClick={handleToggle}>
        <Title name={`${line}`}>{line}호선</Title>
        <DownIcon width={18} height={18} css={tw`ml-20`} />
      </TopContainer>
      <DropdownContainer isDropped={isDropped}>
        <ul>
          {subways.map((subway) => (
            <DropList key={`${subway}호선`} onClick={() => onClickLine(subway)}>
              {subway}호선
            </DropList>
          ))}
        </ul>
      </DropdownContainer>
    </div>
  );
};

export default SubwayName;
