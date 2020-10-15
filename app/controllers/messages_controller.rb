class MessagesController < ApplicationController
  def oi
    @message = Message.new(content: params[:content], user: current_user)
    if @message.save
      ActionCable.server.broadcast 'chat',
        message: @message.content,
        user: current_user.email
     head :ok
    end
  end
end
