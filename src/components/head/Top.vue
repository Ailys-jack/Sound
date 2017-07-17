<template>
  <div class="top-width">
    <div class="head">
      <div class="top_head">
        <ul class="left-ul">
          <li><i class="el-icon-arrow-left honor" title="后退"></i></li>
          <li><i class="el-icon-arrow-right honor" title="前进"></i></li>
          <li><i class="el-icon-loading honor" title="刷新"></i></li>
          <li><el-input class="holder-center" v-model="input" placeholder="搜索" size="mini" icon="search"></el-input></li>
        </ul>
        <ul class="right-ul">
          <li><i class="el-icon-close honor" title="关闭"></i></li>
          <li><i class="el-icon-setting honor" title="设置"></i></li>
          <li><i class="el-icon-document honor" title="网页版" @click="toWeb"></i></li>
        </ul>
      </div>

      <div class="foot_head">
        <div>
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1" class="show-center">精选</el-menu-item>
          <el-submenu index="2">
            <template slot="title">歌手</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><a href="https://y.qq.com/" target="_blank">排行</a></el-menu-item>
          <el-menu-item index="4"><a href="https://y.qq.com/" target="_blank">分类</a></el-menu-item>
        </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'top',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        input: ''
      }
    },
    methods: {
      toWeb () {
        this.$router.push({path: '/webContain'})
      }
    }
  }
</script>

<style scoped lang='sass'>
  $bg-color: #ffffff
  $font-color: rgb(158, 174, 194)
  .head
    width: 100%
    padding: 8px
    background: $bg-color
    height: 20px
    color: $font-color
  .top_head
    hight: 20px

  .left-ul li
    float: left
    list-style-type: none
    margin-left: 1rem

  .right-ul
    float: right
    margin-right: 18px
    li
      float: right
      list-style-type: none
      margin-left: 1rem

  .radis
    border-radius: 5px 0

  .honor:hover
    color: #000000

  .foot_head
    margin-top: 28px
    padding: 8px
    color: green

  .show-center
    text-align: center
    margin-left: 800px

  .top-width
    width: 84%
    float: right
</style>
