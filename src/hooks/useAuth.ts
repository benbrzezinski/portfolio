import { create } from "zustand";

interface State {
  isUserAllowed: boolean;
  toggleIsUserAllowed: () => void;
}

const useAuth = create<State>(set => ({
  isUserAllowed: false,
  toggleIsUserAllowed: () =>
    set(state => ({ isUserAllowed: !state.isUserAllowed })),
}));

export default useAuth;
