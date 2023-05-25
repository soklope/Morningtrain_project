import { create } from 'zustand';

const useDropdownStore = create((set) => ({
    dropdownValue: false,
    setDropdownValue: (value) => set({ dropdownValue: value }),
  }));

export default useDropdownStore;