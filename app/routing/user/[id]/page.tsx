const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>dyanic route fetching user id: {id} </div>;
};

export default page;
