import React, { useEffect } from 'react'
import Note from './Note';
import { connect } from 'react-redux';
import { modify } from '../../actions/submitAction';
import PropTypes from 'prop-types'


const Notes = ({ notes: { notes }, modify }) => {
    useEffect(() => {
        modify(false);
        //eslint-disable-next-line
    }, [])
    return (
        <div className="notes">
            <div className="notes-wrapper">
                {notes !== [] && notes.map(note => <Note key={note.id} note={note} />)}
            </div>
        </div>
    )
}

Notes.propTypes = {
    notes: PropTypes.object.isRequired,
    modify: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    notes: state.note
})

export default connect(mapStateToProps, { modify })(Notes)
