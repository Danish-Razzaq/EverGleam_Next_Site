
import { defineField, defineType } from "sanity"

export default  defineType({
 name:"product",
 type:"document",
 title:"Product",
 fields:
    [
        defineField({
            name:"name",
            type:"string",
            title:"Name of Product",
        }),
        defineField({
            name:"images",
            type:"array",
            title:"Product Images",
            of:[{type:'image'}],
        }),
        defineField({
            name:"description",
            type:"text",
            title:"Description of product ",
        }),
        defineField({
            name:"slug",
            type:"slug",
            title:"product slug",
            options:{
                source:'name'
            }
        }),
        defineField({
            name:"price",
            type:"number",
            title:"Product price",
            
        }),
        defineField({
            name:"price_id",
            type:"string",
            title:"Strip Price ID",
            
        }),
        
        defineField({
            name:"category",
            type:"reference",
            title:"Product Category",
            to:{
                type:'category'
            }
        }),
        
    ]

})