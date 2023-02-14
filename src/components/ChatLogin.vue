<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">

      <el-row :gutter="20">
        <el-col :span="10"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="8"><div class="grid-content ep-bg-purple" />
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="10"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="8"><div class="grid-content ep-bg-purple" />
          <el-form-item label="密码">
            <el-input v-model="form.password" type="password" ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="10"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-col>

      </el-row>

    </el-form>

  </div>
</template>

<script>
import {getToken} from '../../utils/api'
import Cookies from 'js-cookie'
export default {
  name: "ChatLogin",
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      let params = { username: this.form.username, password: this.form.password}
      getToken(params).then(res => {
        let token = res.data.token
        Cookies.set('token', token)
        console.log(res.message,)
        // next('/')
        this.$router.push({path: '/Bp-List'})
        // this.$router.push({name: 'Bp-List', query: {}})
      }).catch(error => {
        console.log(error, '返回错误')
      })
    }
  }
}
</script>


<style >
.el-row {
  margin-bottom: 2px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 12px;
}
</style>