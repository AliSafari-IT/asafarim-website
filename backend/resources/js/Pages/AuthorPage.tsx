import React, { useEffect, useState } from "react";
import WrapperLayout from "@/Layouts/WrapperLayout";
import { AuthorInfo, User } from "@/types";
import { Body1, Button, Caption1, Card, CardFooter, CardHeader, CardPreview, makeStyles } from "@fluentui/react-components";
import "../../css/classes.scss";
import { ArrowReplyRegular, ShareRegular } from "@fluentui/react-icons";
import { createPath } from "@/utils/createPath";
import { usePage } from "@inertiajs/react";

interface AuthorPageProps {
    author: AuthorInfo;
}

const useStyles = makeStyles({
    card: {
        margin: "auto",
        width: "720px",
        maxWidth: "100%",
    },

    authorInfo: {
        display: "flex-row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
    },

    authorImage: {
        width: "100px",
        height: "auto",
    },

    logoImage: {
        width: "100px",
        height: "auto",
    },

    templateImage: {
        width: "100%",
        height: "auto",
    },

    authorName: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "24px",
        fontWeight: "bold",
        color: "#1a7db6",
    },

    authorTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "16px",
        fontWeight: "bold",
        color: "#2c214e",
    },

});
const AuthorPage: React.FC<AuthorPageProps> = ({ author }) => {
    const styles = useStyles();
    const { props: { auth } } = usePage();

    if (!author) {
        return null;
    }

    const { name, title, url, image_url, socials } = author;

    const displayTitle = `${name} - ${title}`;

    const authorImage = <img src={author.image_url} alt={author.name} className={styles.authorImage} />;
    const logoImage = <img src={createPath('/img/logoT.svg')} alt={"logo"} className={styles.logoImage} />;
    const templateImage = <img src={createPath('/img/template.jpg')} alt={author.name} className={styles.templateImage} />;

    return (
        <WrapperLayout title={`Author: ${author.name}`} >

            <Card className={styles.card}>
                <CardHeader
                    image={authorImage}
                    title={displayTitle}
                    header={
                        <div className={styles.authorInfo}>
                            <Body1 className={styles.authorName}>{name}</Body1>
                            <Caption1 className={styles.authorTitle}>{title}</Caption1>
                        </div>
                    }
                />
                <CardPreview
                    logo={logoImage}
                >
                    {templateImage}
                </CardPreview>
                <p>
                    <a href={author.url} target="_blank" rel="noopener noreferrer">
                        Visit Personal Website
                    </a>
                </p>
                <div className="author-socials">
                    {Object.entries(author.socials).map(([platform, link]) => (
                        <p key={platform}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                {platform.charAt(0).toUpperCase() + platform.slice(1)}
                            </a>
                        </p>
                    ))}
                </div>
                <CardFooter>
                    <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
                    <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
                </CardFooter>
            </Card>
        </WrapperLayout>
    );
};

export default AuthorPage;
