class Ability
  include CanCan::Ability

  def initialize user
    user ||= User.new

    if user
      can :read, :all
      can [:edit, :update], User, id: user.id
      can [:create, :update, :destroy], Post
    else
      can :read, :all
    end
  end
end
