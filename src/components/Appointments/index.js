// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {appointmentList: [], title: '', date: ''}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  render() {
    const {appointmentList, title, date} = this.state

    return (
      <div className="main_container">
        <div className="small_container">
          <div className="upper_section">
            <form className="form_container" onSubmit={this.addAppointment}>
              <h1>Add Appointment</h1>
              <label htmlFor="title" className="label_cont">
                Title:
              </label>
              <input
                value={title}
                placeholder="Title"
                id="title"
                className="input_cont"
                onChange={this.onChangeTitle}
              />
              <label htmlFor="date" className="label_cont">
                Date:
              </label>
              <input
                value={date}
                type="date"
                placeholder="dd/mm/yyyy"
                id="date"
                className="input_cont"
                onChange={this.onChangeDate}
              />
              <button type="submit" className="add-Btn">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments_pic"
            />
          </div>

          <div className="Appointments_section">
            <div className="header">
              <h1>Appointments</h1>
              <button className="starred_btn" type="button">
                Starred
              </button>
            </div>
            <ul className="appointmentsAddedSection">
              {appointmentList.map(eachItem => (
                <AppointmentItem
                  key={eachItem.id}
                  AppointmentDetails={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
