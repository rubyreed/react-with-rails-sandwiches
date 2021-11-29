class Sandwich < ApplicationRecord
  validates :name, presence: :true
  validates :price, numericality: :true
  validates :description, presence: :true
end
