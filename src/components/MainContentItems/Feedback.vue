<template>
  <form class="row mb-5" @submit.prevent="submitForm">
    <h3 class="mt-2 mb-4">Contact</h3>
    <div class="col-12">
      <MyInput v-model="name" type="text" placeholder="Name"/>
    </div>
    <div class="col-12">
      <MyInput v-model="email" type="email" placeholder="Email"/>
    </div>
    <div class="col-12">
      <MyInput v-model="message" type="text" placeholder="Message"/>
    </div>
    <MyButton type="submit" class="btn btn-primary">Send</MyButton>
  </form>
</template>

<script>

import {defineComponent} from "vue";
import MyButton from "../../ui/MyButton.vue";
import MyInput from "../../ui/MyInput.vue";

export default defineComponent({
  components: {
    MyInput,
    MyButton
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    submitForm() {
      alert(this.name + this.email + this.message)
    }
  }
})
</script>

<style scoped lang="scss">

</style>