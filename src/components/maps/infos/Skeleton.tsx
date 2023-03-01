import { Fragment } from 'react';
import tw from 'twin.macro';

const Skeleton = () => {
  return (
    <Fragment>
      <div css={tw`h-15 w-1/2 rounded-2 bg-gray-400 mb-5`}></div>
      <div css={tw`flex justify-between items-center mb-2`}>
        <span css={tw`h-8 w-full rounded-2 bg-gray-400`} />
      </div>
      <div css={tw`flex justify-between items-center mb-2`}>
        <span css={tw`h-8 w-8/12 rounded-2 bg-gray-400`} />
        <span css={tw`h-8 w-3/12 rounded-2 bg-gray-400`} />
      </div>
    </Fragment>
  );
};

export default Skeleton;
