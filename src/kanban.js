import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as types from './actions/actionTypes';
import Column from './components/columns';
class Kanban extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      return {counter: prevState.counter + 1}
    });
  }
  render() {
    const {kanbanData, onAddCard} = this.props;

   
    const columns = [];
    for(var i in kanbanData) {
      columns.push( <Column cards={kanbanData[i].cards} title={kanbanData[i].title} onAddCard={onAddCard} />)
    };

    return (
      <div className="kanban">
       {columns}
      </div>
    );
  }
}
 Kanban.propTypes = {
  kanbanData: PropTypes.object.isRequired,
  onAddCard: PropTypes.func.isRequired
}; 
function mapStateToProps(state) {
  return {
    kanbanData: state.columns,
  }
}
function mapDispatchToProps(dispatch) {
  return {
     onAddCard: (title, card) => {
      dispatch( {type: types.ADD_CARD, title, card})
    } 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Kanban);
