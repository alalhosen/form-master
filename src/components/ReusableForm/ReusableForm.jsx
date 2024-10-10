
const ReusableForm = ({ formTitle, handleSubmit, submitBtnText = 'submit' }) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.EventTarget.name.value,
            email:e.target.email.value,
            password:e.target.password.value
        }
        handleSubmit(data);
    }

    return (
        <div>
            <h2>{formTitle}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;