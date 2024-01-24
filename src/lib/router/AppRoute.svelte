<script>
  import Sidebar from '$lib/components/segments/Sidebar.svelte';

  import { Route } from 'svelte-navigator';
  import Redirect from './Redirect.svelte';
  import Grid from '$lib/components/atomic/Grid.svelte';
</script>

<Route primary={false} path="panel/*">
  <div class="flex h-full">
    <Sidebar />
    <div class="h-full w-full">
      <Grid class="h-[80vh]">
        <slot />
      </Grid>
    </div>
  </div>
  <Route primary={false}>
    <Redirect to="panel/dashboard" />
  </Route>
</Route>
