import './GotoForm.css'

const GotoForm = props => {
    return (
        <div className='go-to-form'>
            <button onClick={props.setViewForm}>Create New expense</button>
        </div>
    )
}

export default GotoForm;