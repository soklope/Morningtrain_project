import { create } from 'zustand';
import { employeeArray } from './db';

const useEmployeeStore = create((set) => ({
  employee:     
    {
      name: "John Deez",
      tags: ["A", "C"],
      tagsLong: [],
      workData: [42, 39, 25, 45, 66, 64, 60, 66, 77, 80],
      privateData: [52, 61, 42, 40, 55, 60, 55, 70, 75, 81],
      position: "Developer"
    },
  setEmployee: (employee) => set({ employee }),
}));

export default useEmployeeStore;