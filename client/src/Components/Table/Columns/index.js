import UserOrder from './UserOrder';
import UserOrderReq from './UserOrderReq';
import providerOrderPending from './providerOrderPending';
import providerAcceptedOrders from './providerAcceptedOrders';
import notifications from './notifications';

const getColumnsData = (onActions) => ({
  userOrderReq: UserOrderReq(onActions),
  userOrder: UserOrder(),
  providerOrderPending: providerOrderPending(onActions),
  providerAcceptedOrders: providerAcceptedOrders(),
  notifications: notifications(),
});

export default getColumnsData;
