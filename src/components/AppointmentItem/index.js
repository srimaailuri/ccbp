// Write your code here

import './index.css'

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {AppointmentDetails} = props
  const {title, date, isStarred} = AppointmentDetails

  const postedData = format(date, 'dd MMMM yyyy, EEEE')

  const imageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointmentDetails">
      <div className="Star_header">
        <h1>{title}</h1>
        <button type="button" data-testid="star">
          <img src={imageUrl} alt="star" />
        </button>
      </div>
      <p>Date: {postedData}</p>
    </li>
  )
}

export default AppointmentItem
