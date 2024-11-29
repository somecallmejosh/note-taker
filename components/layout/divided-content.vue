<template>
  <div class="flex h-full divide-x">
    <div class="lg:basis-[278px] shrink-0 px-6 py-6">
      <slot name="aside" />
    </div>
    <div class="flex-1 p-8">
      <slot name="main" />
    </div>
  </div>
</template>
