import Product from "../Product"

//test for Product detail page
//Cloth Schema
const example = {
    name: 'Sleeves Striped T-shirts', 
    rating: 4.5, 
    price: '$130', 
    frame: 'Frame38.png', 
    oldPrice: '$160', 
    discount: '-30%', 
    description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    color: ['bg-red-200', 'black', 'bg-gray-400', 'bg-blue-500'],
    size: ['small', 'x-large'],
    review : [
        {name: 'Sarah M', review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", rating: 5},
        {name: 'Emily R', review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", rating: 5},
        {name: 'David K', review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", rating: 5},
        {name: 'Sarah', review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", rating: 5},
        {name: 'Sarai', review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!" , rating: 5}
    ]
}

const tags = [
    {name: 'Vertical striped shirt', rating: 5, price: '$212', frame: 'Frametop1.png', oldPrice: '$232', discount: '-20%'}, 
    {name: 'Courage Graphic T-shirt', rating: 4, price: '$145', frame: 'Frametop2.png'}, 
    {name: 'Loose Fit Bernuda Shorts', rating: 3, price: '$80', frame: 'Frametop3.png'},
    {name: 'Faded Skinny jeans', rating: 4.5, price: '$210', frame: 'Frametop4.png'}
]


export default function Test(){

    return(
        <>
            <Product cloth={example} tag={tags}/>
        </>
    )
}