# frozen_string_literal: true

require 'sidekiq/web'

Rails.application.routes.draw do
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
