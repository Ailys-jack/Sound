<template>
    <div class="menu">
      <el-row>
      <div>
        <img src="../../../static/img/img601.jpg" class="head-icon"/>
      </div>
      <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
        <el-menu-item-group title="在线音乐" class="menu-item">
          <el-menu-item index="1" class="menu-item"><i class="el-icon-upload"></i>音乐馆</el-menu-item>
          <el-menu-item index="2" class="menu-item"><i class="el-icon-caret-right"></i>MV</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="我的音乐" class="menu-item">
          <el-menu-item index="3" class="menu-item"><i class="el-icon-star-on"></i>我喜欢</el-menu-item>
          <el-menu-item index="4" class="menu-item"><i class="el-icon-time"></i>播放列表</el-menu-item>
          <el-menu-item index="5" class="menu-item"><i class="el-icon-check"></i>我的下载</el-menu-item>
        </el-menu-item-group>
      </el-menu>
      </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        vertical: ''
      }
    }
  }
</script>

<style scoped lang='sass'>
 .menu
    width: 15%
    float: left
    height: 1200px
    background-color: #ffffff

 .head-icon
    width: 80px
    height: 80px
    border-radius: 50%
    padding: 30px
    margin-left: 15px
</style>
