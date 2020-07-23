<template>
  <div class="wrapper">
    <input
      class="input"
      :value="value"
      :placeholder="placeholder"
      spellcheck="false"
      @input="$emit('update:value', $event.target.value)"
    />
    <unicon class="icon" name="search" fill="#b3b1b1" width="24" height="24"></unicon>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: String,
  },
}
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.input {
  border: 1px solid white;
  border-radius: 6px;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.2);
  padding: 16px 56px 16px 16px;
  width: 100%;
  font-family: inherit;
  font-size: 18px;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
}

.input:hover {
  box-shadow: 0 10px 30px -20px rgba(0, 0, 0, 0.2);
}

.input:focus {
  outline: none;
  border: 1px solid #26aefd;
  box-shadow: 0 10px 30px -20px rgba(0, 0, 0, 0.2);
}

.input::placeholder {
  color: #b3b1b1;
}

.icon {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

@media screen and (max-width: 768px) {
  .wrapper {
    width: 100%;
  }
}
</style>