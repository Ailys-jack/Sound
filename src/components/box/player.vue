<template>
    <div>
      <div class="footer">
        <div class="ctite_back" @click="changeMusic(-1)" title="上一首"><i class="glyphicon glyphicon-step-backward tool-min"></i></div>
        <div class="ctite_play" @click="play" title="播放/暂停"><i v-bind:class="{glyphicon: true, 'glyphicon-play': g_play, 'glyphicon-pause': g_pause, tool: true}"></i></div>
        <div class="ctite_next" @click="changeMusic(1)" title="下一首"><i class="glyphicon glyphicon-step-forward tool-min"></i></div>

        <div class="line-block">
          <img id="icon" src="../../../static/img/img600.jpg" class="music-icon"/>
          <span v-model="music_name" class="music-name">{{music_play.music_name + '-' + music_play.music_author|| '未知歌曲'}}</span>
          <span class="music_time">{{currentTime + '/' + duration}}</span>
          <input type="range" min=0 :max="fullTime" step=1 class='range' :value="range">
          <div class="player_tool"><i @click="isEnjoy" :title="g_heart_title" v-bind:class="{glyphicon: true, 'glyphicon-heart': g_heart, 'glyphicon-heart-empty': !g_heart, 'tool-right': true}"></i></div>
          <div class="player_tool"><i @click="" title="播放列表" v-bind:class="{glyphicon: true, 'glyphicon-th-list': true, 'tool-right': true}"></i></div>
          <div class="player_tool"><i @click="" title="音量" v-bind:class="{glyphicon: true, 'glyphicon-volume-up': true, 'tool-right': true}"></i></div>
          <div class="player_tool"><i @click="playModel" :title="g_model_title" v-bind:class="{glyphicon: true, 'glyphicon-random': g_random, 'glyphicon-refresh': g_refresh, 'glyphicon-sort': g_sort, 'tool-right': true}"></i></div>
        </div>
        <audio id="mp3Btn" :src="music_play.music_src" v-bind:loop="loop">
          您的浏览器不支持 audio 标签。</audio>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: '',
    data () {
      return {
        myAudio: '',
        g_play: true, // 播放按钮图标
        g_pause: false, // 暂停按钮图标
        g_random: true, // 随机播放图标
        g_refresh: false, // 单曲循环图标
        g_sort: false, // 顺序播放图标
        g_model_title: '随机', // 播放模式提示文字
        g_heart_title: '喜欢', // 是否标记喜欢提示文字
        g_heart: false, // 是否标记为喜欢图标
        loop: false, // 是否单曲循环
        music_name: '未知歌曲',
        music_arr: [{music_name: '追光者', music_src: '../../../static/music/追光者.mp3', music_icon: '../../../static/img/img600.jpg', music_author: '岑宁儿'},
          {music_name: '勇敢爱', music_src: '../../../static/music/勇敢爱.mp3', music_icon: '../../../static/img/img601.jpg', music_author: 'Mi2'},
          {music_name: '追光者', music_src: '../../../static/music/追光者.mp3', music_icon: '../../../static/img/img600.jpg', music_author: '岑宁儿'}],
        music_play: {}, // 当前正在播放的媒体对象
        music_index: 0, // 媒体列表的序号
        currentTime: '00:00', // 已播时间
        duration: '', // 总时间
        fullTime: '100', // 播放进度条总长
        range: '0', // 当前播放条已播放进度
        mouseDown: false // 鼠标书否点击进度条状态
      }
    },
    created () {
      this.init()
      this.music_play = this.music_arr[this.music_index]
    },
    computed: {
    },
    methods: {
      play: function () {
        let self = this
        let btn = $('#mp3Btn')
        let range = $('.range')
        if (btn[0].paused) {
          self.play_media()
        } else {
          self.pause_media()
        }
        range.on('change', function () {
          btn[0].currentTime = range.val()
          range.css('background', 'linear-gradient(to right, #31C27C, white ' + (range.val() / self.fullTime) * 100 + '%, white)')
          // range.css('background-size', '-webkit-gradient(linear,0 10%,0% 0%,from(#31C27C),to(#ffffff))')
        })
      },
      play_media () { // 开始播放
        let btn = $('#mp3Btn')
        let range = $('.range')
        let self = this
        self.g_play = false
        self.g_pause = true
        btn[0].play()
        // 媒体在播放时的回调函数,设置进度条及媒体进度时长
        btn[0].ontimeupdate = function () {
          self.currentTime = self.timeToStr(btn[0].currentTime)
          self.duration = self.timeToStr(btn[0].duration)
          self.fullTime = Number.parseInt(btn[0].duration)
          self.range = Number.parseInt(btn[0].currentTime)
          range.css('background', 'linear-gradient(to right, #31C27C, white ' + (range.val() / self.fullTime) * 100 + '%, white)')
        }
        btn[0].onended = function () { // 媒体播放结束,根据播放模式选择下一步操作
          if (self.g_random) { // 随机模式播放
            self.loop = false
            self.pause_media()
            self.music_play = self.music_arr[Number.parseInt(Math.random() * (self.music_arr.length - 1))]
            console.log(Number.parseInt(Math.random() * (self.music_arr.length - 1)), self.music_play)
            /* setTimeout(function () {
              self.play_media()
            }, 1000) */
          } else if (self.g_refresh) { // 单曲循环播放
            self.loop = true
          } else if (self.g_sort) { // 顺序播放
            self.loop = false
            self.changeMusic(1)
          }
        }
        range.on('onMouseDown', function () {
          alert('1')
          self.mouseDown = true
        })
        range.on('onMouseUp', function () {
          alert('2')
          self.mouseDown = false
        })
      },
      pause_media () { // 暂停播放
        let btn = $('#mp3Btn')
        let self = this
        self.g_play = true
        self.g_pause = false
        btn[0].pause()
      },
      changeMusic (flag) { // 切换歌曲
        let self = this
        self.music_index = self.music_index + flag
        let btn = $('#mp3Btn')
        // 当媒体准备好后播放音乐
        btn[0].oncanplay = function () {
          btn[0].play()
        }
        btn[0].oncanplaythrough = function () {
          btn[0].play()
        }
        self.pause_media()
        if (flag === 1) {
          if (self.music_index >= self.music_arr.length) {
            self.music_index = 0
          }
        } else if (flag === -1) {
          if (self.music_index < 0) {
            self.music_index = self.music_arr.length - 1
          }
        }
        self.music_play = self.music_arr[self.music_index]
        console.log(btn)
        self.play_media()
      },
      timeToStr (time) { // 转换媒体时间格式
        let m = 0
        let s = 0
        let _m = '00'
        let _s = '00'
        time = Math.floor(Number.parseInt(time) % 3600)
        m = Math.floor(time / 60)
        s = Math.floor(time % 60)
        _s = s < 10 ? '0' + s : s + ''
        _m = m < 10 ? '0' + m : m + ''
        return _m + ':' + _s
      },
      isEnjoy () {
        let self = this
        self.g_heart = !self.g_heart // g_heart_title
        self.g_heart_title = self.g_heart === true ? '取消喜欢' : '喜欢'
      },
      playModel () { // 设置播放模式
        let self = this
        if (self.g_random === true) {
          self.g_random = false
          self.g_refresh = true
          self.g_sort = false
          self.loop = true
          self.g_model_title = '单曲循环'
        } else if (self.g_refresh === true) {
          self.g_random = false
          self.g_refresh = false
          self.g_sort = true
          self.loop = false
          self.g_model_title = '顺序'
        } else if (self.g_sort === true) {
          self.g_random = true
          self.g_refresh = false
          self.g_sort = false
          self.loop = false
          self.g_model_title = '随机'
        }
      },
      init () { // 初始化播放控件
        let btn = $('#mp3Btn')
        console.log(btn)
      }
    }
  }
