

function Button({nav}){
    return(
        <div className="flex justify-between px-10 mb-20 md:justify-center md:gap-10">
            <button className="p-2 shadow cursor-pointer">&#x2190; Previous</button>
            <div className="mt-2">Page <span className="p-2 shadow w-6 h-6 rounded-full text-center">{nav}</span></div>
            <button className="p-2 shadow cursor-pointer">Next &#x2192;</button>
        </div>
    )
}

export default Button 