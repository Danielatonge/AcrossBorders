import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    id="service"
    title="How it will work"
    description="You will be able to transfer/receive funds smoothly between Russia and all countries supported in our network by following the steps below."
  >
    <VerticalFeatureRow
      title="Sign up"
      description="Using our website, you will have to sign up. Note that, to receive funds, you have to be physically located in the Russian Federation and possess legal documents."
      image="/assets/images/feature.svg"
      imageAlt="Step 1. Sign up"
    />
    <VerticalFeatureRow
      title="Select where you want to send"
      description="Using the drop-down country list, select the country you want to send to and enter the amount you wish to send. You’ll first see our low fees and exchange rate up front. Add your recipient’s details."
      image="/assets/images/feature2.svg"
      imageAlt="Step 2. Sending options"
      reverse
    />
    <VerticalFeatureRow
      title="Relax, your order is in progress"
      description="Your money is on it's way. You should receive a confirmation email when your order is full processed"
      image="/assets/images/feature3.svg"
      imageAlt="Final Step. Money on its way"
    />
  </Section>
);

export { VerticalFeatures };
