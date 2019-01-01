<template>
    <div class="profile">
        <m-header title="个人中心"></m-header>
        <router-link tag="div" to="/login" class="avatar">
            <div class="avatar-img"><i class="iconfont icon-icontouxiang"></i></div>
            <div class="content">
                <div class="login">
                    <p class="login-reg">登录|注册</p>
                    <p><i class="iconfont icon-shouji"></i>暂无绑定手机号</p>
                </div>
            </div>
            <div class="arrow"><i class="iconfont icon-jiantou"></i></div>
        </router-link>
        <div class="info-data">
            <a href=""><span><i style="color:#FF4500">0.00</i>元</span><span>我的余额</span></a>
            <a href=""><span><i style="color:#CD5C5C">0</i>个</span><span>我的优惠劵</span></a>
            <a href=""><span><i>0</i>分</span><span>我的积分</span></a>
        </div>
        <div class="order">
            <ul>
                <li>
                    <i class="iconfont icon-dingdan1 icon" style="color:#F08080"></i>
                    <div class="content">
                        <p>我的订单</p>
                        <i class="iconfont icon-jiantou"></i>
                    </div>
                </li>
                <li>
                    <i class="iconfont icon-jifen icon" style="color:#FFFF00" ></i>
                    <div class="content">
                        <p>积分商城</p>
                        <i class="iconfont icon-jiantou"></i>
                    </div>
                </li>
                <li>
                    <i class="iconfont icon-huiyuanqiaguanli icon" style="color:#FF8C00"></i>
                    <div class="content">
                        <p>会员卡</p>
                        <i class="iconfont icon-jiantou"></i>
                    </div>
                </li>
            </ul>
        </div>
        <div class="order">
            <ul>
                <li>
                   <i class="iconfont icon-fuwujiedian icon" style="color:#789"></i>
                    <div class="content">
                        <p>服务中心</p>
                        <i class="iconfont icon-jiantou"></i>
                    </div> 
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MHeader from 'components/header/header'
export default {
    components:{
        MHeader
    }
}
</script>

<style lang="scss" scoped>
@import '~common/css/mixmin';
.profile{
    width:100%;
    .avatar{
        background:#789;
        padding: px2rem(20) px2rem(10);
        display: flex;
        .avatar-img{
            flex: 0 0 px2rem(60);
            width:px2rem(60);
            height:px2rem(60);
            border-radius: 50%;
            background:#fff;
            overflow: hidden;
            vertical-align: top;
            .icon-icontouxiang{
                font-size: px2rem(62);
                color:#e4e4e4;
                
             }
        }
        .content{
            flex: 1;
            .login{
                float:left;
                padding-left: px2rem(10);
                color:#fff;
                >p{
                    font-size: px2rem(14);
                }
                .login-reg{
                    font-size: px2rem(20);
                    font-weight: 700;
                    margin-bottom: px2rem(20);
                }
            }
            
        }
        .arrow{
            flex: 0  0 15%;
            text-align: right;
            .icon-jiantou{
                color:#fff;
                font-size: px2rem(16);
                line-height: px2rem(60);
            }
        }
    }
    .info-data{
        display: flex;
        padding: px2rem(10) 0;
        background:#fff;
        >a{
            flex: 1;
            display: flex;
            flex-direction: column;
            text-align: center;
            border-right:px2rem(1) solid #e4e4ee;
            :nth-child(1){
                font-size: px2rem(16);
                padding-bottom: px2rem(10);
                >i{
                    font-size: px2rem(26);
                }
            }
            >span{
                font-size: px2rem(14);
                color:#999;
                font-weight: bold;
            }
        }
    }
    .order{
        width:100%;
        margin-top: px2rem(20);
        background: #fff;
        padding: px2rem(10) 0;
        ul li{
            display: flex;
            width:100%;
            &:last-child .content{
                @include bottom-border-1px(none);
            }
            .icon{
                display: inline-block;
                flex:0 0 px2rem(20);
                font-size:px2rem(20);
                line-height: px2rem(30);
                margin-right:px2rem(10);
            }
            .content{
                flex: 1;
                display: flex;
                padding-bottom: px2rem(10);
                margin-top:px2rem(5);
                margin-right:px2rem(10);
                @include bottom-border-1px(#e4e4e4);
                p{
                    flex:1;
                    color: #666;
                    font-size: px2rem(16);
                    line-height: px2rem(20);
                }
                i{
                    flex: 0 0 px2rem(20);
                    color: #999;
                }
            }
        }
    }
}
</style>
