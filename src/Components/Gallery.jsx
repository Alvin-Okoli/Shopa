import Listings from '../sub Componennts/Listings'

const lists = [
    {name: 'T-shirt with Tape', rating: 4.5, price: '$120', frame: 'Frame32.png'}, 
    {name: 'Skinny fit jeans', rating: 3.5, price: '$240', frame: 'Frame58.png', oldPrice: '$260', discount: '-20%'}, 
    {name: 'Checkered shirt', rating: 5, price: '$180', frame: 'Frame34.png'},
    {name: 'Sleeves Striped T-shirt', rating: 4.5, price: '$130', frame: 'Frame38.png', oldPrice: '$160', discount: '-30%'},
    {name: 'Sleeves Striped T-shirts', rating: 4.5, price: '$130', frame: 'Frame38.png', oldPrice: '$160', discount: '-30%'},
    {name: 'Vertical striped shirt', rating: 5, price: '$212', frame: 'Frametop1.png', oldPrice: '$232', discount: '-20%'}, 
    {name: 'Courage Graphic T-shirt', rating: 4, price: '$145', frame: 'Frametop2.png'}, 
    {name: 'Loose Fit Bernuda Shorts', rating: 3, price: '$80', frame: 'Frametop3.png'},
    {name: 'Faded Skinny jeans', rating: 4.5, price: '$210', frame: 'Frametop4.png'}
]

function Gallery(){

    return(
        <div className="grid grid-cols-2 gap-x-2 md:grid-cols-3 lg:grid-cols-4">
            {lists.map((list, index)=>(
                <Listings key={index} product={list} style={'cursor-pointer'}/>
            ))}
        </div>
    )
}

export default Gallery