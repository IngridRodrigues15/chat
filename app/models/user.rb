class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable

  attr_accessor :skip_password_validation  # virtual attribute to skip password validation while saving

  enum status: [ :online, :away, :off ]

  def appear(data)
    self.online
    self.save
  end

  protected

  def password_required?
    return false
    super
  end
end
