class AddOnMovieListToMovies < ActiveRecord::Migration
  def change
    add_column :movies, :on_movie_list, :boolean
  end
end
