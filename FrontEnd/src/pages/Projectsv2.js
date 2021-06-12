// import React from 'react';
// import styled from 'styled-components';
// import snake from '../images/projectPic/snake.jpg'
// import sudoku from '../images/projectPic/shop.jpg'
// import notes from '../images/projectPic/notes.png'
// import quote from '../images/projectPic/quote.png'
// import birds from '../images/projectPic/birds.png'
// import shop from '../images/projectPic/shop.jpg'
//
// const ProjectArticle = styled.article`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   margin: 10rem 0;
//
// `
//
// const ProjectLeft = styled.div`
//   width: 100%;
//   height: 350px;
//
//   padding-top: 3rem;
// `
//
// const Project_h2 = styled.h2`
//   position: relative;
//   color: darkorange;
//   font-size: 2vw;
// `
// const Project_lan = styled.h4`
//   position: relative;
//   color: antiquewhite;
//   font-size: 1vw;
// `
//
// const ProjectText = styled.div`
//   color: indianred;
//   padding-right: 50px;
// `
//
// const Preojects_h2 = styled.h2`
//   position: relative;
//   color: antiquewhite;
//   font-size: 4vw;
//   text-align: center;
//   //line-height: 0.5em;
//   letter-spacing: 6px;
//
// `
// const Projects = () =>{
//     return(
//         <div className="projects"
//              style={{paddingBottom: "200px", width: "100%", maxWidth: "800px", margin: "0 auto"}}>
//             <Preojects_h2>Some of my projects</Preojects_h2>
//             <ProjectArticle>
//                 <ProjectLeft>
//                     <Project_h2>Weather app</Project_h2>
//                     <Project_lan>JS, CSS. HTML</Project_lan>
//                     <ProjectText>
//                         Weather app is simple application made with js, css and html.
//                         It allows user to select a city and choose date from calendar
//                     </ProjectText>
//                 </ProjectLeft>
//
//                 <div>
//                     <img src = {weatherapp} alt = "weatherapp"  />
//                 </div>
//             </ProjectArticle>
//             <ProjectArticle>
//                 <ProjectLeft>
//                     <Project_h2>Sudoku</Project_h2>
//                     <Project_lan>Python</Project_lan>
//                     <ProjectText>
//                         Sudoku  is simple application made with Python.
//                         It allows user to select a difficulty then generate the bord and
//                         give hints to user.
//                     </ProjectText>
//                 </ProjectLeft>
//
//                 <div>
//                     <img src = {sudoku} alt = "sudoku"  />
//                 </div>
//             </ProjectArticle>
//             <ProjectArticle>
//                 <ProjectLeft>
//                     <Project_h2>Notes</Project_h2>
//                     <Project_lan>Python</Project_lan>
//                     <ProjectText>
//                         Website created in Django. Allows user to save notes
//                         and group them by the category.
//                     </ProjectText>
//                 </ProjectLeft>
//
//                 <div>
//                     <img src = {notes} alt = "notes"  />
//                 </div>
//             </ProjectArticle>
//             <ProjectArticle>
//                 <ProjectLeft>
//                     <Project_h2>Random Quote</Project_h2>
//                     <Project_lan>Java</Project_lan>
//                     <ProjectText>
//                         Java program that give user a random quote from famous person. It also detect
//                         if the quote is negative or positive.
//                     </ProjectText>
//                 </ProjectLeft>
//
//                 <div>
//                     <img src = {quote} alt = "quote"  />
//                 </div>
//             </ProjectArticle>
//             <ProjectArticle>
//                 <ProjectLeft>
//                     <Project_h2>Shop Scraper</Project_h2>
//                     <Project_lan>Java</Project_lan>
//                     <ProjectText>
//                         Program that scrape the shops. It allows user to buy products from
//                         the lowest prices available
//                     </ProjectText>
//                 </ProjectLeft>
//
//                 <div>
//                     <img src = {shop} alt = "shop"  />
//                 </div>
//             </ProjectArticle>
//             <ProjectArticle>
//                 <ProjectLeft>
//                     <Project_h2>Snake</Project_h2>
//                     <Project_lan>C++</Project_lan>
//                     <ProjectText>
//                         Classic implementation of snake game.
//                     </ProjectText>
//                 </ProjectLeft>
//
//                 <div>
//                     <img src = {snake} alt = "snake"  />
//                 </div>
//             </ProjectArticle>
//             <ProjectArticle>
//                 <ProjectLeft>
//                     <Project_h2>Angry birds</Project_h2>
//                     <Project_lan>Java, Python</Project_lan>
//                     <ProjectText>
//                         Implementation of fun mobile game.
//                     </ProjectText>
//                 </ProjectLeft>
//
//                 <div>
//                     <img src = {birds} alt = "birds"  />
//                 </div>
//             </ProjectArticle>
//         </div>
//     )
// }
//
// export default Projects