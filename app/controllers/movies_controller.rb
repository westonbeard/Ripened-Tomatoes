class MoviesController < ApplicationController
  before_action :authenticate_user!

  before_action :set_movie, only: [:show, :edit, :update, :destroy]

  def new
  end
  def edit
  end
  def update
    
  end
  def destroy
  end
  def show
  end
  def index

    unless user_signed_in?
      redirect_to "/users/sign_up"
    end

    @movies = Movie.all

  end

  def added
    #@paramaters =  params[:api_id]
    @movie_id = params[:movie_id]

    
  end

  def create

    @movie = Movie.create(name: params[:movie_id], location: params[:img_src])

    if @movie.save
      redirect_to movie_path(@movie)
    else
      render :new
    end

  end

  def set_movie
    @movie = Movie.find(params[:id])
  end

end

