class Statement < ApplicationRecord
  belongs_to :category
  has_one_attached :file
end
