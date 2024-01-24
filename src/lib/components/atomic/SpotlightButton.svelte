<button
  class="group relative inline-flex items-center overflow-hidden rounded-full bg-zinc-800 px-4 py-3 transition-all focus:ring-green-300 dark:focus:ring-green-800 duration-300 ease-in-out hover:shadow-[0_0_20px_10px_rgba(46,204,113,0.1)]"
>
  <div class="absolute inset-0 flex items-center [container-type:inline-size]">
    <div
      class="absolute h-[100cqw] w-[100cqw] animate-spinSpot bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"
    />
  </div>
  <div
    class="absolute inset-0.5 rounded-full bg-gradient-to-r from-green-400 via-green-600 to-green-700"
  />
  <div
    class="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-green-400 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"
  />
  <div class="relative inline-flex items-center gap-2">
    <span
      class="group-hover font-mona group-hover:text-shadow-sm mt-0.5 text-lg font-medium text-white/70 transition-all duration-300 [font-variation-settings:'wdth'_125] group-hover:text-white"
    >
      <slot name="icon" />
    </span>

    <div class="h-5 w-px bg-white/10" />
    <div
      class="font-mona mt-px bg-gradient-to-b from-white/50 to-white bg-clip-text text-[1rem] font-medium text-transparent transition-all duration-200 group-hover:from-white/50 group-hover:to-white"
    >
      <slot />
    </div>
  </div>
</button>
