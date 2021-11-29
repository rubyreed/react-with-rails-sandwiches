class CreateSandwiches < ActiveRecord::Migration[6.1]
  def change
    create_table :sandwiches do |t|
      t.string :name
      t.float :price
      t.string :description

      t.timestamps
    end
  end
end
