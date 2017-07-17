<template>
    <div class="card-width">

      <div class="card_div">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in card_Info" :key="item" class="card">
          <div>
          <img v-bind:src="item.imgUrl" />
          </div>
        </el-carousel-item>
      </el-carousel>
      </div>

      <div class="center-box">
        <div class="container-kind">
          <span v-for="kind in kind_Info" :key="kind">
            {{kind.kind_Name}}
          </span>
        </div>

        <div class="container">
          <div v-for="box in center_box_info" :key="box">
            <img :src="box.imgUrl" class="box-img"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'card',
    data () {
      return {
        card_Info: [
            {music_Name: '音乐1', imgUrl: '../static/img/img1.jpg'},
          {music_Name: '音乐2', imgUrl: '../static/img/img2.jpg'},
          {music_Name: '音乐3', imgUrl: '../static/img/img3.jpg'}],
        kind_Info: [
          {kind_Name: '流行', kind_val: '101'},
          {kind_Name: '热门', kind_val: '102'},
          {kind_Name: '经典', kind_val: '103'},
          {kind_Name: '英语', kind_val: '102'},
          {kind_Name: 'KTV', kind_val: '102'},
          {kind_Name: '背景音乐', kind_val: '102'},
          {kind_Name: '80后', kind_val: '102'},
          {kind_Name: '90后', kind_val: '102'},
          {kind_Name: '70后', kind_val: '102'},
          {kind_Name: '网络热歌', kind_val: '102'}],
        center_box_info: [
            {music_Name: '音乐1', imgUrl: '../static/img/img600.jpg'},
          {music_Name: '音乐1', imgUrl: '../static/img/img601.jpg'},
          {music_Name: '音乐1', imgUrl: '../static/img/img602.jpg'},
          {music_Name: '音乐1', imgUrl: '../static/img/img603.jpg'},
          {music_Name: '音乐1', imgUrl: '../static/img/img604.jpg'},
          {music_Name: '音乐1', imgUrl: '../static/img/img605.jpg'},
          {music_Name: '音乐1', imgUrl: '../static/img/img605.jpg'},
          {music_Name: '音乐1', imgUrl: '../static/img/img605.jpg'},
          {music_Name: '音乐1', imgUrl: '../static/img/img605.jpg'},
          {music_Name: '音乐1', imgUrl: '../static/img/img605.jpg'}]
      }
    }
  }
</script>

<style scoped lang='scss'>
  .shade{
    background-color: #000000;
    width: 40px;
    height: 40px;
    color: #475669;
    font-size: 14px;
    opacity: 0.85;
    line-height: 200px;
    margin: 0
  }

  .center-box{
    background-color: rgb(245,245,245);
  }

  .container{
    display: -webkit-flex; /* Safari */
    -webkit-flex-wrap: wrap; /* Safari 6.1+ */
    display: flex;
    width: 1300px;
    margin-left: 35px;
    flex-wrap: wrap;
  }

  .container-kind{
    display: -webkit-flex; /* Safari */
    -webkit-flex-wrap: wrap; /* Safari 6.1+ */
    display: flex;
    width: 1300px;
    margin-left: 40px;
    flex-wrap: wrap;
  }

  .container div{
    width: 250px;
    padding: 30px;
  }

  .container-kind span{
    background-color: #ffffff;
    width: 200px;
    padding: 10px;
    margin: 10px 0px 0px 40px;
  }

  .container-kind span:hover{
    background-color: aliceblue;
    cursor:pointer;
  }

  .box-img{
    width: 200px;
    height: 200px;
    cursor:pointer;
  }

  .card-width{
    width: 83%;
    float: right;
  }
</style>
