// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

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
        allmap:{
            type:cc.Node,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        let windowSize=cc.view.getVisibleSize();
        let minScale = Math.ceil(windowSize.height/2048);
        var self = this.allmap, parent = this.node.parent;
        this.allmap.on(cc.Node.EventType.TOUCH_MOVE, event => {
            var touches = event.getTouches();
            if(touches.length == 1){
                var delta = event.touch.getDelta();
                if(this.allmap.x+delta.x<2400&&this.allmap.x+delta.x>0){
                    this.allmap.x += delta.x;
                }
                if(this.allmap.y+delta.y<1600&&this.allmap.y+delta.y>-500){
                    this.allmap.y += delta.y;
                }
            }else if(touches.length == 2){
                var touch1 = touches[0], touch2 = touches[1];
                var delta1 = touch1.getDelta(), delta2 = touch2.getDelta();
                //坐标转换为map坐标系
                var touchPoint1 = parent.convertToNodeSpaceAR(touch1.getLocation());
                var touchPoint2 = parent.convertToNodeSpaceAR(touch2.getLocation());

                //记录当前锚点
                let anchorPoint_before = self.target.node.getAnchorPoint();
            }
            
        }, this)
    },

    // update (dt) {},
});
