import React from 'react';
import counterShape1 from '../../assets/images/shapes/counter-one-shape-1.png';
import AdvanceCountUp from '../../components/elements/AdvanceCountUp';

interface CounterItem {
    id: number;
    stop: number;
    text: string;
    delay: number;
}

const counterData: CounterItem[] = [
    { id: 1, stop: 12, text: 'Industry Experience <br />Delivering IT & Telecom <br />Solutions', delay: 2 },
    { id: 2, stop: 200, text: 'Combined Technology <br />Expertise of Our<br /> Team', delay: 1.5 },
    { id: 3, stop: 5, text: 'Global Locations <br />United Kingdom, India, <br />UAE,Poland & Australia', delay: 3 },
    { id: 4, stop: 100, text: 'Projects Successful <br />Infrastructure & Technology <br />Deployments', delay: 2.5 },
];

const CounterTwo: React.FC = () => {
    return (
        <section className="counter-one">
            {/* Background Shape */}
            <div
                className="counter-one__shape-1 float-bob-x"
                style={{ backgroundImage: `url(${counterShape1})` }}
            ></div>

            <div className="container">
                <ul className="list-unstyled counter-one__list">
                    {counterData.map((counter: CounterItem) => (
                        <li
                            key={counter.id} 
                        >
                            <div className="counter-one__single">
                                <div className="counter-one__count count-box">
                                    <p
                                        className="count-text" 
                                    >
                                        <AdvanceCountUp ending={counter?.stop} durations={counter?.delay} />
                                    </p>
                                    <span className="counter-one__count-plus">+</span>
                                </div>
                                <p className="counter-one__text" dangerouslySetInnerHTML={{ __html: counter.text }} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CounterTwo;
