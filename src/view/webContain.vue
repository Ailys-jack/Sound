<template>
    <div id="webContain">
      <div>
      <input type="checkbox" id="box1" value="1" v-model="jack">
      <label for="box1">jack</label>
      <input type="checkbox" id="box2" value="2" v-model="jack">
      <label for="box2">jack</label>
      <input type="checkbox" id="box3" value="3" v-model="jack">
      <label for="box3">jack</label>
      {{jack}}
        <input v-model.number.trim.lazy="input1">{{input1}}
      </div>
      <div>
        <select v-model="selected">
          <option value="0" disabled>0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        {{selected}}
      </div>
      <test msg="msg">
      </test>
    </div>
</template>

<script>
  import test from '@/components/test/testComponents.vue'
  export default {
    name: 'webContain',
    data () {
      return {
        msg: {
          name: 'www.baidu.com'
        },
        jack: [],
        selected: '',
        input1: ''
      }
    },
    created () {
    },
    methods: {
    },
    components: {
      test
    }
  }
</script>

<style scoped lang='sass'>

</style>
