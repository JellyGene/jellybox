import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const highlightRegex = /\*\*\*(.*?)\*\*\*/gm;
const largeRegex = /\+\+\+(.*?)\+\++/gm;

const Bold = ({ children }) => <span className="bold">{children}</span>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p>{checkForFormattingAndReplace(children)}</p>;
    },
  },
  renderText: (text) => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

const checkForFormattingAndReplace = (children = []) => {
  // flatMap returns a flattened array - very useful
  const mappedChildren = children.flatMap((child) => {
    if (typeof child === "string") {
      // the regex that handles parsing the actual string and extracting the text
      const highlightMatches = child.match(highlightRegex);
      const largeMatches = child.match(largeRegex);

      if (highlightMatches) {
        return createHighlight(highlightMatches, child);
      } else if (largeMatches) {
        return createLarge(largeMatches, child);
      }
    }
    if (typeof child === "object") {
      const content = child.props?.children;
      const className = child.props?.className;
      const highlightMatches =
        typeof content === "string" && content.match(highlightRegex);
      const largeMatches =
        typeof content === "string" && content.match(largeRegex);

      if (highlightMatches) {
        return createHighlight(highlightMatches, content, { className });
      } else if (largeMatches) {
        return createLarge(largeMatches, content, { className });
      }
    }
    // make sure to always return the content if there is no match to the regex
    return child;
  });
  return mappedChildren;
};

const createHighlight = (matches, text, restProps = {}) => {
  const content = text.split(matches);

  return [...new Set(content)] // get the unique values / avoid ["", ""] - when there are no other parts of text
    .map((text) =>
      text === "" ? ( // map over the unique values to replace that which was split
        <span key="content" {...restProps} className="highlight">
          {matches}
        </span> // return the element with the colour
      ) : (
        text
      )
    ); // or return the text*/
};

const createLarge = (matches, text, restProps = {}) => {
  const content = text.split(matches);

  return [...new Set(content)].map((text) =>
    text === "" ? (
      <span key="content" {...restProps} className="large">
        {matches}
      </span>
    ) : (
      text
    )
  );
};

export { options };
