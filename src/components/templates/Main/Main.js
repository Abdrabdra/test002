import Recommend from "../../Recommend/Recommend";
import Boxes from "../../Boxes/Boxes";
import Looking from "../../Looking/Looking";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

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

const Main = () => {
    const classes = useStyles();

    return (
        <section className={classes.section}>
                <Box className={classes.header}>
                    <Box className={classes.path}>
                        Главная / бесцеллеры / товар
                    </Box>
                </Box>

                <Boxes />
        </section>
    );
};

export default Main;
