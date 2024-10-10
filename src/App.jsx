import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForn/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('sign up data', data);
  }

  const handleUpdateProfile = data => {
    console.log('update profile', data);
  }
  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'Sign Up'}
        handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
<div>
  <h2>Update Profile</h2>
  <p>Always keep your profile update</p>
</div>

        </ReusableForm>
    </>
  )
}

export default App
