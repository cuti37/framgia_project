Rails.application.routes.draw do
  get "users/new"

  get "static_pages/home"

  get "static_pages/help"

  root to: "static_pages#home"

  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }
end
