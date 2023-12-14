import { features } from "../constants";
import styles, { layout} from "../styles";
import Button from './Button';

const FeatureCard = ({ icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0" } feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we'll handle the money.
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        In publishing and graphic design, Lorem ipsum is a placeholder text 
        commonly used to demonstrate the visual form of a document or a 
        typeface without relying on meaningful content. Lorem ipsum may 
        be used as a placeholder before final copy is available.
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
)

export default Business