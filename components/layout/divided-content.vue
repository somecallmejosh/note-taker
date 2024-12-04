<template>
  <div class="flex flex-1 divide-x dark:divide-neutral-700">
    <div class="hidden lg:block basis-[278px] shrink-0 lg:px-6 lg:py-6 h-full overflow-scroll">
      <slot name="aside" />
    </div>
    <div class="flex-1 h-full p-8 overflow-scroll">
      <slot name="main" />
    </div>
    <!-- if aside2 is present -->
    <template v-if="$slots.aside2">
      <div class="hidden lg:block basis-[278px] shrink-0 lg:px-6 lg:py-6 h-full overflow-scroll">
        <slot name="aside2" />
      </div>
    </template>
  </div>
</template>
