import React from 'react';
import { Card, CardHeader, CardPreview, Image, Text, Link, makeStyles, Body1, Caption1 } from '@fluentui/react-components';
import '../../../css/classes.scss';
import { createPath } from '@/utils/createPath';

// Feature item type definition
interface FeatureItem {
    title: string;
    Svg: JSX.Element;
    description: JSX.Element;
}

// Updated feature list to use Fluent UI components
const featureList: FeatureItem[] = [
    {
        title: 'Programming Topics',
        Svg: <Image src={('img/coding.svg')} alt='coding' />,
        description: (
            <div className='description-block'>
                <Link href="TechDocs/">Topics</Link> section is where the main concepts and codes are presented.
            </div>
        ),
    },
    {
        title: 'Focus on What Matters',
        Svg: <Image src={('img/wm.svg')} alt='wm' />,
        description: (
            <div className='description-block'>
                <Link href="BlogDocs/">Blog</Link> section lets you focus on the goals and the route to gain progress in the coding area.
            </div>
        ),
    },
    {
        title: 'Harness the Power of Coding',
        Svg: <Image src={('img/didit.svg')} alt='didit' />,
        description: (
            <div className='description-block'>
                <div>
                    Create, innovate, and build with your own hands to shape the future.
                </div>
                <div className='quote'>
                    "Everybody in this country should learn how to program a computer, because it teaches you how to think."
                </div>
                <div className='author'>-Steve Jobs</div>
                <div>Check out our <Link href="projects" className={"link"}>Projects</Link></div>
            </div>
        ),
    },
];


const useStyles = makeStyles({
    card: {
        maxWidth: "100%",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    },

    title: {
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: "28px",
        padding: "10px",
        color: "#1a7db6",
        textAlign: "center",
        textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    },
});

// Feature component with Fluent UI Card
const Feature: React.FC<FeatureItem> = ({ Svg, title, description }) => {
    const styles = useStyles();
    return (
        <Card className={styles.card}>
            <Body1 className={styles.title}>{title}</Body1>
            <CardPreview>
                {Svg}
            </CardPreview>
            <CardHeader>
                <Text as="h3" align="center" block>{title}</Text>
            </CardHeader>
            <CardPreview className='my-2 p-2'>
                {description}
            </CardPreview>
        </Card>
    );

};

// Homepage Features component with responsive Grid
const HomepageFeatures: React.FC = () => (
    <section>
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '10px',
            }}
        >
            {featureList.map((feature, idx) => (
                <Feature key={idx} {...feature} />
            ))}
        </div>
    </section>
);

export default HomepageFeatures;
