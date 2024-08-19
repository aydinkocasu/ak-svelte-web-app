<script lang="ts">
  import { fade } from "svelte/transition";
  import { authUserStore } from "../stores/userStore";

  let isLoggedIn = false;
  let userName = "";

  $: authUserStore.isLoggedIn.subscribe((value) => (isLoggedIn = value));
  $: authUserStore.userName.subscribe((value) => (userName = value));

  function logOut() {
    authUserStore.logout();
  }

  function navigateTo(name: string) {
    window.location.hash = `#/${name}`;
  }
</script>

<main>
  <div class="box-outside" in:fade={{ duration: 400 }}>
    <div class="top-bar">
      <div class="top-title">Home</div>

      {#if !isLoggedIn}
        <div class="button-box">
          <button
            type="button"
            on:click={() => navigateTo("login")}
            class="button no-bg-button"
          >
            Log In</button
          >
          <button type="button" on:click={() => navigateTo("signup")}>
            Sign Up</button
          >
        </div>
      {:else}
        <div class="button-box">
          <button
            type="button"
            on:click={() => navigateTo("profile")}
            class="button no-bg-button"
          >
            Profile</button
          >
          <button type="button" on:click={logOut}> Log out</button>
        </div>
      {/if}
    </div>
    {#if !isLoggedIn}
      <div class="inner-area">
        <div class="title">Hi {userName}, Welcome to the app 👋</div>
        <div class="p">You can sign up, log In then check your profile</div>
      </div>
    {:else}
      <div class="inner-area">
        <div class="title">Hi {userName}, Welcome Back Again!</div>
        <div class="p">You access your profile</div>
      </div>
    {/if}
  </div>
</main>

<style>
  .top-title {
    padding: 10px 20px;
  }

  .button-box {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .box-outside {
    gap: 20px;
    min-height: 400px;
    min-width: 500px;
  }
  .top-bar {
    gap: 20px;
    padding: 10px 20px;
  }
  .title {
    font-size: 20px;
  }
  .inner-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
