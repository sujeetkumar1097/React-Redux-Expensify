import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/Filters'
import {DateRangePicker} from 'react-dates'

export class ExpenseListFilter extends React.Component {
    state = {
        calenderFocused: null
    }
    onDateChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    } 
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({calenderFocused}))
    }
    onTextChange =(e) => {
        this.props.setTextFilter(e.target.value)
    }
    onSelectChange = (e) => {
        if(e.target.value === 'date') {
            this.props.sortByDate()
        } else if(e.target.value === 'amount') {
            this.props.sortByAmount()
        }
    }
    render() {
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={this.onTextChange}/>
                <select 
                        value= {this.props.filters.sortBy}
                        onChange={this.onSelectChange}
                    >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDateChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }

}
const mapStateToProps = (state) => ({filters:state.filters})
const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter)