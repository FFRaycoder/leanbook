<template>
  <div>
    <div class="page">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeanBookPage'
}
</script>

<style lang="scss" scoped>
$component-class: page;

.#{$component-class} {
  max-width: 1000px;
}
</style>
