import React from 'react';
import ReactDOM from 'react-dom';

// css
import './index.css';

// setup vars
// const title = 'HARRY POTTER';
// const author = 'J.K Rowling';
// const img = 'https://images-eu.ssl-images-amazon.com/images/I/81YOuOGFCJL._AC_UL200_SR200,200_.jpg';

const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/81YOuOGFCJL._AC_UL200_SR200,200_.jpg',
  title: 'HARRY POTTER',
  author: 'J.K Rowling',
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg',
  title: 'Ikigai: The Japanese secret to a long and happy life Hardcover',
  author: 'Héctor García ',
}

// stateless functional component
// always return jsx 

// function Greeting() {
//   return (
// <div>
//   {/* <h4>this is john and this is my first component</h4> */}
//   <Person />
//   <Message />
//   </div>
//   );
// }


// function BookList() {
//   return (
// <section className='BookList'>
//   {/* this is a booklist */}
//   <Book />
//   <Book />
//   <Book />
//   <Book />
//   <Book />
//   <Book />
//   <Book />
//     </section>
//   );
// }

// function BookList() {
//   return (
// <section className='BookList'>
//   {/* this is a booklist */}
//   <Book />
//   <Book />
//     </section>
//   );
// }

// // const title = 'HARRY POTTER';
// const Book = () => {
//   // return <article>this is a book</article>
//   // const author = 'J.K Rowling';
//   return <article className='book'>
//     {/* <Image /> */}
//     {/* <img src="https://images-eu.ssl-images-amazon.com/images/I/81YOuOGFCJL._AC_UL200_SR200,200_.jpg" alt="" /> */}
//     <img src={img} alt="" />
//  {/* <Title /> */}
//  {/* <h1>HARRY POTTER</h1> */}
//  <h1>{title}</h1>
//  {/* <Author />  */}
//  {/* <h4>J.K Rowling</h4> */}
//  <h4>{author}</h4>
//   </article>
// }


// function BookList() {
// return (
// <section className='BookList'>
//   <Book job='developer' number={22} />
//   <Book title='random title' />
//     </section>
//   );
// }



function BookList() {
  return (
  <section className='BookList'>
    <Book 
    img={firstBook.img}
    title={firstBook.title}
    author={firstBook.author} />
    <Book 
    img={secondBook.img}
    title={secondBook.title}
    author={secondBook.author} />
      </section>
    );
  }
  
// const Book = (props) => {
//   return <article className='book'>
//     <img src={img} alt="" />
//  <h1>{title}</h1>
//  <h4>{author}</h4>
//  <p>{props.job}</p>
//  <p>{props.title}</p>
//   </article>
// }

const Book = (props) => {
  return <article className='book'>
    <img src={props.img} alt="" />
 <h1>{props.title}</h1>
 <h4>{props.author}</h4>
 {/* <p>{props.job}</p>
 <p>{props.title}</p> */}
  </article>
}


// const Image = () => {
//   return <img src="https://images-eu.ssl-images-amazon.com/images/I/81YOuOGFCJL._AC_UL200_SR200,200_.jpg" alt="" />
// }

// const Title = () => <h1>HARRY POTTER</h1>;
// const Author = () => <h4 style={{color: '#617d98', marginTop:'0.25rem', fontSize:'0.75rem'}}>J.K Rowling</h4>

// const Person = () => {
//   return <h2>john deo</h2>
// }

// const Message = () => <p>this is a Message</p>

// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world!');
// }

// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'hello world!'));
// }

// ReactDOM.render(<Greeting />, document.getElementById('root'));

ReactDOM.render(<BookList />, document.getElementById('root'));