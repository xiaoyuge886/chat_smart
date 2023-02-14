<template>
  <view>
    <p>asdfasdfsafasfasfd</p>
    <web-view :src="html"></web-view>
  </view>
</template>

<script>
export default {
  name: "ChatSmart",
  onload() {
    this.html ="../../public/chat.html"
  }
}
</script>

<style scoped>

</style>