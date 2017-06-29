class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :comments
  has_many :active_relationships, class_name: Relationship.name,
    foreign_key: :follower_id, dependent: :destroy
  has_many :following, through: :active_relationships, source: :followed

  has_many :passive_relationships, class_name: Relationship.name,
    foreign_key: :followed_id, dependent: :destroy
  has_many :followers, through: :passive_relationships, source: :follower

  validates :full_name, presence: true,
    length: {maximum: Settings.user.full_name.max_length}

  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable
end
