import Image from "next/image";
import styles from "./Header.module.scss";
import Headroom from "react-headroom";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className="headroom_global">
                <Headroom
                    style={{
                        zIndex: 9999,
                    }
                }
                >
                    <div className={styles.headroom}>
                        <div className="container">
                            <div className={styles.wrap}>
                                <div className={styles.link}>
                                    Продовайте на ADU24
                                </div>
                                <div className={styles.link}>Мои сообщение</div>
                                <div className={styles.link}>Избранные</div>
                                <div className={styles.link}>Уведомление</div>
                                <a href="#">
                                    <div className={styles.link}>
                                        KZT / г. Алматы
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Headroom>
            </div>
            <div className="container">
                <div className={styles.header_section}>
                    <div className={`${styles.header_item} ${styles.logo}`}>
                        <Image
                            src="/images/logo.svg"
                            height={30}
                            width={120}
                            alt="Logo"
                        />
                    </div>
                    <div className={`${styles.header_item} ${styles.category}`}>
                        <div className={styles.burger}>
                            <a href="#">
                                <div></div>
                                <div></div>
                                <div></div>
                            </a>
                        </div>
                        <a href="#" className={styles.link}>
                            Категории
                        </a>
                        <div className={styles.headerVector}>
                            <Image
                                src="/images/Vector.png"
                                height={8}
                                width={15}
                            />
                        </div>
                    </div>
                    <div className={`${styles.header_item} ${styles.search}`}>
                        <input type="text" placeholder="Найти" />
                        <div>
                            <a href="#" className={styles.search_btn}>
                                <Image
                                    src="/images/search.svg"
                                    height={20}
                                    width={20}
                                    alt="Найти"
                                />
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.header_item} ${styles.basket}`}>
                        <a href="#">Корзина</a>
                        <div className="count">159</div>
                    </div>
                    <div className={`${styles.header_item} ${styles.profile}`}>
                        <a href="#">Мой профиль</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
