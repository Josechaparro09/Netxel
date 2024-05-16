<script>
  import { DarkMode,Button } from "flowbite-svelte";
</script>

<header>
  <div class="mx-auto flex flex-wrap justify-between items-center container">
    <a href="/">
      <span class="flex borderp-10">
        <img class="w-12 h-12 m-3" src="NetxelLogo.svg" alt="logo" />
        <span class="grid place-content-center mt-1">
          <div
            class=" bg-primary-500 rounded-full items-center justify-center inline-flex py-0.5 px-2.5 font-medium color dark:text-white"
          >
            v0.0.15
          </div>
        </span>
      </span>
    </a>
    <div class="flex">
      <DarkMode class="px-10 border-black" />
     <div class="nav-end">
	</div>
    </div>
  </div>
</header>
