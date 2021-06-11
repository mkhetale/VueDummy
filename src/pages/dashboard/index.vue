<template>
<vs-row class="cardRow" style="margin-left: 0px" vs-justify="left">
 <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="4" class="test">
   <vs-card class="displayCard">
     <vs-row style="margin-top: 2px">
       <vs-col type="flex" vs-w="12">
         <span class="cardText2">123</span>
       </vs-col>
     </vs-row>
   </vs-card>
   <a class="links">Test Value</a>
 </vs-col>
 <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="4" class="test">
   <vs-card class="displayCard">
     <vs-row style="margin-top: 2px">
       <vs-col type="flex" vs-w="12">
         <span class="cardText2">222</span>
       </vs-col>
     </vs-row>
   </vs-card>
   <a class="links">Test Value</a>
 </vs-col>
 <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="4" class="test">
   <vs-card class="displayCard">
     <vs-row style="margin-top: 2px">
       <vs-col type="flex" vs-w="12">
         <span class="cardText2">333</span>
       </vs-col>
     </vs-row>
   </vs-card>
   <a class="links">Test Value</a>
 </vs-col>
</vs-row>
</template>
<script>
import service from './service.js';
 export default {
   data(){
     return {
       campCount:[],
     }
   },
   methods: {
     async getCounts() {
       try{
         const response = await service.getCounts()
         console.log(response.data.data)
         this.campCount = response.data.data
       }
       catch(error) {
         console.log(error)
       }
     }
   },
   created() {
     this.getCounts()
   }
 }
</script>
<style scoped>
.cardText1 {
 font-size: 17px;
 color: #828080;
}
.cardText2 {
 font-size: 40px;
 text-align:center;
 display:block
}
.links {
 font-size: 15px;
 display: block;
 text-align: center;

}
.displayCard {
 border-radius: 10px;
 border : 2px solid ;
}
.cardRow {
 margin: 100px -10px 0
}
.test {
 height: 160px;
 padding: 20px 20px;
 /* margin: 20px 20px 20px 0px; */
}
</style>