import { useEffect } from 'react';
import TagCloud from 'TagCloud';

import './SkillsCloud.css';

export const myTags = [
  // html5,
  'JavaScript',
  'CSS3',
  'HTML5',
  'SASS',
  'MongoDB',
  'ReactJS',
  'MySQL',
  'ExpressJS',
  'git',
  'Redux',
  'NodeJS',
  'authentication',
  'Mocha',
  'GraphQL',
  'jsonwebtoken',
  'Mongoose',
  'multer',
  'Material UI',
  'WebPack',
  'S3',
  'Firebase',
  'Accessibily',
  'REST API',
  'GitHub',
  'cookies',
  'AWS',
  'Route 53',
  'CloudFront',
  'Stripe',
  'Axios',
  'Enzyme',
  'hooks',
  'Context API',
  'sessions',
  'prop-types',
  'CORS',
  'Font Awesome',
  'Sqlite',
  'DENO',
  'NextJS',
  'TypeScript',
  'localStorage',
  'MVC',
  'Webflow',
  'JSON',
  'YAML',
  'GitHub Actions',
  'EC2',
  'NGINX',
  'SSL',
  'GPG',
];

const SkillsCloud = () => {
  const container = '.tagcloud';

  useEffect(() => {
    console.log('useEff in serv');

    TagCloud(container, myTags, { radius: 300 });

    return () => {
      //your cleanup code codes here
    };
  }, []);

  // return statement
  return (
    <>
      <div className='tag-cloud-container'>
        <span className='tagcloud'></span>
        <div className='tag-list'>
          {myTags.map((tag, id) => (
            <div>{tag}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsCloud;
