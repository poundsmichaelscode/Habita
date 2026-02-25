'use client';


interface MenuLinkProps {
    label: string;
    onClick: () => void;
}



const MenuLink: React.FC<MenuLinkProps> =({label,
    onClick
}) => {

  return (
<div  onClick={onClick} className="px-5 py-4 hover:bg-blue-300 rounded-2xl transition shadow-md border-0 cursor-pointer">

  {label}
</div>

  )
}

export default MenuLink