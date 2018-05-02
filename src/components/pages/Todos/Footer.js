import React from 'react'
import PropTypes from 'prop-types'
import Link from 'src/components/atoms/Link'
import Const from 'src/const'
const { VisibilityType } = Const
 
const Footer = props => {
  const {
    setVisibilityFilter,
    filter
  } = props

  return (
    <div>
      <span>Show: </span>
      <Link
        onClick={() => setVisibilityFilter(VisibilityType.SHOW_ALL)}
        active={filter === VisibilityType.SHOW_ALL}
      >
        All
      </Link>
      <Link
        onClick={() => setVisibilityFilter(VisibilityType.SHOW_ACTIVE)}
        active={filter === VisibilityType.SHOW_ACTIVE}
      >
        Active
      </Link>
      <Link
        onClick={() => setVisibilityFilter(VisibilityType.SHOW_COMPLETED)}
        active={filter === VisibilityType.SHOW_COMPLETED}
      >
        Completed
      </Link>
    </div>
  )
}
 
Footer.propTypes = {
  setVisibilityFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}
 
export default Footer
