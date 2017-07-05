class PostsController < ApplicationController
  def show
    @post = Post.find_by_id params[:id]
    if @post.nil?
      render json: {status: :error}
    else
      render json: {status: :success, html: render_to_string(partial: "posts/show", locals: {post: @post},  layout: false)}
    end
  end
end
