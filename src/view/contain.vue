<template>
  <div class="contain">
    <div class="left-menu">
      <memu></memu>
    </div>

    <div class="right-contain">
      <div>
        <top></top>
        <card class="margintop"></card>
      </div>
    </div>
    <div>
      <player></player>
    </div>
  </div>
</template>

<script>
  import top from '@/components/head/Top.vue'
  import card from '@/components/box/mainBox.vue'
  import player from '@/components/box/player.vue'
  import memu from '@/components/left/menu.vue'
  export default {
    name: 'contain',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      top,
      card,
      memu,
      player
    }
  }
</script>

<style scoped lang='sass'>
.contain
  width: 100%

.margintop
  margin-top: 80px

  .left-menu
    width: 15%
    float:
    height: 1200px

  .right-contain
    width: 75%
    float: right
</style>
