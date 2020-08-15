<template>
  <div>
    <el-main id="w-main">
      <el-row :gutter="0">
        <el-col
          id="w-main-row-col"
          :sm="{span:20,offset:2}"
          :md="{span:16,offset:4}"
          :lg="{span:12,offset:6}"
          :xl="{span:10,offset:7}"
          class="grid-content w-bg-purple"
        >
          <el-row :gutter="0" class="w-bg-title">
            <el-col :xs="{span:10,offset:0}" :sm="{span:6,offset:0}">
              <span class="w-title">云多客</span>
            </el-col>
            <el-col hidden-md-and-down :sm="{span:1,offset:15}">
              <i class="el-icon-minus w-hide"></i>
            </el-col>
            <el-col hidden-md-and-down :sm="{span:2,offset:0}">
              <i class="el-icon-close w-close"></i>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col>
              <div class="demo-basic--circle">
                <div class="w-block">
                  <el-avatar :size="150" :src="circleUrl"></el-avatar>
                  <div class="w-logonStatusIcon">
                    <el-dropdown @command="loginsStatus">
                      <div class="w-statusIcon">
                        <span>
                          <i :class="statusIcon"></i>
                        </span>
                      </div>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item
                          icon="iconfont icon-zaixianim"
                          command="iconfont icon-zaixianim"
                        >在线</el-dropdown-item>
                        <el-dropdown-item
                          icon="iconfont icon-likaiim"
                          command="iconfont icon-likaiim"
                        >离开</el-dropdown-item>
                        <el-dropdown-item
                          icon="iconfont icon-mangluim"
                          command="iconfont icon-mangluim"
                        >忙碌</el-dropdown-item>
                        <el-dropdown-item
                          icon="iconfont icon-yinshenim"
                          command="iconfont icon-yinshenim"
                        >隐身</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </div>
              </div>
              <el-row :gutter="0">
                <el-col :xs="{span:22,offset:1}" :span="12" :offset="6">
                  <el-form
                    :model="ruleForm2"
                    :rules="rules2"
                    ref="ruleForm2"
                    class="demo-ruleForm"
                    lable-width="0px"
                  >
                    <el-form-item prop="username">
                      <el-input
                        placeholder="用户名"
                        v-model.number="ruleForm2.username"
                        clearable
                        maxlength="30"
                      ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                      <el-input
                        placeholder="密码"
                        v-model="ruleForm2.password"
                        auto-complete="off"
                        show-password
                        maxlength="15"
                      ></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-row>
                        <el-col :xs="{span:10,offset:0}" :span="4" :offset="2">
                          <el-checkbox v-model="rempassword">记住密码</el-checkbox>
                        </el-col>
                        <el-col :xs="{span:10,offset:2}" :span="4" :offset="12">
                          <el-checkbox v-model="autologin">自动登录</el-checkbox>
                        </el-col>
                      </el-row>
                    </el-form-item>
                    <el-form-item>
                      <el-row>
                        <el-col>
                          <el-button
                            type="primary"
                            @click="submitForm('ruleForm2')"
                            class="w-btnlogin"
                          >登录</el-button>
                        </el-col>
                      </el-row>
                    </el-form-item>
                  </el-form>
                  <el-row>
                    <el-col :span="8" :offset="0">
                      <a href="#">忘记密码?</a>
                    </el-col>
                    <el-col :span="14" :offset="2">
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
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import "../../assets/iconfont/login/iconfont.css";
export default {
  name: "Login",
  data() {
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
      circleUrl: require("@/assets/images/login/loginhead.jpg"),
      statusIcon: "iconfont icon-zaixianim"
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
#w-main {
  margin-top: -70px;
}
#w-main-row-col {
  border-radius: 10px;
}
.w-bg-title {
  padding-top: 5px;
  border-radius: 10px 10px 0px 0px;
  background: #409eff;
  height: 40px;
}
.w-title {
  color: #ffffff;
  /* font-weight: bold; */
  font-size: 20px;
}
.w-bg-purple {
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
  color: #ffffff;
}
.w-btnlogin {
  width: 100%;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.w-block {
  display: inline-block;
}
.w-logonStatusIcon {
  position: relative;
  bottom: 40px;
  left: 80px;
}
.w-statusIcon {
  width: 50px;
}
</style>
