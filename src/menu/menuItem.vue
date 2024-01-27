<template>
  <div>
    <div v-for="(child, index) in route" :key="index">
      <template v-if="child.meta">
        <el-submenu v-if="child.meta.hasSubMenu" :index="child.path">
          <template slot="title" v-if="child.meta">
            <i :class="child.meta.icon"></i>
            <span slot="title">{{ child.meta.title }}</span>
          </template>
          <MenuItem :route="child.children" :basepath="getPath(child.path)"></MenuItem>
        </el-submenu>
      </template>
      <template v-if="child.meta">
        <el-menu-item :index="getPath(child.path)"  v-if="!child.meta.hasSubMenu">
          <template v-if="child.meta">
            <i :class="child.meta.icon"></i>
            <span slot="title">{{ child.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
    </div>
  </div>
</template>
<script>
import path from 'path'
export default {
  name: "MenuItem",
  props: ["route",'basepath'],
  methods :{
          // routepath 为当前菜单的path值
          // getpath: 拼接 当前菜单的上一级菜单的path 和 当前菜单的path
          getPath: function(routePath){
              return path.resolve(this.basepath, routePath);
          }
      }
};
</script>
