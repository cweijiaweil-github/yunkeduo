$(function() {
    // alert();
})
$("#ska").click(function() {
    sendMessage();
});
var clientid = "9C1D19C911E659B8CD8FA92734C32D71DEB9";
var targetClientId = 'testclient1';

var socket = io.connect('http://localhost:8082?clientid=' + clientid);

function sendMessage() {
    var jsonObject = {
        "sourceClientId": clientid,
        "targetClientId": targetClientId,
        "msgType": 'chat',
        "msgContent": "message"
    };
    socket.emit('repeatLoginMmessage', jsonObject);

}
socket.on('connect', function() {
    console.log("与服务连接成功");
    // this.sendMessage();
});

// socket.on('push messageevent', function(data) {
//     output(data.msgContent, divmsg);

// });
// socket.on('disconnect', function() {
//     localStorage.removeItem("cd85c4bc-1986-4a9c-8524-6ee1174436e1");
//     app_72b76c84_9c47_49d6_9caa_634ad54dd95b.removeUserChatHistory(clientid, null);
// });