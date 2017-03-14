'use strict'

const Schema = use('Schema')

class EventsTypesTableSchema extends Schema {

  up () {
    this.create('events_types', (table) => {
      table.increments()
      table.string('name')
      table.string('description')
      table.timestamps()
      table.softDeletes()
    })
  }

  down () {
    this.drop('events_types')
  }

}

module.exports = EventsTypesTableSchema
