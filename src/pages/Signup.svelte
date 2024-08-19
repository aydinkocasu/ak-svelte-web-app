<script>
  import { fade } from "svelte/transition";
  import AuthTokenBox from "../components/AuthTokenBox.svelte";
  import SignupForm from "../components/SignupForm.svelte";
  import { authUserStore } from "../stores/userStore";

  function navigateTo() {
    window.location.hash = "#/home";
  }

  let isSignUp = false;
  $: authUserStore.isSignedUp.subscribe((value) => (isSignUp = value));
</script>

<main>
  <div class="box-outside" in:fade={{ duration: 400 }}>
    <div class="top-bar">
      <button class="button no-bg-button-p0" on:click={navigateTo}>
        {"< Back"}</button
      >
    </div>
    {#if !isSignUp}
      <div class="default-padding">
        <div class="title">
          <h3>Sign Up</h3>
          <p>Enter your telegram Id below to create your account</p>
        </div>
        <SignupForm />
      </div>
    {/if}

    {#if isSignUp}
      <div class="default-padding" transition:fade={{ duration: 400 }}>
        <AuthTokenBox />
      </div>
    {/if}
  </div>
</main>

<style>
  h3 {
    margin: 0px;
    margin-block: 0px;
    text-align: left;
    font-size: 1.5rem;
  }

  p {
    color: #a1a1aa;
    margin: 0px;
  }
</style>
