const deleteById = (data, orderID) => data?.filter(({ id }) => id !== orderID);

export default deleteById;
