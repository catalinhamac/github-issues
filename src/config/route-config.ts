export enum PurchaseOrdersRoute {
  Index = '/purchase-orders',
  Draft = '/purchase-orders/draft',
  Submitted = '/purchase-orders/submitted',
  Create = '/purchase-orders/create',
  View = '/purchase-orders/:purchaseOrderId',
}

export enum AppRoute {
  Home = '/',
  Open = '/open',
  Closed = '/closed',
}

export const notFoundRoute = '/not-found';
