class StaticPagesController < ApplicationController
  def home

    if user_signed_in?
      @post = current_user.posts.build
      @posts = current_user.posts.paginate page: params[:page], per_page: 10
    else
      @posts = Post.paginate page: params[:page], per_page: 10
    end
  end
end
