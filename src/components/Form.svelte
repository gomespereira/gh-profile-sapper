<script>
  import { goto } from '@sapper/app'

  let username = ''

  function handleSubmit() {
    goto(`/profile?user=${username}`)
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="username">github.com/</label>
  <input
    id="username"
    class="pl-2 rounded outline-none focus:shadow-outline"
    type="text"
    placeholder="Press '/' to focus"
    bind:value={username}
  >
</form>