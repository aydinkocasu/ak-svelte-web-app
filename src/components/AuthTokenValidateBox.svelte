<script lang="ts">
  import { authUserStore } from "../stores/userStore";

  $: userToken = $authUserStore?.token;

  $: token = "";

  let validationErrors: { field: string; message: string }[] = [];

  const validateInputs = () => {
    validationErrors = [];
    if (userToken !== token) {
      validationErrors.push({
        field: "token",
        message: "Token is incorrect, redirecting to sign up page...",
      });
      return;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      authUserStore.login();
      window.location.hash = "#/home";
    } else {
      setTimeout(() => {
        window.location.hash = "#/signup";
      }, 500);
    }
  };

  $: tokenValidateError = validationErrors.find(
    (error) => error.field === "token",
  );
</script>

<form on:submit|preventDefault={handleSubmit} class="signup-form">
  <div class="auth-box">
    <div>
      <h3>Authorization Token</h3>
      <p>Please Enter your authorization token</p>
      <input
        class:error={!!tokenValidateError}
        type="text"
        bind:value={token}
        class="readonly-input"
      />
      {#if tokenValidateError}
        <p class="error-message">{tokenValidateError.message}</p>
      {/if}
    </div>
    <button type="submit" disabled={token.length === 0}>Validate</button>
  </div>
</form>

<style>
  .auth-box {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  p {
    margin: 0px 0px 5px 0px;
  }

  input {
    margin: 0px;
  }
</style>
