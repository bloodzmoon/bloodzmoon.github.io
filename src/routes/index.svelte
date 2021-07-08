<script>
  import Welcome from "$components/Welcome.svelte";
  import Profile from "$components/Profile.svelte";
  import MyDocument from "$components/MyDocument.svelte";
  import Contact from "$components/Contact.svelte";
  import DividerTop from "$components/DividerTop.svelte";
  import DividerBottom from "$components/DividerBottom.svelte";
</script>

<svelte:head>
  <title>Than - World</title>
</svelte:head>
<Welcome />
<DividerTop />
<Profile />
<MyDocument />
<DividerBottom />
<Contact />
