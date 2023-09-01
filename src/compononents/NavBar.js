import accountImage from '../asset/account.png'

function NavBar(){
  return (
    <nav className="main-navbar">
      <h1 className="title-navbar">calendar</h1>
      <div className='profile'>
        <img src={accountImage} alt="avatar img" className="account-img" />
        <h4 className="account-navbar">Pinco Pallo</h4>
      </div>
    </nav>
  );
}


export default NavBar;