const cds=require('@sap/cds');
const { UPDATE, SELECT, DELETE } = require('@sap/cds/lib/ql/cds-ql');

module.exports=class relservice extends cds.ApplicationService{
    async init(){
        const {OrderItems} = cds.entities('relship.db');
        const {OrderItemDetails} = this.entities

        //Read 
        this.on('READ',OrderItemDetails, async req =>{
            return cds.db.run(req.query);
        });
        //CREATE
        this.on('CREATE',OrderItemDetails, async req=>{
            await INSERT.into(OrderItems).entries(req.data);
            return req.data
        });
        //UPDATE
        this.on('UPDATE',OrderItemDetails,async req=>{
            const id=req.params[0]?.ID ?? req.params[0];
            const updated= await UPDATE (OrderItems).set(req.data).where({ID :id});
            if(!updated) return req.reject(404,'Order ${id} not found');
            return SELECT.one.from(Orders).where({ID :id});
        });
        //DELETE
        this.on('DELETE',OrderItemDetails,async req=>{
            const id=req.params[0]?.ID?? req.params[0];
            const deleted= await DELETE.from(OrderItems).where({ID:id});
            if(!deleted) return req.reject(404,'Order ${id} not found');
            return deleted
        })
        return super.init();
        
    }
}