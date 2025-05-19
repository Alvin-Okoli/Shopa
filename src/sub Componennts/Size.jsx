const size = ['xx-Small', 'x-Small', 'Small', 'Medium', 'Large', 'x-Large', 'xx-Large', '3x-Large', '4x-Large']

function Size(){

    return(
        <div className="py-4 border-gray-300 border-b-2">
            <div className="my-2 text-lg font-semibold">Size</div>

            <div>
            {size.map((sizes, index)=>(
                <div key={index} className='my-2 font-light text-lg inline-block shadow bg-gray-200 px-3 rounded-2xl hover:bg-black hover:text-white mr-2  cursor-pointer'>{sizes}</div>
            ))}
            </div>
        </div>
    )
}

export default Size