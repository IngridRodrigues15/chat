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
    console.log(data);
    $("#messages").append('<div class="message"><p>'+data.message+'</p><div>');

  }

  // speak(msg) {
  //   this.perform("speak", { message: msg })
  // }



});
