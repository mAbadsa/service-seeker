import UserOrder from './UserOrder';
import UserOrderReq from './UserOrderReq';
import providerOrderPending from './providerOrderPending';

const getColumnsData = (onActions) => ({
  userOrderReq: UserOrderReq(onActions),
  userOrder: UserOrder(),
  providerOrderPending: providerOrderPending(onActions),
});

export default getColumnsData;
