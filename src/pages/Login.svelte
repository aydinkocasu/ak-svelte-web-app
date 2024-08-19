<script>
  import { fade } from "svelte/transition";
  import LoginForm from "../components/LoginForm.svelte";
  import AuthTokenValidateBox from "../components/AuthTokenValidateBox.svelte";

  function navigateTo() {
    window.location.hash = "#/home";
  }

  let nextStep = false;
</script>

<main>
  <div class="box-outside" in:fade={{ duration: 400 }}>
    <div class="top-bar">
      <button class="button no-bg-button-p0" on:click={navigateTo}>
        {"< Back"}</button
      >
    </div>

    {#if !nextStep}
      <div class="default-padding">
        <div class="title">
          <h3>Log In</h3>
          <p>Enter your telegram Id and password to access your profile</p>
        </div>
        <LoginForm bind:nextStep />
      </div>
    {/if}

    {#if nextStep}
      <div class="default-padding" transition:fade={{ duration: 400 }}>
        <AuthTokenValidateBox />
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
