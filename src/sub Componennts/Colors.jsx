const colors = ['bg-green-400', 'bg-red-600', 'bg-yellow-200', 'bg-blue-400', 'bg-purple-600', 'bg-pink-400', 'bg-white', 'bg-black', 'bg-gray-600', 'bg-orange-400']

function Colors({color}){

    return(
        <div className="p-2 border-gray-300 border-b-2">
            <div className="mb-2 font-semibold">Colors</div>
            <div className="flex flex-wrap gap-3 my-2">
                {colors.map((color, index)=>(
                    <div key={index} className={`shadow shadow-gray-400 ${color} w-8 h-8 rounded-full`}></div>
                ))}
            </div>
        </div>
    )
}

export default Colors