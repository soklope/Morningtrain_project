import { create } from 'zustand';

const useEmployeeStore = create((set) => ({
  employee: {
    name: 'John Deez', 
    tags: ["A", "C"], 
    workData: [42, 7, 99, 15, 84, 3, 56, 28, 91, 64], 
    privateData: [52, 71, 42, 8, 16, 89, 63, 77, 26, 81], 
    position: 'Developer'},
  setEmployee: (employee) => set({ employee }),
}));

export default useEmployeeStore;