<script lang="ts">
  import { navigate } from 'svelte-navigator';

  export let to = '';

  navigate(`/${to}`);
</script>
