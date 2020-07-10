<script context="module">
  export async function preload(page, session) {
    const { user } = page.query
    const headers = {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': session.GITHUB_TOKEN
      }
    }
    const fetchInfo = await this.fetch(`https://api.github.com/users/${user}`, headers)
    const InfoData = await fetchInfo.json()
    const fetchRepos = await this.fetch(`https://api.github.com/users/${user}/repos?per_page=18`, headers)
    const ReposData = await fetchRepos.json()
    const [info, repos] = await Promise.all([InfoData, ReposData])

    return { info, repos }
  }
</script>

<script>
  import Info from '../components/Info.svelte'
  import Repos from '../components/Repos.svelte'

  export let info
  export let repos
</script>

<Info info={info}/>
<Repos repos={repos}/>