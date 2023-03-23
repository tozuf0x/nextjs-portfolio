import Header from "./header";
import Footer from "./footer";
const Layout = ({children}) => {
    return (
        <div className='content'>
            <Header/>
               
                 {children}
               
                 <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
    </div>
            <Footer/>
        </div>
    )
  }
  export default Layout;