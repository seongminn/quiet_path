import tw from 'twin.macro';

const NotFoundPage = () => {
  return (
    <main css={[tw`flex justify-center items-center`]}>
      <h5>페이지를 찾을 수 없어요🥲</h5>
    </main>
  );
};

export default NotFoundPage;
