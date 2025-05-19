import {memo, lazy, Suspense} from 'react'
import Footer from './Components/Footer'

//Important modules
const LazyLoadImage = lazy(()=>import('react-lazy-load-image-component').then(module=>({default: module.LazyLoadImage})))
const Rating = lazy(()=>import('@chepchik/react-rating').then(module=>({default: module.Rating})))

//lazy loading Components
const Hero = lazy(()=> import('./Components/Hero'))
const Brands = lazy(()=> import('./Components/Brand'))
const Products = lazy (()=> import('./Components/HomeProducts'))
const Styles = lazy (()=> import('./Components/Styles'))
const NewsLetter = lazy(()=>import('./Components/NewsLetter'))
const Review = lazy(()=> import('./Components/Review'))

const newArrivals = [
    {name: 'T-shirt with Tape', rating: 4.5, price: '$120', frame: 'Frame32.png'}, 
    {name: 'Skinny fit jeans', rating: 3.5, price: '$240', frame: 'Frame58.png', oldPrice: '$260', discount: '-20%'}, 
    {name: 'Checkered shirt', rating: 5, price: '$180', frame: 'Frame34.png'},
    {name: 'Sleeves Striped T-shirt', rating: 4.5, price: '$130', frame: 'Frame38.png', oldPrice: '$160', discount: '-30%'},
    {name: 'Sleeves Striped T-shirts', rating: 4.5, price: '$130', frame: 'Frame38.png', oldPrice: '$160', discount: '-30%'}
]

const topSelling = [
    {name: 'Vertical striped shirt', rating: 5, price: '$212', frame: 'Frametop1.png', oldPrice: '$232', discount: '-20%'}, 
    {name: 'Courage Graphic T-shirt', rating: 4, price: '$145', frame: 'Frametop2.png'}, 
    {name: 'Loose Fit Bernuda Shorts', rating: 3, price: '$80', frame: 'Frametop3.png'},
    {name: 'Faded Skinny jeans', rating: 4.5, price: '$210', frame: 'Frametop4.png'}
]

const styles = [
    {name: 'Casual', frame: 'style1.png'},
    {name: 'Formal', frame: 'style2.png'},
    {name: 'Party', frame: 'style3.png'},
    {name: 'Gym', frame: 'style4.png'}
]

const review = [
    {name: 'Sarah M', review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", rating: 5},
    {name: 'Emily R', review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", rating: 5},
    {name: 'David K', review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", rating: 5},
    {name: 'Sarah', review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", rating: 5},
    {name: 'Sarai', review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!" , rating: 5}
]

export const SectionLoadingFallback = () => (
      <div className="animate-pulse p-6 bg-gray-200 h-40 w-full rounded-lg flex items-center justify-center">
        <p className="text-gray-800 text-xl">Loading </p>
      </div>
  );


export default function Homepage(){

    return(
        <>
            <div>
                <Suspense fallback={<SectionLoadingFallback/>}>
                    <Hero/>
                </Suspense>
                

                <Suspense fallback={<SectionLoadingFallback/>}>
                    <Brands/>
                </Suspense>
                

                <Suspense fallback={<SectionLoadingFallback/>}>
                    <Products title='New Arrivals' products={newArrivals}/>
                </Suspense>
                

                <Suspense fallback={<SectionLoadingFallback/>}>
                    <Products title='Top Selling' products={topSelling}/>
                </Suspense>
                

                <Suspense fallback={<SectionLoadingFallback/>}>
                    <Styles styles={styles}/>
                </Suspense>
                

                <Suspense fallback={<SectionLoadingFallback/>}>
                    <Review review={review} slice={6} happy={true}/>
                </Suspense>
                

                <Suspense fallback={<SectionLoadingFallback/>}>
                    <NewsLetter/>
                </Suspense>
                
                <Footer/>
            </div>
        </>
    )
}