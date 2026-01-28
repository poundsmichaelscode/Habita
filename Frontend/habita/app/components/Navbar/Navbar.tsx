import Link from "next/link";
import Image from "next/image";
import SearchFilters from "@/app/components/Navbar/SearchFliters"
import Usernav from "./Usernav";
import AddPropertybutton from "./AddPropertybutton";



const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-0 border-b bg-white z-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/habita-logo.png"
              alt="Habita Logo"
              width={180}
              height={38}
              priority
            />
          </Link>
          <div className="flex space-x-6">

            <SearchFilters/>  
          </div>
<div className="flex iytems-center space-x-6">
  <AddPropertybutton/> 

  <Usernav/>
</div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
