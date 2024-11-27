<template>
  <div class="flex items-center justify-center h-screen px-6 overflow-scroll bg-neutral-100 lg:px-0">
    <NuxtRouteAnnouncer />
    <UCard class="w-full max-w-[40rem]">
      <div class="py-8 space-y-8">
        <logo class="h-8 mx-auto" />
        <NuxtPage />
      </div>
    </UCard>
  </div>
</template>
