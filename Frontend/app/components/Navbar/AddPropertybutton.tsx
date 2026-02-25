'use client';

import useLoginModal from "@/app/Hooks/UseLoginModal";
import useAddPropertyModal from "@/app/Hooks/UsePropertyModals";

interface AddPropertyButtonProps {
    userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
    userId
}) => {
    const loginModal = useLoginModal();
    const addPropertyModal = useAddPropertyModal();

    const habitaYourHome = () => {
        if (userId) {
            addPropertyModal.open()
        } else {
            loginModal.Open();
        }
    }

    return (
        <div 
            onClick={habitaYourHome}
            className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
        >
            Habita your home
        </div>
    )
}

export default AddPropertyButton;