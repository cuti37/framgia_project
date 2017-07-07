Rails.application.routes.draw do
  root to: "static_pages#home"

  get "users/new"
  get "static_pages/home"
  get "static_pages/help"

  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }

  resources :posts
end
