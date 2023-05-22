import check from '../assets/images/check2-circle.svg';
import clock from '../assets/images/clock-history.svg';
import palete from '../assets/images/palette.svg';
import percent from '../assets/images/percent.svg';
import type { IAdvantagesItem } from '../types';

const AdvantagesList: IAdvantagesItem[] = [
  {
    name: `Качество гарантировано`,
    comment: `10-летний опыт покраски. `,
    img: percent
  },

  {
    name: `Надёжность и защита`,
    comment: `Обеспечиваем защиту от ржавчины`,
    img: check
  },

  {
    name: `Оперативное выполнение работы`,
    comment: `Расходные материалы всегда есть в наличии. Несколько линий порошковой окраски позволяют быстро выполнять заказы.`,
    img: clock
  },
  {
    name: `Широкий спектр цветов RAL
        `,
    comment: `Разнообразие эксклюзивных цветов и фактур`,
    img: palete
  }
];

export default AdvantagesList;
