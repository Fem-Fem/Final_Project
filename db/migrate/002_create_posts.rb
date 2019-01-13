class CreatePosts < ActiveRecord::Migration[4.2]
	def change
		create_table :posts do |t|
			t.belongs_to :user
			t.string :title
			t.string :content
			t.string :category
			t.integer :user_id
		end
	end
end