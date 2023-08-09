<template>
     <el-table :data="tableData">
     
      <el-table-column label="Select Store" prop="storeName"></el-table-column>
      <el-table-column label="Ticket ID" prop="ticketId"></el-table-column>
      <el-table-column label="Customer Name" prop="customerName"></el-table-column>
      <el-table-column label="Ticket Status" prop="ticketStatus"></el-table-column>
      <el-table-column label="Assigned To" prop="assignedTo"></el-table-column>
      <el-table-column label="Created Date Range" prop="createdDateRange"></el-table-column>
      <el-table-column label="Due Date Range" prop="dueDateRange"></el-table-column>
      <el-table-column label="Advanced Filters" prop="advancedFilters"></el-table-column>
    </el-table>
</template>
<script setup>
import { ref, defineProps,onMounted,watchEffect } from 'vue';


const tableData = ref([]);
const { tableData: parentTableData } = defineProps(['tableData']);

// Watch the changes in the parentTableData prop and update the local tableData
watchEffect(() => {
  tableData.value = [...parentTableData];
});
</script>