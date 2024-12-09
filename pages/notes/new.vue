<template>
  <layout-default>
    <template #header>
      <h1 class="text-2xl font-bold">New Note</h1>
    </template>
    <template #main>
      <layout-divided-content>
        <template #main>
          <div class="h-[calc(100%-5rem)] lg:h-[calc(100%-2rem)]">
            <button-back-link to="/notes/active" text="Notes" />
            <layout-note :note="{}" context="new" />
          </div>
        </template>
      </layout-divided-content>
    </template>
  </layout-default>
</template>
