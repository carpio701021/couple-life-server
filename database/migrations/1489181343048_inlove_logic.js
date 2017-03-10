'use strict'

const Schema = use('Schema')

class InloveLogicTableSchema extends Schema {

  up () {
    this.table('inlove_logic', (table) => {
      // alter inlove_logic table
    })
  }

  down () {
    this.table('inlove_logic', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = InloveLogicTableSchema
