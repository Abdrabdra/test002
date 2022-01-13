import Image from "next/image";
import ItemDiscount from "../ItemDiscount/ItemDiscount";
import styles from "./Boxes.module.scss";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
    section: {
        background: "#f2f4f5",
        padding: "20px",
    },
    path: {
        fontSize: "1.625rem",
        color: "#aa72ff",
        marginBottom: "40px",
    },
}));

const Boxes = () => {
    const classes = useStyles();

    return (
        <Box className={styles.section_boxes}>
            <Typography className={styles.box_title}>Предложения</Typography>
            <Grid container spacing={2} className={styles.box_wrapper} direction="row" justifyContent="center" alignItems="center">
                <Grid item md={7} xs={12} className={styles.box_item}>
                    <div className={styles.headline}>Черная пятница</div>
                    <div className={styles.text}>
                        Смартфоны
                        <br /> и аксессуары
                    </div>
                    <div className={styles.text}>
                        Скидки до 60%
                        <br /> <span>Уже сейчас</span>
                    </div>
                    <div className={styles.image}>
                        <Image
                            src="/images/box-bg.png"
                            alt="bg-image"
                            width={554}
                            height={383}
                        />
                    </div>
                </Grid>

                <Grid item md={4.7} xs={12} className={styles.box_item}>
                    <div className={styles.headline}>
                        <div>Скидки</div>
                        <div className={styles.arrow}>
                            <a href="#">
                                <Image
                                    src="/images/left-arrow.svg"
                                    width={10}
                                    height={20}
                                    alt="left-arrow"
                                />
                            </a>
                        </div>
                    </div>
                    <div className={styles.item_box}>
                        <div className={styles.box_title}>
                            <div>Скидки по категориям до 30%</div>
                            <div className={styles.arrow}>
                                <a href="#">
                                    <Image
                                        src="/images/left-arrow.svg"
                                        width={9}
                                        height={18}
                                        alt="left-arrow"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className={styles.item_wrapper}>
                            <ItemDiscount />
                            <ItemDiscount />
                        </div>
                    </div>
                    <div className={styles.item_box}>
                        <div className={styles.box_title}>
                            <div>Черная пятница</div>
                            <div className={styles.arrow}>
                                <a href="#">
                                    <Image
                                        src="/images/left-arrow.svg"
                                        width={9}
                                        height={18}
                                        alt="left-arrow"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className={styles.item_wrapper}>
                            <ItemDiscount />
                            <ItemDiscount />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Boxes;
