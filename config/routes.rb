# frozen_string_literal: true

Rails.application.routes.draw do
  resources :statements
  resources :categories
  resources :cards
  resources :users
  resources :companies
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'
end
