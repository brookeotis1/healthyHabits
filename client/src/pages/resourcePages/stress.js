import Article from "../../components/ResourceArticle/article"

const Stress = () => {

    return (
        <Article
            heading={<>Stress and the Autonomic Nervous System</>}
            paragraph1="Stress by definition is 'A physical and emotional response to the demands and changes in our lives.' When stress is managed it can help us maximize our potential and performance."
            paragraph2= "The autonomic nervous system (ANS) is part of the brain that contributes to an individual’s survival. There are two systems that make up the ANS: the sympathetic nervous system (SNS) and the parasympathetic nervous system (PNS). Whenever there is a threat to an individual or their environment, the SNS is activated. This system controls the stress response commonly known as fight, flight, or freeze. It exists to aid in survival during potentially dangerous situations. When the SNS is activated, the brain’s primary concern is survival and therefore any functions that are not essential are temporarily inhibited. For example, the body will slow down digestion, lower immune functions, and stop worrying about attaching to or bonding with other individuals. Conversely when the PNS is activated, the brain is focused on homeostasis and will begin non-survival processes such as resting and connecting with other individuals."
            paragraph3="The stress response can be helpful when we are in life-threatening situations. When this system is activated for longer periods of time, however, we can start to see some adverse effects.  The body begins to release a stress hormone, cortisol.  This hormone affects blood sugar levels (can contribute to diabetes because it counteracts insulin), decreases immune function, reduces bone formation, increases sodium retention (leads to increased blood pressure, cholesterol, heart disease), and can damage the hippocampus (part of the brain associated with learning and memory)."
          imageSrc1="../../images/SNS.jpg"
          imageAlt1="Sympathetic Nervous System"
          paragraph4= "Understanding how to keep stress in healthy levels and regulate the amount of stress that we experience is crucial to our success."
    
        />
    )
}

export default Stress;