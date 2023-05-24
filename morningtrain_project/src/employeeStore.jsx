import { create } from 'zustand';

const useEmployeeStore = create((set) => ({
  employee: null,
  setEmployee: (employee) => set({ employee }),
}));

export default useEmployeeStore;