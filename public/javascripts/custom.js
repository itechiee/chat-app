const socket = io();
// console.log(socket);
socket.on('chat message', function(data) {
    var li = "<li><b>"+ data.username +": </b> "+ data.message +"</li>";
    jQuery('#chat-msgs').append(li);
});
jQuery(document).ready(function() {
    jQuery('#chat-btn').click(function() {
        let msg = jQuery('#chat-input').val();
        let user = jQuery('#chat-user').val();
        if(user != '' && msg != '') {
            let chatData = {
                username: user,
                message: msg
            }
            socket.emit("new message", chatData);
            jQuery('#chat-input').val('');
        }
        
    });
    
});