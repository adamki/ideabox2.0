Rails.application.routes.draw do
  root 'dashboard#show'

  namespace :api do
    namespace :v1 do
      resource :ideas
    end
  end
end
