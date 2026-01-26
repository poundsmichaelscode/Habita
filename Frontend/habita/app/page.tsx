
import Cartegories from "@/components/Cartegories";
import Propertylist from "@/components/Properties/Propertylist";

export default function Home() {
  return (
    

    <main className="max-w-[1350px] mx-auto px-6">

<Cartegories />


  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-col-5">

 <Propertylist/>
    
</div>
 

      </main>
  );

  

}
