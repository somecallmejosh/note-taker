<template>
  <div class="flex flex-1 divide-x dark:divide-neutral-700">
    <div class="hidden lg:block lg:basis-[278px] lg:shrink-0 lg:px-6 lg:py-6">
      <div class="sticky top-2">
        <slot name="aside" />
      </div>
    </div>
    <div class="flex-1 p-8">
      <slot name="main" />
    </div>
  </div>
</template>
