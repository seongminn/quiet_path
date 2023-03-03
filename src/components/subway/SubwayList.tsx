import tw from 'twin.macro';

const List = tw.div`
  border-1 border-gray-400 rounded-5 
  bg-white drop-shadow-md

  laptop:(w-[320px])

  mobile:(w-full max-w-[360px])
`;

const SubwayList = ({
  line,
  setLine,
}: {
  line: number;
  setLine: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleLine = (e: React.MouseEvent<HTMLSpanElement>) => {
    setLine(Number(e.currentTarget.textContent));
  };

  return (
    <div>
      <ul css={tw`grid grid-flow-row-dense gap-10 border-1`}></ul>
      <List>여기</List>
    </div>
  );
};

export default SubwayList;
