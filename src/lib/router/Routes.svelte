<script>
  import { Route } from 'svelte-navigator';
  import LazyRoute from '../router/LazyRoute.svelte';
  import Redirect from './Redirect.svelte';
  import AppRoute from './AppRoute.svelte';
</script>

<LazyRoute path="/" this={() => import('../../app/home/pages/Home.svelte')} />
<LazyRoute
  path="/auth/login"
  this={() => import('../../app/login/pages/Login.svelte')}
/>
<LazyRoute
  path="/auth/forgot-password"
  this={() => import('../../app/auth/pages/ForgotPassword.svelte')}
/>
<AppRoute>
  <LazyRoute
    path="dashboard"
    this={() => import('../../app/dashboard/pages/Dashboard.svelte')}
    requiresAuth
  />
  <LazyRoute
    path="sales"
    this={() => import('../../app/inventory/pages/Inventory.svelte')}
    requiresAuth
  />
  <LazyRoute
    path="inventory/materials"
    this={() => import('../../app/inventory/pages/Inventory.svelte')}
    requiresAuth
  />
  <LazyRoute
    path="inventory/products"
    this={() => import('../../app/inventory/pages/Inventory.svelte')}
    requiresAuth
  />
  <LazyRoute
    path="productions"
    this={() => import('../../app/inventory/pages/Inventory.svelte')}
    requiresAuth
  />
  <LazyRoute
    path="production/recipes"
    this={() => import('../../app/inventory/pages/Inventory.svelte')}
    requiresAuth
  />
  <LazyRoute
    path="config/employees"
    this={() => import('../../app/employees/pages/Employees.svelte')}
    requiresAuth
  />
  <LazyRoute
    path="config/providers"
    this={() => import('../../app/providers/pages/Providers.svelte')}
    requiresAuth
  />
  <LazyRoute
    path="config/units"
    this={() => import('../../app/units/pages/Units.svelte')}
    requiresAuth
  />
  <LazyRoute
    path="config/users"
    this={() => import('../../app/users/pages/Users.svelte')}
    requiresAuth
  />
</AppRoute>
<Route component={Redirect} />
