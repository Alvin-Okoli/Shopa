
const filters = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'pants', 'joggers']

function ClothFilter({filter}){

    return(
        <div className="border-gray-300 border-y-2 py-2">
            {filters.map((filter, index)=>(
                <div key={index} className="flex justify-between px-4 my-1">
                    <div className="font-light text-xl">{filter}</div>
                    <div className="font-medium">{`>`}</div>
                </div>
            ))}
        </div>
    )
}

export default ClothFilter