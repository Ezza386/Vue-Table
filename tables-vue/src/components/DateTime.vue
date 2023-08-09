<template>
    <div class="custom-datepicker">
      <div class="date-picker-container">
        <el-label>Start Date</el-label>
        <el-date-picker
          v-model="startDate"
          type="date"
          placeholder="Start Date"
          :picker-options="pickerOptions"
        ></el-date-picker>
      </div>
      <div class="date-picker-container">
        <el-label>End Date</el-label>
        <el-date-picker
          v-model="endDate"
          type="date"
          placeholder="End Date"
          :picker-options="pickerOptions"
          
        ></el-date-picker>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        startDate: null,
        endDate: null,
        pickerOptions: {
          // Here you can customize date picker options if needed
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .custom-datepicker {
    display: flex;
    flex-direction: column;
  }
  
  .date-picker-container {
    display: flex;
    align-items: center;
 
  }
  
  .date-picker-container .el-date-editor {
    font-size: 14px;
    width: 20px;
    
  }


  </style>
  