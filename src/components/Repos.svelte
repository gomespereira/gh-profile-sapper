<script lang="ts">
  import { stores } from '@sapper/app'
  import { onMount } from 'svelte'

  import { fetcher } from '../utils/utils'

  const { page, session } = stores()
  const { user } = $page.query
  let repos = []

  onMount(async () => {
    repos = await fetcher(`https://api.github.com/users/${user}/repos?per_page=18`, $session)
  })
</script>

<section class="flex flex-col items-center mt-4">
  <div class="font-bold">Repositories</div>
  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
    {#each repos as repo}
      <div class="flex flex-col space-y-2 p-6 bg-white border-2 border-blue-900 rounded-md">
        <div class="flex justify-end">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              class="w-5 hover:text-blue-900"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"
              />
            </svg>
          </a>
        </div>
        <div class="flex items-center space-x-3">
          <svg
            class="w-5 text-blue-900"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"
            />
          </svg>
          <span class="font-bold">{repo.name}</span>
        </div>
        {#if repo.description === null}
          <span>None</span>
        {:else}
          <span class="break-all">{repo.description}</span>
        {/if}
        <div class="flex justify-between">
          {#if repo.language === null}
            <span class="italic">None</span>
          {:else}
            <span class="italic">{repo.language}</span>
          {/if}
          <div class="flex space-x-3">
            <div class="flex space-x-1">
              <svg
                class="w-5"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                />
              </svg>
              <span>{repo.stargazers_count}</span>
            </div>
            <div class="flex space-x-1">
              <svg
                class="w-5"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                />
              </svg>
              <span>{repo.forks_count}</span>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>