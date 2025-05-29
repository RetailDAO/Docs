import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Tokenomics & Organic Growth',
    link: "docs/category/Token_Ecosystem",
    Svg: require('@site/static/img/tokenomics.svg').default,
    description: (
      <>
        Discover the economic backbone of Retail DAO, where our tokenomics model fuels a sustainable 
        and rewarding ecosystem. 
      </>
    ),
  },
  {
    title: 'Governance',
    link: "docs/category/governance",
    Svg: require('@site/static/img/governance.svg').default,
    description: (
      <>
        Dive into the decentralized decision-making process that empowers Retail DAO members.        
      </>
    ),
  },
  {
    title: 'Community',
    link: "docs/category/Community_and_Communication",
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        Join a vibrant, global network of degens, founders, and innovators united by Retail DAO. 
        Our community thrives on collaboration, knowledge-sharing, and mutual support.        
      </>
    ),
  },
  {
    title: 'How to Join',
    link: "docs/category/howtojoin",
    Svg: require('@site/static/img/howtojoin.svg').default,
    description: (
      <>
        Get started with Retail DAO in a few simple steps. This section guides you through acquiring tokens, 
        setting up your wallet, and engaging with our community. 
      </>
    ),
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={styles.featureItem}>
      <Link to={link} className={styles.featureLink}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
          <div className="padding-horiz--lg">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresContainer}>
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}