import * as React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    itemDiscount: {
        height: "100px",
        borderRadius: "10px",
        position: "relative",
    },
    button: {
        bottom: "0",
        right: "0",
        zIndex: "999",
        position: "absolute",
        fontSize: "16px",
        fontWeight: "600",
        color: "#fff",
        width: "190px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "3px",
        background: "#fb4805",
        borderRadius: "0px 0px 10px 10px",

        "&:hover": {
            background: "#fb4805",
        }
    },
}));

export default function ItemDiscount() {
    const classes = useStyles();

    return (
        <Card sx={{ maxWidth: 190 }} className={classes.itemDiscount}>
            <Image src="/images/item-box-bg.png" width={190} height={100} />
            <CardActions>
                <Button className={classes.button} size="small">Часы</Button>
            </CardActions>
        </Card>
    );
}
