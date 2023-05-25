import { create } from 'zustand';

const useModalStore = create((set) => ({
    modalValue: true,
    setModalValue: (value) => set({ modalValue: value }),
  }));

export default useModalStore;