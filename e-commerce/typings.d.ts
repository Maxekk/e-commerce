interface ISanityDefault {
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
}

interface IProduct extends ISanityDefault {
  _type: "product";
  imageURL: string;
  name: string;
  price: number;
}
