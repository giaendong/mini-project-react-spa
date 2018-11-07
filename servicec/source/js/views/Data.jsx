import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getData } from 'actions/data';
import ReactPaginate from 'react-paginate';

const styles = {};
styles.cell = {
  padding: '5px',
  minWidth: '15px',
};
styles.th = {
  padding: '5px',
  minWidth: '15px',
  fontSize: 'bold',
};
styles.line = {
  padding: '5px',
};

@connect(state => ({
  error: state.data.get('error'),
  loading: state.data.get('loading'),
  data: state.data.get('data'),
}))
export default class Data extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
    data: PropTypes.object,
    // from react-redux connect
    dispatch: PropTypes.func,
  }
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentWillMount() {
    const {
      dispatch,
      data,
    } = this.props;
    const { page } = this.state;

    if (!data) {
      dispatch(getData(page));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { dispatch } = this.props;
    const { page } = this.state;

    if (prevState.page !== page) {
      dispatch(getData(page));
    }
  }

  handlePageClick(data) {
    this.setState({ page: data.selected + 1 });
  }

  renderData() {
    const {
      data,
    } = this.props;

    return data.results.map(d => {
      return (
        <tr key={ d.id }>
          <td style={ styles.cell }>{ d.id }</td>
          <td style={ styles.cell }>{ d.userId }</td>
          <td style={ styles.cell }>{ d.title }</td>
          <td style={ styles.cell }>{ d.body }</td>
        </tr>
      );
    });
  }

  render() {
    const {
      loading,
      error,
      data,
    } = this.props;
    return (
      <div>
        <h1>Data</h1>
        { loading && <div>Loading data...</div> }
        { error && error.toString() }
        <div>
          <table>
            <tr>
              <th style={ styles.th }>Id</th>
              <th style={ styles.th }>User Id</th>
              <th style={ styles.th }>Title</th>
              <th style={ styles.th }>Body</th>
            </tr>
            { data && this.renderData() }
          </table>
          <ReactPaginate
            previousLabel='previous'
            nextLabel='next'
            breakClassName='break-me'
            pageCount={ data ? parseInt(data.last, 10) : 0 }
            marginPagesDisplayed={ 2 }
            pageRangeDisplayed={ 5 }
            onPageChange={ this.handlePageClick }
            containerClassName='pagination'
            subContainerClassName='pages pagination'
            activeClassName='active'
          />
        </div>
      </div>
    );
  }
}
