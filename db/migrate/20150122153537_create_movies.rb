class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :name
      t.integer :rating
      t.integer :location
      t.string :comment
      t.boolean :has_seen
      t.integer :user_rating
      t.boolean :is_fav

      t.timestamps null: false
    end
  end
end