</script>

<style scoped lang='sass'>
 .footer
    width: 100%
    height: 80px
    position: fixed
    bottom: 0px
    left: 0px
    background-color: aliceblue

 .tool
    position: relative
    top: 25%

 .tool-min
    position: relative
    top: 12%

 .tool:hover
    color: green

 .ctite_back
    width: 30px
    height: 30px
    background-color: aliceblue
    border: 3px rgb(49,194,124) solid
    -webkit-border-radius: 15px
    margin: 25px 0px 0px 50px
    position: relative
    float: left
    color: rgb(49,194,124)

 .ctite_play
    width: 40px
    height: 40px
    background-color: aliceblue
    border: 3px rgb(49,194,124) solid
    -webkit-border-radius: 20px
    margin: 20px 0px 0px 50px
    position: relative
    float: left
    color: rgb(49,194,124)

 .ctite_next
    width: 30px
    height: 30px
    background-color: aliceblue
    border: 3px rgb(49,194,124) solid
    -webkit-border-radius: 15px
    margin: 25px 0px 0px 50px
    position: relative
    float: left
    color: rgb(49,194,124)

 .ctite_back:hover
    color: green
    background-color: rgb(255,255,255)
    opacity: 0.95

 .ctite_play:hover
    color: green
    background-color: rgb(255,255,255)
    opacity: 0.95

 .ctite_next:hover
    color: green
    background-color: rgb(255,255,255)
    opacity: 0.95

 .line-block
    background-color: aliceblue
    width: 83%
    height: 80px
    margin-left: 17%

 .music-icon
    width: 80px
    height: 80px
    float: left
    position: relative

 .music-name
    margin: 20px 0px 0px -80%

 .music_time
    margin: 10px 2% 0px 0%
    color: rgb(171,171,206)
    float: right

 .music-progress
    color: red
    background-color: #ffffff
    text-align: left
    margin: 1.5% 0 0 6%
    width: 80%
    height: 3px
    border-radius: 10px

 .music-progress-float
    width: 50%
    height: 2px
    background_color: red

 .range
    width: 80%
    height: 3px
    background: #ffffff
    border-radius: 0.25rem
    -webkit-appearance: none !important
    margin: 1.5% 0 0 6%
    background-size: 0% 100%

 .range::-webkit-slider-thumb
    width: 0.5rem
    height: 0.5rem
    background: rgb(49,194,124)
    background-color: rgb(49,194,124)
    border: 6px solid rgb(49,194,124)
    cursor: pointer
    border-radius: 200px
    -webkit-appearance: none !important

 .chose
    text-align: right
    width: 15%
    height: 40px
    flaot: right
    margin-right: 2px

 .player_tool
    float: right
    width: 40px
    height: 80px
    margin: 1px 0px 0px 1px

 .tool-right
    width: 40px
    height: 80px
</style>
