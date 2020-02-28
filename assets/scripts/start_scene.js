// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:function () {
        var animation = this.getComponent(cc.Animation)
        animation.play('homepage_titleplane') // 直接播放动画
        // 动态加载动画
        cc.loader.loadRes('action/homepage_titleplane.anim', cc.AnimationClip, function (err, dynamicAnimationClip) {
            // 先将动态加载的clip放入animation中
            animation.addClip(dynamicAnimationClip)
            animation.run('homepage_titleplane')
        })
    },

    start:function () {

    },

    update:function (dt) {

    },
    new_game:function(){
        cc.director.loadScene("new_user");
    },
    loading_game:function(){
        cc.director.loadScene("game");
    },
    setting:function(){
        
    }
});
