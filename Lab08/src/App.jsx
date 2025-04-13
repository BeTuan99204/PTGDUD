import Header from "./components/Header"
 import SideBarMenu from "./components/SideBarMenu"
 
 
 const App = () => {
   return (
     <div className="grid grid-cols-[2fr_8fr]">
       <div>
         <SideBarMenu />
       </div>
       <div>
         <Header />
       </div>
     </div>
 
   )
 }
 
 export default App;