<template>
  <input
      class="custom-input"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateInput"
  >
</template>

<script>
export default {
  name: 'my-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'Enter value'
    },
    modelValue: {
      type: [String, Number],
    }
  },
  methods:{
    updateInput(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }


};
</script>


<style scoped>
.custom-input {
  margin-bottom: 20px;
}

input {
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  color: white;
}

input::-moz-placeholder {
  color: white;
}

input::-webkit-input-placeholder {
  color: white;
}


</style>
