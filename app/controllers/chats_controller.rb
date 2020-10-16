class ChatsController < ApplicationController
  before_action :authenticate_user!

  def show
    @messages = Message.all
    @msg = Message.new
    @users = User.all
  end
end
