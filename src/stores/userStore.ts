import { writable } from "svelte/store";

export interface User {
  telegramID: number;
  password: string;
  createdAt: Date;
  token: string;
}

function createAuthUserStore() {
  const userStore = writable<User | null>(null)
  const isLoggedIn = writable<boolean>(false)
  const isSignedUp = writable<boolean>(false)

  return {
    subscribe: userStore.subscribe,
    signUp: (user: User) => {
      userStore.set(user),
        isSignedUp.set(true)
    },
    login: () => {
      isLoggedIn.set(true)
    },
    logout: () => {
      userStore.set(null)
      isLoggedIn.set(false)
    },
    resetSignUp: () => { isSignedUp.set(false) },
    isLoggedIn,
    isSignedUp
  };
};

export const authUserStore = createAuthUserStore();

