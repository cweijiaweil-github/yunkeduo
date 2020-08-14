<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="16" :offset="6" class="grid-content bg-purple">
        <el-row :gutter="0" class="w-bg-title">
          <el-col :span="3" :offset="0">
            <span class="w-title">云多客</span>
          </el-col>
          <el-col :span="1" :offset="18">
            <i class="el-icon-minus w-hide"></i>
          </el-col>
          <el-col :span="2" :offset="0">
            <i class="el-icon-close w-close"></i>
          </el-col>
        </el-row>
        <el-row :gutter="0">
          <el-col :span="12" :offset="6">
            <div class="demo-basic--circle">
              <div class="block">
                <el-avatar :size="150" :src="circleUrl"></el-avatar>
                <el-dropdown @command="loginsStatus">
                  <span class="el-dropdown-link">
                    <i :class="statusIcon"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus" command="el-icon-plus">黄金糕</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus" command="el-icon-circle-plus">狮子头</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline" command="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-check" command="el-icon-check">双皮奶</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check" command="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="0">
          <el-col :span="12" :offset="5">
            <el-form
              :model="ruleForm2"
              :rules="rules2"
              ref="ruleForm2"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label prop="username">
                <el-input
                  placeholder="请输入内容"
                  v-model.number="ruleForm2.username"
                  clearable
                  maxlength="30"
                ></el-input>
              </el-form-item>
              <el-form-item label prop="password">
                <el-input
                  placeholder="请输入密码"
                  v-model="ruleForm2.password"
                  auto-complete="off"
                  show-password
                  maxlength="15"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="rempassword">记住密码</el-checkbox>
                <el-checkbox v-model="autologin">自动登录</el-checkbox>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')" class="w-btnlogin">登录</el-button>
              </el-form-item>
            </el-form>
            <el-row :gutter="0">
              <el-col :span="6" :offset="4">
                <a href="#">忘记密码?</a>
              </el-col>
              <el-col :span="8" :offset="6">
                <span>还没有账号?</span>
                <span>
                  <a href="#">点击注册</a>
                </span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    // alert(this.$route.query.id)
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm2: {
        password: "",
        checkPass: "",
        username: "",
        rempassword: "",
        autologin: ""
      },
      rules2: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkAge, trigger: "blur" }]
      },
      circleUrl: require("@/assets/images/loginhead.jpg"),
      statusIcon: "el-icon-circle-check"
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    loginsStatus(command) {
      this.statusIcon = command;
    }
  }
};
</script>

<style scoped>
.w-bg-title {
  background: #409eff;
  height: 40px;
}
.w-title {
  /* padding-top: 10px; */
}
.bg-purple {
  background: #f7f7f7;
}
.grid-content {
  border-radius: 4px;
  min-height: 700px;
}
.w-hide,
.w-close {
  font-size: 30px;
  cursor: pointer;
}
.w-btnlogin {
  width: 370px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
