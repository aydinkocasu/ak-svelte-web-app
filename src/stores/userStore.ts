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
  const userName = writable<string>("");

  return {
    subscribe: userStore.subscribe,
    signUp: (user: User) => {
      userStore.set(user)
      isSignedUp.set(true)
    },
    login: () => {
      isLoggedIn.set(true)
    },
    logout: () => {
      isLoggedIn.set(false)
    },
    resetSignUp: () => { isSignedUp.set(false) },
    setUserName: (name: string) => {
      userName.set(name);
    },
    isLoggedIn,
    isSignedUp,
    userName
  };
};

export const authUserStore = createAuthUserStore();

