import { FC, MouseEvent, PropsWithChildren } from "react";
import styles from "../styles/Autok.module.css";

export type AutokProps = PropsWithChildren<{
  img: string;
  root: string;
  name: string;
}>;

type AutokComponentProps = AutokProps & {
  onNavigate?: (path: string) => void;
};

export const Autok: FC<AutokComponentProps> = ({
  img,
  root,
  name,
  onNavigate,
}) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigate) {
      return;
    }
    if (
      event.button !== 0 ||
      event.defaultPrevented ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }
    event.preventDefault();
    onNavigate(root);
  };

  return (
    <div className={styles.container}>
      <a className={styles.cardLink} href={root} onClick={handleClick}>
        <img src={img} alt={name} />
      </a>
      <h2>{name}</h2>
    </div>
  );
};

//PROPS -> {}
type TitleProps = {
  title: string;
  className?: string;
};

export function Title({ title, className }: TitleProps) {
  return <h1 className={className}>{title}</h1>;
}

type HomeProps = {
  home: string;
  className?: string;
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function Home({ home, className, href = "#", onClick }: HomeProps) {
  return (
    <a className={className} href={href} onClick={onClick}>
      {home}
    </a>
  );
}

type ModelProps = {
  model: string;
  className?: string;
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function Model({ model, className, href = "#", onClick }: ModelProps) {
  return (
    <a className={className} href={href} onClick={onClick}>
      {model}
    </a>
  );
}

type FormProps = {
  form: string;
  className?: string;
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function Form({ form, className, href = "form", onClick }: FormProps) {
  return (
    <a className={className} href={href} onClick={onClick}>
      {form}
    </a>
  );
}