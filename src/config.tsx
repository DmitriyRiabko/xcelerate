import CompIcon from "./assets/icons/Comp";
import DollarIcon from "./assets/icons/Dollar";
import GamesIcon from "./assets/icons/Games";
import GiftIcon from "./assets/icons/Gift";
import MerchIcon from "./assets/icons/Merch";
import MessageIcon from "./assets/icons/Message";
import StuffIcon from "./assets/icons/Stuff";



export const hrLink = 'tg://resolve?domain=hrm_yana'







interface BenefitItem {
  text: string;
  icon: React.ReactNode;
}


export const benefitsList: BenefitItem[] = [
  {
    text: "Вся необхідна технічна інфраструктура",
    icon: <CompIcon />,
  },
  {
    text: "Високі зарплатні ставки та сітка до 40%",
    icon: <DollarIcon />,
  },
  {
    text: "Подарунки на важливі дати",
    icon: <GiftIcon />,
  },
  {
    text: "Корпоративний мерч",
    icon: <MerchIcon />,
  },
  {
    text: "Крутезна chill area в офісі зі смаколиками, кальяном та PlayStation",
    icon: <GamesIcon />,
  },
  {
    text: "Корпоративи та класні тім-білдінги",
    icon: <StuffIcon />,
  },
  {
    text: "Відвідування конференцій",
    icon: <MessageIcon />,
  },
];



