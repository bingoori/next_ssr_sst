const Index = (props) => {
  console.log("testIndo Props 1 ::: ", props);
  console.log("testIndo Props 2 ::: ", props);
  console.log("testIndo Props 3 ::: ", props);
  return <div>testIndex</div>;
};

export const getServerSideProps = async (context) => {
  return { props: { headers: context.req.headers } };
};

export default Index;
