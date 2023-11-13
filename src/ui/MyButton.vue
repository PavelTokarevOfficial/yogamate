<template>
  <button>
    <slot/>
  </button>
</template>

<script>

</script>

<style scoped lang="scss">
button{
  border: none;
  background-color: #FA8072;
  border-radius: 60px;
  padding: 20px 40px;
  transition: .5s;
  &:hover{
    background: #ff5341;
  }
}
</style>