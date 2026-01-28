import Image from "next/image";
import ReservationSidebar from "@/app/components/Properties/ReservationSidebar";


const PropertyDetailsPage = () => {
  return (

     
    <main className="max-w-[1350px] mx-auto px-6 pb-8">

<div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">


    <Image fill
src ='/property-1.jpg'
className="object-cover w-full h-full"
alt='property Image beach house'/>

</div>


<div className=" grid grid-cols-5 gap-4">
<div className="py-6 pr-6 col-span-3">
<h1 className="mb-4 text-4xl ">Property Name</h1>
<span className="mb-6 text-lg text-gray-500"> 6 guest - 3 bed room  2 bathroom</span>
<hr/>

<div className ="py-6 flex-items space-x-4">

    <Image
    src= "/profile"
    width={50}
    height={50}
    className="rounded-full"
    alt="host profile picture"/>

<p><strong>pouinds michaels</strong> is your host</p>


</div>

<hr/>
<p className="mt-6 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fuga nulla optio fugit quae rerum, et officiis minus, ipsum error, </p>

</div>

<ReservationSidebar />

</div>
       
</main>

  )
}

export default PropertyDetailsPage 
