import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor(Math.random() * 40)
    //     }
    //     this.setState((prevState) => {
    //         return { persons: prevState.persons.concat(newPerson) }
    //     });
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState((prevState) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId) }
    //     });
    // }

    render() {
        return (
            <div>
                <AddPerson clicked={this.props.onStoreResult} />
                {this.props.prs.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onDeleteResult(person.id)} />
                ))}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        prs: state.persons
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onStoreResult: (name, age) => dispatch({ type: 'STORE_RESULT', personData: { name: name, age: age } }),
        onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', resltElId: id })

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Persons);