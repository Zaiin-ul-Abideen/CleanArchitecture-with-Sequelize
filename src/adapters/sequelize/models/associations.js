export default(models)=>{

    models.customer.hasMany(models.customer,{
        as:'customers'
    })

    


}