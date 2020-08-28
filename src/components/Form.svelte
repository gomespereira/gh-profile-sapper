<script lang="ts">
  import { onMount } from 'svelte'
  import { goto } from '@sapper/app'

  let username = ''

  onMount(() => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      const element = document.querySelector<HTMLElement>('#username')

      if (event.code === 'Slash') element.focus()
      if (event.code === 'Escape') element.blur()
    })
  })

  function handleSubmit(): void {
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