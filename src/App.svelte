<script lang="ts">
  import Router from "svelte-spa-router";
  import routes from "./router";
  import { authUserStore } from "./stores/userStore";
  import { onMount } from "svelte";

  let isLoggedIn = false;

  // Extract the query parameter
  async function checkQuery(): Promise<void> {
    return new Promise((resolve) => {
      const hash = window.location.hash;
      const queryString = hash.split("?")[1];
      const hashParams = new URLSearchParams(queryString);
      const name = hashParams.get("name") || "";
      if (name) {
        authUserStore.setUserName(name);
      }
      resolve();
    });
  }

  $: authUserStore.isLoggedIn.subscribe((value) => {
    isLoggedIn = value;
    checkLoginStatus();
  });

  function checkLoginStatus() {
    if (!isLoggedIn && window.location.hash === "#/profile") {
      window.location.hash = "#/login";
    }
  }

  async function ensureHashRouting() {
    const validRoutes = ["#/", "#/signup", "#/profile", "#/login"];
    await checkQuery();
    if (!window.location.hash) {
      window.location.hash = "#/";
    } else if (!validRoutes.includes(window.location.hash)) {
      window.location.hash = "#/";
    }
  }

  onMount(() => {
    ensureHashRouting();
  });

  window.addEventListener("popstate", ensureHashRouting);
  window.addEventListener("hashchange", checkLoginStatus);
</script>

<Router {routes} />
