import { ReactNode, useState } from 'react';

import { Button } from '../button/Button';
import { Input } from '../input/Input';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  const [email, setEmail] = useState('');

  return (
    <header className="text-center">
      <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {props.title}
      </h1>
      <div className="text-2xl mt-4 mb-16">{props.description}</div>
      <Input xl onChange={setEmail} />
      <Button xl onClick={() => setEmail('')}>
        Get Notified When We Launch
      </Button>
    </header>
  );
};

export { HeroOneButton };
