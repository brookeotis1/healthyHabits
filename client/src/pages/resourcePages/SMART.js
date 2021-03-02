import Article from "../../components/ResourceArticle/article"

const smart = () => {

    return (
        <Article
            heading={<>SMART Goals</>}
            paragraph1="SMART is an acronym that stands for Specific, Measurable, Achievable, Relevant and Time-based."
            paragraph2="Using each of these elements can help you effectively define your goals and enable you to be successful in your pursuits."
            imageSrc1="../../images/smart.jpg"
          imageAlt1="SMART Goals"
          learnMore="https://www.indeed.com/career-advice/career-development/smart-goals"
          
        />
         
    )
}

export default smart;