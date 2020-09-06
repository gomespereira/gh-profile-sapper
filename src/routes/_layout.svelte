<svelte:head>
  <title>GitHub Profile</title>
</svelte:head>

<script lang="ts">
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'

  import '../../static/global.css'
</script>

<Header/>

<main class="flex flex-col flex-auto justify-center items-center mt-4 mr-4 mb-10 ml-4 md:mr-10 md:ml-10 space-y-10">
  <slot></slot>
</main>

<Footer/>