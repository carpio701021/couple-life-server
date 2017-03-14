'use strict'

const Schema = use('Schema')

class CreateCouplesTableTableSchema extends Schema {

  up () {
    this.create('couples', (table) => {
      table.increments()
      table.integer('user_1_id').unsigned().references('id').inTable('users')
      //table.integer('user_2_id').unsigned().references('id').inTable('users')
      table.string('picture')
      table.timestamps()
      table.softDeletes()
    })
  }

  down () {
    this.drop('couples')
  }

}

module.exports = CreateCouplesTableTableSchema
