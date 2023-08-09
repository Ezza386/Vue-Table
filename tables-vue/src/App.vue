<template>
  <div class="main-container">
    <div class="fix-content">
      <TopButtons  />
      <TicketForm />
    </div>

  </div>
</template>


<script setup>
  import TopButtons from "./components/TopButtons.vue";
  import TicketForm from "./components/Ticket-form.vue";
</script>
<style  >


 body {
 
  background-color: #f0f0f0;
  overflow: hidden; 
  font-family:sans-serif;
}
.el-table {
    background-color: #ffd5d5;
}
</style>
