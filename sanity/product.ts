export default {
    name:"product",
    title: "Products",
    type: "document",
    fields:[
        {
            name: 'p_name',
            type: 'string',
            title: 'Product Name'
          },

          

          {
            name: 'p_category',
            type: 'string',
            title: 'Product Category'
          },

          {
            name: 'p_description',
            type: 'string',
            title: 'Product Description'
          },
          {
            name: 'p_gender',
            type: 'string',
            title: 'Product Gender',
            options: {
              list: [
                {title: 'Male', value: 'male'},
                {title: 'Female', value: 'female'},
                {title: 'Kids', value: 'kids'},
              ], // <-- predefined values
              layout: 'dropdown' // <-- defaults to 'dropdown'
            }
          },

          {
            name: 'p_price',
            type: 'number',
            title: 'Product Price'
          },

          {
            name: 'p_oldprice',
            type: 'number',
            title: 'Product Old Price'
          },

          {
            name: 'p_img',
            type: 'image',
            title: 'Product Image'
          },

        //   {/
        //     title: 'Product Size',
        //     name: 'p_size',
        //     type: 'string',
        //     options: {
        //       list: [
        //         {title: 'Small', value: 's'},
        //         {title: 'Medium', value: 'm'},
        //         {title: 'Large', value: 'l'},
        //         {title: 'Extra Large', value: 'xl'}
        //       ], // <-- predefined values
        //       layout: 'dropdown' // <-- defaults to 'dropdown'
        //     }
        //   }
    ]
}