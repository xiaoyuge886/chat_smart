<template>
  <div class="content-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 chat-left-wrapper">
          <div class="chat-list">
            <div class="card">
              <div class="card-header">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <h4 class="card-title">Messages</h4>
                  <button class="btn text-primary bg-primary btn-sm d-block d-lg-none" data-toggel-extra="side-nav-close" data-expand-extra=".chat-left-wrapper">
                    <svg width="20" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                </div>
                <div class="form-group mb-0">
                  <div class="input-group">
                    <div class="input-group-prepend">
                                 <span class="input-group-text">
                                    <svg class="svg-icon text-primary" id="search" width="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                 </span>
                    </div>
                    <input type="text" class="form-control" placeholder="Enter name" aria-label="Username">
                    <div class="input-group-append d-none">
                                 <span class="input-group-text">
                                    <div class="spinner-border spinner-border-sm" role="status">
                                       <span class="sr-only">Loading...</span>
                                    </div>
                                 </span>
                    </div>
                  </div>
                </div>
              </div>
              <nav>
                <ul class="nav nav-tabs justify-content-around" id="nav-tab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-selected="true">Recent</a>
                  </li>

                </ul>
              </nav>
              <div class="card-body item-list">
                <ul id="chat-list">
                  <li class="simple-item hover" data-toggle-extra="tab" data-target-extra="#user-content-1">
                    <div class="img-container">
                      <div class="avatar avatar-60">
                        <img src="static/picture/1.jpg" alt="users" class="img-fluid avatar-borderd avatar-rounded">
                        <span class="avatar-status">
                                           <i class="ri-checkbox-blank-circle-fill text-success">
                                               <small><svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewbox="0 0 24 24" fill="none">
                                               <circle cx="12" cy="12" r="8" fill="#3cb72c"></circle></svg>
                                               </small>
                                           </i>
                                       </span>
                      </div>
                    </div>
                    <div class="simple-item-body">
                      <div class="simple-item-title">
                        <h5 class="title-text">Joan Duo</h5>
                        <div class="simple-item-time"> <span>Today</span> </div>
                      </div>
                      <div class="simple-item-content">
                                   <span class="simple-item-text short">
                                       I have share some media you can enjoy.
                                   </span>
                        <div class="dropdown">
                          <button class="btn btn-link " type="button" id="chat-dropdown-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-primary" width="20" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                            </svg>
                          </button>
                          <div class="dropdown-menu" aria-labelledby="chat-dropdown-1">
                            <a class="dropdown-item" href="#">
                              <svg class="icon line text-primary" width="20" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" stroke="currentColor">
                                <path d="M21,13v7a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V13H8a4,4,0,0,0,8,0Zm0,0L18,4M3,13,6,4" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
                                <path d="M12,11V3m3,3L12,3,9,6" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
                              </svg>
                              Move Archive
                            </a>
                            <a class="dropdown-item" href="#">
                              <svg class="icon line text-primary" width="20" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" stroke="currentColor">
                                <path d="M19.57,5.44a4.91,4.91,0,0,1,0,6.93L12,20,4.43,12.37A4.91,4.91,0,0,1,7.87,4a4.9,4.9,0,0,1,3.44,1.44,4.46,4.46,0,0,1,.69.88,4.46,4.46,0,0,1,.69-.88,4.83,4.83,0,0,1,6.88,0Z" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
                              </svg>
                              Favourite
                            </a>
                            <a class="dropdown-item" href="#">
                              <svg class="svg-icon text-primary" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                              </svg>
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 chat-right-wrapper">
          <div class="chat-content animate__animated animate__fadeIn active" data-toggle-extra="tab-content" id="user-content-1">
            <div class="card">
              <div class="right-sidenav p-2" id="first-sidenav-1">
                <div class="d-flex">
                  <button type="button" class="btn btn-sm" data-extra-dismiss="right-sidenav">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-secondary" width="20" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                <div class="chat-profile mx-auto">
                  <div class="avatar avatar-70 avatar-borderd avatar-rounded mx-auto" data-toggel-extra="right-sidenav" data-target="#first-sidenav-1">
                    <img src="static/picture/1.jpg" alt="users" class="img-fluid">
                  </div>
                  <h4 class="mb-2">Joan Duo</h4>
                  <h6 class="mb-2">Developer</h6>
                </div>
                <div class="chat-detail">
                  <div class="row">
                    <div class="col-6 col-md-6 title">Nick Name:</div>
                    <div class="col-6 col-md-6 text-right">Joan</div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-6 col-md-6 title">Tel:</div>
                    <div class="col-6 col-md-6 text-right">0123456789</div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-6 col-md-6 title">Date Of Birth:</div>
                    <div class="col-6 col-md-6 text-right">1 June 1997</div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-6 col-md-6 title">Gender:</div>
                    <div class="col-6 col-md-6 text-right">Male</div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-6 col-md-6 title">Language:</div>
                    <div class="col-6 col-md-6 text-right">English</div>
                  </div>
                </div>
              </div>
              <div class="card-header chat-content-header">
                <div class="d-flex align-items-center">

                  <div class="avatar-50 avatar-borderd avatar-rounded" data-toggel-extra="right-sidenav" data-target="#first-sidenav-1">
                    <img src="static/picture/1.jpg" alt="users" class="img-fluid">
                  </div>
                  <div class="chat-title">
                    <h6>Joan Duo</h6>
                    <small>Online</small>
                  </div>
                </div>
              </div>

              <button v-on:click="getChatRecord">按钮</button>
              <div class="card-body msg-content" id="user-1-chat-content">
                <div class="msg-list">
                  <div class="single-msg">
                    <div class="triangle-topleft single-msg-shap">
                    </div>
                    <div class="single-msg-content">
                      <div class="msg-detail">
                        <span>Nos vemos mañana sollicitudin molestie malesuada. Proin eget tortor.</span>
                      </div>
                      <div class="msg-action">
                        <span>04:15</span>
                      </div>
                    </div>
                  </div>
                  <div class="single-msg user">
                    <div class="triangle-topright single-msg-shap">
                    </div>
                    <div class="single-msg-content user">
                      <div class="msg-detail">
                        <span>Gracias De nada No hay de qué Disculpe Lo siento Me encanta café. ¿Quieres ir a tomar una taza? .</span>
                      </div>
                      <div class="msg-action">
                        <span>04:15</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="card-footer px-3 py-3">
                <form>
                  <div class="input-group">
                    <input type="text" class="form-control" id="chat-input-1" placeholder="Enter here..."
                           aria-label="Recipient's username" aria-describedby="basic-addon2-1">

                  </div>
                </form>
              </div>
            </div>
          </div>
                     </div>
      </div>
    </div>
  </div>
</template>

<script>
import {chatList} from '../../utils/api'
// import Cookies from "js-cookie";
export default {
  name: "ChatPage",
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  computed (){
    let params = { username: this.form.username, password: this.form.password}
    chatList(params).then(res => {
      console.log(res,)
      // next('/')=
      // this.$router.push({name: 'Bp-List', query: {}})
    }).catch(error => {
      console.log(error, '返回错误')
    })
  },
  methods: {
    getChatRecord() {
      let params = { username: this.form.username, password: this.form.password}
      chatList(params).then(res => {
        console.log(res,)
        // next('/')=
        // this.$router.push({name: 'Bp-List', query: {}})
      }).catch(error => {
        console.log(error, '返回错误')
      })
    }
  }
}
</script>

<style scoped>

</style>