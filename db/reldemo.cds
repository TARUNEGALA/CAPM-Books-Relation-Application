namespace relship.db;
using {cuid,managed} from '@sap/cds/common';

entity Header{
    key ID          :UUID;
    description     :String;
    Item_details    :Association to many Items on Item_details.headerID = $self.ID;
}

entity Items{
    key ID      :UUID;
    headerID   : UUID;
    product     : String;
    quantity    : Integer;
}
entity Orders :cuid,managed{
    description :String(100);
    Item_comp  : Composition of many OrderItems on Item_comp.parent =$self;
}
entity OrderItems:cuid{
    parent  : Association to Orders;
    product  :String(100);
    quantity :Integer;
}