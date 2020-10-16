import consumer from "./consumer"

consumer.subscriptions.create("StatusChannel", {
  connected() {
    this.install()
    this.update()
  },

  disconnected() {
    this.uninstall()
    this.update()
  },

  received(data) {

  },
   update() {
     this.documentIsActive ? this.appear() : this.away()
   },

   appear() {
     // Calls `StatusChannel#appear(data)` on the server.
     this.perform("appear", { appearing_on: this.appearingOn })
   },
   away() {
     // Calls `StatusChannel#away` on the server.
     this.perform("away")
   },

   install() {
     window.addEventListener("focus", this.update)
     window.addEventListener("blur", this.update)
     document.addEventListener("turbolinks:load", this.update)
     document.addEventListener("visibilitychange", this.update)
   },

   uninstall() {
     window.removeEventListener("focus", this.update)
     window.removeEventListener("blur", this.update)
     document.removeEventListener("turbolinks:load", this.update)
     document.removeEventListener("visibilitychange", this.update)
   },
});
