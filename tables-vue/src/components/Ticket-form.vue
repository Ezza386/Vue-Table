<template>

  <div class="m-3">
    <el-form :rules="rules"  :model="formData" ref="form" @submit.native.prevent="handleSubmit" class="manage-form" style="border-color: black;">
      <el-row>
        <el-col :span="12">
          <el-form-item  class="Name-rows">
            <el-label style="font-weight: 700;">Select Store</el-label>
            <el-select v-model="formData.value1" multiple placeholder="Select Store" class="custom-select" style="width: 280px; " >
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="" class="Name-rows" >
            <el-label  style="font-weight: 700;">Ticket ID</el-label>
            <el-input v-model="formData.id" placeholder="Ticket Id" class="set-width" style="width: 290px; "></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="" class="Name-rows" >
            <el-label  style="font-weight: 700;">Customer Name</el-label>
            <el-input v-model="formData.Cname" placeholder="Customer Name" style="width: 290px; "></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="" class="Name-rows">
            <el-label style="font-weight: 700;">Ticket Status</el-label>
            <el-select v-model="formData.value2" multiple placeholder="Ticket Status" class="custom-select" style="width: 280px; ">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item label="" class="Name-rows" >
            <el-label  style="font-weight: 700;">Assigned To</el-label>
            <el-select  v-model="formData.value3" multiple placeholder="Assigned To" class="custom-select" style="width: 280px; ">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="" class="Name-rows">
            <el-label  style="font-weight: 700;">Created Date Range</el-label>
            <el-date-picker
      v-model="formData.startDate"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      style="width: 280px; "
    />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="" class="Name-rows">
            <el-label  style="font-weight: 700;">Due Date Range</el-label>
            <el-date-picker
        v-model="formData.endDate"
        type="daterange"
        range-separator="To"
        start-placeholder="Start month"
        end-placeholder="End month"
        style="width: 280px; "
      />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="" class="Name-rows">
            <el-label  style="font-weight: 700;">Advanced Filters</el-label>
            <el-select v-model="formData.value4" multiple placeholder="Advanced Filters" class="custom-select" style="width: 280px; ">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <div >
      <span class="save-icon space-icons"  style="font-size: 12px; color:#138f9d ;">
        <el-icon color="#138f9d"><DocumentChecked /></el-icon> Save Filter
     </span>
     <span class="space-icons"  style="font-size: 12px;color:#138f9d ;">
      <el-icon color="#138f9d"><Refresh/></el-icon>
     Reset
    </span>
      <span class="space-icons" style="font-size: 12px;color:#138f9d ;">
 <el-icon color="#138f9d"><Search/></el-icon>
 Search
</span>
</div>
    </el-form>
  </div>

  <div class="date-filter-row">
      <el-button class="filter-heading" style="font-weight: 500;"> <b>ALL</b> </el-button>
      <el-button class="filter-heading">TODAY</el-button>
      <el-button class="filter-heading">YESTERDAY</el-button>
      <el-button class="filter-heading" style="background-color:rgba(235, 234, 231, 0.457) ;">7 DAYS</el-button>
      <el-button class="filter-heading">14 DAYS</el-button>
      <el-button class="filter-heading">30 DAYS</el-button>
      <span class="filter-setting">
      <el-icon style="margin-left: 750px;">
        <Setting/>
      </el-icon></span>
  </div>
  <div class="m-5">

  <div class="table-container">
    
    <el-table :header-cell-style="{ background: '#f0f0f0',color:'#000'}" :row-style="rowStyle" :data="tableData" style="width: 100%;" >
     
    <el-table-column type="selection"  class="custom-column " ></el-table-column>
    <el-table-column prop="storeName" label="Store Name"  class="custom-column" style="color:black"></el-table-column>
    <el-table-column prop="ticketId" label="Ticket ID"  class="custom-column"></el-table-column>
    <el-table-column prop="customerName" label="Customer Name"  class="custom-column"></el-table-column>
    <el-table-column prop="ticketStatus" label="Ticket Status"  class="custom-column"></el-table-column>
    <el-table-column prop="assignedTo" label="Assigned To"  class="custom-column"></el-table-column>
    <el-table-column prop="createdDateRange" label="Created Date "  class="custom-column"></el-table-column>
    <el-table-column prop="dueDateRange" label="Due Date"  class="custom-column"></el-table-column>
    <el-table-column prop="advancedFilters" label="Advanced Filters"  class="custom-column"></el-table-column>
    <el-table-column prop="Actions"  class="custom-column" label="Actions">
  <el-icon>
   
    <Edit />
  </el-icon>
  <el-icon class="icon-margins">
    <Delete />
  </el-icon>
  <el-icon class="icon-margins">
    <More />
  </el-icon>
    </el-table-column>
 
  </el-table>


  </div>

  
</div>
 <!---- <div>
      <h2>Displayed Text:</h2>
      <p>{{ tableData.value }}</p>
  </div>-->


</template>

<script setup >

import { ref,computed,onMounted,toRefs  } from 'vue';

import { v4 as uuid } from 'uuid';


const hasLoadedDataFromLocalStorage = ref(false);
const formData = ref({
  value1: [],
  id: '',
  Cname: '',
  value2: [],
  value3: [],
  value4: [],
  startDate: [],
  endDate: [],
});

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];

