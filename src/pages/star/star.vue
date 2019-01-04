<template>
<div class="star" :class="`star-${size}`">
    <span class="star-item" v-for="(sc, index) in starClasses" :key="index" :class="sc"></span>
</div>
</template>

<script type="text/ecmascript-6">
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'
export default {
    // 设计 props
    props: {
    score: Number,
    size: Number
    },
    computed: {
        starClasses () {
        const scs = []
        const {score} = this
        const scoreInteger = Math.floor(score)
        // 添加类名 CLASS_ON
        for (let i = 0; i< scoreInteger; i++) {
        scs.push(CLASS_ON)
        }
        if(score*10-scoreInteger*10>=5) {
        scs.push(CLASS_HALF)
        }
        // 添加类名 CLASS_OFF
        while(scs.length<5) {
        scs.push(CLASS_OFF)
        }
        return scs
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~common/css/mixmin";
.star{
    float:left;
    font-size: 0;
    .star-item{
        display:inline-block;
        background-repeat: no-repeat;
        &.star-48{
            .star-item{
                width:px2rem(20);
                height:px2rem(20);
                margin-right:px2rem(22);
                background-size: px2rem(20) px2rem(20);
                &:last-child{
                    margin-right:0;
                }
                &.on{
                   @include bg-img('./stars/star48_on'); 
                }
                &.half{
                   @include bg-img('./stars/star48_half');  
                }
                &.off{
                    @include bg-img('./stars/star48_off');
                }
            }
        }
        &.star-36{
            .star-item{
                width:px2rem(15);
                height:px2rem(15);
                margin-right:px2rem(6);
                background-size: px2rem(15) px2rem(15);
                &:last-child{
                    margin-right:0;
                }
                &.on{
                   @include bg-img('./stars/star36_on'); 
                }
                &.half{
                   @include bg-img('./stars/star36_half');  
                }
                &.off{
                    @include bg-img('./stars/star36_off');
                }
            }
        }
        &.star-24{
            .star-item{
                width:px2rem(10);
                height:px2rem(10);
                margin-right:px2rem(3);
                background-size: px2rem(10) px2rem(10);
                &:last-child{
                    margin-right:0;
                }
                &.on{
                   @include bg-img('./stars/star24_on'); 
                }
                &.half{
                   @include bg-img('./stars/star24_half');  
                }
                &.off{
                    @include bg-img('./stars/star24_off');
                }
            }
        }
    }
}
</style>