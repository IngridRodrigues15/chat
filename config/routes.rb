Rails.application.routes.draw do
  devise_for :users
  root 'chats#show'
  resources :messages, only: [:new,]
  post '/messages/oi/', to: 'messages#oi'
  mount ActionCable.server => '/cable'
end
