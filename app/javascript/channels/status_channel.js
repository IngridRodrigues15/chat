import consumer from "./consumer"

consumer.subscriptions.create("StatusChannel", {
  connected() {
    this.addUser()
    this.appear()
  },

  disconnected() {
    this.away()
  },

   appear() {
     this.perform("appear", { appearing_on: this.appearingOn })
   },
   away() {
     this.perform("away")
   },

   received(data) {
    // Html para trocar o status no front
   },

   addUser() {
     // $(".contacts").append('<li><div class="user_info"><span>'+user+'</span></div>'+user+'<div class="img_cont"><span class="online_icon"></span></div></li>');
   }


});
