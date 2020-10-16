class StatusChannel < ApplicationCable::Channel
  def subscribed
    stream_from "status"
    current_user.online
  end

  def unsubscribed
    current_user.off
  end

  def appear(data)
    current_user.appear(data)
  end

  def away
    current_user.away
  end
end
