Rails.application.routes.draw do

   namespace :api, defaults: { format: :json } do
     resources :users, only: [:create]
     resource :session, only: [:new, :create, :destroy]
     resources :spots, only: [:index, :show]
     resources :bookings, only: [:update]
   end
   root to: 'static_pages#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
