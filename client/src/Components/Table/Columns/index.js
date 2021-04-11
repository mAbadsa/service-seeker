import UserOrder from './UserOrder';
import UserOrderReq from './UserOrderReq';

const getColumnsData = (onActions) => ({
  userOrderReq: UserOrderReq(onActions),
  userOrder: UserOrder(),
});

export default getColumnsData;
