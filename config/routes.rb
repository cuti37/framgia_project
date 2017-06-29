Rails.application.routes.draw do
  get 'static_pages/home'

  get 'static_pages/help'
  root to: "static_pages#home"
  devise_for :users
end
