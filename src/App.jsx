import './App.scss';
import logo from './assets/img/logoNCC.png'
import cssicon from './assets/img/css.png'
import htmlicon from './assets/img/html.png'
import urlicon from './assets/img/url.png'
function App() {
  const infomation = [{
    title:"Lorem ipsum dolor sit amet",
    img:cssicon,
    paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at'
  },
  {
    title:"Lorem ipsum dolor sit amet",
    img:htmlicon,
    paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at'
  },  {
    title:"Lorem ipsum dolor sit amet",
    img:urlicon,
    paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at'
  }
  


]
  return (
    <div className="App">
      <div className='Sidebar'>
       <ul>
        <li>Home</li>
        <li>Sercives</li>
        <li className='active'>News</li>
        <li>Blog</li>
        <li>Contact</li>
       </ul>
      </div>

      <div className='side'>

      </div>

      <div className="Content">
        <div className="about">
          <div>
            <img src={logo} alt="" className='logo' />
          </div>
          <div className="group1">
            <h3>Lorem ipsum dolor sit asmet?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque.</p>
          </div>
          <div className="information">
            {
              infomation.map((item,index)=>{
                return <div className="information_item" key={index}>
                <h3>
                  {item.title}
                </h3>
                <div className='flex'>
                 
                  <p> <img src={item.img} alt="" /> {item.paragraph} </p>
                </div>
              </div>
              })
            }

          </div>
        </div>

        <footer>
        Copyright © 2021
        </footer>
      </div>
    </div>
  );
}

export default App;
