import './Header.css';

const Header = () => {
    return (
        <>
        <div className="header">
          <div className="headerTitles">
              <span className="headerTitleSmall">React & Node</span>
              <span className="headerTitleLarge">Blog</span>
          </div>
          <img 
            className="headerImg" 
            src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="" />
        </div>
        </>
    )
}

export default Header
