const cds=require('@sap/cds');
const { UPDATE, SELECT, DELETE } = require('@sap/cds/lib/ql/cds-ql');

module.exports=class relservice extends cds.ApplicationService{
    async init(){
        const {Orders} = cds.entities('relship.db');
        const {Orderdetails} = this.entities

        //Read 
        this.on('READ',Orderdetails, async req =>{
            return cds.db.run(req.query);
        });
        //CREATE
        this.on('CREATE',Orderdetails, async req=>{
            await INSERT.into(Orders).entries(req.data);
            return req.data
        });
        //UPDATE
        this.on('UPDATE',Orderdetails,async req=>{
            const id=req.params[0]?.ID ?? req.params[0];
            const updated= await UPDATE (Orders).set(req.data).where({ID :id});
            if(!updated) return req.reject(404,'Order ${id} not found');
            return SELECT.one.from(Orders).where({ID :id});
        });
        //DELETE
        this.on('DELETE',Orderdetails,async req=>{
            const id=req.params[0]?.ID?? req.params[0];
            const deleted= await DELETE.from(Orders).where({ID:id});
            if(!deleted) return req.reject(404,'Order ${id} not found');
            return deleted
        })
        
    }
}