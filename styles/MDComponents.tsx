import { FunctionComponent } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';

import theme from 'prism-react-renderer/themes/nightOwlLight';
import styles from './MDComponents.module.scss';

const P: FunctionComponent = (props) => <p className={styles.p} {...props} />;
const H1: FunctionComponent = (props) => (
  <h1 className={styles.h1} {...props} />
);
const H2: FunctionComponent = (props) => (
  <h2 className={styles.h2} {...props} />
);
const H3: FunctionComponent = (props) => (
  <h3 className={styles.h3} {...props} />
);
const H4: FunctionComponent = (props) => (
  <h4 className={styles.h4} {...props} />
);
const H5: FunctionComponent = (props) => (
  <h5 className={styles.h5} {...props} />
);
const H6: FunctionComponent = (props) => (
  <h6 className={styles.h6} {...props} />
);

// const ThematicBreak: FunctionComponent = props => { return <thematicBreak {...props} />; }
const Blockquote: FunctionComponent = (props) => {
  return <blockquote className={styles.blockquote} {...props} />;
};
const Ul: FunctionComponent = (props) => {
  return <ul className={styles.ul} {...props} />;
};
const Ol: FunctionComponent = (props) => {
  return <ol className={styles.ol} {...props} />;
};
const Li: FunctionComponent = (props) => {
  return <li className={styles.li} {...props} />;
};
const Table: FunctionComponent = (props) => {
  return <table className={styles.table} {...props} />;
};
const Thead: FunctionComponent = (props) => {
  return <thead className={styles.thead} {...props} />;
};
const Tbody: FunctionComponent = (props) => {
  return <tbody className={styles.tbody} {...props} />;
};
const Tr: FunctionComponent = (props) => {
  return <tr className={styles.tr} {...props} />;
};
const Td: FunctionComponent = (props) => {
  return <td className={styles.td} {...props} />;
};
const Th: FunctionComponent = (props) => {
  return <th className={styles.th} {...props} />;
};
const Pre: FunctionComponent = (props) => {
  return <pre className={styles.pre} {...props} />;
};
const Em: FunctionComponent = (props) => {
  return <em className={styles.em} {...props} />;
};
const Strong: FunctionComponent = (props) => {
  return <strong className={styles.strong} {...props} />;
};
const Del: FunctionComponent = (props) => {
  return <del className={styles.del} {...props} />;
};
const InlineCode: FunctionComponent = (props) => {
  return <pre className={styles.inlineCode} {...props} />;
};
const Hr: FunctionComponent = (props) => {
  return <hr className={styles.hr} {...props} />;
};
const A: FunctionComponent = (props) => {
  return <a className={styles.a} {...props} />;
};
const Img: FunctionComponent = (props) => {
  return <img className={styles.img} {...props} />;
};

// Code highlighting
const Code: FunctionComponent<{
  className?: string | null;
}> = ({ children, className }) => {
  if (className == null || !className.startsWith('language-')) {
    return <code className={className || undefined}>{children}</code>;
  }

  const language = className.replace(/language-/, '');
  return (
    <Highlight
      {...defaultProps}
      // theme={theme}
      code={children as string}
      language={language as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const MDComponents = {
  // Paragraph
  p: P,

  // Headings
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,

  // Lists
  ul: Ul,
  ol: Ol,
  li: Li,

  // Tables
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  td: Td,
  th: Th,

  // Code
  pre: Pre,
  code: Code,
  inlineCode: InlineCode,

  // Font styles
  em: Em,
  strong: Strong,
  del: Del,

  // Other
  blockquote: Blockquote,
  hr: Hr,
  a: A,
  img: Img,
};

export default MDComponents;
