<template>
  <div class="card">
    <span class="number">{{ number }}</span>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailCard',
  props: {
    text: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.card {
  width: 200px;
  height: 120px;
  margin: 6px;
  padding: 4px 0;
  border-radius: 4px;
  background: white;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.number {
  font-size: 28px;
}

.text {
  font-size: 16px;
  color: gray;
}

@media screen and (max-width: 450px) {
  .card {
    width: 110px;
    height: 80px;
    margin: 3px;
  }

  .number {
    font-size: 20px;
  }

  .text {
    font-size: 14px;
    color: gray;
  }
}
</style>