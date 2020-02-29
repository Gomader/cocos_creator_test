# cocos_creator_test
- 2020.2.20
- Make a new empty cocos project
- Update the .gitignore file to avoid some useless files been pushed.


# about cc.action
- 2020.2.29
- https://www.cnblogs.com/zhen-prz/p/10955573.html
- https://docs.cocos.com/creator/manual/zh/   (find 'action' to find the api)

- note(about cc.action):
    when we use cc.fadeIn we must let the node's opactiy to be 0;
    cc.fadeIn(n) and other apis in action api, n is the time of action;

- note(about animation):
    one animation clip file only can write one animation process(if many processes in the same time they can be wrote in the same animation file);
    if we want to control the animation in the script:
        properties: {
            a:{
                type:cc.Node,
                default:null
            }
        },

        var anim = this.a.getComponent(cc.Animation);
        anim.play('animation name');
    
    in these code when the anim.play function start the code after anim.play will also run in the same time.