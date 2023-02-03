# E-commerce
E-commerce application built using Next.js and Sanity CMS with integration with Stripe API

Preview: http://35.228.233.43:3000

Start:
------------

- ``` git clone ```
- In the same directory as e-commerce folder run: ```npm create sanity@latest -- --template clean --create-project "sanity" --dataset production```
- ```cd sanity```
- ```cd schemas```
- Create a new file "product.ts" and fill it with this:

```
export default {
    name: 'product',
    type: 'document',
      title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
      {
        name: 'imageURL',
        type: 'string',
        title: 'ImageURL'
      }
    ]
  }
  ```
  - Replace index.ts file with this:
  ```
  import product from "./product";

export const schemaTypes = [product]
```
- ```cd ../```
- ```npm install```
- ```sanity start```
- In ```e-commerce/``` run: ```npm install``` then fill .env file (All required information would be on Sanity panel on ```localhost:3333```)
- ```npm run dev```

App should be running on port 3000
  