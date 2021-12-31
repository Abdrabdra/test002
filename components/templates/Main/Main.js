import Recommend from "../../elements/Recommend/Recommend";
import Boxes from "../../elements/Boxes/Boxes";
import Looking from "../../elements/Looking/Looking";
import styles from "./Main.module.scss";

const Main = () => {
    return (
        <section className={styles.section}>
            <div className="container">

                <div className={styles.section_header}>
                    <div className={styles.path}>
                        Главная / бесцеллеры / товар
                    </div>
                </div>

                <Boxes />
                <Looking />
                <Recommend />
                
            </div>
        </section>
    );
};

export default Main;
