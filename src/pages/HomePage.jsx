import Banner from "../components/Banner/Banner";
import Main from "../components/Main/Main";

const HomePage = ({data}) => {
  return (
    <>
      <Banner 
        mainTitle={data.blog.mainTitle} 
        subTitle={data.blog.subTitle} 
        description={data.blog.description}
      />
      <Main data={data}/>
    </>
  )
}

export default HomePage;