<template>
    <div class="login">
        <header><i class="iconfont icon-back" @click="back"></i></header>
        <h2 class="title">TDYWZ</h2>
        <div class="title-nav">
            <a @click="SmsLogin" :class="{on:loginForm}">短信登录</a><a @click="SmsLogin" :class="{on:!loginForm}" >密码登录</a>
        </div>
        <div class="login-content" v-show="loginForm">
            <form action="" class="login-password">
                <section class="info"><input type="text" maxlength="11" placeholder="手机号/邮箱/用户名"></section>
                <section class="pswd"><input type="text" maxlength="9" placeholder="密码"></section>
                <section class="vfc"><input type="text" maxlength="11" placeholder="验证码"></section>
                <section><button>登录</button></section>
                <section><button>关于我们</button></section>  
            </form>
        </div>
        <div class="login-content" v-show="!loginForm">
            <form action="" class="login-sms">
                <section class="info"><input type="text" maxlength="11" placeholder="手机号"></section>
                <section class="vfc"><input type="text" maxlength="11" placeholder="验证码"></section>
                <section>温馨提示：未注册TDYWZ外卖帐号的手机号，登录时将自动注册，且代表已同意<a>《用户服务协议》</a></section>
                <section><button>登录</button></section> 
                <section><button>关于我们</button></section> 
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            loginForm:true
        }
    },
    methods:{
       SmsLogin(){
           this.loginForm=!this.loginForm
       },
       back(){
           this.$router.go(-1)
       }
    }
}
</script>

<style lang="scss" scoped>
@import '~common/css/mixmin';
.login{
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right:0;
    z-index:101;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    header{
        width:100%;
        height:px2rem(40);
        position: fixed;
        top:0;
        left:0;
        z-index:102;
        background: #fff;
        .iconfont{
            text-align: left;
            color:#999;
            font-size: px2rem(26);
            line-height: px2rem(40);
        }
    }
    .title{
        margin-top:px2rem(60);
        font-size: px2rem(40);
        color:#789;
        font-weight: bold;
    }
    .title-nav{
        margin-top:px2rem(20);
        >a{
            display: inline-block;
            padding-bottom: px2rem(4);
            color:#333;
            font-size: px2rem(14);
            &:first-child {
                margin-right:px2rem(40);
            }
            &.on{
                color:#789;
                font-weight:700;
                border-bottom:px2rem(2) solid#789;

            }
        }
    }
    .login-content{
        width:80%;
        margin:0 auto;
        .login-password{
            >section{
                width:100%;
                height:px2rem(48);
                margin-top:px2rem(16);
                background: #fff;
                input{
                    width:100%;
                    height:100%;
                    padding-left:px2rem(10);
                    font-size: px2rem(14);
                    color:#ddd;
                    border:px2rem(1) solid #ddd;
                    border-radius: px2rem(4);
                    &:focus{
                        border:px2rem(2) solid #02a774;
                    }
                }
            }
            button{
                background:#789;
                width:100%;
                color:#fff;
                margin-top:px2rem(20);
                border:px2rem(2) solid #789;
                border-radius: px2rem(4);
                height:px2rem(40);
                font-size: px2rem(14);
            }
        }
        
    }
    .login-sms{
        margin-top:px2rem(20);
        >section{
            width:100%;
            height:px2rem(48);
            margin-top:px2rem(16);
            input{
                width:100%;
                height:100%;
                padding-left:px2rem(10);
                font-size: px2rem(14);
                color:#ddd;
                border:px2rem(1) solid #ddd;
                border-radius: px2rem(4);
                &:focus{
                    border:px2rem(2) solid #02a774;
                }
            }
            button{
                background:#789;
                width:100%;
                color:#fff;
                margin-top:px2rem(20);
                border:px2rem(2) solid #789;
                border-radius: px2rem(4);
                height:px2rem(40);
                font-size: px2rem(14);
            } 
        }
    }
}
</style>
