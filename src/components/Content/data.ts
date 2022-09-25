import { IHomeContent } from './../../@types/interface';
import smartPhoneReg from '../../assets/smartphone_regis.png';
import smartPhoneExp from '../../assets/smartphone_explore.png';
import smartPhoneCheck from '../../assets/smartphone_checkout.png';
export const dataHomeContent: IHomeContent[] = [
  {
    title: 'Create an account',
    subTitle: 'Create/login to an existing account to get started',
    src: smartPhoneReg,
    alt: 'smart phone register',
    description: 'An account is created with your email and a desired password',
  },
  {
    title: 'Explore varieties',
    subTitle: 'Shop for your favorites meal as e dey hot.',
    src: smartPhoneExp,
    alt: 'smart phone explore varieties',
    description:
      'Shop for your favorite meals or drinks and enjoy while doing it.',
  },
  {
    title: 'Checkout',
    subTitle: 'When you done check out and get it delivered.',
    src: smartPhoneCheck,
    alt: 'smart phone check out',
    description: 'When you done check out and get it delivered with ease.',
  },
];
