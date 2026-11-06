using relservice from './catalogsrv';

annotate relservice.HeaderSet with @(restrict:[
    {grant:'READ',to:'Viewer'},
    {grant:'*',to:'Admin'}
]);
annotate relservice.ItemSet with @(restrict:[
    {grant:'READ',to:'Viewer'},
    {grant:'*',to:'Admin'}
]);
annotate relservice.Orderdetails with @(restrict: [
  { grant: 'READ', to: 'Viewer' },
  { grant: '*',    to: 'Admin'  }
]);

annotate relservice.OrderItemDetails with @(restrict: [
  { grant: 'READ', to: 'Viewer' },
  { grant: '*',    to: 'Admin'  }
]);
