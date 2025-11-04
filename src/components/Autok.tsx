import { FC, PropsWithChildren } from 'react';
import styles from '../styles/Autok.module.css';

export type AutokProps = PropsWithChildren<{
    img: string,
    root: string
    name: string,
}>

export const Autok: FC<AutokProps> = ({ img, root, name }) => {

    return <div className={`${styles.container}`} >
            <a href={root}><img src={img} alt={name} />
            </a>
            <h2>{name}</h2>
    </div>
}

//PROPS -> {}
type TitleProps = {
    title: string
}

export function Title({ title }: TitleProps) {

    return <h1> 
        {title} 
    </h1>
}

type HomeProps = {
    home: string
}

export function Home({ home }: HomeProps) {

    return <a href='#'>
        {home} 
    </a>
}

type ModelProps = {
    model: string
}

export function Model({ model }: ModelProps) {

    return <a href='#'> 
        {model} 
    </a>
}