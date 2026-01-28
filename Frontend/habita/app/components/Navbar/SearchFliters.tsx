const SearchFilters = () =>{

    return(

        <div className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border-none shadow-2xl rounded-full">
        <div className="hidden lg:block">
        <div className=" flex flex-row items-center justify-between">
<div className="w-[250] h-[64px] px-8 flex flex-col justify-center rounded-full cursor-pointer  hover:bg-blue-300"> <p className="text-xs font-semibold">Where</p>
<p className="text-sm">Wanted location</p>
</div>


<div className="w-[250] h-[64px] px-8 flex flex-col justify-center rounded-full cursor-pointer  hover:bg-blue-300"> <p className="text-xs font-semibold">check in</p>
<p className="text-sm">Add dates</p>
</div>

<div className="w-[250] h-[64px] px-8 flex flex-col justify-center rounded-full cursor-pointer  hover:bg-blue-300"> <p className="text-xs font-semibold">Check out</p>
<p className="text-sm">Add dates</p>
</div>


<div className="w-[250] h-[64px] px-8 flex flex-col justify-center rounded-full cursor-pointer  hover:bg-blue-300"> <p className="text-xs font-semibold">Who</p>
<p className="text-sm">Add Guests</p>
</div>


        </div>
        
        </div>


<div className="p-2"> 
    <div className="p-4 lg:p-4 bg-habita cursor-pointer hover:bg-blue-600 trnsition rounded-full text-white **:">


<svg
  viewBox="0 0 24 24"
  style={{
    display: "block",
    fill: "none",
    height: "16px",
    width: "16px",
    stroke: "currentColor",
    strokeWidth: 2,
    overflow: "visible",
  }}
  aria-hidden="true"
  role="presentation"
  focusable="false"
>
  <circle cx="11" cy="11" r="7" />
  <line x1="16.65" y1="16.65" x2="22" y2="22" />
</svg>


    </div>
</div>
</div>

    )

}

export default SearchFilters