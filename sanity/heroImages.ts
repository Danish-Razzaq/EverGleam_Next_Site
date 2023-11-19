
import { defineField, defineType } from "sanity"

export default  defineType({
 name:"heroImage",
 type:"document",
 title:"HeroImages",
 fields:
    [
        defineField({
            name:"image1",
            type:"image",
            title:"First Image",
        }),
        defineField({
            name:"image2",
            type:"image",
            title:"Second Image",
        }),
    ]

})