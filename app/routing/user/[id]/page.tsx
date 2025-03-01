const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <div>dyanic route fetching user id: {id} </div>;
};

export default page;
