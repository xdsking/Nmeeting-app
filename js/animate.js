/**
 * Created by xuds on 2015/10/5.
 */

/**
 *  @param domNode <Object> 消息片段
 *  @param animType <String> 动画类型
 *  @param isRemove <boolean> 执行完动画是否移除domNode
 */
var executeAnim = function (domNode, animType, isRemove) {
    domNode.removeClass().addClass(animType + ' animated message').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        if (isRemove) {
            $(this).remove();
        }
    });
};
/**
 * @summary 发送消息处理函数;
 * @param parentNode 消息父容器;
 * @param newMessage 消息片段;
 */
var sendMessage = function (parentNode, newMessage) {
    var animInType = "slideInUp",//添加消息时的动画效果;
        animOutType = "flipOutX",//移除消息时的动画效果;
        timeOut = 5000,//延迟5秒后移除消息;
        maxMessageNum = 5;//最多消息数量;
    parentNode.append(newMessage);//父容器中插入聊天信息;
    executeAnim(newMessage, animInType, false);//添加消息;
    window.setTimeout(function () {
        executeAnim(newMessage, animOutType, true);//移除消息;
    }, timeOut);
    var childrenNode = parentNode.children(), childrenNodeLength = childrenNode.length,
        endIndex = childrenNodeLength - maxMessageNum;
    if (endIndex > 0) {
        for (var i = 0; i < endIndex; i++) {
            executeAnim($(childrenNode[i]), animOutType, true);//保持消息量不超过maxMessageNum
        }
    }
};