import { useState } from "react"
import Filters from "./Components/Filters"
import Gallery from "./Components/Gallery"
import Footer from "./Components/Footer"
import Button from "./sub Componennts/Button"
import NewsLetter from "./Components/NewsLetter"

function Category(){
    const [show, setShow] = useState(false)

    const handleShow = ()=>{
        setShow(!show)
    }
    return(
        <div>
            <div className="md:grid md:grid-cols-4 md:gap-6 md:p-2">
                <Filters style={'col-span-1 hidden md:block'}/>
                <div className="col-span-3">
                    <div className="flex justify-between px-4 my-2 relative">
                        <div className={`${show&& 'invisible'} md:visible text-2xl font-bold`}>Casual</div>
                    {!show?
                        <div onClick={handleShow} className="md:invisible">Apply Filter</div>
                    :
                        <div className="text-black text-2xl fixed right-4 z-10 md:hidden" onClick={handleShow}>x</div>
                    }
                </div>

                <Gallery/>
                </div>
            </div>
                

            {show&& <Filters style={'absolute top-16 md:hidden'}/>}

            <Button nav={1}/>

            <NewsLetter/>
            
            <Footer/>
        </div>
    )
}

export default Category