<template >
  <div class="cust-buttons" style="background-color: rgba(235, 234, 231, 0.575);">
  <el-header class="top-heading">
    <h2 style="font-weight: 300">Manage Tickets</h2>
  </el-header>
  <div class="top-buttons">
    <el-button  class="custom-button3 noHover" style="background-color: white;">
      <el-icon color="#00474F">
        <Filter />
      </el-icon> <span class="custom-button4" style="color: #00474F">Cancel</span> 
      <el-icon class="custom-button6" color="#00474F">
      <Close/>
    </el-icon>
    </el-button>

    <el-button   class="custom-button2  noHover">
      <el-icon>
        <PieChart/>
      </el-icon><span class="custom-button2">Overview</span> 
    </el-button>
    <el-button class="custom-button3 noHover" >
     <!--- <img src="excel.png" class="filter-image">-->

     <el-icon>
      <Document/>
     </el-icon>
      <span class="custom-button2">Export</span> 
    </el-button>
    <el-button class="custom-button1 noHover" >
      <span class="custom-button">Create Ticket</span>
      
    </el-button>
  </div>
</div>
</template>

<script setup>
const createTicket = () => {
  eventBus.$emit('formSubmitted');
};
</script>

<style scoped>
.filter-image {
  width: 20px;
  height: auto;
}

.top-heading {
  position: fixed;
  top: 20px;
  left: -10px;
  color: black;
}

.top-buttons {
  position: fixed;
  top: 20px;
  right: 20px;
  
}


.custom-button3{
  background-color: #e0e0e0;
  border-radius:2px;
  padding-left: 10px;
  padding-right: 5px;

}
.noHover{
    pointer-events: none;
}
.custom-button{
  padding-left: 9px;
  padding-right: 9px;
  padding-top: 4px;
  padding-bottom: 3px;
  font-size: 12px;
}
.custom-button1 {
  
  background-color: #03656fdd;
  color: #fff;
  padding-left: 2px;
  padding-right: 5px;
 border: #03646fa3;
}
.custom-button4{
 
  font-size: 13px;
padding-left: 4px;
padding-right: 15px;
}
.custom-button5{
 
  padding-right: 5px;
}
.custom-button2 {
  
  background-color: #e0e0e0;
  font-size: 12px;
 
  padding-right: 6px;
}

</style>
