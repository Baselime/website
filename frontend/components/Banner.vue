<template>
  <div class="w-full bg-baseGreen">
    <div
      class="max-w-7xl mx-auto py-2 text-center text-white font-semibold px-6"
    >
      {{ text[0] }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      text: ['Some random text'],
    }
  },
}
</script>
