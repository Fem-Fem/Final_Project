class PostsController < ActionController::Base
  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
    	redirect_to post_path(@post)
    else
      @errors = @post.errors
      erb :'/new'
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update!(post_params)
      #redirect to comment
    else
      @errors = @post.errors
      erb :'/edit'
    end
  end

  def index
      @posts = Post.all
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end

end