import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_PROGRESS}>
      In progress
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_REMOVE}>
      Trash
    </FilterLink>
    {/* <FilterLink filter={VisibilityFilters.SHOW_DELETED}>
      Deleted
    </FilterLink> */}
  </div>
)

export default Footer
