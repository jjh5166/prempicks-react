# frozen_string_literal: true

require 'sidekiq/web'

Rails.application.routes.draw do

  put '/account/update', to: "account#update"

  authenticate :user do
    devise_scope :user do
      get 'users/info', to: "users/registrations#user_info"
    end
  end

  devise_for :users,
             path: '',
             path_names: {
               sign_in: 'users/login',
               sign_out: 'logout',
               registration: 'users/signup'
             },
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations'
             }



  authenticate :user, lambda { |u| u.admin? } do
    mount Sidekiq::Web => '/sidekiq'
  end

  root to: 'landing#index'
  match '/*path' => 'landing#index', via: :all

end
