<script setup lang="ts">
useHead({
  title: "App Data Stone",
  meta: [{ name: "theme-color", content: "#4285f4" }],
});
</script>
<template>
  <section>
    <VitePwaManifest />
    <NuxtPage />
  </section>
</template>
