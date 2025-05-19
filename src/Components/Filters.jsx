import ClothFilter from "../sub Componennts/ClothFilter"
import Colors from "../sub Componennts/Colors"
import Size from "../sub Componennts/Size"

function Filters({style}){

    return(
            <div className={`w-full h-[800px] rounded-2xl p-2 shadow my-2 ${style} bg-white`}>
                <div className="text-center py-2">
                    <div className="font-semibold text-2xl">Filters</div>
                </div>
                <ClothFilter/>
                <Colors/>
                <Size/>
                <div className="hover:bg-gray-500 hover:text-white bg-black text-white cursor-pointer w-10/12 mx-auto text-center rounded-2xl p-2 my-4">Apply Filter</div>
            </div>
    )
}

export default Filters