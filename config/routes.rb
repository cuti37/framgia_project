Rails.application.routes.draw do
  root to: "static_pages#home"

  get "users/new"
  get "static_pages/home"
  get "static_pages/help"

  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }

  devise_scope :user do
    get "/signup", to: "users/registrations#new"
    post "/signup", to: "users/registrations#new"
    get "/login", to: "users/sessions#new"
    post "/login", to: "users/sessions#create"
    delete "/logout", to: "user/sessions#destroy"
  end

  resources :posts
end
