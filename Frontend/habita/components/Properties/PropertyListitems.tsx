import Image from "next/image"
const PropertyListitems = () => {
  return (
 <div className="cursor-pointer">
{/* <div className=" relative overflow-hidden aspect-square rounded-xl">
<Image fill src="/property-1.jpg" alt="property image"
sizes ="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
className=" hover:scale-110 object-cover transition-zoom duration-300 ease-in-out"/>



</div> */}
<div className="relative overflow-hidden aspect-[4/3] rounded-xl">
  <Image
    fill
    src="/property-1.jpg"
    alt="property image"
    sizes="(max-width: 768px) 100vw, 33vw"
    className="object-cover hover:scale-105 transition-transform duration-300"
  />
</div>




<div className="mt-2">
    <p className="text-lg font-bold">Property name</p>
</div>

<div className="mt-2">
<p className="text-sm"> <strong className="text-gray-500">2Million</strong></p>

</div>

</div>

 
    
  )
}

export default PropertyListitems
