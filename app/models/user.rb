class User < ApplicationRecord
  belongs_to :company
  has_one :card
end
