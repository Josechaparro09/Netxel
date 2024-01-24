<script>
  export let spreading = 16;
</script>

<svg
  aria-hidden="true"
  class="pointer-events-none absolute inset-0 h-full w-full fill-gray-400/40 [mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
>
  <defs>
    <pattern
      id=":r25:"
      width={`${spreading}`}
      height={`${spreading}`}
      patternUnits="userSpaceOnUse"
      patternContentUnits="userSpaceOnUse"
      x="0"
      y="0"
    >
      <circle id="pattern-circle" cx="1" cy="1" r="1" />
    </pattern>
  </defs>
  <rect width="100%" height="100%" stroke-width="0" fill="url(#:r25:)" />
</svg>
