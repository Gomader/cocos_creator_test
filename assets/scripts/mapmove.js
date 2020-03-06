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
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
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
                var touchpoint1 = this.allmap.convertToNodeSpaceAR(touch1.getLocation());
                var touchpoint2 = this.allmap.convertToNodeSpaceAR(touch2.getLocation());
                var distance = touchpoint1.sub(touchpoint2);
                var delta = delta1.sub(cc.v2(delta2.x,delta2.y));
                var pos = touchpoint2.add(cc.v2(distance.x / 2, distance.y / 2));
                pos = this.allmap.convertToWorldSpaceAR(pos);
                var scale = 1;
                if(Math.abs(distance.x)>Math.abs(distance.y)){
                    scale = (distance.x + delta.x) / distance.x * this.allmap.scaleX;
                }else{
                    scale = (distance.y + delta.y) / distance.y * this.allmap.scaleY;
                }
                if(scale>6){
                    scale = 6;
                }else if(scale<1){
                    scale = 1;
                }
                var size = this.allmap.getContentSize();
                this.allmap.setAnchorPoint(pos.x/size.width,pos.y/size.height);
                this.allmap.setScale(scale);
            }
            
        }, this)
    },

    // update (dt) {},
});
