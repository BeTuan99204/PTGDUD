import Header from "./components/Header"
 import SideBarMenu from "./components/SideBarMenu"
 import DashBoard from "./pages/DashBoard"
 
 const App = () => {
   return (
     <div className="grid grid-cols-[2fr_8fr]">
       <div>
         <SideBarMenu />
       </div>
       <div>
         <Header />
         <DashBoard />
       </div>
     </div>
 
   )
 }
 
 export default App;