import UserOrder from './UserOrder';
import UserOrderReq from './UserOrderReq';
import providerOrderPending from './providerOrderPending';
import providerAcceptedOrders from './providerAcceptedOrders';

const getColumnsData = (onActions) => ({
  userOrderReq: UserOrderReq(onActions),
  userOrder: UserOrder(),
  providerOrderPending: providerOrderPending(onActions),
  providerAcceptedOrders: providerAcceptedOrders(),
});

export default getColumnsData;
