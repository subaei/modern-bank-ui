import { card } from '../assets';
import styles, { layout } from '../styles';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy steps.
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
        used to demonstrate the visual form of a document or a typeface without 
        relying on meaningful content. Lorem ipsum may be used as a placeholder 
        before final copy is available.
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img 
        src={card}
        alt="card"
        className="w-[100%] h-[100%]"
      />
    </div>
  </section>
)

export default CardDeal