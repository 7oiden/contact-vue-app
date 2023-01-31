<template>
    <div class="contact-card">
    <h4>{{ contact.name }}</h4>
    </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style scoped>
.contact-card {
  background-color: aliceblue;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
</style>