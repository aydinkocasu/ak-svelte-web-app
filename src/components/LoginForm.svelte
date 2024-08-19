<script lang="ts">
  import { authUserStore, type User } from "../stores/userStore";

  export let nextStep;

  let telegramID: number | null = null;
  let password = "";

  let user: User | null = null;

  let validationErrors: { field: string; message: string }[] = [];

  $: authUserStore.subscribe((value: User | null) => {
    user = value;
  });

  const validateInputs = () => {
    validationErrors = [];

    if (!user) {
      validationErrors.push({
        field: "telegramID",
        message: "User not found",
      });
      return;
    }

    if (telegramID !== user.telegramID) {
      validationErrors.push({
        field: "telegramID",
        message: "Telegram ID or password is incorrect",
      });
    } else if (isNaN(Number(telegramID))) {
      validationErrors.push({
        field: "telegramID",
        message: "Telegram ID must be a valid number.",
      });
    }

    if (password !== user.password) {
      validationErrors.push({
        field: "password",
        message: "Telegram ID or password is incorrect",
      });
    }

    return validationErrors.length === 0;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      nextStep = true;
    }
  };

  $: telegramIDError = validationErrors.find(
    (error) => error.field === "telegramID",
  );

  $: passwordError = validationErrors.find(
    (error) => error.field === "password",
  );

  $: buttonDisabled = !telegramID || telegramID === 0 || password.length === 0;
</script>

<form on:submit|preventDefault={handleSubmit} class="signup-form">
  <div class="input-group">
    <label
      >Telegram ID
      <input
        type="text"
        bind:value={telegramID}
        class:error={!!telegramIDError}
        required
      />
    </label>
    {#if telegramIDError}
      <p class="error-message">{telegramIDError.message}</p>
    {/if}
  </div>
  <div class="input-group">
    <label>
      Password <input type="password" bind:value={password} required />
    </label>
    {#if passwordError}
      <p class="error-message">{passwordError.message}</p>
    {/if}
  </div>

  <button disabled={buttonDisabled} type="submit">Log In</button>
</form>
