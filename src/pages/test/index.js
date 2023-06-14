const Index = (props) => {
  console.log("testIndo Props ::: ", props);
  return <div>testIndex</div>;
};

export const getServerSideProps = async (context) => {
  return { props: { headers: context.req.headers } };
};

export default Index;
