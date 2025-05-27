import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Decentralized Decision-Making',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Participate in shaping the direction of the DAO's research and initiatives 
        through a transparent, decentralized governance model that ensures the community's 
        best interests are always put first.
      </>
    ),
  },
  {
    title: 'Organic Growth & Tokenomics',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Be part of a community that prioritizes organic growth and sustainable development,
         with a fair and transparent token system, ensuring that everyone has an equal 
         opportunity to participate and benefit.
      </>
    ),
  },
  {
    title: 'Curated Alpha & Insights',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Access high-quality, vetted research and alpha through the collective wisdom 
        of the DAO, reducing the risk of following unreliable or malicious influencers 
        and communities.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
