<script lang="ts">
  import { stores } from '@sapper/app'

  const { page } = stores()
</script>

<nav class="mt-4 mr-2 ml-2 md:mt-8 md:mr-10 md:ml-10">
  <ul class="flex justify-end">
    <li class="text-blue-900 font-bold hover:underline">
      {#if $page.path === '/'}
        <a href="/about">About</a>
      {:else if $page.path === 'profile'}
        <a href="/">New Search</a>
      {:else}
        <a href="/">Home</a>
      {/if}
    </li>
  </ul>
</nav>