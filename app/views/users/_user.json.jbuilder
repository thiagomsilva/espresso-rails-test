json.extract! user, :id, :name, :email, :password, :admin, :company_id, :created_at, :updated_at
json.url user_url(user, format: :json)
