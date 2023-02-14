<template>

  <div class="iq-sidebar  sidebar-default  ">
    <div class="iq-sidebar-logo d-flex align-items-end justify-content-between">
      <a href="index.html" class="header-logo">
        <img src="../../public/static/picture/logo.png" class="img-fluid rounded-normal light-logo" alt="logo">
        <img src="../../public/static/picture/logo-dark.png" class="img-fluid rounded-normal d-none sidebar-light-img" alt="logo">
        <span>Datum</span>
      </a>
      <div class="side-menu-bt-sidebar-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-light wrapper-menu" width="30" fill="none" viewbox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </div>
    </div>
    <div class="data-scrollbar" data-scroll="1">
      <nav class="iq-sidebar-menu">
        <ul id="iq-sidebar-toggle" class="side-menu">

          <li class="active sidebar-layout">
            <a href="" class="svg-icon">
              <i class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </i><span class="ml-2">Chat</span>
            </a>
          </li>

        </ul>
      </nav>
      <div class="pt-5 pb-5"></div>
    </div>
  </div>


</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped>

</style>