const handleSubmit = () => {

  if (formData.value.value1.length === 0) {
    ElMessage.error('Please select at least one Store.');
    return;
  }


  const tableDataForSubmission = [];
  for (let i = 0; i < formData.value.value1.length; i++) {
  
    tableDataForSubmission.push({
      storeName: formData.value.value1[i],
      ticketId: formData.value.id,
      customerName: formData.value.Cname,
      ticketStatus: formData.value.value2[i],
      assignedTo: formData.value.value3[i],
      createdDateRange: formData.value.startDate[i],
      dueDateRange: formData.value.endDate[i],
      advancedFilters: formData.value.value4[i],
    });
  }
  console.log('tableData for submission:', tableDataForSubmission);

  ElMessage.success('Form submitted successfully.');
 
 
  
  const formDataForStorage = {
    value1: formData.value.value1,
    id: formData.value.id,
    Cname: formData.value.Cname,
    value2: formData.value.value2,
    value3: formData.value.value3,
    value4: formData.value.value4,
    startDate: formData.value.startDate,
    endDate: formData.value.endDate,
  };
  const FormDataKey = uuid();
  const TableDataKey = uuid();
  localStorage.setItem(FormDataKey, JSON.stringify(formDataForStorage));
 localStorage.setItem(FormDataKey, JSON.stringify(tableDataForSubmission));
  

 loadDataFromLocalStorage();
  console.log('formData stored in local storage:', formDataForStorage);
  console.log('tableData stored in local storage:', tableDataForSubmission);
  //clearForm();
  
};
const tableData = computed(() => {
  const data = [{
      storeName: "Ezza Store",
      ticketId: "T-234",
      customerName: "Ali",
      ticketStatus: "Pending",
      assignedTo: "Ezza",
      createdDateRange: "2023-08-08",
      dueDateRange: "2023-08-09",
      advancedFilters: "Testing",
    },
    {
      storeName: "AK Mobile Store",
      ticketId: "T-235",
      customerName: "Saad",
      ticketStatus: "Done",
      assignedTo: "Izza",
      createdDateRange: "2023-10-10",
      dueDateRange: "2023-09-09",
      advancedFilters: "Development",
    }
  ];
  for (let i = 0; i < formData.value.value1.length; i++) {
    data.push({
      storeName: formData.value.value1[i],
      ticketId: formData.value.id,
      customerName: formData.value.Cname,
      ticketStatus: formData.value.value2[i],
      assignedTo: formData.value.value3[i],
      createdDateRange: formData.value.startDate[i],
      dueDateRange: formData.value.endDate[i],
      advancedFilters: formData.value.value4[i],
    });
  }
 
  console.log('Generated table data:', data);

  return data;

});
const loadDataFromLocalStorage = () => {

  console.log('Loading data from local storage...');
  const storedFormData = JSON.parse(localStorage.getItem('formDataForStorage'));
  if (storedFormData) {
   // const parsedFormData = JSON.parse(storedFormData);
    //formData.value = { ...formData.value, ...parsedFormData };
    Object.assign(formData.value,storedFormData);
   // formData.value = storedFormData;
    console.log('Loading form data from local storage...',storedFormData);
  }


  const storedTableData = JSON.parse(localStorage.getItem('tableDataForSubmission')) ;
  if (storedTableData) {
   // tableData.value = JSON.parse(storedTableData);
   Object.assign(tableData.value,storedTableData);
  // tableData.value = storedTableData;
   console.log('Loading table data from local storage...',storedTableData);
  }
 

};
onMounted(loadDataFromLocalStorage);
  
const clearForm = () => {
  // Clear all form fields
  formData.value.value1 = [];
  formData.value.id = '';
  formData.value.Cname = '';
  formData.value.value2 = [];
  formData.value.value3 = [];
  formData.value.value4 = [];
  formData.value.startDate = '';
  formData.value.endDate = '';
 
};

const rowStyle = () => {
  // Define your row styling logic here
  return 'background-color: #ffd5d5;'; 
 
  
};

</script>

<style scoped>
@import 'element-plus/dist/index.css';

.m-2{
  background-color: rgba(235, 234, 231, 0.575);
}
.main-container{
  display: flex;
}
.m-3 {
width: 1250px;
background-color: white;
border-color: black;
padding-bottom: 15px;
padding-top: 10px;
position: relative;

  left: -23px;
}

.space-icons{
  margin-left: 45px;
 
}
/*.date-filter-row {
 
 padding: 10px;
 padding-top: 20px;

 padding-bottom: 20px;


}
.filter-heading {
  padding: 5px 10px;
  font-size: 700;
}*/
.el-table .cell {
background-color: #000;
}
.date-filter-row {
    display: flex;
    
    align-items: center;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: white; /* Body color */
    position: relative;
    right:30px;
    overflow: hidden;
    pointer-events: none;
  }

  .filter-heading {
    padding: 1px 5px;
    border: none;
    cursor: pointer;
    color: #000;
    
  }

  .filter-heading:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .filter-heading.active {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .filter-setting {
    margin-left: auto;
  }
.custom-column {

 
  overflow: hidden;
  pointer-events: none;
}

.save-icon{
margin-left: 950px;

}
.icon-margins{
  margin-left: 10px;
}

.action-button{
  width: 20px;
  height: auto;
  
}




.filter-setting{
  margin-left: 30px;

}
.custom-button1 {
  
  background-color: #00474F;
  color: #fff;
  font-size: 16px;
  
}
.el-table{
  background-color: #00474F;
}
.table-container{
  overflow-x: hidden;
  position: relative;
  width: 1290px;
  left: -30px;
  bottom:15px;

}
.el-table{
  color: var(--el-table-text-color);
}
.el-col {
  flex: 1;
 
  padding-right: 10px;
  padding-left: 10px;
}

.el-form-item {
  margin-bottom: 15px;
}


.el-input,
.el-select {
  width: 100%;
}

.el-table tr {
    background-color: #845353;
}
.el-form-item__label {
  width: 120px; 
}


.el-select-dropdown__item {
  padding: 5px 10px;
}


</style>