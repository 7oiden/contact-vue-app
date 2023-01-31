<template>
  <h1>My contacts</h1>
    <div class="contacts">
      <ContactCard v-for="contact in contacts" :key="contact.id" :contact="contact"/>
    </div>
</template>

<script>
import ContactCard from "./ContactCard.vue"
import ContactService from "./ContactService.js"

export default {
  name: "ContactList",
  components: {
    ContactCard
  },
  data() {
    return {
      contacts: null
    }
  },
  created() {
    ContactService.getContacts()
    .then(response => {
      console.log(response.data)
      this.contacts = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
};
</script>

<style scoped>
.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>