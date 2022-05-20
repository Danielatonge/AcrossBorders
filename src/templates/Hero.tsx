import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6" id="intro">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#service">
            <a>Service</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Financial transactions powered via\n'}
            <span className="text-primary-500">Blockchain technology</span>
          </>
        }
        description="The easiest way to receive money for foreigners in Russia."
      />
    </Section>
  </Background>
);

export { Hero };
