<template>
  <div class="home">
    <h3>防抖</h3>
    <div v-for="(item, index) in 20" :key="index">
      <p>{{ item }}</p>
      <p>防抖和节流严格算起来应该属于性能优化的知识</p>
      <p>但实际上遇到的频率相当高，处理不当或者放任不管就容易引起浏览器卡死。</p>
      <p>所以还是很有必要早点掌握的。（信我，你看完肯定就懂了）</p>
    </div>
    <!-- 置顶 -->
    <div
      v-show="controlTop"
      class="to-top"
      @click="toTop"
    >回到顶部</div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  mounted () {
    window.onscroll = function () {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      if (scrollTop > 2000) {
        this.controlTop = true
      }
    }
  },
  data () {
    return {
      controlTop: false
    }
  },
  methods: {
    toTop () {
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .to-top {
    position: fixed;
    bottom: 10px;
    right: 10px;
  }
}
</style>
