import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForn/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  const handleSignUpSubmit=e=>{
    e.preventDefault();
  }

  const handleUpdateProfile=e=>{
    e.preventDefault();
  }
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'Sign Up'} 
      handleSubmit={handleSignUpSubmit}></ReusableForm>
      <ReusableForm 
      formTitle={'Profile Update'} 
      handleSubmit={handleUpdateProfile}
       submitBtnText='Update'></ReusableForm>
    </>
  )
}

export default App
