<template>

  <SideBar></SideBar>
  <Header></Header>
  <ChatPage></ChatPage>

</template>

<script>
import SideBar from "@/components/SideBar.vue";
import ChatPage from "@/components/ChatPage.vue";
import Header from "@/components/Header.vue";

export default {
  name: "HomePage",
  components: {
    SideBar,
    ChatPage,
    Header
  }
}
</script>

<style scoped>

</style>