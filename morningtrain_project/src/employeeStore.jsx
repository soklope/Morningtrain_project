import { create } from 'zustand';
import { employeeArray } from './db';

const useEmployeeStore = create((set) => ({
  employee: employeeArray[0],
  setEmployee: (employee) => set({ employee }),
}));

export default useEmployeeStore;