import tw from 'twin.macro';

const NotFoundPage = () => {
  return (
    <section css={[tw`flex justify-center items-center`]}>
      <h5>페이지를 찾을 수 없어요🥲</h5>
    </section>
  );
};

export default NotFoundPage;
