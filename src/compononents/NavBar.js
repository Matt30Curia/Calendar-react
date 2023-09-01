import accountImage from '../asset/account.png'

function NavBar(){
  return (
    <nav className='main-navbar'>
      <h1 className='title-navbar'>calendar</h1>
      <img src={accountImage} alt='avatar img'/>
      <h4 className='account-navbar'>Pinco Pallo</h4>
    </nav>
  )
}


export default NavBar;