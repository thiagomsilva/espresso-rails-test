json.extract! card, :id, :last4, :user_id, :created_at, :updated_at
json.url card_url(card, format: :json)
