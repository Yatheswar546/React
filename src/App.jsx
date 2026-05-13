import './App.css'

import ExternalCSS from './concepts/24. ReactStyling/01. ExternalCSS/ExternalCSS';
import InlineCSS from './concepts/24. ReactStyling/02. InlineCSS/InlineCSS';
import DynamicStyle from './concepts/24. ReactStyling/02. InlineCSS/DynamicStyle';
import Button from './concepts/24. ReactStyling/03. CSSModules/Button';
import StyledComponent from './concepts/24. ReactStyling/04. CSSInJS/StyledComponent';

export default function App() {

  return (
      <>
        <ExternalCSS />
        <InlineCSS />
        <DynamicStyle />
        <Button />
        <StyledComponent />
      </>
  );
}