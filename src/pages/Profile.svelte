<script>
  import { fade } from "svelte/transition";
  import { authUserStore } from "../stores/userStore";
  import { formatDateTo24Hours, maskPassword } from "../utils/helper";

  function navigateTo() {
    window.location.hash = "#/home";
  }

  $: user = $authUserStore;
</script>

<main>
  <div class="box-outside" in:fade={{ duration: 400 }}>
    <div class="top-bar">
      <button class="button no-bg-button-p0" on:click={navigateTo}>
        {"< Back"}</button
      >
    </div>
    {#if user}
      <div class="default-padding">
        <div class="title">
          <h3>Profile</h3>
          <p>Your Account Details</p>
        </div>
        <div class="user-detail">
          <p>{`Telegram Id: ${user.telegramID}`}</p>
          <p>{`Password: ${maskPassword(user.password)}`}</p>
          <p>{`Created At: ${formatDateTo24Hours(user.createdAt)}`}</p>
        </div>
      </div>
    {/if}
  </div>
</main>

<style>
  .user-detail {
    text-align: left;
  }
  h3 {
    margin: 0px;
    margin-block: 0px;
    text-align: left;
    font-size: 1.5rem;
  }
  .box-outside {
    min-width: 400px;
  }
  .title {
    padding-bottom: 10px;
    text-align: left;
  }
  .title p {
    color: #a1a1aa;
  }

  p {
    color: #fdfdfd;
    margin: 0px;
  }
</style>
