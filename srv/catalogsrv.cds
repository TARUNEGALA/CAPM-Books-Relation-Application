using {relship.db as rel} from '../db/reldemo';

service relservice{
    entity HeaderSet as projection on rel.Header;
    entity ItemSet as projection on rel.Items;
    entity Orderdetails as projection on rel.Orders;
    entity OrderItemDetails as projection on rel.OrderItems
}

annotate relservice.Orderdetails with @(
    UI:{
        SelectionFields:[
            ID,description
        ],
        LineItem:[
            {$Type:'UI.DataField' ,Value:ID},
            {$Type:'UI.DataField' ,Value:description}
        ]
    }
);

annotate relservice.OrderItemDetails with @(
     UI: {
        LineItem:[
            {$Type:'UI.DataField',Value:ID},
            {$Type:'UI.DataField',Value:product},
            {$Type:'UI.DataField',Value:quantity}
        ],
        HeaderInfo: {
            TypeName: 'Order Item',
            TypeNamePlural: 'Order Items',
            Title: { Value: product }
        },
        Facets: [
            {
                $Type: 'UI.ReferenceFacet',
                Label: 'Item Details',
                Target: '@UI.FieldGroup#Details'
            }
        ],
        FieldGroup #Details: {
            Data: [
                { Value: ID },
                { Value: product },
                { Value: quantity }
            ]
        }
    }
);