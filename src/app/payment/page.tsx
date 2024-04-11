'use client'
import React, { useEffect, useState } from 'react'

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    // seconds: number;
}


const PaymentPageWarning = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-05-11') - +new Date();
        let timeLeft: TimeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            // seconds: 0 
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                // seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const renderTimerComponents = () => {
        const timerComponents: JSX.Element[] = [];

        Object.keys(timeLeft).forEach((interval) => {
            if (!timeLeft[interval as keyof TimeLeft]) {
                return;
            }

            let timeString = '';
            if (interval === 'days') {
                timeString += `${timeLeft.days} days `;
            }
            if (interval === 'hours') {
                timeString += `${timeLeft.hours} hours `;
            }
            if (interval === 'minutes') {
                timeString += `${timeLeft.minutes} minutes `;
            }
            // if (interval === 'seconds') {
            //     timeString += `${timeLeft.seconds} seconds `;
            // }
            timerComponents.push(
                <span key={interval}>
                    {timeString}
                </span>
            )

            // timerComponents.push(
            //     <span key={interval}>
            //         {timeLeft[interval as keyof TimeLeft]} {interval}{' '}
            //     </span>
            // );
        });

        return timerComponents.length ? timerComponents : <span>This site has been deleted!</span>;
    };
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <section className='font-poppins flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold text-red-500 uppercase'>
                    This site has been suspended!
                </h1>
                <p>
                    Please contact the developer to continue <span className='underline underline-offset-2 text-red-600 font-semibold text-lg'>payment</span>, then this site will active again
                </p>
                <div className='mt-10 text-xl font-bold font-mono'>
                    Time Remaining: {renderTimerComponents()}
                </div>
            </section>

        </div>
    )
}

export default PaymentPageWarning