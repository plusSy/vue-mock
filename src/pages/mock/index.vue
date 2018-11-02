<template>
  <div>
    <el-tree
      :data="treeData"
      node-key="id"
      :highlight-current="true"
      :expand-on-click-node="false"
      ref="tree"
      draggable
      show-checkbox
      style="margin-left: 50px;"
    >
       <div class="custom-tree-node" slot-scope="{ node, data }">
         <div>{{ node.label }}</div>

         <template v-if="data.meta.per">
           <div class="slot-inner">
             <el-checkbox v-for="item in data.meta.per" :label="item" :key="item">{{item}}</el-checkbox>
           </div>
         </template>
       </div>
    </el-tree>
  </div>
</template>

<script>
import { Config } from './test';

console.log(Config);

export default {
  name: 'Mock',
  data(){
    return {
      treeData:[{
        label: '/setup',
        redirect: 'noredirect',
        meta: {
          icon: 'fa fa-wrench',
          title: 'setup'
        },
        children: [
          {
            label: 'demo2',
            meta: {title: 'demoTitle', mid: 'setup_demo', icon: 'fa fa-circle-o', per: ['add', 'delete', 'edit']}
          },
          {
            label: 'industryManagement',
            meta: {title: 'industryManagement', mid: 'industryManagement', icon: 'fa fa-circle-o',per: ['add', 'delete', 'edit']}
          },
          {
            label: 'businessObjectMGT',
            meta: {title: 'businessObjectMGT', mid: 'businessObjectMGT', icon: 'fa fa-circle-o', per: ['add', 'delete', 'edit']}
          },
          {
            label: 'countryManagement',
            meta: {title: 'countryManagement', mid: 'countryManagement', icon: 'fa fa-circle-o', per: ['add', 'delete', 'edit']}
          }, {
            label: 'announceMaintain',
            name: 'announceMaintain',
            meta: {title: 'announceMaintain', mid: 'announceMaintain', icon: 'fa fa-circle-o', per: ['add', 'delete', 'edit']}
          },
          {
            label: 'subsystemAPI',
            meta: {title: 'subsystemAPI', mid: 'subsystemAPI', icon: 'fa fa-circle-o', per: ['add', 'delete', 'edit']}
          },
          {
            label: 'dataAuthorization',
            meta: {title: 'dataAuthorization', mid: 'dataAuthorization', icon: 'fa fa-circle-o'},
          },{
            label: 'userAuthorization',
            meta: {title: 'userAuthorization', mid: 'userAuthorization', icon: 'fa fa-circle-o', per: ['add', 'delete', 'edit']},
          },
        ]
      }],

    }

  },
  methods:{
    goBack(){
      this.$emit('goBack');
    },
    saveForm(){
    },
    cancelEdit(){}
  }
}
</script>

<style lang="css">
.slot-inner{
  display: inline-block;
}
.el-tree-node__content{
  height: auto;
}
.custom-tree-node{
  display: inline;
  text-align: left;
}
</style>
