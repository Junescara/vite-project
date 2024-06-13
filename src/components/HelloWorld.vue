<template>


  <div>
    <div  >
      <el-row :gutter="80" style="margin-bottom: 20px;margin-left: 10px">
        <el-col :span="12" v-for="(item,index) in dataList.slice(start,end)" :key="index" >
          
          <el-card class="box-card" style="width: 100%" >
            <el-text type="primary" size="large" style="padding-right:250px ;">
            {{item.name}}
          </el-text>
            <el-descriptions column="1" >
              
              <el-descriptions-item label="用途"
                >用于规范{{item.name}},以及属性定义、对象间空间等基础语义关系</el-descriptions-item
              >
              <template>
                <div><slot name="extra"></slot></div
              ></template>
              <template v-slot:extra >

                
                <el-button
                  type="primary"
                  size="small"
                  @click="  this.$router.push({
                path: item.view ,
                query: { neoId: item.neoId },
              })
            ">
                  查看
                </el-button>

                <el-button
                  type="primary"
                  size="small"
                  @click="this.$router.push({
                path:  item.add ,
                query: { sname: item.sname,neoId:item.neoId},
              })"
                >
                  新增
                </el-button>

                <el-button
                  type="primary"
                  size="small"
                  @click="this.$router.push({
                path:  item.watch ,
                query: { neoId: item.neoId,sname: item.sname }
                // query: { neoId: scope.row.neoId },
              })"
                >
                  浏览
                </el-button>

              </template>
            </el-descriptions>
            <div>
              <div></div>
              <el-avatar
                size="medium"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
              <div style="display: inline-block" class="text item">admin</div>
              <div
                style="display: inline-block; padding-left: 100px"
                class="text item"
              >
                2022-11-2 12:00:00
              </div>
            </div>
          </el-card>
          <br><br>
        </el-col>

      </el-row>

      <!-- 分页 -->
    
      <el-pagination align='center' 
  @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageNum"
              :page-sizes="[2, 4, 10, 20]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="dataList.length">
</el-pagination>
    </div>

    <!-- <button @click="router.push('ontology')">本体管理</button>
    <button @click="router.push('instance')">实例管理</button> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      name:"竹子",
      age:0,
      score:0,
      currentPage: 1, // 当前页码
                    total: 10, // 总条数
                    pageSize: 4 // 每页的数据条数
                    ,
                    dataList:[],
                    start:0,
                    end:4,
    };
  },
created() {
  this.load()

},
methods:{
  load(){
          this.dataList=[{name:"研一成员",view:"Member",add:"OntoAdd",watch:"OntoWatch",sname:"行政区划",neoId:"1"}
              ,{name:"研二成员",view:"Member",add:"InstanceAdd",watch:"InstanceWatch",sname:"行政区划",neoId:"2"}

             ]
    },
  Add(){
    axios.post('http://localhost:8581/bamboo/add',{
      name:this.name,
      age:this.age,
      score:this.score
      })
      .catch(error=>{
        this.STCDempty = true;
       
      })
  },
  handleSizeChange(val) {
                  console.log(`每页 ${val} 条`);
                  this.currentPage = 1;
                  this.pageSize = val;
                  this.start=(this.currentPage-1)*this.pageSize;
                  this.end=this.start+this.pageSize;
                  console.log(this.start);
                  console.log(this.end);
          
                },
                //当前页改变时触发 跳转其他页
                handleCurrentChange(val) {
                  console.log(`当前页: ${val}`);
                  this.currentPage = val;
                  this.start=(val-1)*this.pageSize;
                  this.end=this.start+this.pageSize;
                  console.log(this.start);
                  console.log(this.end);
                  
                },
      
 
}

}
 
</script>

<style >

p {
  font-size: 24px;
  font-weight: bold;
  color: #777;
  align-content: center;
}

.box-card {
  width: 480px;
}
</style>