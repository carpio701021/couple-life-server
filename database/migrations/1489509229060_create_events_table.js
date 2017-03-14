'use strict'

const Schema = use('Schema')

class EventsTableSchema extends Schema {

  up () {
    this.create('events', (table) => {
      table.increments()
      table.integer('couple_id').unsigned().references('id').inTable('couples')
      table.integer('event_type').unsigned().references('id').inTable('events_types')
      table.dateTime('date_time')
      table.string('description')
      table.timestamps()
      table.softDeletes()
    })
  }

  down () {
    this.drop('events')
  }

}

module.exports = EventsTableSchema
