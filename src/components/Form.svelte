<script>
  import { onMount } from 'svelte'
  import { goto } from '@sapper/app'

  let username = ''

  onMount(() => {
    document.addEventListener('keyup', event => {
      const element = document.querySelector('#username')
      if (event.keyCode === 191) element.focus()
    })
  })

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