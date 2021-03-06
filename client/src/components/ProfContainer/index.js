import React from "react";
//import "./style.css";

function ProfContainer() 
      {
      return (
        <div>
          
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <style dangerouslySetInnerHTML={{__html: "\nhtml,body,h1,h2,h3,h4,h5,h6 {font-family: \"Roboto\", sans-serif}\n" }} />
          {/* Page Container */}
          <div className="w3-content w3-margin-top" style={{maxWidth: '1400px'}}>
            {/* The Grid */}
            <div className="w3-row-padding">
              {/* Left Column */}
              <div className="w3-third">
                <div className="w3-white w3-text-grey w3-card-4">
                  <div className="w3-display-container">
                  <a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/FzNPD4Lx/download.png' border='0' alt='download'/></a>
                    {/* <img src="/images/uploadplacehold.png" style={{width: '100%'}} alt="Avatar" /> */}
                    <div className="w3-display-bottomleft w3-container w3-text-black">
                      {/* <h2>Jane Doe</h2> */}
                    </div>
                  </div>
                  <div className="w3-container">
                    <hr />
                    <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />Future Goals</b></p>
                    <p>Save $5000</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '0%'}}></div>
                    </div>
                    <p>Speak Italian</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '0%'}}>
                        <div className="w3-center w3-text-white"></div>
                      </div>
                    </div>
                    <p>Read 1 book a month</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '0%'}}></div>
                    </div>
                    <p>Sleep 7 hrs a night </p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '0%'}}></div>
                    </div>
                    <br />
                    <p className="w3-large w3-text-theme"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />Big Goals</b></p>
                    <p>Travel</p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div className="w3-round-xlarge w3-teal" style={{height: '24px', width: '0%'}} />
                    </div>
                    <p>Build something</p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div className="w3-round-xlarge w3-teal" style={{height: '24px', width: '0%'}} />
                    </div>
                    <p>Buy a house</p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div className="w3-round-xlarge w3-teal" style={{height: '24px', width: '0%'}} />
                    </div>
                    <br />
                  </div>
                </div><br />
                {/* End Left Column */}
                {/* End Grid */}
              </div>
              {/* End Page Container */}
            </div>
          </div></div>
      );
    }
  

export default ProfContainer;


// function ProfContainer() {
//   return (
//       <div>
          
          

// <title>W3.CSS Template</title>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
// <style>
// html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif}
// </style>
// <body className="w3-light-grey">

// <!-- Page Container -->
// <div className="w3-content w3-margin-top" style="max-width:1400px;">

//   <!-- The Grid -->
//   <div className="w3-row-padding">
  
//     <!-- Left Column -->
//     <div className="w3-third">
    
//       <div className="w3-white w3-text-grey w3-card-4">
//         <div className="w3-display-container">
//           <img src="/w3images/avatar_hat.jpg" style="width:100%" alt="Avatar">
//           <div className="w3-display-bottomleft w3-container w3-text-black">
//             <h2>Jane Doe</h2>
//           </div>
//         </div>
//         <div className="w3-container">
          
//           <hr>

//           <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Goals</b></p>
//           <p>Practice Photoshop</p>
//           <div className="w3-light-grey w3-round-xlarge w3-small">
//             <div className="w3-container w3-center w3-round-xlarge w3-teal" style="width:90%">90%</div>
//           </div>
//           <p>Drink 100oz Water</p>
//           <div className="w3-light-grey w3-round-xlarge w3-small">
//             <div className="w3-container w3-center w3-round-xlarge w3-teal" style="width:80%">
//               <div className="w3-center w3-text-white">80%</div>
//             </div>
//           </div>
//           <p>Read 2 books a month</p>
//           <div className="w3-light-grey w3-round-xlarge w3-small">
//             <div className="w3-container w3-center w3-round-xlarge w3-teal" style="width:75%">75%</div>
//           </div>
//           <p>Sleep 7 hrs a night </p>
//           <div className="w3-light-grey w3-round-xlarge w3-small">
//             <div className="w3-container w3-center w3-round-xlarge w3-teal" style="width:50%">50%</div>
//           </div>
//           <br>

//           <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Next Goals</b></p>
//           <p>Travel</p>
//           <div className="w3-light-grey w3-round-xlarge">
//             <div className="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>
//           </div>
//           <p>Build table</p>
//           <div className="w3-light-grey w3-round-xlarge">
//             <div className="w3-round-xlarge w3-teal" style="height:24px;width:55%"></div>
//           </div>
//           <p>Speak Italian</p>
//           <div className="w3-light-grey w3-round-xlarge">
//             <div className="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div>
//           </div>
//           <br>
//         </div>
//       </div><br>

//     <!-- End Left Column -->
   
    
//   <!-- End Grid -->
//   </div>
  
//   <!-- End Page Container -->
// </div>


// </body>
// </html>

//       </div>
    
//   );
// }

// export default ProfContainer;