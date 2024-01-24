<script>
  export let size = 'md';
  let clazz = '';
  export { clazz as class };

  const sizeClasses = {
    sm: 'small',
    md: 'medium',
    lg: 'large',
    xl: 'xlarge',
  };

  $: computedClass = `${sizeClasses[size] || ''} ${clazz}`;
</script>

<button
  class="group relative cursor-pointer overflow-hidden whitespace-nowrap px-3 py-2
  [background:var(--bg)] [border-radius:var(--radius)] transition-all duration-300 ease-in-out
  hover:scale-105 hover:shadow-[0_0_20px_10px_rgba(62,61,117,0.5)] {computedClass}"
  style="--spread: 90deg; --shimmer-color: #ffffff; --radius: 100px; --speed: 1.5s; --cut: 0.1em;
  --bg: radial-gradient(ellipse 80% 50% at 50% 120%,rgba(62, 61, 117),rgba(18, 18, 38));"
>
  <div class="absolute inset-0 overflow-visible [container-type:size]">
    <div
      class="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]"
    >
      <div
        class="absolute inset-[-100%] w-auto rotate-0 animate-spinShimmer [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]"
      />
    </div>
  </div>
  <div
    class="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
  />
  <div class="pointer-events-none relative z-10 flex">
    <span
      class="whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center font-semibold leading-none tracking-tight from-white/50 from-[1%] to-white text-transparent dark:from-white/40 dark:from-10% dark:to-white dark:text-transparent"
    >
      <slot />
    </span>
  </div>
</button>
