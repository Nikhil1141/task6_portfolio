import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            <p>
                Here are some of my projects:
            </p>
            <ul>
                <li>Project 1 <a className='aa' href='https://para-wordcounter.netlify.app/'>Task1</a> </li>
                <li>Project 2 <a className='aa' href='https://calculatorreactjsapp.netlify.app/'>Task2</a> </li>
                <li>Project 3 <a className='aa' href='https://colorpickerreactjs.netlify.app/'>Task3</a> </li>
                <li>Project 4 <a className='aa' href='https://apifetchingreactjs.netlify.app/'>Task4</a> </li>
                <li>Project 5 <a className='aa' href='https://reactjsagecalculator.netlify.app/'>Task5</a> </li>
                <li>Project 6 <a className='aa' href='/'>Task6</a> </li>
            </ul>
        </section>
    );
}

export default Portfolio;