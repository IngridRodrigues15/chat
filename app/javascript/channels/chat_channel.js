import consumer from "./consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    console.log("Connected!");
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $("#msg-card").append('<div class="d-flex justify-content-start mb-4"><div class="msg_cotainer" id="messages"><p>'+data.message+'</p></div></div>');
    $(".type_msg").val("");
    $(".msg_card_body").scrollTop($('.msg_card_body')[0].scrollHeight);
  }

});
