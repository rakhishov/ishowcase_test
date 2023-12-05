import Header from '../Header.tsx'
import TextComponent from "../TextComponent.tsx";
import Banner from "../Banner.tsx";
import WatchGrid from "../WatchGrid.tsx";
  
const Homepage = () =>{

    return(
        <>
      <Header/>
      <Banner/>
      <TextComponent/>
      <WatchGrid/>
      </>
    )
}

export default Homepage;