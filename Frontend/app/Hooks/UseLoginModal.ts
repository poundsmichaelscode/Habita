import {create} from 'zustand';


interface LoginModalState {
    isOpen: boolean;
    Open: () => void;
    Close: () => void;
}



const useLoginModal = create<LoginModalState>((set) => ({
    isOpen: false,
    Open: () => set({isOpen: true}),
    Close: () => set({isOpen: false}),
}));


export default useLoginModal;