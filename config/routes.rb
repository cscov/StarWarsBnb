Rails.application.routes.draw do

   namespace :api, defaults: { format: :json } do
     resources :users, only: [:create] do
       resources :bookings, only: %i(index show update edit destroy)
     end
     resource :session, only: [:new, :create, :destroy]
     resources :spots, only: [:index, :show] do
       resources :photos, only: [:show]
       resources :bookings, only: [:create]
     end
   end
   root to: 'static_pages#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
