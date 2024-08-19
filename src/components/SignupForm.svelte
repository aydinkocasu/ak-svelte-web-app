<script lang="ts">
  import { generateToken } from "../utils/helper";
  import { authUserStore, type User } from "../stores/userStore";

  let telegramID: number | null = null;
  let password = "";
  let token = "";

  let user = null;

  let validationErrors: { field: string; message: string }[] = [];

  $: authUserStore.subscribe((value: User | null) => {
    user = value;
  });

  const validateInputs = () => {
    validationErrors = []; // Clear previous validation errors

    if (!telegramID) {
      validationErrors.push({
        field: "telegramID",
        message: "Telegram ID is required.",
      });
    } else if (isNaN(Number(telegramID))) {
      validationErrors.push({
        field: "telegramID",
        message: "Telegram ID must be a valid number.",
      });
    }

    if (password.length < 5) {
      validationErrors.push({
        field: "password",
        message: "Password must be more than 5 characters.",
      });
    }

    return validationErrors.length === 0;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      token = generateToken();

      const user = {
        telegramID,
        password,
        createdAt: new Date(),
        token,
      };

      authUserStore.signUp(user as User);
      alert(
        `Your authorization token is: ${token}. Please save it somewhere safe`,
      );
    } else {
      console.log("Validation Errors");
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
      >Telegram ID<br />
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
      Password
      <input
        type="password"
        class:error={!!passwordError}
        bind:value={password}
        required
      />
    </label>
    {#if passwordError}
      <p class="error-message">{passwordError.message}</p>
    {/if}
  </div>

  <button disabled={buttonDisabled} type="submit">Sign Up</button>
</form>
