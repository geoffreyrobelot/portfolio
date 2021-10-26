import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Formation from '../components/Formation';
import ButtonsBottom from '../components/ButtonsBottom';


export const FormationDut = () => {
    return (
        <main>
            <div className='formation'>
                <Navigation />
                <Logo />
                <Formation formationNumber={0} />
                <ButtonsBottom left={'/project-4'} right={'/formation-2'} />
            </div>
        </main>
    )
}

export const FormationBts = () => {
    return (
        <main>
            <div className='formation'>
                <Navigation />
                <Logo />
                <Formation formationNumber={1} />
                <ButtonsBottom left={'/formation-1'} right={'/formation-3'} />
            </div>
        </main>
    )
}

export const FormationCda = () => {
    return (
        <main>
            <div className='formation'>
                <Navigation />
                <Logo />
                <Formation formationNumber={2} />
                <ButtonsBottom left={'/formation-2'} right={'/formation-4'} />
            </div>
        </main>
    )
}

export const FormationCde = () => {
    return (
        <main>
            <div className='formation'>
                <Navigation />
                <Logo />
                <Formation formationNumber={3} />
                <ButtonsBottom left={'/formation-3'} right={'/contact'} />
            </div>
        </main>
    )
}
