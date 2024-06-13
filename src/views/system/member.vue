<template>
  <p>研一组员成绩</p>
  <el-card>
    <div class="block">
      <el-form inline>
        <el-form-item>
          <el-input v-model="name">
            请输入姓名
          </el-input>
          </el-form-item>
        <el-form-item>
          <span class="demonstration"></span>
    <el-date-picker
      v-model="value"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <el-button @click="TimePick" type="success">
      时间选择
    </el-button>
          </el-form-item>
      </el-form>
    
  </div>
    <el-table align="left"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="score"
        label="评分"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
    </el-table>
  </el-card>
 
</template>

<script>
import {List} from "/point/vite-project/src/module/test";
export default {
    data(){
        return{
            tableData:[],
            neoId:"",
            value:"",
            name:null
        }
    },
    created(){
        this.getParams()
        this.load()
    },
    mounted(){

    },
    
    methods:{
        load(){
          List().then(data=>{
            this.tableData = data.data
          })

        },
        getParams() {
      this.neoId = this.$route.query.neoId;
      console.log(this.neoId);
    },
    TimePick(){
      List(this.name,this.value).then(data=>{
        this.tableData = data.data;

      })

    }
    
    }


}


</script>

<style>
p {
  font-size: 24px;
  font-weight: bold;
  color: #777;
}
</style>