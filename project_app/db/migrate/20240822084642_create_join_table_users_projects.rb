class CreateJoinTableUsersProjects < ActiveRecord::Migration[7.0]
  def change
    create_join_table :users, :projects do |t|
      t.index [:user_id, :project_id]
      t.index [:project_id, :user_id]
      t.float :progress
      t.json :options, default: {}

      t.timestamps
    end
  end
end
