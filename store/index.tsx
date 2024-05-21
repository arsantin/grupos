import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useProdStore = create(
  //  persist(
  (set) => ({
    isMainMenuOpen: false,
    openMenu: () => set((state: any) => ({ isMainMenuOpen: true })),
    closeMenu: () => set((state: any) => ({ isMainMenuOpen: false })),
  }),
  /*    {
      name: "mainMenu-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ), */
);
