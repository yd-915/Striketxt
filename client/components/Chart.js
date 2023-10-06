import React from 'react'
import {connect} from 'react-redux'
import {Bar, Pie, Polar} from 'react-chartjs-2'
import {getTransactionThunk} from '../store/transactions'
class ChartTwo extends React.Component {
  constructor(props) {
    super(props)
    this.createChart = this.createChart.bind(this)
  }
  async componentDidMount() {
    await this.props.getTransactions()
  }

  createChart(data, status) {
    return {
      labels: [...Object.keys(data)],
      datasets: [
        {
          label: status,
          backgroundColor: [
            '#d34848',
            '#ff8162',
            '#fffa67',
            'rgba(153, 102, 255, 0.2)',
            '#62374e'
          ],
          data: [...Object.values(data)]
        }
      ]
    }
  }

  render() {
    const receiveData = {}

    !!this.props.history.transaction.sender &&
      this.props.history.transaction.sender.forEach(user => {
        const username = user.receiver.username
        !receiveData[username]
          ? (receiveData[username] = user.amount)
          : (receiveData[username] += user.amount)
      })

    return (
      <div>
        <Pie data={this.createChart(receiveData, 'Receiving...')} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {history: state.transactions}
}
const mapDispatchToProps = dispatch => {
  return {getTransactions: () => dispatch(getTransactionThunk())}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartTwo)
