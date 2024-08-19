<script>
  import Router from "svelte-spa-router";
  import routes from "./router";
  import { authUserStore } from "./stores/userStore";

  let isLoggedIn = false;

  $: authUserStore.isLoggedIn.subscribe((value) => {
    isLoggedIn = value;
    checkLoginStatus();
  });

  function checkLoginStatus() {
    if (!isLoggedIn && window.location.hash === "#/profile") {
      window.location.hash = "#/login";
    }
  }

  function ensureHashRouting() {
    const validRoutes = ["#/", "#/signup", "#/profile", "#/login"];
    if (!window.location.hash) {
      window.location.hash = "#/";
    } else if (!validRoutes.includes(window.location.hash)) {
      window.location.hash = "#/";
    }
  }

  ensureHashRouting();

  window.addEventListener("popstate", ensureHashRouting);

  window.addEventListener("hashchange", checkLoginStatus);
</script>

<Router {routes} />
