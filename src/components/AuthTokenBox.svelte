<script lang="ts">
  import { onDestroy } from "svelte";
  import { authUserStore } from "../stores/userStore";

  $: user = $authUserStore;
  $: copied = false;

  let continueProcess = false;

  function navigateTo() {
    window.location.hash = "#/home";
  }

  const copyToClipboard = async () => {
    try {
      if (!user) throw new Error("NO CODE");
      await navigator.clipboard.writeText(user.token);
      copied = true;
    } catch (err) {}
  };

  const nextStep = () => {
    continueProcess = true;
    navigateTo();
  };

  onDestroy(() => {
    if (continueProcess) {
      authUserStore.resetSignUp();
    }
  });
</script>

<div class="auth-box">
  <div>
    <h3>Authorization Token</h3>
    <p>Here is your token, Please save it somewhere safe</p>
    <div class="copy-container">
      <input
        type="text"
        value={user?.token ?? ""}
        readonly
        class="readonly-input"
      />
      <button type="button" on:click={copyToClipboard} class="copy-button"
        >{copied ? "Copied!" : "Copy"}</button
      >
    </div>
  </div>
  <button on:click={nextStep} disabled={!copied}>Contuniue</button>
</div>

<style>
  .auth-box {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .copy-container {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }

  p {
    margin: 0px 0px 5px 0px;
  }

  input {
    margin: 0px;
  }
  .copy-button {
    color: #09090b;
    background-color: #ffffff;
  }
</style>
